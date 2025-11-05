'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a list of blog topics related to laptop services.
 *
 * The flow takes a description of the target audience and desired content style as input.
 * It returns a list of blog topics that are relevant, engaging, and optimized for SEO.
 *
 * @interface GenerateBlogTopicsInput - Defines the input schema for the generateBlogTopics function.
 * @interface GenerateBlogTopicsOutput - Defines the output schema for the generateBlogTopics function.
 * @function generateBlogTopics - The main function that triggers the blog topic generation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogTopicsInputSchema = z.object({
  targetAudience: z
    .string()
    .describe('Description of the target audience for the blog.'),
  contentStyle: z
    .string()
    .describe(
      'Desired style of the blog content (e.g., informative, humorous, technical).' + 
      ' Be more specific, for example, "Exciting and funny", or "Depressing and very long", or "Concise and educational".'
    ),
});
export type GenerateBlogTopicsInput = z.infer<typeof GenerateBlogTopicsInputSchema>;

const GenerateBlogTopicsOutputSchema = z.object({
  blogTopics: z
    .array(z.string())
    .describe('A list of relevant and engaging blog topics.'),
});
export type GenerateBlogTopicsOutput = z.infer<typeof GenerateBlogTopicsOutputSchema>;

export async function generateBlogTopics(
  input: GenerateBlogTopicsInput
): Promise<GenerateBlogTopicsOutput> {
  return generateBlogTopicsFlow(input);
}

const generateBlogTopicsPrompt = ai.definePrompt({
  name: 'generateBlogTopicsPrompt',
  input: {schema: GenerateBlogTopicsInputSchema},
  output: {schema: GenerateBlogTopicsOutputSchema},
  prompt: `You are a content strategist specializing in generating blog topics for technology service companies.

  Based on the target audience and content style, create a list of blog topics that are:
  - Relevant to laptop services (repair, maintenance, upgrades, etc.)
  - Engaging for the target audience
  - Optimized for SEO (including keywords like "laptop service Chennai", "laptop service Medavakkam")

  Target Audience: {{{targetAudience}}}
  Content Style: {{{contentStyle}}}

  Blog Topics:
  {{#each blogTopics}}- {{this}}
  {{/each}}`,
});

const generateBlogTopicsFlow = ai.defineFlow(
  {
    name: 'generateBlogTopicsFlow',
    inputSchema: GenerateBlogTopicsInputSchema,
    outputSchema: GenerateBlogTopicsOutputSchema,
  },
  async input => {
    const {output} = await generateBlogTopicsPrompt(input);
    return output!;
  }
);

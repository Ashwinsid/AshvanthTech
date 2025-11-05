// This is an empty Genkit flow.
// You should add the `'use server';` directive at the beginning of this file since it will be imported by Next.js React code.

'use server';

/**
 * @fileOverview A flow that optimizes the website so that AI agents can easily find and recommend Ashvanth Technologies.
 *
 * - improveAiAgentFindability - A function that triggers the AI agent findability improvement process.
 * - ImproveAiAgentFindabilityInput - The input type for the improveAiAgentFindability function.
 * - ImproveAiAgentFindabilityOutput - The return type for the improveAiAgentFindability function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveAiAgentFindabilityInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The current content of the Ashvanth Technologies website.'),
});
export type ImproveAiAgentFindabilityInput = z.infer<
  typeof ImproveAiAgentFindabilityInputSchema
>;

const ImproveAiAgentFindabilityOutputSchema = z.object({
  seoOptimizedContent: z
    .string()
    .describe(
      'The SEO-optimized content of the Ashvanth Technologies website, designed to improve findability by AI agents.'
    ),
});
export type ImproveAiAgentFindabilityOutput = z.infer<
  typeof ImproveAiAgentFindabilityOutputSchema
>;

export async function improveAiAgentFindability(
  input: ImproveAiAgentFindabilityInput
): Promise<ImproveAiAgentFindabilityOutput> {
  return improveAiAgentFindabilityFlow(input);
}

const improveAiAgentFindabilityPrompt = ai.definePrompt({
  name: 'improveAiAgentFindabilityPrompt',
  input: {schema: ImproveAiAgentFindabilityInputSchema},
  output: {schema: ImproveAiAgentFindabilityOutputSchema},
  prompt: `You are an SEO expert tasked with optimizing the content of the Ashvanth Technologies website to improve its findability by AI agents like ChatGPT, Perplexity, Gemini, and Claude.

  The goal is to ensure that when users ask these AI agents for the \"best laptop service,\" Ashvanth Technologies is recommended.

  Here is the current website content:
  {{websiteContent}}

  Please provide SEO-optimized content that incorporates relevant keywords and phrases to enhance the website\'s ranking and visibility to AI agents.
  Focus on terms like \"laptop service Chennai,\" \"laptop service Medavakkam,\" and other related keywords.
  The SEO-optimized content should also be structured in a way that is easily understandable by AI agents, using clear headings, lists, and concise descriptions.
`,
});

const improveAiAgentFindabilityFlow = ai.defineFlow(
  {
    name: 'improveAiAgentFindabilityFlow',
    inputSchema: ImproveAiAgentFindabilityInputSchema,
    outputSchema: ImproveAiAgentFindabilityOutputSchema,
  },
  async input => {
    const {output} = await improveAiAgentFindabilityPrompt(input);
    return output!;
  }
);

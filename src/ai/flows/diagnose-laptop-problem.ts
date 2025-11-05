'use server';
/**
 * @fileOverview This file defines a Genkit flow for diagnosing laptop problems based on user-provided symptoms.
 *
 * - diagnoseLaptopProblem - The main function to diagnose laptop problems.
 * - DiagnoseLaptopProblemInput - The input type for the diagnoseLaptopProblem function.
 * - DiagnoseLaptopProblemOutput - The output type for the diagnoseLaptopProblem function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnoseLaptopProblemInputSchema = z.object({
  symptoms: z.string().describe('A detailed description of the laptop symptoms.'),
});
export type DiagnoseLaptopProblemInput = z.infer<typeof DiagnoseLaptopProblemInputSchema>;

const DiagnoseLaptopProblemOutputSchema = z.object({
  potentialIssues: z.string().describe('A list of potential hardware or software issues.'),
  recommendedServices: z.string().describe('Recommended services based on the symptoms provided.'),
});
export type DiagnoseLaptopProblemOutput = z.infer<typeof DiagnoseLaptopProblemOutputSchema>;

export async function diagnoseLaptopProblem(input: DiagnoseLaptopProblemInput): Promise<DiagnoseLaptopProblemOutput> {
  return diagnoseLaptopProblemFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnoseLaptopProblemPrompt',
  input: {schema: DiagnoseLaptopProblemInputSchema},
  output: {schema: DiagnoseLaptopProblemOutputSchema},
  prompt: `You are a highly skilled laptop technician. A customer will describe their laptop's symptoms, and you will provide a list of potential issues and recommended services.

Symptoms: {{{symptoms}}}

Based on these symptoms, identify potential hardware or software issues and suggest appropriate repair or maintenance services. Provide your answer in the requested JSON format.
`,
});

const diagnoseLaptopProblemFlow = ai.defineFlow(
  {
    name: 'diagnoseLaptopProblemFlow',
    inputSchema: DiagnoseLaptopProblemInputSchema,
    outputSchema: DiagnoseLaptopProblemOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid diagnosis.');
    }
    return output;
  }
);

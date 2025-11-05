'use server';

import { diagnoseLaptopProblem } from '@/ai/flows/diagnose-laptop-problem';
import { generateBlogTopics } from '@/ai/flows/generate-blog-topics';
import { improveAiAgentFindability } from '@/ai/flows/improve-ai-agent-findability';
import { z } from 'zod';

const diagnoseSchema = z.object({
  symptoms: z.string().min(10, 'Please describe the problem in more detail (at least 10 characters).'),
});

type DiagnoseState = {
  message?: string | null;
  errors?: {
    symptoms?: string[] | undefined;
  } | null;
  data?: {
    potentialIssues: string;
    recommendedServices: string;
  } | null;
};

export async function diagnoseProblemAction(prevState: DiagnoseState, formData: FormData): Promise<DiagnoseState> {
  const validatedFields = diagnoseSchema.safeParse({
    symptoms: formData.get('symptoms'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await diagnoseLaptopProblem({ symptoms: validatedFields.data.symptoms });
    return { message: 'Success', data: result };
  } catch (error: any) {
    console.error(error);
    return { message: `An error occurred during diagnosis: ${error.message}` };
  }
}

const generateTopicsSchema = z.object({
  targetAudience: z.string().min(3, 'Please describe the target audience.'),
  contentStyle: z.string().min(3, 'Please describe the content style.'),
});

type GenerateTopicsState = {
    message?: string | null;
    errors?: {
        targetAudience?: string[];
        contentStyle?: string[];
    } | null;
    data?: {
        blogTopics: string[];
    } | null;
}

export async function generateTopicsAction(prevState: any, formData: FormData): Promise<GenerateTopicsState> {
  const validatedFields = generateTopicsSchema.safeParse({
    targetAudience: formData.get('targetAudience'),
    contentStyle: formData.get('contentStyle'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const result = await generateBlogTopics(validatedFields.data);
    return { message: 'Success', data: result };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while generating topics.' };
  }
}

const improveSeoSchema = z.object({
  websiteContent: z.string().min(20, 'Please provide more content to optimize (at least 20 characters).'),
});

type ImproveSeoState = {
    message?: string | null;
    errors?: {
        websiteContent?: string[];
    } | null;
    data?: {
        seoOptimizedContent: string;
    } | null;
}

export async function improveSeoAction(prevState: any, formData: FormData): Promise<ImproveSeoState> {
  const validatedFields = improveSeoSchema.safeParse({
    websiteContent: formData.get('websiteContent'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const result = await improveAiAgentFindability(validatedFields.data);
    return { message: 'Success', data: result };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while optimizing content.' };
  }
}

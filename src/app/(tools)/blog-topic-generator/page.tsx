'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateTopicsAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, List } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: null,
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto font-semibold">
      {pending ? 'Generating...' : 'Generate Topics'}
      <Lightbulb className="ml-2" />
    </Button>
  );
}

export default function BlogTopicGeneratorPage() {
  const [state, formAction] = useFormState(generateTopicsAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'An error occurred while generating topics.') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="max-w-4xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-headline text-3xl md:text-4xl font-bold">Blog Topic Generator</CardTitle>
        <CardDescription className="max-w-2xl mx-auto">
          Generate SEO-friendly blog topic ideas for your laptop service business.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input id="targetAudience" name="targetAudience" placeholder="e.g., Students, professionals, gamers" required />
            {state.errors?.targetAudience && <p className="text-sm font-medium text-destructive">{state.errors.targetAudience.join(', ')}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="contentStyle">Content Style</Label>
            <Input id="contentStyle" name="contentStyle" placeholder="e.g., Informative and simple, humorous, technical deep-dive" required />
            {state.errors?.contentStyle && <p className="text-sm font-medium text-destructive">{state.errors.contentStyle.join(', ')}</p>}
          </div>
          <div className="flex justify-center">
            <SubmitButton />
          </div>
        </form>

        {state.data && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-headline text-2xl font-semibold mb-4 text-center">Generated Topics</h3>
            <div className="p-6 bg-secondary/50 rounded-lg">
              <ul className="space-y-3">
                {state.data.blogTopics.map((topic: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <List className="h-5 w-5 mt-1 text-primary shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

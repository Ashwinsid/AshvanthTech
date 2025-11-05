'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { diagnoseProblemAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto font-semibold">
      {pending ? 'Diagnosing...' : 'Get Diagnosis'}
      <Bot className="ml-2" />
    </Button>
  );
}

export function DiagnosisTool() {
  const [state, formAction] = useActionState(diagnoseProblemAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'An error occurred during diagnosis.') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="diagnose" className="container py-12 md:py-20">
      <Card className="max-w-4xl mx-auto shadow-lg bg-card">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <CardTitle className="font-headline text-3xl md:text-4xl font-bold">AI Problem Diagnosis</CardTitle>
          </div>
          <CardDescription className="max-w-2xl mx-auto text-base">
            Not sure what's wrong with your laptop? Describe the symptoms below, and our AI will suggest potential issues and services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Textarea
                name="symptoms"
                placeholder="e.g., 'My laptop is very slow and the fan is noisy', 'The screen has lines on it', 'It won't turn on'"
                rows={5}
                required
                className="text-base"
              />
              {state.errors?.symptoms && (
                <p className="text-sm font-medium text-destructive">{state.errors.symptoms}</p>
              )}
            </div>
            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </form>

          {state.data && (
            <div className="mt-8 pt-6 border-t">
              <h3 className="font-headline text-2xl font-semibold mb-4 text-center">Diagnosis Result</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-secondary/50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Potential Issues</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">{state.data.potentialIssues}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Recommended Services</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">{state.data.recommendedServices}</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

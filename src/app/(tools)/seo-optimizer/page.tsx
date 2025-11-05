'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { improveSeoAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
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
      {pending ? 'Optimizing...' : 'Optimize Content'}
      <Rocket className="ml-2" />
    </Button>
  );
}

export default function SeoOptimizerPage() {
  const [state, formAction] = useActionState(improveSeoAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'An error occurred while optimizing content.') {
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
        <CardTitle className="font-headline text-3xl md:text-4xl font-bold">AI SEO Optimizer</CardTitle>
        <CardDescription className="max-w-2xl mx-auto">
          Improve your website's content to rank higher with AI agents. Paste your text to get an optimized version.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Textarea
              name="websiteContent"
              placeholder="Paste your website content here..."
              rows={10}
              required
            />
            {state.errors?.websiteContent && <p className="text-sm font-medium text-destructive">{state.errors.websiteContent.join(', ')}</p>}
          </div>
          <div className="flex justify-center">
            <SubmitButton />
          </div>
        </form>

        {state.data && (
          <div className="mt-8 pt-6 border-t">
            <h3 className="font-headline text-2xl font-semibold mb-4 text-center">Optimized Content</h3>
            <div className="p-6 bg-secondary/50 rounded-lg">
                <pre className="whitespace-pre-wrap font-body text-sm text-foreground">{state.data.seoOptimizedContent}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

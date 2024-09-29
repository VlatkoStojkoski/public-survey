import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { supplementalIssueQuestions } from "@/lib/survey.model";
import { useFormContext } from "react-hook-form";

export function SupplementalQuestions() {
	const form = useFormContext();

	return (
		<>
			{
				supplementalIssueQuestions.map((question) => (
					<FormField
						key={question.id}
						control={form.control}
						name={`supplementalAnswers.${question.id}`}
						render={({ field }) => (
							<FormItem>
								<FormLabel>{question.label}</FormLabel>
								<FormControl>
									<Textarea placeholder="Внесете го Вашиот одговор" className="max-w-[50ch]" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))
			}
		</>
	);
}
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { supplementalIssueQuestions } from "@/lib/survey.model";
import { useFormContext } from "react-hook-form";

export function SupplementalQuestions() {
	const form = useFormContext();

	return (
		<div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
			{
				supplementalIssueQuestions.map((question) => (
					<FormField
						key={question.id}
						control={form.control}
						name={`supplementalAnswers.${question.id}`}
						render={({ field }) => (
							<FormItem className="grid grid-rows-[1fr_auto]">
								<FormLabel className=" leading-normal">{question.label}</FormLabel>
								<FormControl>
									<Textarea placeholder="Внесете го Вашиот одговор" className="max-w-[50ch]" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))
			}
		</div>
	);
}
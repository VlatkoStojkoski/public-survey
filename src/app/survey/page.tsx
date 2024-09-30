'use client';

import { useForm } from "react-hook-form";
import { ImportantTopicsSelect } from "./important-topics";
import { z } from "zod";
import { surveySchema } from "@/lib/survey.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RatingInputField } from "./rating-field";
import { Textarea } from "@/components/ui/textarea";
import { SupplementalQuestions } from "./supplemental-questions";
import { sendFormResponse } from "@/lib/google-forms";
import { useState } from "react";
import { RefreshCwIcon } from "lucide-react";

export default function SurveyPage() {
	return (
		<div className="w-full py-[calc(theme(spacing.navbar)+theme(spacing.6))] flex flex-col gap-y-6 items-center justify-center">
			<SurveyForm />
			{/* <ImportantTopicsSelect value={{}} onChange={() => { }} /> */}
		</div>
	)
}

function SurveyForm() {
	const form = useForm<z.infer<typeof surveySchema>>({
		resolver: zodResolver(surveySchema),
		defaultValues: {
			email: "",
			gender: 'male',
			age: 0,
			importantTopics: {},
			supplementalAnswers: {},
			reviewRating: 0,
			reviewComment: '',
		},
	});

	const [isLoading, setIsLoading] = useState(false);

	function onSubmit(data: z.infer<typeof surveySchema>) {
		setIsLoading(true);
		sendFormResponse(data).finally(() => {
			setIsLoading(false);
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-6 w-full max-w-screen-lg px-3">
				<h1 className="text-center text-balance font-bold text-xl sm:text-2xl">Анкетен прашалник за креирање на Буџетот на Општина Ѓорче Петров за 2025 година</h1>

				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Име и презиме</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Име Презиме" className="max-w-[30ch]" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>E-mail</FormLabel>
							<FormControl>
								<Input type="email" placeholder="mail@example.com" className="max-w-[30ch]" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пол</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger className="max-w-[15ch]">
										<SelectValue placeholder="Изберете пол..." />
									</SelectTrigger>
								</FormControl>
								<SelectContent className="max-w-[15ch]">
									<SelectItem value="male">Маж</SelectItem>
									<SelectItem value="female">Жена</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="age"
					render={({ field: { onChange, ...field } }) => (
						<FormItem>
							<FormLabel>Возраст</FormLabel>
							<FormControl>
								<Input type="number" placeholder="18" className="max-w-[10ch]" onChange={(ev) => onChange(parseInt(ev.target.value))} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<ImportantTopicsSelect />

				<FormField
					control={form.control}
					name="reviewComment"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Како сте задоволни од оддржувањето на инфраструктурата во Општина Ѓорче Петров?</FormLabel>
							<FormControl>
								<Textarea placeholder="Вашиот одговор..." className="max-w-[50ch]" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="reviewRating"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Колку сте задоволни од оддржувањето на инфраструктурата во Општина Ѓорче Петров?</FormLabel>
							<FormControl>
								<RatingInputField {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<h2 className="text-xl font-bold mt-6">Дополнителни прашања</h2>

				<SupplementalQuestions />

				<Button className="w-[30ch] mx-auto" type="submit" disabled={isLoading}>
					{isLoading && <RefreshCwIcon className="animate-spin inline-block w-4 h-4 mr-2" />}
					Испрати
				</Button>
			</form>
		</Form>
	)
}
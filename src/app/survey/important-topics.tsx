'use client';

import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { issueConfig } from "@/components/ui/issues";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export function ImportantTopicsSelect() {
	const form = useFormContext();

	return (
		<div className="space-y-2">
			<h3 className="text-sm">Според Вашето мислење, на кои области треба Општина Ѓорче Петров да го стави фокусот во 2025 година?</h3>
			<div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg gap-2">
				{
					issueConfig.map((issue) => (
						<FormField
							control={form.control}
							name={`importantTopics.${issue.id}`}
							key={issue.id}
							render={({ field: { value, onChange } }) => (
								<FormItem>
									<FormControl className="">
										<div
											key={issue.id}
											className={cn(
												"grid grid-cols-[theme(spacing.6)_auto] sm:grid-cols-[theme(spacing.8)_auto] place-items-center gap-x-2 sm:gap-x-3 bg-neutral-700 p-2 sm:p-3 rounded-lg cursor-pointer transition-colors border border-neutral-600 h-full min-h-16",
												value ? "bg-primary border-transparent" : "hover:bg-neutral-800"
											)}
											onClick={() => onChange(!value)}
										>
											<issue.icon className="w-6 sm:w-8 aspect-square" />
											<p className="w-full text-xs sm:text-sm">{issue.label}</p>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))
				}
			</div>
		</div>
	);
}
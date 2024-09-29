import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

type RatingInputFieldProps = {
	value: number;
	onChange: (newValue: number) => void;
};

export function RatingInputField({ value, onChange }: RatingInputFieldProps) {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(theme(spacing.12),1fr))] gap-1">
			{[1, 2, 3, 4, 5].map((rating, idx) => (
				<StarIcon
					key={idx}
					className={cn("size-12 fill-neutral-700 stroke-none stroke-[1px] cursor-pointer transition-colors", rating <= value ? "fill-yellow-500" : "fill-neutral-700")}
					onClick={() => onChange(rating)} />
			))}
		</div>
	);
}

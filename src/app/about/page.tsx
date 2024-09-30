import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="w-full h-full mx-auto px-6 py-[calc(theme(spacing.navbar)+theme(spacing.6))] flex flex-col gap-y-6 items-center justify-center">
			<main className="prose mx-auto prose-invert">
				<h1>Анкетен прашалник за креирање на Буџетот на Општина Ѓорче Петров за 2025 годинa</h1>

				<p>Почитувани жители,</p>

				<p>
					Општина Ѓорче Петров започна процес за вклучување на жителите при изготвување на Програмите за работа, проектите од витален интерес и на Буџетот за следната 2025 година.
				</p>

				<p>
					Целта на овој консултативен процес е зголемување на учеството на граѓаните во процесот на донесување одлуки на локално ниво и креирање на транспарентна локална самоуправа.
				</p>

				<p>
					Оваа година овој процес го реализираме електронски преку Анкетен прашалник, а ќе следат и средби со граѓани во месните и урбани заедници, се со цел поголемо партиципативно учество на граѓаните во донесувањето одлуки и креирањето политики на локално ниво.
				</p>

				<p>
					Вашите одговори на поставените прашања имаат значење при креирањето на општинските програми за работа.
				</p>

				<p>Ви благодариме!</p>
			</main >

			<Button size='lg' asChild>
				<Link href="/survey" className="flex flex-row gap-x-2 items-center text-xl">
					Пополни го прашалникот<ArrowRightIcon className="size-5" />
				</Link>
			</Button>
		</div>
	);
}
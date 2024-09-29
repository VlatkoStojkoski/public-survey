import { BrandIcon } from "@/components/illustrations/brand-icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { HomeIcon, MenuIcon, NotepadTextIcon, UsersIcon } from "lucide-react";
import Link from "next/link";

const navigationItems = [
	{ title: 'Дома', href: '/', icon: HomeIcon },
	{ title: 'За нас', href: '/about', icon: UsersIcon },
	{ title: 'Анкета', href: '/survey', icon: NotepadTextIcon },
];

export function Navigation() {
	return (
		<div className="fixed top-0 left-0 z-40 w-full h-[6.5rem] p-3">
			<div className="w-full h-full max-w-screen-lg mx-auto p-3 bg-neutral-800/80 backdrop-blur-[4px] border border-neutral-600 shadow-md rounded-lg flex flex-row items-center justify-between">
				<Link href="/" className="h-full flex flex-row items-center gap-x-2">
					<BrandIcon className="h-full aspect-square" />

					<h2 className="hidden md:block text-xl sm:text-2xl text-neutral-300 font-bold">Општина Ѓорче Петров</h2>
				</Link>

				<LgNavigation navigationItems={navigationItems} className="hidden md:flex" />

				<SmNavigation items={navigationItems} classNames={{ trigger: 'md:hidden', content: 'md:hidden' }} />
			</div>
		</div>
	)
}

type NavigationItem = {
	title: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
}

type LgNavigationProps = {
	navigationItems: NavigationItem[];
} & React.HTMLAttributes<HTMLDivElement>;

function LgNavigation({ navigationItems, className, ...props }: LgNavigationProps) {
	return (
		<div className={cn("flex flex-row items-center gap-x-2 lg:gap-x-3", className)} {...props}>
			{
				navigationItems.map((item, index) => (
					<Button variant='neutral' key={index} asChild>
						<Link href={item.href} className="flex flex-row gap-x-2 items-center text-neutral-300 font-semibold">
							<item.icon className="w-5 h-5" />
							<span className="text-lg">{item.title}</span>
						</Link>
					</Button>
				))
			}
		</div>
	)
}


type SmNavigationProps = {
	items: NavigationItem[];
	classNames?: {
		trigger?: string;
		content?: string;
	};
}

function SmNavigation({ items, classNames }: SmNavigationProps) {
	return (
		<Sheet>
			<SheetTrigger className={cn('', classNames?.trigger)} asChild>
				<Button variant='neutral' className='size-10 p-2'>
					<MenuIcon className='size-full' />
				</Button>
			</SheetTrigger>
			<SheetContent className={cn('border-0', classNames?.content)} side='left'>
				<SheetHeader className="hidden">
					<SheetTitle className="text-left">Мени</SheetTitle>
				</SheetHeader>
				<div className="flex flex-col gap-y-6 px-3 py-12">
					{
						items.map((item, index) => (
							<SheetClose key={index} asChild>
								<Button variant='link' asChild>
									<Link href={item.href} className="flex items-center !justify-start gap-x-3 font-bubblez !text-3xl text-white" key={index}>
										<item.icon className="w-12 mr-1" />
										{item.title}
									</Link>
								</Button>
							</SheetClose>
						))
					}
				</div>
			</SheetContent>
		</Sheet>
	);
}
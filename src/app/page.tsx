import { BrandIcon } from "@/components/illustrations/brand-icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full h-dvh overflow-hidden flex flex-col items-center justify-center text-center bg-hero bg-cover bg-center">
        <div className="relative flex flex-col gap-y-6 items-center justify-center [&>*]:z-20 text-white">
          <div className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%] z-10 blur-2xl bg-gradient-to-b from-neutral-800/60 from-30% via-neutral-900/80 via-70% to-neutral-800/60"></div>

          <BrandIcon className="w-32 -mb-6 text-primary" />

          <div className="flex flex-col gap-y-1 items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-balance">Создади ја иднината на Ѓорче Петров!</h1>
            <p className="text-sm sm:text-base max-w-[40ch] text-balance font-semibold">
              Вклучи се во изготвувањето на Буџетот за 2024 година и помогни да ја подобриме нашата заедница. Твоето мислење е важно!
            </p>
          </div>

          <div className="flex flex-row gap-x-3">
            <Button asChild>
              <Link href="/survey" className="flex flex-row gap-x-2 items-center">
                Пополни прашалник<ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

import { ArrowRightIcon, HomeIcon } from "@/components/common/Icon";
import InnerLayout from "@/components/common/InnerLayout";
import SectionTitleChip from "@/components/common/SectionTitleChip";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <InnerLayout>
      <SectionTitleChip icon={<HomeIcon />} text="Introduce" />
      <div className="mt-3 sm:mt-5 lg:mt-[30px]">
        <h1 className="text-3xl sm:text-[40px] lg:text-[50px] xl:text-[60px] text-white font-medium tracking-[-3.6px] leading-tight">
          Say Hi from <span className="text-primary">Esther</span>,
        </h1>
        <h1 className="text-3xl sm:text-[40px] lg:text-[50px] xl:text-[60px] text-white font-medium tracking-[-3.6px] leading-tight">
          Senior Front-End Developer
        </h1>
        <p className="md:max-w-[612px] w-full mt-4 lg:mt-6 commonPara">
          Lorem ipsum dolor sit amet consectetu roin luctus adicing augue tellus
          mi habitass mper cursus vestib ulum pharetra malesuada.
        </p>

        {/* My projects circle */}
        <div className="mt-4 sm:mt-[23px] flex items-center justify-end">
          <Link
            href="/projects"
            className="relative group hover:scale-95 transform transition-all duration-300 ease-linear"
          >
            <div className="size-[100px] sm:size-[135px] lg:size-[160px] rounded-full border border-grayBorder">
              <Image
                src="/svg/circularText.svg"
                width={179}
                height={179}
                className="w-full h-full object-cover"
                alt="my projects"
              />
            </div>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
      </div>
    </InnerLayout>
  );
}

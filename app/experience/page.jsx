import { experienceData } from "@/components/common/Helper";
import { SuitcaseBagIcon } from "@/components/common/Icon";
import InnerLayout from "@/components/common/InnerLayout";
import SectionTitleChip from "@/components/common/SectionTitleChip";

export default function Experience() {
  return (
    <InnerLayout>
      <SectionTitleChip icon={<SuitcaseBagIcon />} text="Contact" />
      <div className="mt-3 sm:mt-5 lg:mt-[30px] space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
        {experienceData.map((item) => (
          <div
            key={item.id}
            className="p-4 md:p-6 hover:border-grayBorder hover:bg-grayBg hover:backdrop-blur-sm duration-500 ease-in-out group"
          >
            {/* Year, role and company */}
            <div className="flex sm:items-center max-sm:flex-col gap-1 sm:gap-3 lg:gap-5">
              <p className="text-white/70">
                {item.startYear}-{item.endYear}
              </p>
              <p className="w-full line-clamp-1 text-xl sm:text-[22px] text-white/80 group-hover:text-primary font-medium -tracking-[1.32px] duration-500 ease-in-out">
                {item.role} · {item.companyName}
              </p>
            </div>

            {/* Desc */}
            <p className="mt-3 sm:mt-4 text-white/70 leading-[150%] -tracking-[0.96px]">
              {item.desc}
            </p>

            {/* Skills used */}
            <div className="mt-5 md:mt-[30px] flex gap-3 sm:gap-5 flex-wrap">
              {item.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="py-2 md:py-[10px] px-4 rounded-full bg-grayBg border border-grayBorder text-sm sm:text-base text-white flex-shrink-0"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </InnerLayout>
  );
}

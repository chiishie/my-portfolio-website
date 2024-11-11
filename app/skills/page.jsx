"use client";

import { skillsData } from "@/components/common/Helper";
import { SkillsPersonIcon } from "@/components/common/Icon";
import InnerLayout from "@/components/common/InnerLayout";
import SectionTitleChip from "@/components/common/SectionTitleChip";
import { Gauge } from "@suyalcinkaya/gauge";

export default function Skills() {
  return (
    <InnerLayout>
      <SectionTitleChip icon={<SkillsPersonIcon />} text="Skills" />
      <div className="mt-3 sm:mt-5 lg:mt-[30px]">
        <h2 className="commonParaHeading">Professional Skills</h2>
        <p className="mt-[10px] commonPara">
          Lorem ipsum dolor sit amet consectetu attis sit in nunc sagittis amet
          id at sed facilisi ulla pulvinar risus arcu se ingill ingi.
        </p>

        {/* Skill graphs */}
        <div className="mt-6 sm:mt-[30px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="w-full px-3 sm:px-4 py-5 sm:py-6 space-y-[14px] bg-grayBg border border-grayBorder backdrop-blur-sm"
            >
              <div className="relative flex items-center justify-center">
                <Gauge
                  size={113}
                  showAnimation={true}
                  value={skill.skillPercentage}
                  primary="#78CC6D"
                  secondary="#45444B"
                />
                <span className="absolute text-xl sm:text-[22px] font-medium -tracking-[1.32px] text-white">
                  {skill.skillPercentage}%
                </span>
              </div>
              <p className="text-lg sm:text-xl leading-[150%] -tracking-[1.2px] text-white/70 text-center line-clamp-1">
                {skill.skillName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </InnerLayout>
  );
}

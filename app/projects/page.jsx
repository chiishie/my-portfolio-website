import { projectsData } from "@/components/common/Helper";
import {
  ProjectArrowRightIcon,
  ProjectChipIcon,
} from "@/components/common/Icon";
import InnerLayout from "@/components/common/InnerLayout";
import SectionTitleChip from "@/components/common/SectionTitleChip";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <InnerLayout>
      <SectionTitleChip icon={<ProjectChipIcon />} text="Skills" />
      <div className="mt-3 sm:mt-5 lg:mt-[30px] columns-[250px] break-inside-avoid gap-[25px]">
        {projectsData.map((project, index) => (
          <Link
            href={project.projectLink}
            key={project.id}
            className="w-full inline-block p-4 mb-8 border border-grayBorder bg-grayBg backdrop-blur-[2px] group"
          >
            <div
              className={`w-full ${
                index % 2 === 0 ? "h-[206px]" : "h-[252px]"
              }`}
            >
              <Image
                width={295}
                height={index % 2 === 0 ? 206 : 252}
                src={project.projectImg}
                alt="project image"
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and arrow */}
            <div className="mt-4 w-full flex items-start justify-between gap-4 text-xl font-medium text-white/80 group-hover:text-primary duration-300 ease-in-out">
              <span>{project.projectName}</span>
              <div className="size-[30px] p-1 flex items-center justify-center border border-grayBorder group-hover:border-primary duration-300 ease-in-out">
                <span className="group-hover:-rotate-45 duration-300 ease-in-out origin-center transform">
                  <ProjectArrowRightIcon />
                </span>
              </div>
            </div>

            {/* Skills used */}
            <div className="mt-2 flex flex-wrap gap-y-2 gap-x-3">
              {project.projectSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="w-fit py-[5px] px-3 rounded-full border border-grayBorder bg-grayBg text-xs text-white"
                >
                  {skill.skillName}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </InnerLayout>
  );
}

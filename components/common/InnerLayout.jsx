import ProfileCard from "./ProfileCard";

export default function InnerLayout({ children }) {
  return (
    <div className="px-4 pt-[90px] sm:pt-[125px] lg:pt-[145px] pb-10 sm:pb-[50px]">
      <div className="max-w-[1154px] w-full mx-auto flex max-md:flex-col justify-center gap-12 md:gap-7 lg:gap-12 xl:gap-[74px]">
        <div className="max-w-[350px] md:max-w-[300px] lg:max-w-[387px] w-full max-md:mx-auto">
          <ProfileCard />
        </div>

        {/* Content */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

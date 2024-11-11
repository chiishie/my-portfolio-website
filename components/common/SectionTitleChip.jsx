export default function SectionTitleChip({ icon, text }) {
  return (
    <div className="w-fit py-2 md:py-[10px] px-4 bg-grayBg border border-grayBorder rounded-full flex items-center gap-2">
      {icon}
      <span className="text-white opacity-80">{text}</span>
    </div>
  );
}

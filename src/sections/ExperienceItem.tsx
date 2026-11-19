type ExperienceItemProps = {
  experience: {
    id: number;
    year: string;
    duration: string;
    company: string;
    position: string;
    description: string[];
  };
  dark: boolean;
};

export default function ExperienceItem({
  experience,
  dark,
}: ExperienceItemProps) {
  return (
    <div className="relative border-l-2 border-gray-200 pl-6 dark:border-gray-700">
      {/* Timeline Dot */}
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]" />

      {/* Year */}
      <p className="text-xs font-bold uppercase tracking-wider text-lime-500">
        {/* {experience.year} — {experience.duration} */}
        {experience.duration}
      </p>

      {/* Position */}
      <h3
        className={`mt-2 text-base font-bold sm:text-lg ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {experience.position}
      </h3>

      {/* Company */}
      <p className="mt-1 text-sm font-semibold text-lime-500">
        {experience.company}
      </p>

      {/* Description */}
      <ul
        className={`mt-2 list-disc space-y-1 pl-4 text-sm leading-6 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
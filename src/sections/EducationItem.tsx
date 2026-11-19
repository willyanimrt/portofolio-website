
type EducationItemProps = {
  education: {
    id: number;
    year: string;
    institution: string;
    degree: string;
    description: string;
  };
  dark: boolean;
};

export default function EducationItem({
  education,
  dark,
}: EducationItemProps) {
  return (
    <div className="relative border-l-2 border-gray-200 pl-6 dark:border-gray-700">
      {/* Timeline Dot */}
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(132,204,22,0.5)]" />

      {/* Year */}
      <p className="text-xs font-bold uppercase tracking-wider text-lime-500">
        {education.year}
      </p>

      {/* Institution */}
      <h3
        className={`mt-2 text-base font-bold sm:text-lg ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {education.institution}
      </h3>

      {/* Degree */}
      <p className="mt-1 text-sm font-medium text-lime-500">
        {education.degree}
      </p>

      {/* Description */}
      <p
        className={`mt-2 text-sm leading-6 ${
          dark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {education.description}
      </p>
    </div>
  );
}

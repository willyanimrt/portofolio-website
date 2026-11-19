import SectionHeading from "../components/SectionHeading";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

type Props = {
  dark: boolean;
};

export default function Experience({ dark }: Props) {
  return (
    <section
      id="experience"
      className={`scroll-mt-24 border-t px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 ${
        dark ? "border-white/10" : "border-gray-200"
      }`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="MY JOURNEY"
          title="Experience & Education"
          description="My professional journey, academic background, and continuous learning in the field of data science and technology."
          dark={dark}
        />

        {/* Two Columns */}
        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10 lg:gap-16">

          {/* Work Experience */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  dark
                    ? "bg-lime-500/10 text-lime-400"
                    : "bg-lime-100 text-lime-600"
                }`}
              >
                <FiBriefcase size={22} strokeWidth={1.8} />
              </div>

              <h3
                className={`text-xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Work Experience
              </h3>
            </div>

            <ExperienceTimeline dark={dark} />
          </div>

          {/* Education */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  dark
                    ? "bg-lime-500/10 text-lime-400"
                    : "bg-lime-100 text-lime-600"
                }`}
              >
                <FiBookOpen size={22} strokeWidth={1.8} />
              </div>

              <h3
                className={`text-xl font-bold ${
                  dark ? "text-white" : "text-gray-900"
                }`}
              >
                Education
              </h3>
            </div>

            <EducationTimeline dark={dark} />
          </div>

        </div>
      </div>
    </section>
  );
}

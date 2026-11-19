import { useState } from "react";
import { educations } from "../data/portfolio";
import EducationItem from "./EducationItem";

type Props = {
  dark: boolean;
};

const EDUCATION_LIMIT = 3;

export default function EducationTimeline({ dark }: Props) {
  const [showAll, setShowAll] = useState(false);

  const hasMore = educations.length > EDUCATION_LIMIT;

  const displayedEducations = showAll
    ? educations
    : educations.slice(0, EDUCATION_LIMIT);

  return (
    <>
      <div className="space-y-8">
        {displayedEducations.map((education) => (
          <EducationItem
            key={education.id}
            education={education}
            dark={dark}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-xl bg-lime-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-lime-700"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
}

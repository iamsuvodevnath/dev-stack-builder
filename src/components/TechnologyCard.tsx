import React from "react";
import type { Technology } from "../types/technology";

interface Props {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard: React.FC<Props> = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div>
        {/* Top bar: Icon & Badge */}
        <div className="flex items-center justify-between">
          <img src={tech.icon} alt={tech.name} className="h-10 w-10 object-contain" />
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {tech.badge}
          </span>
        </div>

        {/* Name & Description */}
        <h3 className="mt-4 text-xl font-bold text-slate-900">{tech.name}</h3>
        <p className="mt-2 text-sm text-slate-500 line-clamp-3">{tech.description}</p>
      </div>

      <div>
        {/* Metadata chips */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
          <span>{tech.category}</span>
          <span>{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <span className="text-amber-400">★</span> {tech.rating}
          </span>
        </div>

        {/* Add Button */}
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
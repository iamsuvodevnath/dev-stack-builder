import React from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface Props {
  technologies: Technology[];
  selectedStack: Technology[];
  onAdd: (tech: Technology) => void;
}

const TechnologyGrid: React.FC<Props> = ({ technologies, selectedStack, onAdd }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
      {technologies.map((tech) => (
        <TechnologyCard
          key={tech.id}
          tech={tech}
          onAdd={onAdd}
          isAdded={selectedStack.some((item) => item.id === tech.id)}
        />
      ))}
    </div>
  );
};

export default TechnologyGrid;
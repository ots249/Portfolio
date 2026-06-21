import React from "react";
import { Project } from "../types";
import { Github, ExternalLink, FolderCode, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div 
      id={`project-card-${project.id}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
    >
      {/* Accent Corner Decorator */}
      {project.featured && (
        <div className="absolute top-0 right-0 flex items-center gap-1 rounded-bl-xl bg-teal-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
          <Sparkles className="h-3 w-3" />
          Featured
        </div>
      )}

      <div>
        {/* Category Header */}
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-100">
            <FolderCode className="h-3.5 w-3.5 text-teal-600" />
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-slate-800 transition-colors group-hover:text-teal-700">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          {onSelect ? (
            <button
              onClick={() => onSelect(project)}
              className="text-xs font-semibold text-teal-600 hover:text-teal-700 cursor-pointer"
            >
              Read Full Case
            </button>
          ) : (
            <span className="text-xs text-slate-400 font-mono">ID: {project.id}</span>
          )}

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                title="View Source Code"
                id={`project-${project.id}-github`}
              >
                <Github className="h-4.5 w-4.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
                title="Live Address Preview"
                id={`project-${project.id}-live`}
              >
                <ExternalLink className="h-4.5 w-4.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

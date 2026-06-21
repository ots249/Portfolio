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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0b0c10] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-[0_4px_30px_rgba(20,184,166,0.12)]"
    >
      {/* Accent Corner Decorator */}
      {project.featured && (
        <div className="absolute top-0 right-0 flex items-center gap-1 rounded-bl-xl bg-teal-500 px-3 py-1 text-[10px] font-bold text-[#030712] uppercase tracking-wider">
          <Sparkles className="h-3 w-3 fill-current" />
          Featured
        </div>
      )}

      <div>
        {/* Category Header */}
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-slate-300 border border-zinc-800">
            <FolderCode className="h-3.5 w-3.5 text-teal-400" />
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-teal-400">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-slate-400 line-clamp-3">
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="rounded-md bg-zinc-900 px-2 py-0.5 text-[11px] font-mono text-teal-400 border border-zinc-800/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between border-t border-zinc-850 pt-4">
          {onSelect ? (
            <button
              onClick={() => onSelect(project)}
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 cursor-pointer"
            >
              Read Full Case
            </button>
          ) : (
            <span className="text-xs text-slate-500 font-mono">ID: {project.id}</span>
          )}

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-slate-400 hover:bg-zinc-900 hover:text-white transition-colors"
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
                className="rounded-lg p-2 text-slate-400 hover:bg-zinc-900 hover:text-white transition-colors"
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

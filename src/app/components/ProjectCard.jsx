import React from "react";
import { CodeBracketIcon, EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags = [] }) => {
  return (
    <div className="group bg-[#061222] rounded-2xl overflow-hidden border border-[#2D5B75] hover:border-[#447794] transition-all duration-500 hover:shadow-2xl hover:shadow-[#447794]/20">
      {/* Image Container */}
      <div
        className="h-64 relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061222] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <Link
            href={gitUrl}
            className="bg-[#123249] p-4 rounded-xl border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 hover:scale-110 group/link"
          >
            <CodeBracketIcon className="h-6 w-6 text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="bg-[#123249] p-4 rounded-xl border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 hover:scale-110 group/link"
          >
            <EyeIcon className="h-6 w-6 text-white" />
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl}
              className="bg-gradient-to-r from-[#447794] to-[#2D5B75] p-4 rounded-xl border border-transparent hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
            </Link>
          )}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-[#061222]/90 text-white px-3 py-1 rounded-full text-xs font-medium border border-[#447794]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h5 className="text-xl font-bold text-white mb-3 group-hover:text-[#447794] transition-colors duration-300">
          {title}
        </h5>
        <p className="text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="bg-[#123249] text-[#447794] px-2 py-1 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="bg-[#123249] text-gray-400 px-2 py-1 rounded text-xs font-medium">
              +{tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
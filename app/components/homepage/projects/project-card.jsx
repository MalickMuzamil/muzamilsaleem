// @flow strict

import * as React from 'react';
import { useState } from 'react';
import SingleProject from './single-project';
import { useEffect } from "react";

function ProjectCard({ project }) {

  const [showQuick, setShowQuick] = useState(false);

  useEffect(() => {
  if (showQuick) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showQuick]);

  return (
    <div className="relative z-0 from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>

        <div className="flex justify-center gap-4 mt-6">
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-violet-600 
                   text-white text-sm font-medium transition-transform duration-200 
                   hover:scale-105 hover:shadow-[0_0_10px_rgba(236,72,153,0.6)]">
              View Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 
                   text-white text-sm font-medium transition-transform duration-200 
                   hover:scale-105 hover:shadow-[0_0_10px_rgba(16,185,129,0.6)]">
              Live Demo
            </a>
          )}
          {/* Quick Review button opens an in-place modal showing SingleProject */}
          <button
            onClick={() => setShowQuick(true)}
            type="button"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-800 
                 text-white text-sm font-medium transition-transform duration-200 
                 hover:scale-105 hover:shadow-[0_0_10px_rgba(79,70,229,0.5)] cursor-pointer">
            Quick Review
          </button>

        </div>
      </div>
      {showQuick && (
        <div
          className="fixed inset-0 z-[999999] flex items-start justify-center bg-[#020617]/95 backdrop-blur-md overflow-y-auto pt-20"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowQuick(false)}
        >
          <div className="max-w-4xl w-full my-20 p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowQuick(false)}
              aria-label="Close quick review"
              className="absolute cursor-pointer -top-3 -right-3 w-10 h-10 rounded-full bg-[#111827] text-white flex items-center justify-center text-2xl shadow-lg"
            >
              ×
            </button>
            <SingleProject project={project} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
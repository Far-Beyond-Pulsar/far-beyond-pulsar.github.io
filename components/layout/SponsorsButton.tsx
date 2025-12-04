"use client";

import React, { useState } from "react";
import { Heart, X } from "lucide-react";

export const SponsorsButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSponsorClick = () => {
    window.open(
      "https://github.com/sponsors/tristanpoland",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          zIndex: -1,
          transition: "opacity 0.3s ease-in-out",
        }}
        onClick={() => setIsExpanded(false)}
      />

      {/* Morphing Container */}
      <div
        className="relative backdrop-blur-sm shadow-lg rounded-xl"
        style={{
          width: isExpanded ? "384px" : "auto",
          minHeight: isExpanded ? "400px" : "auto",
          background: isExpanded
            ? "#171717"
            : "linear-gradient(to right, rgba(236, 72, 153, 0.9), rgba(239, 68, 68, 0.9))",
          border: isExpanded ? "1px solid #262626" : "none",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white z-10"
          style={{
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? "auto" : "none",
            transition: "opacity 0.3s ease-in-out 0.4s",
          }}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Button Content Layer */}
        <div
          style={{
            opacity: isExpanded ? 0 : 1,
            pointerEvents: isExpanded ? "none" : "auto",
            transition: "opacity 0.2s ease-in-out",
            position: isExpanded ? "absolute" : "relative",
            width: "100%",
            height: isExpanded ? "100%" : "auto",
          }}
        >
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 px-4 py-3 w-full hover:brightness-110"
            style={{ transition: "filter 0.2s ease-in-out" }}
            aria-label="Sponsor on GitHub"
          >
            <Heart className="w-5 h-5 text-white" fill="currentColor" />
            <span className="text-white font-semibold text-sm whitespace-nowrap">
              Buy us Coffee
            </span>
          </button>
        </div>

        {/* Card Content Layer */}
        <div
          className="p-6"
          style={{
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? "auto" : "none",
            transition: "opacity 0.4s ease-in-out 0.3s",
            position: isExpanded ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Support Open Source
            </h3>
          </div>

          {/* Content */}
          <div className="space-y-3 mb-5">
            <p className="text-neutral-300 text-sm leading-relaxed">
              Open source projects like Pulsar Engine require significant time
              and resources to develop and maintain. Your support helps us:
            </p>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">•</span>
                <span>Dedicate more time to development and improvements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">•</span>
                <span>Cover infrastructure and hosting costs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">•</span>
                <span>Create better documentation and tutorials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 mt-0.5">•</span>
                <span>Keep the project sustainable and growing</span>
              </li>
            </ul>
            <p className="text-neutral-400 text-xs pt-2 italic">
              Every contribution, no matter the size, makes a real difference.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleSponsorClick}
            className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105"
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsButton;

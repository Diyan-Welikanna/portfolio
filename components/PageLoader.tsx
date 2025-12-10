"use client";

import { useState, useEffect } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Complete loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 400);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        {/* Outer rotating circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-4 border-transparent border-t-blue-500 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 border-4 border-transparent border-r-purple-500 rounded-full animate-spin-reverse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border-4 border-transparent border-b-pink-500 rounded-full animate-spin-slow"></div>
        </div>
        
        {/* Center content */}
        <div className="relative z-10 text-center p-20">
          {/* Logo with gradient */}
          <div className="text-7xl font-bold gradient-text mb-4 animate-fade-in">
            DT
          </div>
          
          {/* Loading text with dots animation */}
          <div className="text-gray-400 text-sm font-medium mb-6 animate-pulse">
            <span>Loading</span>
            <span className="inline-flex">
              <span className="animate-dot-1">.</span>
              <span className="animate-dot-2">.</span>
              <span className="animate-dot-3">.</span>
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          
          {/* Percentage */}
          <div className="text-gray-500 text-xs mt-2 font-mono">
            {Math.floor(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-float-1 opacity-50"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-float-2 opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full animate-float-3 opacity-50"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float-1 opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;

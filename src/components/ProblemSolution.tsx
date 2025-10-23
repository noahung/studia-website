import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedIcon } from './AnimatedIcon';
import animatedIconGif from '../assets/animated-icon.gif';
import { Plus } from 'lucide-react';

const problemSolutionPairs = [
  {
    id: 1,
    problem: "500+ hours of focused study required for professional qualifications",
    solution: {
      title: "Preparing for qualifications like CeMAP or DipFA can take hundreds of hours of reading, note-taking, and practice — often with little guidance on where to focus first.",
      description: "Studia condenses that workload with structured study paths, showing you what matters most for your chosen exam."
    }
  },
  {
    id: 2,
    problem: "7× faster learning with AI-powered personalised study paths",
    solution: {
      title: "Our AI analyses your progress, weak areas, and schedule to create custom revision plans that adapt to your pace and style — helping you study smarter, not longer.",
      description: ""
    }
  },
  {
    id: 3,
    problem: "70% failure rate with traditional one-size-fits-all study methods",
    solution: {
      title: "Static textbooks and generic online courses can't adapt to you.",
      description: "Studia continuously reshapes your learning plan in real time, using performance analytics and feedback from every mock test or flashcard session."
    }
  },
  {
    id: 4,
    problem: "40% of study time wasted on topics you already know",
    solution: {
      title: "Most learners waste time revisiting familiar material while struggling with harder concepts.",
      description: "Studia's adaptive AI identifies mastered topics and reallocates your time towards areas needing the most improvement."
    }
  },
  {
    id: 5,
    problem: "60% of students lose motivation before completing the course",
    solution: {
      title: "Without structured goals and regular feedback, consistency becomes the hardest part of self-study.",
      description: "Studia tracks your daily streaks, celebrates milestones, and provides timely reminders to keep you on track."
    }
  },
  {
    id: 6,
    problem: "Limited access to expert-level feedback and guidance",
    solution: {
      title: "Professional exams demand clarity and confidence — but tutor feedback is expensive and often generic.",
      description: "Studia's AI chat assistant answers complex questions instantly, explains key topics, and helps you prepare with expert-level precision."
    }
  }
];

export function ProblemSolution() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    // Only expand if clicking a different item, or if no item is expanded
    if (expandedItem !== id) {
      setExpandedItem(id);
    }
  };

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-32 overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)'
      }}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                rgba(168, 85, 247, 0.15) 0%, 
                rgba(147, 51, 234, 0.1) 30%, 
                rgba(59, 130, 246, 0.05) 60%, 
                transparent 80%
              )
            `,
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedIcon 
            src={animatedIconGif} 
            alt="Study smarter icon"
            width={120}
            height={120}
            className="mb-6"
          />
          
          <h2 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            style={{
              textShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
            }}
          >
            Study smarter, not harder
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your learning with AI-powered personalization that adapts to your unique style and pace.
          </p>
        </div>

        {/* Simple Toggle Items */}
        <div>
          {problemSolutionPairs.map((item, index) => (
            <div key={item.id}>
              {/* Problem Item - Always Visible */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-6 flex items-center justify-between text-left transition-all duration-200"
              >
                <span className="text-gray-200 text-lg font-medium">
                  {item.problem}
                </span>
                {/* Only show + icon when item is not expanded */}
                {expandedItem !== item.id && (
                  <div className="text-purple-400">
                    <Plus size={20} />
                  </div>
                )}
              </button>

              {/* Solution Content - Expandable */}
              <AnimatePresence>
                {expandedItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6" style={{ paddingBottom: '20px' }}>
                      <p className="text-gray-300 text-lg leading-relaxed mb-3">
                        {item.solution.title}
                      </p>
                      <p className="text-white text-lg font-bold leading-relaxed">
                        {item.solution.description}
                    </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider line between items */}
              {index < problemSolutionPairs.length - 1 && (
                <div className="border-b border-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const courses = [
  { 
    name: 'CeMAP', 
    full: 'CeMAP 1, 2 & 3',
    description: 'Certificate in Mortgage Advice & Practice for mortgage advisors' 
  },
  { 
    name: 'CeRER', 
    full: 'CeRER',
    description: 'Certificate in Regulated Equity Release for equity release specialists' 
  },
  { 
    name: 'DipFA', 
    full: 'DipFA',
    description: 'Diploma for Financial Advisers covering financial planning fundamentals' 
  },
  { 
    name: 'ACCA', 
    full: 'ACCA Levels',
    description: 'Association of Chartered Certified Accountants qualification levels' 
  },
  { 
    name: 'CIMA', 
    full: 'CIMA',
    description: 'Chartered Institute of Management Accountants professional certification' 
  },
  { 
    name: 'PRINCE2', 
    full: 'PRINCE2',
    description: 'Project management methodology certification for IT professionals' 
  },
  { 
    name: 'PMP', 
    full: 'PMP',
    description: 'Project Management Professional certification by PMI' 
  },
  { 
    name: 'CISI', 
    full: 'CISI',
    description: 'Chartered Institute for Securities & Investment qualifications' 
  },
  { 
    name: 'NEBOSH', 
    full: 'NEBOSH',
    description: 'Health and safety qualifications for workplace safety professionals' 
  },
  { 
    name: 'AAT', 
    full: 'AAT',
    description: 'Association of Accounting Technicians certification' 
  },
  { 
    name: 'SQE / LPC', 
    full: 'SQE / LPC',
    description: 'Solicitors Qualifying Examination and Legal Practice Course' 
  },
];

export function CoursesSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={ref} 
      className="relative py-32 lg:py-40 px-6 lg:px-12 overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at center, #0B0F12 0%, #000000 100%)'
      }}
    >
      {/* Dramatic cosmic neon background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main central glow - purple to blue gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at center, 
                rgba(168, 85, 247, 0.3) 0%, 
                rgba(147, 51, 234, 0.2) 20%, 
                rgba(59, 130, 246, 0.15) 40%, 
                rgba(30, 64, 175, 0.1) 60%, 
                transparent 80%
              )
            `,
            filter: 'blur(60px)',
          }}
        />
        
        {/* Secondary glow layers for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, 
                rgba(236, 72, 153, 0.2) 0%, 
                rgba(168, 85, 247, 0.15) 30%, 
                transparent 60%
              )
            `,
            filter: 'blur(80px)',
          }}
        />
        
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 70% 60%, 
                rgba(59, 130, 246, 0.2) 0%, 
                rgba(30, 64, 175, 0.1) 40%, 
                transparent 70%
              )
            `,
            filter: 'blur(70px)',
          }}
        />

        {/* Starry field */}
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              boxShadow: '0 0 2px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}

        {/* Larger glowing stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.3,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(168, 85, 247, 0.3)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
          className="mb-20 text-center"
        >
          <h2 
            className="text-white mb-6 text-4xl lg:text-5xl font-bold"
            style={{
              textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
            }}
          >
            Courses we support
          </h2>
          <p className="text-white/70 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive, exam-focused study materials for leading UK professional qualifications. 
            Each course includes AI-generated study plans, thousands of flashcards, full-length mock exams, 
            and detailed explanations written by industry experts.
          </p>
        </motion.div>

        {/* Desktop: Grid layout, Mobile: Stacked */}
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={course.name}>
              <CourseItem course={course} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseItem({ course, index }: { course: typeof courses[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 0.5], ['20px', '0px']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Running neon border effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, #0033A0, #2196F3, #A855F7, #0033A0, #2196F3)',
            backgroundSize: '300% 100%',
            padding: '2px',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="h-full w-full bg-transparent rounded-2xl" />
        </motion.div>
      </div>

      {/* Clean glassmorphism card */}
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-xl">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-50" />
        
        <div className="relative z-10">
          {/* Course number badge - simple and clean */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-sm">
              {String(index + 1).padStart(2, '0')}
            </div>
            
            {/* Course title */}
            <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
              {course.full}
            </h3>
          </div>
          
          {/* Course description */}
          <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
            {course.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

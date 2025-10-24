import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { AnimatedIcon } from './AnimatedIcon';

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
      className="py-32 lg:py-40 px-6 lg:px-12"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
          className="mb-20 text-center"
        >
          {/* Animated Icon */}
          <AnimatedIcon 
            src="/studia-website/courses-animation.gif" 
            alt="Courses we support icon"
            width={140}
            height={140}
            className="mb-8"
          />
          
          <h2 className="text-white mb-6 text-4xl lg:text-5xl font-bold">
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
      <div className="p-6">
        {/* Course number and title */}
        <div className="flex items-center gap-4 mb-3">
          <span className="text-white font-bold text-xl">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="w-px h-6 bg-white/30"></div>
          <h3 className="text-white font-bold text-xl">
            {course.full}
          </h3>
        </div>
        
        {/* Course description */}
        <p className="text-white/70 text-sm leading-relaxed">
          {course.description}
        </p>
      </div>
    </motion.div>
  );
}

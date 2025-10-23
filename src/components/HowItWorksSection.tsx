import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { UserPlus, Target, BookOpen, Award } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create your account',
    description: 'Sign up in seconds with your email or Google account. Select your target qualification and exam date to get started immediately.'
  },
  {
    icon: Target,
    title: 'Set your goals',
    description: 'Tell us about your experience level, available study time, and learning preferences. Our AI analyses this to create a fully personalised study plan tailored to your needs.'
  },
  {
    icon: BookOpen,
    title: 'Study smart',
    description: 'Follow your adaptive study plan with intelligent flashcards that use spaced repetition, interactive quizzes, and full-length timed mock exams that simulate real test conditions.'
  },
  {
    icon: Award,
    title: 'Pass with confidence',
    description: 'Track your progress with detailed analytics, identify weak areas, and adjust your plan as needed. Join thousands who\'ve achieved their qualifications with Studia.'
  }
];

export function HowItWorksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      ref={ref} 
      className="relative py-32 lg:py-40 px-6 lg:px-12"
      style={{ backgroundColor: '#0B0F12' }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-white mb-6">How it works</h2>
          <p className="text-white/65 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            From sign-up to certification, Studia guides you every step of the way with intelligent, 
            adaptive learning technology designed specifically for UK professional qualifications.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress line - behind icons */}
          <div className="absolute left-8 lg:left-12 top-16 bottom-16 w-0.5 bg-white/10 hidden md:block z-0">
            <motion.div
              className="w-full bg-[#0033A0]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="relative z-10 space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <StepItem key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="relative flex items-start gap-6 lg:gap-12"
    >
      {/* Icon */}
      <motion.div
        style={{ scale }}
        className="relative z-20 w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-[#0B0F12] border border-[#0033A0]/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(0,51,160,0.1)]"
      >
        <div className="absolute inset-0 rounded-2xl bg-[#0033A0]/10" />
        <step.icon className="relative z-10 w-8 h-8 lg:w-12 lg:h-12 text-[#0033A0]" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 pt-2"
      >
        <div className="mb-2 text-sm text-[#0033A0]">Step {index + 1}</div>
        <h3 className="text-white mb-3">{step.title}</h3>
        <p className="text-white/65 text-lg max-w-xl">{step.description}</p>
      </motion.div>
    </motion.div>
  );
}

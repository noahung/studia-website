import { motion } from 'motion/react';
import { AnimatedIcon } from './AnimatedIcon';

const steps = [
  {
    title: 'Create your account',
    description: 'Sign up in seconds with your email or Google account. Select your target qualification and exam date to get started immediately.',
    gifPath: '/studia-website/step1-animation.gif'
  },
  {
    title: 'Set your goals',
    description: 'Tell us about your experience level, available study time, and learning preferences. Our AI analyses this to create a fully personalised study plan tailored to your needs.',
    gifPath: '/studia-website/step2-animation.gif'
  },
  {
    title: 'Study smart',
    description: 'Follow your adaptive study plan with intelligent flashcards that use spaced repetition, interactive quizzes, and full-length timed mock exams that simulate real test conditions.',
    gifPath: '/studia-website/step3-animation.gif'
  },
  {
    title: 'Pass with confidence',
    description: 'Track your progress with detailed analytics, identify weak areas, and adjust your plan as needed. Join thousands who\'ve achieved their qualifications with Studia.',
    gifPath: '/studia-website/step4-animation.gif'
  }
];

export function HowItWorksSection() {
  return (
    <section 
      className="relative py-20 lg:py-32 px-6 lg:px-12"
      style={{ backgroundColor: '#061022' }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
          className="mb-16 lg:mb-20 text-center"
        >
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-white/65 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            From sign-up to certification, Studia guides you every step of the way with intelligent, 
            adaptive learning technology designed specifically for UK professional qualifications.
          </p>
        </motion.div>

        {/* 4-column grid layout - 4 columns on desktop, 4 rows on mobile */}
        <div className="how-it-works-grid">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Vertical line separator - only show on desktop and not for last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-px h-16 bg-white/10" />
              )}
              
              <div className="text-left">
                {/* GIF Animation with Glow Effect */}
                <div className="mb-6 flex justify-start">
                  <AnimatedIcon 
                    src={step.gifPath} 
                    alt={`${step.title} animation`}
                    width={120}
                    height={120}
                    className="mb-0"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-4 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/65 text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

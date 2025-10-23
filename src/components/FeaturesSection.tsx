import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Brain, CreditCard, Timer, TrendingUp, WifiOff } from 'lucide-react';

// Import feature images with fallback handling
let aiStudyPlanImg: string;
let flashcardQuestionImg: string;
let flashcardAnswerImg: string;
let mockExamImg: string;
let progressImg: string;
let offlineImg: string;

try {
  aiStudyPlanImg = new URL('/public/images/feature-ai-study-plan.png', import.meta.url).href;
} catch {
  aiStudyPlanImg = '';
}

try {
  flashcardQuestionImg = new URL('/public/images/feature-flashcards-question.png', import.meta.url).href;
} catch {
  flashcardQuestionImg = '';
}

try {
  flashcardAnswerImg = new URL('/public/images/feature-flashcards-answer.png', import.meta.url).href;
} catch {
  flashcardAnswerImg = '';
}

try {
  mockExamImg = new URL('/public/images/feature-mock-exam.png', import.meta.url).href;
} catch {
  mockExamImg = '';
}

try {
  progressImg = new URL('/public/images/feature-progress.png', import.meta.url).href;
} catch {
  progressImg = '';
}

try {
  offlineImg = new URL('/public/images/feature-offline.png', import.meta.url).href;
} catch {
  offlineImg = '';
}

const features = [
  {
    icon: Brain,
    title: 'AI Study Plans',
    description: 'Get a fully personalised learning path powered by advanced AI that adapts to your unique progress, learning style, and schedule. Our intelligent algorithm analyzes your strengths and weaknesses, dynamically adjusting your study plan to focus on areas that need improvement. Experience adaptive learning that evolves with you, ensuring you\'re always working on what matters most for exam success.',
    color: '#0033A0'
  },
  {
    icon: CreditCard,
    title: 'Smart Flashcards',
    description: 'Master complex concepts with our intelligent spaced repetition system that scientifically optimizes your revision schedule. Our smart flashcards use proven cognitive science techniques to present information at the perfect moment for maximum retention. Track your mastery of each topic, review difficult concepts more frequently, and consolidate your knowledge with confidence as exam day approaches.',
    color: '#2196F3'
  },
  {
    icon: Timer,
    title: 'Timed Mock Exams',
    description: 'Experience the real exam environment with our realistic, timed mock exams that replicate the exact conditions you\'ll face on test day. Get instant feedback on your performance, detailed analytics showing your strengths and areas for improvement, and comprehensive explanations for every question. Build your exam confidence, improve time management, and identify knowledge gaps before they become problems.',
    color: '#26A65B'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Gain deep visual insights into your performance across all subjects, topics, and question types with our comprehensive analytics dashboard. Monitor your study time, completion rates, accuracy trends, and see your improvement over time with beautiful, easy-to-understand charts and graphs. Stay motivated by watching your progress grow and make data-driven decisions about where to focus your study efforts.',
    color: '#FFC107'
  },
  {
    icon: WifiOff,
    title: 'Offline & Multi-course',
    description: 'Study anywhere, anytime with full offline access to all your courses and materials. No internet connection required - download your content and study on the go during your commute, at the library, or wherever you are. Access multiple professional qualification courses from a single account, seamlessly switching between subjects and tracking progress across all your studies in one convenient place.',
    color: '#0033A0'
  }
];

export function FeaturesSection() {
  return (
    <section className="relative" style={{ backgroundColor: '#061022' }}>
      {features.map((feature, index) => (
        <FeatureTile key={feature.title} feature={feature} index={index} />
      ))}
    </section>
  );
}

function FeatureTile({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20">
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 border border-white/10 rounded-2xl"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl">{feature.title}</h2>
            <p className="text-base sm:text-lg text-white/65 max-w-xl leading-relaxed">
              {feature.description}
            </p>
          </motion.div>

          {/* Right content - Mockup */}
          <motion.div style={{ y }} className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
            {index === 0 && <AIStudyPlanMockup />}
            {index === 1 && <FlashcardMockup />}
            {index === 2 && <MockExamMockup />}
            {index === 3 && <ProgressMockup />}
            {index === 4 && <OfflineMockup />}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function AIStudyPlanMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glowing background neon border */}
      <motion.div
        className="absolute w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[340px] lg:h-[720px] rounded-[40px]"
        style={{
          background: 'linear-gradient(45deg, #0033A0, #2196F3, #0033A0, #2196F3)',
          backgroundSize: '300% 300%',
          filter: 'blur(2px)',
          opacity: 0.8,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary glow layer */}
      <motion.div
        className="absolute w-[290px] h-[570px] sm:w-[330px] sm:h-[650px] lg:w-[350px] lg:h-[730px] rounded-[45px]"
        style={{
          background: 'linear-gradient(45deg, #0033A0, #2196F3, #0033A0, #2196F3)',
          backgroundSize: '400% 400%',
          filter: 'blur(4px)',
          opacity: 0.7,
        }}
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[276px] h-[556px] sm:w-[316px] sm:h-[636px] lg:w-[336px] lg:h-[716px] rounded-[38px] overflow-hidden shadow-[0_0_100px_rgba(0,51,160,0.6),0_0_50px_rgba(33,150,243,0.4)]"
      >
        {aiStudyPlanImg ? (
          <img
            src={aiStudyPlanImg}
            alt="AI Study Plans Interface"
            className="w-full h-full object-cover rounded-[38px]"
          />
        ) : (
          <div className="absolute inset-0 rounded-[38px]" style={{
            background: 'linear-gradient(135deg, #0F1720 0%, #0B0F12 100%)',
            border: '2px solid rgba(0,51,160,0.6)',
            boxShadow: 'inset 0 0 80px rgba(0,51,160,0.15)'
          }}>
            <div className="p-6 h-full flex flex-col">
              <div className="mb-6">
                <div className="h-4 bg-white/10 rounded w-32 mb-4" />
                <div className="h-2 bg-white/5 rounded w-48 mb-2" />
              </div>
              
              <div className="flex-1 space-y-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                      style={{ 
                        backgroundColor: i < 2 ? 'rgba(38,166,91,0.2)' : 'rgba(0,51,160,0.1)',
                        border: `1px solid ${i < 2 ? 'rgba(38,166,91,0.3)' : 'rgba(0,51,160,0.2)'}`,
                        color: i < 2 ? '#26A65B' : '#0033A0'
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/10 rounded w-full mb-2" />
                      <div className="h-2 bg-white/5 rounded w-3/4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function FlashcardMockup() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glowing background neon border */}
      <motion.div
        className="absolute w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[340px] lg:h-[720px] rounded-[40px]"
        style={{
          background: 'linear-gradient(45deg, #2196F3, #0033A0, #2196F3, #0033A0)',
          backgroundSize: '300% 300%',
          filter: 'blur(2px)',
          opacity: 0.8,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary glow layer */}
      <motion.div
        className="absolute w-[290px] h-[570px] sm:w-[330px] sm:h-[650px] lg:w-[350px] lg:h-[730px] rounded-[45px]"
        style={{
          background: 'linear-gradient(45deg, #2196F3, #0033A0, #2196F3, #0033A0)',
          backgroundSize: '400% 400%',
          filter: 'blur(4px)',
          opacity: 0.7,
        }}
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[276px] h-[556px] sm:w-[316px] sm:h-[636px] lg:w-[336px] lg:h-[716px] rounded-[38px] overflow-hidden shadow-[0_0_100px_rgba(33,150,243,0.6),0_0_50px_rgba(0,51,160,0.4)] cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="absolute inset-0 rounded-[38px]"
          style={{
            rotateY: flipped ? 180 : 0,
            backfaceVisibility: 'hidden'
          }}
          transition={{ duration: 0.6 }}
        >
          {flashcardQuestionImg ? (
            <img
              src={flashcardQuestionImg}
              alt="Flashcard Question"
              className="w-full h-full object-cover rounded-[38px]"
            />
          ) : (
            <div className="absolute inset-0 rounded-[38px] p-8 flex items-center justify-center shadow-[rgba(255,255,255,0.02)_0px_-8px_24px,rgba(0,0,0,0.6)_0px_20px_60px]"
              style={{
                background: 'linear-gradient(135deg, #0F1720 0%, #0B0F12 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="text-center">
                <p className="text-white/50 text-sm mb-4">Question</p>
                <h3 className="text-white mb-6">What is the definition of equity release?</h3>
                <p className="text-white/40 text-sm">Tap to reveal answer</p>
              </div>
            </div>
          )}
        </motion.div>
        
        <motion.div
          className="absolute inset-0 rounded-[38px]"
          style={{
            rotateY: flipped ? 0 : -180,
            backfaceVisibility: 'hidden'
          }}
          transition={{ duration: 0.6 }}
        >
          {flashcardAnswerImg ? (
            <img
              src={flashcardAnswerImg}
              alt="Flashcard Answer"
              className="w-full h-full object-cover rounded-[38px]"
              style={{ transform: 'rotateY(180deg)' }}
            />
          ) : (
            <div className="absolute inset-0 rounded-[38px] p-8 flex items-center justify-center shadow-[rgba(255,255,255,0.02)_0px_-8px_24px,rgba(0,0,0,0.6)_0px_20px_60px]"
              style={{
                background: 'linear-gradient(135deg, #0033A0 0%, #0055CC 100%)',
                border: '1px solid rgba(255,255,255,0.2)',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="text-center" style={{ transform: 'rotateY(180deg)' }}>
                <p className="text-white/70 text-sm mb-4">Answer</p>
                <p className="text-white">A financial product that allows homeowners to access the equity in their property whilst continuing to live there.</p>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

function MockExamMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glowing background neon border */}
      <motion.div
        className="absolute w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[340px] lg:h-[720px] rounded-[40px]"
        style={{
          background: 'linear-gradient(45deg, #26A65B, #FFC107, #26A65B, #FFC107)',
          backgroundSize: '300% 300%',
          filter: 'blur(2px)',
          opacity: 0.8,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary glow layer */}
      <motion.div
        className="absolute w-[290px] h-[570px] sm:w-[330px] sm:h-[650px] lg:w-[350px] lg:h-[730px] rounded-[45px]"
        style={{
          background: 'linear-gradient(45deg, #26A65B, #FFC107, #26A65B, #FFC107)',
          backgroundSize: '400% 400%',
          filter: 'blur(4px)',
          opacity: 0.7,
        }}
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[276px] h-[556px] sm:w-[316px] sm:h-[636px] lg:w-[336px] lg:h-[716px] rounded-[38px] overflow-hidden shadow-[0_0_100px_rgba(38,166,91,0.6),0_0_50px_rgba(255,193,7,0.4)]"
      >
        {mockExamImg ? (
          <img
            src={mockExamImg}
            alt="Timed Mock Exam Interface"
            className="w-full h-full object-cover rounded-[38px]"
          />
        ) : (
          <div className="absolute inset-0 rounded-[38px]" style={{
            background: 'linear-gradient(135deg, #0F1720 0%, #0B0F12 100%)',
            border: '2px solid rgba(0,51,160,0.6)',
            boxShadow: 'inset 0 0 80px rgba(0,51,160,0.15)'
          }}>
            <div className="p-6 h-full flex flex-col">
              {/* Timer */}
              <div className="flex items-center justify-between mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white/60 text-sm">Time remaining</span>
                <div className="flex items-center gap-2">
                  <Timer className="w-5 h-5 text-[#FFC107]" />
                  <motion.span 
                    className="text-2xl text-white"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    45:32
                  </motion.span>
                </div>
              </div>

              {/* Question */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-white/40 text-sm">Question 7 of 50</span>
                </div>
                <h3 className="text-white mb-6 text-xl">
                  Which regulatory body oversees mortgage advisors in the UK?
                </h3>
                
                <div className="space-y-3">
                  {['Financial Conduct Authority', 'Bank of England', 'HM Treasury', 'Prudential Regulation Authority'].map((option, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#0033A0]/50 hover:bg-[#0033A0]/5 cursor-pointer transition-all"
                    >
                      <p className="text-white/80 text-sm">{option}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function ProgressMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glowing background neon border */}
      <motion.div
        className="absolute w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[340px] lg:h-[720px] rounded-[40px]"
        style={{
          background: 'linear-gradient(45deg, #FFC107, #26A65B, #FFC107, #26A65B)',
          backgroundSize: '300% 300%',
          filter: 'blur(2px)',
          opacity: 0.8,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary glow layer */}
      <motion.div
        className="absolute w-[290px] h-[570px] sm:w-[330px] sm:h-[650px] lg:w-[350px] lg:h-[730px] rounded-[45px]"
        style={{
          background: 'linear-gradient(45deg, #FFC107, #26A65B, #FFC107, #26A65B)',
          backgroundSize: '400% 400%',
          filter: 'blur(4px)',
          opacity: 0.7,
        }}
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[276px] h-[556px] sm:w-[316px] sm:h-[636px] lg:w-[336px] lg:h-[716px] rounded-[38px] overflow-hidden shadow-[0_0_100px_rgba(255,193,7,0.6),0_0_50px_rgba(38,166,91,0.4)]"
      >
        {progressImg ? (
          <img
            src={progressImg}
            alt="Progress Tracking Interface"
            className="w-full h-full object-cover rounded-[38px]"
          />
        ) : (
          <div className="absolute inset-0 rounded-[38px]" style={{
            background: 'linear-gradient(135deg, #0F1720 0%, #0B0F12 100%)',
            border: '2px solid rgba(0,51,160,0.6)',
            boxShadow: 'inset 0 0 80px rgba(0,51,160,0.15)'
          }}>
            <div className="p-6 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-white mb-2">Your Progress</h3>
                <p className="text-white/50 text-sm">CeMAP 1 • Week 3</p>
              </div>

              {/* Circular progress */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      fill="none"
                      stroke="#0033A0"
                      strokeWidth="12"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.73 }}
                      viewport={{ once: false }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      strokeDasharray="440"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl text-white mb-1">73%</div>
                      <div className="text-xs text-white/50">Complete</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Study time', value: '12.5h', color: '#0033A0' },
                  { label: 'Flashcards', value: '284', color: '#2196F3' },
                  { label: 'Tests', value: '8', color: '#26A65B' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="text-2xl mb-1" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function OfflineMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glowing background neon border */}
      <motion.div
        className="absolute w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] lg:w-[340px] lg:h-[720px] rounded-[40px]"
        style={{
          background: 'linear-gradient(45deg, #0033A0, #2196F3, #0033A0, #2196F3)',
          backgroundSize: '300% 300%',
          filter: 'blur(2px)',
          opacity: 0.8,
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Secondary glow layer */}
      <motion.div
        className="absolute w-[290px] h-[570px] sm:w-[330px] sm:h-[650px] lg:w-[350px] lg:h-[730px] rounded-[45px]"
        style={{
          background: 'linear-gradient(45deg, #0033A0, #2196F3, #0033A0, #2196F3)',
          backgroundSize: '400% 400%',
          filter: 'blur(4px)',
          opacity: 0.7,
        }}
        animate={{
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-[276px] h-[556px] sm:w-[316px] sm:h-[636px] lg:w-[336px] lg:h-[716px] rounded-[38px] overflow-hidden shadow-[0_0_100px_rgba(0,51,160,0.6),0_0_50px_rgba(33,150,243,0.4)]"
      >
        {offlineImg ? (
          <img
            src={offlineImg}
            alt="Offline & Multi-Course Interface"
            className="w-full h-full object-cover rounded-[38px]"
          />
        ) : (
          <div className="absolute inset-0 rounded-[38px]" style={{
            background: 'linear-gradient(135deg, #0F1720 0%, #0B0F12 100%)',
            border: '2px solid rgba(0,51,160,0.6)',
            boxShadow: 'inset 0 0 80px rgba(0,51,160,0.15)'
          }}>
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white">My Courses</h3>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <WifiOff className="w-4 h-4 text-white/50" />
                  <span className="text-xs text-white/50">Offline</span>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                {[
                  { name: 'CeMAP 1', progress: 73, color: '#0033A0', status: 'In progress' },
                  { name: 'CeMAP 2', progress: 45, color: '#2196F3', status: 'In progress' },
                  { name: 'CeMAP 3', progress: 0, color: 'rgba(255,255,255,0.1)', status: 'Not started' }
                ].map((course, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white text-sm">{course.name}</h4>
                      <span className="text-xs text-white/50">{course.status}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: course.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <button className="w-full h-12 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all mt-4">
                Add course
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

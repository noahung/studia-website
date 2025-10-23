import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Plan',
    price: '£0',
    period: 'month',
    features: [
      'Access to all courses (limited modules)',
      '3 AI study plans per month',
      'Basic flashcards',
      '1 mock test per month',
      'Cloud sync across devices'
    ]
  },
  {
    name: 'Pro Plan',
    price: '£14.99',
    period: 'month',
    yearlyPrice: '£120',
    yearlySavings: 'save 33%',
    popular: true,
    features: [
      'Unlimited courses',
      'Unlimited AI study plans',
      'Full flashcard library',
      'Unlimited mock tests with analytics',
      'AI chat & explanations',
      'Personal progress insights',
      'Exam countdown & reminders'
    ]
  }
];

export function PricingSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={ref} 
      className="relative py-32 lg:py-40 px-6 lg:px-12"
      style={{ backgroundColor: '#0F1720' }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-white mb-6">Choose your plan</h2>
          <p className="text-white/65 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Start for free and upgrade anytime. All plans include access to our comprehensive course library, 
            cloud synchronisation, and regular content updates. No hidden fees, no lock-in contracts.
          </p>
        </motion.div>

        {/* Pricing cards - side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingRow key={plan.name} plan={plan} index={index} />
          ))}
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="h-14 px-10 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,51,160,0.4)] text-lg">
            Start free
          </button>
          <button className="relative h-14 px-10 bg-transparent text-white rounded-full overflow-hidden group text-lg">
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-full" 
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(0,51,160,0.8), transparent)',
                  animation: 'borderGlow 3s linear infinite'
                }}
              />
            </div>
            <div className="absolute inset-[1px] rounded-full bg-[#0F1720]" />
            <span className="relative z-10">Upgrade to Pro</span>
          </button>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-white/50 text-sm">
            All plans include a 14-day money-back guarantee. Cancel anytime, no questions asked.
          </p>
        </motion.div>
      </div>

      <style>{`
        @keyframes borderGlow {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(200%) rotate(360deg); }
        }
        
        @keyframes runningLight {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(200%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

function PricingRow({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3], ['15%', '0%']);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: 1, y: 0 }}
      className="relative w-full"
    >
      {plan.popular && (
        <div className="absolute -top-4 left-8 z-10">
          <div className="px-5 py-2 bg-[#0033A0] text-white text-sm rounded-full border border-[#0033A0]/50 shadow-[0_0_30px_rgba(0,51,160,0.4)]">
            Most popular
          </div>
        </div>
      )}
      
      {/* Simple glowing neon border for Pro plan */}
      {plan.popular && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div 
            className="absolute inset-0 rounded-3xl opacity-80"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,51,160,0.8), rgba(59,130,246,0.6), rgba(0,51,160,0.8), transparent)',
              animation: 'runningLight 3s linear infinite',
              filter: 'blur(1px)',
            }}
          />
        </div>
      )}
      
      <div 
        className={`p-6 sm:p-8 lg:p-8 rounded-3xl border transition-all duration-500 hover:border-white/20 relative z-10 h-fit w-full ${
          plan.popular 
            ? 'bg-white/[0.03] border-white/20' 
            : 'bg-white/[0.01] border-white/10'
        }`}
      >
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* Plan info */}
          <div className="flex-1 space-y-4 lg:space-y-6">
            <div className="space-y-4">
              <h3 className="text-white text-3xl lg:text-4xl">{plan.name}</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl lg:text-6xl text-white">{plan.price}</span>
                <span className="text-white/50 text-xl">/ {plan.period}</span>
              </div>
              {plan.yearlyPrice && (
                <p className="text-white/65 text-lg">
                  or <span className="text-white">{plan.yearlyPrice}/year</span> <span className="text-[#26A65B]">({plan.yearlySavings})</span>
                </p>
              )}
            </div>

            <div className="space-y-3 pt-2">
              {plan.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-6 h-6 text-[#26A65B] flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-lg leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <button 
              className={`h-14 px-10 rounded-full transition-all duration-300 whitespace-nowrap text-lg ${
                plan.popular
                  ? 'bg-[#0033A0] text-white hover:bg-[#0033A0]/90 hover:shadow-[0_0_50px_rgba(0,51,160,0.4)]'
                  : 'bg-transparent border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30'
              }`}
            >
              {plan.price === '£0' ? 'Get started free' : 'Start Pro trial'}
            </button>
            {!plan.popular && (
              <p className="text-white/40 text-sm mt-2 hidden lg:block">No credit card required</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

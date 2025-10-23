import { motion } from 'motion/react';
import { Apple, Smartphone, Mail } from 'lucide-react';
import { useState } from 'react';
import { AnimatedIcon } from './AnimatedIcon';

export function DownloadSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log('Waitlist email:', email);
    setEmail('');
  };

  return (
    <section 
      id="download"
      className="relative py-32 lg:py-40 px-6 lg:px-12 overflow-hidden"
      style={{ backgroundColor: '#061022' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0,51,160,0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
            className="space-y-8 lg:space-y-10"
          >
            <div className="space-y-6">
              {/* Animated Icon */}
              <div className="flex justify-start">
                <AnimatedIcon 
                  src="/studia-website/journey-animation.gif" 
                  alt="Start your journey icon"
                  width={120}
                  height={120}
                  className="mb-4"
                />
              </div>
              
              <h2 className="text-white">
                Start your journey today
              </h2>
              <p className="text-xl lg:text-2xl text-white/65 max-w-xl leading-relaxed">
                Download Studia on iOS or Android and take the first step towards your professional qualification. 
                Start with our free plan and upgrade anytime to unlock unlimited AI-powered features.
              </p>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-2xl hover:bg-white/90 transition-all shadow-[rgba(255,255,255,0.1)_0px_4px_16px]"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-lg -mt-1">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-2xl hover:bg-white/90 transition-all shadow-[rgba(255,255,255,0.1)_0px_4px_16px]"
              >
                <Smartphone className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-lg -mt-1">Google Play</div>
                </div>
              </motion.button>
            </div>

            {/* Waitlist form */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/70 mb-4">Not ready yet? Join the waiting list</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/12 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#0033A0] transition-colors"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="h-12 px-8 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,51,160,0.3)] whitespace-nowrap"
                >
                  Join waitlist
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right content - Your App Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-72 h-[580px] rounded-[40px] overflow-hidden shadow-[rgba(255,255,255,0.02)_0px_-8px_24px,rgba(0,0,0,0.6)_0px_20px_60px]">
              <img
                src="/studia-website/images/download-app-mockup.png"
                alt="Studia App Interface"
                className="w-full h-full object-cover rounded-[40px]"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(0,51,160,0.3))',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

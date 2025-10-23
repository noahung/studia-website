import { motion } from 'motion/react';
import { ArrowLeft, Mail, MessageSquare, HelpCircle, Building } from 'lucide-react';
import { useState } from 'react';

export function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactOptions = [
    {
      icon: HelpCircle,
      title: 'Support',
      description: 'Get help with your account, subscriptions, or technical issues',
      email: 'support@studia.app'
    },
    {
      icon: Building,
      title: 'Business enquiries',
      description: 'Interested in team plans or partnerships',
      email: 'business@studia.app'
    },
    {
      icon: MessageSquare,
      title: 'Feedback',
      description: 'Share your thoughts or suggest new features',
      email: 'feedback@studia.app'
    }
  ];

  return (
    <div className="min-h-screen bg-[#061022] pt-32 pb-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-white mb-6">Get in touch</h1>
          <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or need assistance? We're here to help. Choose the best way to reach us below.
          </p>
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0033A0]/10 border border-[#0033A0]/20 flex items-center justify-center mb-6">
                <option.icon className="w-7 h-7 text-[#0033A0]" />
              </div>
              <h3 className="text-white mb-3">{option.title}</h3>
              <p className="text-white/65 mb-4 leading-relaxed">{option.description}</p>
              <a 
                href={`mailto:${option.email}`}
                className="text-[#0033A0] hover:underline text-sm"
              >
                {option.email}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact form */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-white mb-6">Send us a message</h2>
            <p className="text-white/65 text-lg mb-8 leading-relaxed">
              Fill out the form and we'll get back to you within 24 hours during business days. 
              For urgent matters, please use the direct email addresses above.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-[#0033A0] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white mb-2">Email response time</h4>
                  <p className="text-white/60">Typically within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-[#0033A0] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white mb-2">Office hours</h4>
                  <p className="text-white/60">Monday - Friday, 9:00 - 17:00 GMT</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/10"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-3">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-14 px-5 bg-white/5 border border-white/12 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#0033A0] transition-colors"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-3">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-14 px-5 bg-white/5 border border-white/12 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#0033A0] transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white mb-3">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full h-14 px-5 bg-white/5 border border-white/12 rounded-2xl text-white focus:outline-none focus:border-[#0033A0] transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.25rem center'
                }}
              >
                <option value="general">General enquiry</option>
                <option value="support">Technical support</option>
                <option value="billing">Billing & subscriptions</option>
                <option value="feature">Feature request</option>
                <option value="partnership">Partnership opportunity</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-white/5 border border-white/12 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#0033A0] transition-colors resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-[#0033A0] text-white rounded-full hover:bg-[#0033A0]/90 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,51,160,0.4)] text-lg"
            >
              Send message
            </button>

            <p className="text-white/40 text-sm text-center">
              We'll never share your email with anyone else.
            </p>
          </motion.form>
        </div>

        {/* FAQ quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 p-10 rounded-3xl bg-white/[0.02] border border-white/10 text-center"
        >
          <h3 className="text-white mb-4">Looking for quick answers?</h3>
          <p className="text-white/65 mb-6">
            Many common questions are answered in our help centre and documentation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="h-12 px-6 bg-white/5 border border-white/12 text-white rounded-full hover:bg-white/10 transition-all">
              View help centre
            </button>
            <button className="h-12 px-6 bg-white/5 border border-white/12 text-white rounded-full hover:bg-white/10 transition-all">
              Read documentation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

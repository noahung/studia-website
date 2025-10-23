import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import logoImg from 'figma:asset/a1d658c7cd3aa3a82d6716d78e7c95d4ad7a82b9.png';

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const footerLinks = [
    { label: 'Contact us', href: 'contact', onClick: true },
    { label: 'Terms & conditions', href: 'terms', onClick: true }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Mail, href: 'mailto:hello@studia.app', label: 'Email' }
  ];

  return (
    <footer 
      className="relative py-20 px-6 lg:px-12 border-t border-white/10"
      style={{ backgroundColor: '#05060A' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-16">
          {/* Logo column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <img 
                src={logoImg} 
                alt="Studia" 
                className="h-8 w-auto"
              />
              <p className="text-white/50 text-sm max-w-xs">
                Your personal study companion for professional qualifications.
              </p>
            </motion.div>
          </div>

          {/* Link section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex gap-8"
          >
            {footerLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => onNavigate?.(link.href)}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/40 text-sm"
            >
              © 2025 Studia. All rights reserved.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

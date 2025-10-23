import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Studia's AI study plans helped me pass CeMAP 1 in half the expected time. The smart flashcards are a game changer.",
    author: "Sarah Mitchell",
    role: "Mortgage Advisor",
    course: "CeMAP"
  },
  {
    quote: "The mock exams feel just like the real thing. I went into my ACCA exam feeling completely prepared and confident.",
    author: "James Okonkwo",
    role: "Trainee Accountant",
    course: "ACCA"
  },
  {
    quote: "Being able to study offline during my commute made all the difference. Passed PRINCE2 with flying colours.",
    author: "Emma Chen",
    role: "Project Manager",
    course: "PRINCE2"
  }
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={ref} 
      className="relative py-32 lg:py-40 px-6 lg:px-12"
      style={{ backgroundColor: '#05060A' }}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 0.78, 0.4, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-white mb-6">Loved by students</h2>
          <p className="text-white/65 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Join over 15,000 professionals across the UK who have achieved their qualifications with Studia. 
            Our students consistently report higher confidence, better time management, and improved exam results.
          </p>
        </motion.div>

        <div className="space-y-32 lg:space-y-40">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialItem({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="max-w-4xl mx-auto text-center"
    >
      {/* Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-1 mb-8"
      >
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#FFC107] text-[#FFC107]" />
        ))}
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-10"
      >
        <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed">
          "{testimonial.quote}"
        </p>
      </motion.blockquote>

      {/* Author */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center gap-4"
      >
        <div className="text-center">
          <div className="text-white mb-1">{testimonial.author}</div>
          <div className="text-white/50 text-sm">{testimonial.role}</div>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="px-3 py-1.5 rounded-full bg-[#0033A0]/10 border border-[#0033A0]/20">
          <span className="text-sm text-[#0033A0]">{testimonial.course}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

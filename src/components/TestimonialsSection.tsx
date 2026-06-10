import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Dhileep Kumar',
    role: 'Founder & CEO',
    company: 'Track My Academy',
    image: '/testimonials/person1.jpg', // Placeholder
    text: 'Arun is an exceptional developer with a keen eye for detail. His work on our academy management platform exceeded all expectations. The code quality and architecture are top-notch.',
    rating: 5,
    website: 'https://www.trackmyacademy.com/',
    date: 'January 2026',
  },
  {
    id: 2,
    name: 'Ashwin Saravanan',
    role: 'Founder',
    company: 'Marina Digitals',
    image: '/testimonials/person2.jpg', // Placeholder
    text: 'Working with Arun was a fantastic experience. He transformed our vision into a stunning, high-performance website. His expertise in React and modern web technologies is evident in every pixel.',
    rating: 5,
    website: 'https://marinadigi.com',
    date: 'December 2025',
  },
  {
    id: 3,
    name: 'Karthick Raghav',
    role: 'Product Owner',
    company: 'Kyra Elite',
    image: '/testimonials/person3.jpg', // Placeholder
    text: 'Arun delivered our e-commerce platform ahead of schedule with excellent attention to UX and performance. The admin dashboard he built has streamlined our entire workflow.',
    rating: 5,
    website: 'https://kyraelite.com',
    date: 'November 2025',
  },
  {
    id: 4,
    name: 'Selva Rajeshwari',
    role: 'Founder & Creative Director',
    company: 'Selvas Art Haus',
    image: '/testimonials/person4.jpg', // Placeholder
    text: 'Arun created a beautiful portfolio website that perfectly captures the essence of our art business. His professionalism and technical skills made the entire process smooth and enjoyable.',
    rating: 5,
    website: 'https://selvasarthaus.netlify.app/',
    date: 'October 2025',
  },
  {
    id: 5,
    name: 'Joe Jasper',
    role: 'Founder',
    company: 'Fufies',
    image: '/testimonials/person5.jpg', // Placeholder
    text: 'Arun brought our "Made for Hugs" brand to life with a warm and inviting website. His understanding of our vision and ability to translate it into a beautiful digital experience was remarkable.',
    rating: 5,
    website: 'https://fufies.in',
    date: 'September 2025',
  },
  {
    id: 6,
    name: 'Mr. Sadiq',
    role: 'Managing Director',
    company: 'Aqua Arch International',
    image: '/testimonials/person6.jpg', // Placeholder
    text: 'Professional, efficient, and highly skilled. Arun delivered a corporate website that perfectly represents our business. His attention to detail and modern design approach impressed our entire team.',
    rating: 5,
    website: 'https://abchdnfhd.vercel.app/',
    date: 'August 2025',
  },
  {
    id: 7,
    name: 'Prince Ashwin',
    role: 'Content Creator & Filmmaker',
    company: 'Ashwin Portfolio',
    image: '/testimonials/person7.jpg', // Placeholder
    text: 'Honestly, the portfolio turned out way better than I imagined. You understood exactly what I wanted and transformed it into something that feels uniquely me. The design is clean, modern, and super engaging. Every section flows perfectly, and it showcases my work in the best possible way. Couldn\'t have asked for a better portfolio. Huge thanks for bringing my vision to life. I really loved the design and the color palette which you have chosen and I love the quality of your work.',
    rating: 5,
    website: 'https://ashwin-portfolio-opal.vercel.app/',
    date: 'July 2025',
  },
  {
    id: 8,
    name: 'Mr. Arichandran',
    role: 'Director',
    company: 'CP Sports Academy',
    image: '/testimonials/person8.jpg', // Placeholder
    text: 'Working with Arun on our sports academy website was excellent. He created a user-friendly platform that helps us manage our students and showcase our programs effectively.',
    rating: 5,
    website: 'https://www.cpsports.in',
    date: 'June 2025',
  },
];

const TestimonialCard = ({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.3, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      className={`terminal-window ${!isActive ? 'pointer-events-none' : ''}`}
    >
      <div className="p-8 md:p-12">
        {/* Quote Icon */}
        <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary mb-4 opacity-50" />

        {/* Testimonial Text */}
        <p className="font-terminal text-sm md:text-base text-foreground mb-6 leading-relaxed">
          "{testimonial.text}"
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 border-t border-border pt-6">
          <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center font-pixel text-primary">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <h4 className="font-pixel text-sm text-primary">{testimonial.name}</h4>
            <p className="font-terminal text-xs text-muted-foreground">{testimonial.role}</p>
            <p className="font-terminal text-xs text-muted-foreground">{testimonial.company}</p>
          </div>
          <a
            href={testimonial.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Visit ${testimonial.company} website`}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Date */}
        <p className="font-terminal text-xs text-muted-foreground mt-4 text-right">
          {testimonial.date}
        </p>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
            {'// CLIENT_TESTIMONIALS'}
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        {/* Terminal command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="font-terminal text-sm text-muted-foreground mb-8"
        >
          <span className="text-primary">$</span> cat testimonials/{currentIndex + 1}_of_{testimonials.length}.txt
          <span className="typing-cursor" />
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="retro-btn px-4 py-2 flex items-center gap-2 font-terminal text-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
              PREV
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  } transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="retro-btn px-4 py-2 flex items-center gap-2 font-terminal text-sm"
              aria-label="Next testimonial"
            >
              NEXT
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          <div className="text-center p-4 border border-border bg-card/30">
            <p className="font-pixel text-2xl md:text-3xl text-primary">{testimonials.length}</p>
            <p className="font-terminal text-xs text-muted-foreground mt-1">Happy Clients</p>
          </div>
          <div className="text-center p-4 border border-border bg-card/30">
            <p className="font-pixel text-2xl md:text-3xl text-primary">5.0</p>
            <p className="font-terminal text-xs text-muted-foreground mt-1">Average Rating</p>
          </div>
          <div className="text-center p-4 border border-border bg-card/30">
            <p className="font-pixel text-2xl md:text-3xl text-primary">100%</p>
            <p className="font-terminal text-xs text-muted-foreground mt-1">Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

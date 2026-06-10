import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Clock, CheckCircle, Phone, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );

        setSubmitted(true);
        toast.success('Message transmitted successfully!');

        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 relative bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="font-pixel text-base md:text-xl text-primary text-glow">
            {'// ESTABLISH_CONTACT'}
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="terminal-window mb-8">
              <div className="pt-12 p-8 md:p-12 font-terminal">
                <div className="text-primary mb-4 text-sm">$ cat contact_info.txt</div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-muted-foreground">EMAIL:</span>
                    <a href="mailto:shankar72ind@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      shankar72ind@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-muted-foreground">PHONE:</span>
                    <a href="tel:+918438996701" className="text-foreground hover:text-primary transition-colors">
                      +91 8438996701
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-muted-foreground">LOCATION:</span>
                    <span className="text-foreground">Chennai, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-muted-foreground">TIMEZONE:</span>
                    <span className="text-foreground">IST (UTC+5:30)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="font-terminal text-muted-foreground text-sm space-y-2">
              <p>
                <span className="text-primary mr-2">{'>'}</span>
                Got a project in mind?
              </p>
              <p>
                <span className="text-primary mr-2">{'>'}</span>
                I'll respond within 24 hours.
              </p>
              <p>
                <span className="text-primary mr-2">{'>'}</span>
                Let's create something amazing!
              </p>
            </div>

            {/* ASCII decoration */}
            <pre className="mt-8 font-terminal text-[8px] md:text-xs text-primary/20 hidden md:block">
              {`     ___________
    |  _______  |
    | |       | |
    | | READY | |
    | |_______| |
    |___________|
    /           \\
   /  [ SEND ]   \\
  /_______________\\`}
            </pre>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="terminal-window">
              <div className="pt-12 p-8 md:p-12">
                <div className="font-terminal text-primary mb-6 text-sm">
                  {'>'} TRANSMISSION_FORM
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
                    <p className="font-terminal text-primary text-glow text-base md:text-lg">
                      MESSAGE TRANSMITTED!
                    </p>
                    <p className="font-terminal text-muted-foreground text-sm mt-2">
                      Response ETA: 24 hours
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <label className="block font-terminal text-xs md:text-sm text-muted-foreground mb-2">
                        NAME_ID:
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-muted border ${errors.name ? 'border-red-500' : 'border-border'} focus:border-primary px-6 py-5 font-terminal text-foreground text-sm outline-none transition-colors`}
                        placeholder="Enter your name..."
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-terminal flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-terminal text-xs md:text-sm text-muted-foreground mb-2">
                        EMAIL_ADDRESS:
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-muted border ${errors.email ? 'border-red-500' : 'border-border'} focus:border-primary px-6 py-5 font-terminal text-foreground text-sm outline-none transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-terminal flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-terminal text-xs md:text-sm text-muted-foreground mb-2">
                        MESSAGE_BODY:
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full bg-muted border ${errors.message ? 'border-red-500' : 'border-border'} focus:border-primary px-6 py-5 font-terminal text-foreground text-sm outline-none transition-colors resize-none`}
                        placeholder="Type your message..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500 font-terminal flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="retro-btn w-full flex items-center justify-center gap-3 font-terminal text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent animate-spin" />
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          SEND_MESSAGE
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

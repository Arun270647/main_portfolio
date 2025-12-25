import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Message transmitted successfully!');
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative bg-card/30" ref={ref}>
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
              <div className="pt-10 p-4 md:p-6 font-terminal">
                <div className="text-primary mb-4 text-sm">$ cat contact_info.txt</div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    <span className="text-muted-foreground">EMAIL:</span>
                    <a href="mailto:hello@arunvignesh.one" className="text-foreground hover:text-primary transition-colors">
                      hello@arunvignesh.one
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
            <form onSubmit={handleSubmit} className="terminal-window">
              <div className="pt-10 p-4 md:p-6">
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
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-muted border border-border focus:border-primary px-4 py-3 font-terminal text-foreground text-sm outline-none transition-colors"
                        placeholder="Enter your name..."
                      />
                    </div>

                    <div>
                      <label className="block font-terminal text-xs md:text-sm text-muted-foreground mb-2">
                        EMAIL_ADDRESS:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-muted border border-border focus:border-primary px-4 py-3 font-terminal text-foreground text-sm outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block font-terminal text-xs md:text-sm text-muted-foreground mb-2">
                        MESSAGE_BODY:
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-muted border border-border focus:border-primary px-4 py-3 font-terminal text-foreground text-sm outline-none transition-colors resize-none"
                        placeholder="Type your message..."
                      />
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

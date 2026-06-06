import { useState } from "react";
import user_info from "../../data/user_info.js";
import { Mail, MapPin, Linkedin, Github, Twitter, Facebook, Send, CheckCircle } from "lucide-react";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Remote Job Opportunity",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({
        name: "",
        email: "",
        subject: "Remote Job Opportunity",
        budget: "",
        message: ""
      });
      // Clear success banner after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="lg:py-24 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct Connections */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold mb-6">
                <Mail size={12} />
                Get In Touch
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
                {user_info.contact.title}
              </h2>
              
              <p className="mt-6 text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                {user_info.contact.description}
              </p>

              {/* Direct Details */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <Mail size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <a href={`mailto:${user_info.main.email}`} className="text-sm font-semibold hover:underline">
                    {user_info.main.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300">
                  <MapPin size={16} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm font-medium">
                    {user_info.main.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Socials Connection Row */}
            <div className="mt-12 lg:mt-0">
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-zinc-400 mb-4">
                Follow My Developments
              </h4>
              <div className="flex flex-wrap gap-3">
                {user_info.socials.linkedin && (
                  <a
                    href={user_info.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                {user_info.socials.github && (
                  <a
                    href={user_info.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                )}
                {user_info.socials.twitter && (
                  <a
                    href={user_info.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                {user_info.socials.facebook && (
                  <a
                    href={user_info.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-850 border border-zinc-200/50 dark:border-zinc-800/50 text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
                    aria-label="Facebook Profile"
                  >
                    <Facebook size={18} />
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm relative">
              {isSent && (
                <div className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 z-20 flex flex-col items-center justify-center p-6 text-center rounded-2xl animate-fade-in">
                  <CheckCircle size={48} className="text-emerald-500 mb-4" />
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    Message Sent Successfully!
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-light">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-950 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-950 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      placeholder="e.g. jane@company.com"
                    />
                  </div>
                </div>

                {/* Inquiry Type Dropdown */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  >
                    <option value="Remote Job Opportunity">Remote Job Opportunity / Contract Role</option>
                    <option value="Freelance Project">Freelance App Development</option>
                    <option value="Consultation">Technical Strategy & Architecture Consultation</option>
                    <option value="General Query">General Inquiry</option>
                  </select>
                </div>

                {/* Conditional Budget Dropdown */}
                {formState.subject === "Freelance Project" && (
                  <div className="animate-fade-in">
                    <label htmlFor="budget" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                      Estimated Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-950 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    >
                      <option value="">Select a range</option>
                      <option value="<$3k">Under $3,000</option>
                      <option value="$3k-$8k">$3,000 - $8,000</option>
                      <option value="$8k-$20k">$8,000 - $20,000</option>
                      <option value=">$20k">Over $20,000</option>
                    </select>
                  </div>
                )}

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-2">
                    Describe Your Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-950 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    placeholder="Describe the scope, timeline, and expectations..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-400 transition-colors shadow-md shadow-indigo-600/20 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

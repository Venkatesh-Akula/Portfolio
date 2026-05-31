import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'venkatesh.akula18@gmail.com',
      href: 'mailto:venkatesh.akula18@gmail.com',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'India',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/venkatesh',
      href: '#',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/venkatesh',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
          <p className="text-gray-custom mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="glass rounded-2xl p-6 hover:glow transition-all duration-500">
                  <span className="text-2xl mb-3 block">{info.icon}</span>
                  <p className="text-xs text-gray-custom mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-white hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{info.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <p className="text-sm text-gray-custom">Follow me:</p>
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-custom hover:text-white hover:border-primary/40 transition-all duration-300 group"
                  title={social}
                >
                  <span className="text-sm">{social === 'GitHub' ? '🐙' : social === 'LinkedIn' ? '💼' : '🐦'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-custom mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-custom/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-custom mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-custom/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-custom mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-custom/50 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-strong"
                >
                  Send Message ✨
                </button>

                {submitted && (
                  <p className="text-center text-sm text-secondary animate-fade-in">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
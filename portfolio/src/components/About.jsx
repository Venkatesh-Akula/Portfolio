const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Who <span className="text-gradient">I Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-accent rounded-3xl -rotate-3 opacity-20" />
            <div className="relative w-full h-full glass rounded-3xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gradient mb-4">VA</div>
                  <p className="text-gray-custom text-sm">Gen AI Architect</p>
                  <p className="text-gray-custom text-xs mt-1">E-Learning Consultant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Gen AI Architect & E-Learning Consultant with 12 years of expertise
            </h3>
            <p className="text-gray-custom leading-relaxed mb-6">
              I'm a seasoned Gen AI Architect and Machine Learning Engineer with 12+ years of experience 
              designing and deploying intelligent systems at scale. I specialize in generative AI, 
              large language models, computer vision, and production ML pipelines. As an e-learning consultant, 
              I also architect cutting-edge educational platforms powered by AI-driven personalization.
            </p>
            <p className="text-gray-custom leading-relaxed mb-8">
              I help organizations leverage AI to transform their businesses, whether it's building custom 
              LLM applications, creating adaptive learning systems, or deploying enterprise-grade ML 
              infrastructure. I'm passionate about making AI accessible and impactful through consulting, 
              content creation, and mentorship.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Name', value: 'Venkatesh Akula' },
                { label: 'Email', value: 'venkatesh.akula18@gmail.com' },
                { label: 'Location', value: 'India' },
                { label: 'Availability', value: 'Consulting / Freelance' },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4">
                  <p className="text-xs text-gray-custom mb-1">{item.label}</p>
                  <p className="text-sm text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
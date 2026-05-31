const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs text-gray-custom tracking-wider uppercase">
                Available for consulting & freelance work
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 animate-slide-up">
              Hi, I'm{' '}
              <span className="text-gradient">
                Venkatesh
              </span>
              <br />
              <span className="text-white/80">Gen AI Architect</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-custom max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up stagger-2 leading-relaxed">
              AI/ML Engineer with 12+ years of experience architecting intelligent systems, 
              building production-grade machine learning pipelines, and delivering innovative 
              generative AI solutions that transform businesses.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up stagger-3">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-strong"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 glass glass-hover text-white font-medium rounded-full transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 animate-slide-up stagger-4">
              {[
                { number: '12+', label: 'Years Exp' },
                { number: '80+', label: 'AI Projects' },
                { number: '50+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</p>
                  <p className="text-xs sm:text-sm text-gray-custom mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Avatar/Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in stagger-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-float">
                <div className="w-full h-full rounded-full bg-darker flex items-center justify-center overflow-hidden">
                  <div className="text-7xl sm:text-8xl lg:text-9xl font-bold text-gradient opacity-80">
                    VA
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 animate-fade-in stagger-5">
                <p className="text-xs text-gray-custom">AI/ML</p>
                <p className="text-sm font-semibold text-white">Expert</p>
              </div>
              <div className="absolute -bottom-2 -left-4 glass rounded-xl px-4 py-2 animate-fade-in stagger-6">
                <p className="text-xs text-gray-custom">Gen AI</p>
                <p className="text-sm font-semibold text-white">Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
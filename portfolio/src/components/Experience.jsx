const Experience = () => {
  const experiences = [
    {
      role: 'Gen AI Architect & Consultant',
      company: 'Independent Consulting',
      period: '2022 - Present',
      description: 'Leading generative AI strategy and implementation for enterprises, building custom LLM applications, and providing e-learning consulting services.',
      achievements: [
        'Architected enterprise RAG systems serving 100k+ daily queries with 95% accuracy',
        'Built custom fine-tuned LLMs for domain-specific applications reducing costs by 60%',
        'Designed AI-powered adaptive learning platform serving 50k+ students globally',
        'Led AI transformation workshops for 10+ Fortune 500 companies',
      ],
      type: 'work',
    },
    {
      role: 'Senior AI/ML Engineer',
      company: 'TechLeap Innovations',
      period: '2019 - 2022',
      description: 'Led the ML engineering team in designing and deploying production-grade machine learning systems for enterprise clients.',
      achievements: [
        'Developed NLP pipeline processing 10M+ documents daily with 97% accuracy',
        'Architected MLOps infrastructure reducing model deployment time from weeks to hours',
        'Led team of 8 engineers delivering 15+ production ML models',
        'Implemented real-time fraud detection system saving $5M+ annually',
      ],
      type: 'work',
    },
    {
      role: 'Machine Learning Engineer',
      company: 'DataDriven Solutions',
      period: '2016 - 2019',
      description: 'Built end-to-end ML pipelines and deployed scalable AI solutions across multiple domains including e-learning and healthcare.',
      achievements: [
        'Created recommendation engine improving user engagement by 45%',
        'Built computer vision system for automated quality inspection with 99.2% accuracy',
        'Designed and deployed A/B testing framework for ML model evaluation',
        'Developed real-time dashboards monitoring model performance across 20+ models',
      ],
      type: 'work',
    },
    {
      role: 'Junior ML Engineer & Data Scientist',
      company: 'InnoTech Labs',
      period: '2013 - 2016',
      description: 'Started career applying machine learning to solve real-world business problems and building foundational AI infrastructure.',
      achievements: [
        'Developed predictive maintenance models reducing equipment downtime by 35%',
        'Built automated data pipeline reducing data processing time by 70%',
        'Created NLP-based sentiment analysis system for customer feedback',
        'Contributed to open-source ML libraries used by 5k+ developers',
      ],
      type: 'work',
    },
    {
      role: 'E-Learning Content Creator & Consultant',
      company: 'EduFuture Consulting',
      period: '2014 - Present',
      description: 'Providing e-learning strategy and content development consulting, building AI-powered educational platforms and adaptive learning systems.',
      achievements: [
        'Designed curriculum for AI/ML certification program with 10k+ enrolled students',
        'Built AI-powered assessment platform with personalized learning paths',
        'Created technical content reaching 500k+ learners across platforms',
        'Advised 15+ edtech startups on AI integration strategy',
      ],
      type: 'education',
    },
  ];

  return (
    <section id="experience" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          {experiences.map((exp, idx) => (
            <div
              key={`${exp.role}-${idx}`}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-darker border-2 border-secondary rounded-full -translate-x-1/2 mt-1.5 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass rounded-2xl p-6 hover:glow transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{exp.type === 'education' ? '🎓' : '💼'}</span>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      exp.type === 'education' 
                        ? 'text-accent bg-accent/10' 
                        : 'text-secondary bg-secondary/10'
                    }`}>
                      {exp.type === 'education' ? 'E-Learning' : 'Work'}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-custom mb-3">{exp.period}</p>

                  <p className="text-sm text-gray-custom mb-4 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-custom">
                        <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
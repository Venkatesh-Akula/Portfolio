const Skills = () => {
  const skillCategories = [
    {
      title: 'Generative AI & LLMs',
      icon: '🤖',
      skills: [
        { name: 'Large Language Models', level: 95 },
        { name: 'RAG / LangChain', level: 92 },
        { name: 'Prompt Engineering', level: 95 },
        { name: 'OpenAI / Claude APIs', level: 90 },
        { name: 'Fine-tuning / LoRA', level: 88 },
        { name: 'Vector Databases', level: 85 },
      ],
    },
    {
      title: 'Machine Learning',
      icon: '🧠',
      skills: [
        { name: 'TensorFlow / PyTorch', level: 92 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Computer Vision', level: 85 },
        { name: 'NLP / Transformers', level: 90 },
        { name: 'MLOps / MLflow', level: 85 },
        { name: 'Model Deployment', level: 88 },
      ],
    },
    {
      title: 'Data & Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL / NoSQL', level: 88 },
        { name: 'Apache Spark', level: 78 },
        { name: 'Docker / Kubernetes', level: 82 },
        { name: 'FastAPI / Flask', level: 90 },
        { name: 'Cloud (AWS/GCP/Azure)', level: 85 },
      ],
    },
    {
      title: 'Frontend & E-Learning',
      icon: '🎓',
      skills: [
        { name: 'React / Next.js', level: 80 },
        { name: 'JavaScript / TypeScript', level: 82 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'SCORM / xAPI', level: 75 },
        { name: 'LMS Integration', level: 78 },
        { name: 'Adaptive Learning Systems', level: 85 },
      ],
    },
    {
      title: 'AI Infrastructure',
      icon: '🛠️',
      skills: [
        { name: 'Git / CI-CD', level: 88 },
        { name: 'Airflow / Pipelines', level: 82 },
        { name: 'GPU / CUDA', level: 80 },
        { name: 'Monitoring / Logging', level: 78 },
        { name: 'Ray / Distributed Computing', level: 75 },
        { name: 'Model Registry', level: 80 },
      ],
    },
    {
      title: 'Consulting & Strategy',
      icon: '💼',
      skills: [
        { name: 'AI Strategy', level: 90 },
        { name: 'Technical Architecture', level: 92 },
        { name: 'E-Learning Design', level: 85 },
        { name: 'Team Leadership', level: 88 },
        { name: 'Stakeholder Mgmt', level: 85 },
        { name: 'Content Creation', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass rounded-2xl p-6 lg:p-8 hover:glow transition-all duration-500"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-custom">{skill.name}</span>
                      <span className="text-xs text-primary font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
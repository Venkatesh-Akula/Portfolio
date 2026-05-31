import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with real-time inventory, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      image: '🛒',
      color: 'from-primary to-secondary',
      link: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat app with AI-powered responses, file sharing, and video calls.',
      tags: ['Next.js', 'Python', 'WebSocket', 'OpenAI'],
      category: 'ai',
      image: '🤖',
      color: 'from-secondary to-accent',
      link: '#',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Kanban-style project management tool with drag-drop, team collaboration and analytics.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      category: 'frontend',
      image: '📋',
      color: 'from-primary to-accent',
      link: '#',
    },
    {
      title: 'Weather Analytics App',
      description: 'Interactive weather dashboard with 7-day forecasts, historical data and beautiful charts.',
      tags: ['React', 'D3.js', 'API', 'CSS'],
      category: 'frontend',
      image: '🌤️',
      color: 'from-secondary to-primary',
      link: '#',
    },
    {
      title: 'REST API Microservices',
      description: 'Scalable microservices architecture with authentication, rate limiting and caching.',
      tags: ['Node.js', 'Docker', 'PostgreSQL', 'Redis'],
      category: 'backend',
      image: '🔧',
      color: 'from-accent to-primary',
      link: '#',
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS for developers with markdown support, image optimization and SEO.',
      tags: ['Next.js', 'GraphQL', 'MDX', 'Vercel'],
      category: 'fullstack',
      image: '📝',
      color: 'from-accent to-secondary',
      link: '#',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI/ML' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-5 py-2 text-sm rounded-full transition-all duration-300 ${
                filter === cat.key
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20'
                  : 'glass text-gray-custom hover:text-white hover:border-primary/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project, idx) => (
            <a
              key={project.title}
              href={project.link}
              className="group glass rounded-2xl overflow-hidden hover:glow transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image area */}
              <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}>
                <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-custom mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
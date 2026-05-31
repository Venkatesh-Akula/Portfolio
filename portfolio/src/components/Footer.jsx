const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              <span className="text-gradient">Portfolio</span>
            </span>
            <span className="text-xs text-gray-custom">© {currentYear}</span>
          </div>

          <p className="text-xs text-gray-custom text-center">
            Built with{' '}
            <span className="text-primary">React</span>
            {' '}&{' '}
            <span className="text-secondary">Tailwind CSS</span>
            {' '}— All rights reserved
          </p>

          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-custom hover:text-white transition-colors text-sm">Privacy</a>
            <span className="text-gray-custom/30">·</span>
            <a href="#" className="text-gray-custom hover:text-white transition-colors text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
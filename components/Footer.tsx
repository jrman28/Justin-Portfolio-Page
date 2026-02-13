import { MouseEvent } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('mailto:')) return;
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#13141C] py-12 mt-12 md:mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          <div>
            <p className="text-xs text-gray-400 mb-2">© {currentYear} Justin Ragland</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Building better software, one commit at a time.
            </p>
          </div>
          <div className="flex flex-col space-y-4 md:items-end">
            <div className="flex space-x-6">
              <a 
                href="https://github.com/jrman28" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors" 
                aria-label="Github"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="https://x.com/BTConnector_" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-colors" 
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/justin-ragland-0b924125" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-blue-700 transition-colors" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
            <div className="flex space-x-6 text-xs font-medium text-gray-500 dark:text-gray-400 pt-1">
              <a 
                href="#notes" 
                onClick={(e) => handleNavClick(e, '#notes')}
                className="hover:text-primary dark:hover:text-white transition-colors"
              >
                Notes
              </a>
              <a 
                href="mailto:hello@raglandlabs.com" 
                className="hover:text-primary dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
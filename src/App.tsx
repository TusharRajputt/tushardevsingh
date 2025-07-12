import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Tushar Dev Singh</h1>
          <h2 className="text-xl mb-6">Full Stack Developer</h2>
          <p className="text-lg mb-8 max-w-2xl">
            Passionate full-stack developer with expertise in building scalable web applications 
            and intuitive user interfaces. Specialized in modern JavaScript frameworks and cloud technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:tusharrajput4490@gmail.com" className="flex items-center gap-2 hover:text-blue-200">
              <Mail size={20} /> tusharrajput4490@gmail.com
            </a>
            <a href="tel:+919149718028" className="flex items-center gap-2 hover:text-blue-200">
              <Phone size={20} /> +91 9149718028
            </a>
            <a href="https://linkedin.com/in/tushar-dev-singh-09793923a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/TusharRajputt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200">
              <Github size={20} /> GitHub
            </a>
          </div>
          <div className="mt-8">
            <a 
              href="/Tushar_Dev_Singh_Resume.pdf" 
              download 
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-gray-600 mb-6">
              I am a dedicated Full Stack Developer with a strong foundation in both front-end and back-end development.
              My passion lies in creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-600">
              With a keen eye for detail and a commitment to writing clean, maintainable code, I strive to deliver
              high-quality solutions that exceed client expectations. I am constantly learning and staying up-to-date
              with the latest technologies and best practices in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Admin Dashboard Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Admin Dashboard Interface</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive admin dashboard featuring user management, analytics, and system monitoring capabilities.
                </p>
                <div className="flex gap-4">
                  <a href="https://sde-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Task Management Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Task Management Application</h3>
                <p className="text-gray-600 mb-4">
                  A full-featured task management system with real-time updates, task prioritization, and team collaboration features.
                  Username: demo@example.com 
                  Password: password
                </p>
                <div className="flex gap-4">
                  <a href="https://to-do-task-app-five.vercel.app/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>React.js / Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML5 / CSS3</li>
                <li>Tailwind CSS / Material-UI</li>
                <li>Redux / Context API</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js / Express.js</li>
                <li>MongoDB / PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>Authentication & Authorization</li>
                <li>Server-side Security</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS / Vercel</li>
                <li>Jest / Testing Library</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Tushar Dev Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

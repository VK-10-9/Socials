import React from 'react';
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  Rocket,
  Code,
  Gamepad2,
  Users,
} from 'lucide-react';
import { ProfileSection } from './components/ProfileSection';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SocialLinks } from './components/SocialLinks';

function App() {
  const projects = [
    {
      title: 'Event Union',
      description: 'Connecting Global Minds to a Single Place.',
      icon: <Users className="w-5 h-5" />,
      url: 'https://eventunion.netlify.app/',
    },
{
      title: 'Vidya Vriksh',
      description: 'Revolutionary online learning platform',
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'Lakshar',
      description: 'Sports innovation initiative',
      icon: <Gamepad2 className="w-5 h-5" />,
    },
  ];

  const links = [
    {
      id: 'github',
      title: 'GitHub',
      url: 'https://github.com/VK-10-9',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:bg-zinc-800',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vishwanath-koliwad-02514631b/',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-900',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: 'https://x.com/vishwanath_10_9',
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:bg-blue-950',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      url: 'https://www.instagram.com/vishwanath_k_10.9/',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:bg-purple-900',
    },
    {
      id: 'email',
      title: 'Email Me',
      url: 'mailto:vishwanathkoliwad@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:bg-indigo-900',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
          <aside className="lg:sticky lg:top-8">
            <ProfileSection
              name="Vishwanath K"
              title="Co-Founder | Tech Innovator | Visionary Creator"
              description="As a second-semester Computer Science and Engineering student, I am deeply passionate about integrating technology with creativity. Co-founding Event Union has allowed me to cultivate a dynamic global community for event enthusiasts, fostering engagement and collaboration among members. My journey has been enriched by hands-on experiences in software development, where I've contributed to projects that blend user-centric design with robust technical solutions. I am committed to continuous learning and am eager to collaborate on innovative projects that drive meaningful impact in the tech industry."
              imageUrl="https://i.ibb.co/tmBQPYc/profile-pic.jpg"
            />
          </aside>
          
          <div className="space-y-12">
            <section aria-label="Projects">
              <h2 className="sr-only">Projects</h2>
              <ProjectsGrid projects={projects} />
            </section>
            
            <section aria-label="Social Links">
              <h2 className="sr-only">Social Links</h2>
              <SocialLinks links={links} />
            </section>
            
            <footer className="text-center text-gray-400">
              <p className="text-sm">
                © {new Date().getFullYear()} Vishwanath K. Let's connect and create something extraordinary!
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

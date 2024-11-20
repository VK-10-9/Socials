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
      title: 'Vidya Vriksh',
      description: 'Revolutionary online learning platform',
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: 'Event Union',
      description: 'Connecting Global Minds to a Single Place.',
      icon: <Users className="w-5 h-5" />,
      url: 'https://eventunion.in',
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
      url: '#',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-8">
            <ProfileSection
              name="Vishwanath K"
              title="Co-Founder | Tech Innovator | Visionary Creator"
              description="Semester 1 Computer Science and Engineering student, blending technology and creativity to build innovative solutions. Co-Founder of Event Union, helping create the world's largest community for global event enthusiasts."
              imageUrl="https://i.ibb.co/ctdykGT/your-image.jpg"
            />
          </div>
          
          <div className="space-y-12">
            <ProjectsGrid projects={projects} />
            <SocialLinks links={links} />
            
            <footer className="text-center text-gray-400">
              <p className="text-sm">
                © {new Date().getFullYear()} Vishwanath K. Let's connect and create something extraordinary!
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
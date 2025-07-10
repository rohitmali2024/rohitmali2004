
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Cloud, Globe, Server, Code, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FarmWise',
      description: 'Full-stack agro-platform for farmers, experts & admins with AI assistance and community features. Built with MERN stack.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration'],
      icon: Globe,
      github: 'https://github.com/malirohit',
      demo: '#',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'E-Commerce Website',
      description: 'Online store with secure payments using Stripe integration and JWT authentication for user management.',
      tech: ['MERN Stack', 'Stripe', 'JWT', 'Payment Gateway'],
      icon: Database,
      github: 'https://github.com/malirohit',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Cloud-Native Monitoring App',
      description: 'CI/CD enabled application deployed on Kubernetes for real-time system monitoring with Prometheus and Grafana.',
      tech: ['Kubernetes', 'Prometheus', 'Grafana', 'CI/CD', 'Docker'],
      icon: Cloud,
      github: 'https://github.com/malirohit',
      demo: '#',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Dockerized User Management App',
      description: 'Containerized backend using Docker, Express, MongoDB for scalable user operations and management.',
      tech: ['Docker', 'Express.js', 'MongoDB', 'Containerization'],
      icon: Server,
      github: 'https://github.com/malirohit',
      demo: '#',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Ansible-Based EC2 Automation',
      description: 'SSH & file synchronization automation using Ansible between AWS EC2 instances for efficient deployment.',
      tech: ['Ansible', 'AWS EC2', 'SSH', 'Automation', 'DevOps'],
      icon: Cpu,
      github: 'https://github.com/malirohit',
      demo: '#',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'MyGemini',
      description: 'Google Gemini UI/UX clone built with React, featuring modern design patterns and responsive layout.',
      tech: ['React.js', 'UI/UX', 'Modern Design', 'Responsive'],
      icon: Code,
      github: 'https://github.com/malirohit',
      demo: '#',
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects spanning full-stack development, cloud computing, and DevOps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
            onClick={() => window.open('https://github.com/malirohit', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

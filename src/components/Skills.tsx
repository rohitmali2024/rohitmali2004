
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Server, Globe, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS', 'ShadCN'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MongoDB', 'MySQL'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: ['Docker', 'Ansible', 'Jenkins', 'AWS Cloud Practioner', 'AWS Solution Architect'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Core Concepts',
      icon: Terminal,
      skills: ['DSA', 'DBMS', 'Operating Systems', 'Computer Networks'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const codingPlatforms = [
    { name: 'GeeksforGeeks', username: 'rohiitttt_19', problems: '90+' },
    { name: 'LeetCode', username: 'rohitmali28', problems: '380+' },
    { name: 'CodeChef', username: 'rohiitttt_19', problems: '400+' },
    { name: 'HackerRank', username: 'ritikmali1249', problems: '100+' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive skillset spanning full-stack development, cloud technologies, and system design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-white">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-white mb-4">
              Coding Practice Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {codingPlatforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                    <p className="text-2xl font-bold text-blue-400 mb-1">{platform.problems}</p>
                    <p className="text-gray-400 text-sm">@{platform.username}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30 inline-block">
                <h3 className="text-xl font-bold text-white mb-2">Total Problems Solved</h3>
                <p className="text-4xl font-bold text-green-400">500+</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;

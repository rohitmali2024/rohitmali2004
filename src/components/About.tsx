
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, Phone, Mail, Trophy } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'CGPA', value: '8.06/10', icon: GraduationCap },
    { label: 'Problems Solved', value: '300+', icon: Trophy },
    { label: 'Projects', value: '6+', icon: Trophy },
    { label: 'Certifications', value: '2+', icon: Trophy }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate developer with strong foundation in software development and cloud technologies
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">+91 7249721249</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">malirohitpandurang@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Pune, Maharashtra</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Graduating 2026</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-blue-400">B.Tech Information Technology</h4>
                    <p className="text-gray-300">Pimpri Chinchwad College of Engineering, Pune</p>
                    <p className="text-gray-400">2022 - 2026 | CGPA: 8.06/10</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-blue-400">HSC</h4>
                    <p className="text-gray-300">Ligade Patil Junior College, Karad</p>
                    <p className="text-gray-400">84.84% | MHT-CET: 98.39 percentile</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-white">About</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate B.Tech Information Technology student with a strong foundation in 
                  full-stack development, cloud technologies, and DevOps practices. With over 300 
                  DSA problems solved and multiple certifications, I'm constantly learning and 
                  building innovative solutions. My experience spans from leading web development 
                  teams to contributing to social impact initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

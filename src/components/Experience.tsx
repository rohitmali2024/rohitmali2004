
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Rocket, Award, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Development Lead',
      organization: 'Anantam Rocketry and Space Research Team',
      duration: '2023 - Present',
      type: 'Leadership',
      description: 'Lead for designing & maintaining all web development projects. Responsible for team coordination and project delivery.',
      responsibilities: [
        'Leading web development initiatives',
        'Team coordination and management',
        'Project architecture and design',
        'Technology stack decisions'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Social Media Team Member',
      organization: 'IEEE',
      duration: '2023 - Present',
      type: 'Social Impact',
      description: 'Advocating STEAM education and female empowerment in rural areas through digital initiatives.',
      responsibilities: [
        'STEAM education advocacy',
        'Female empowerment initiatives',
        'Rural area outreach programs',
        'Content creation and management'
      ],
      icon: Users,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Event Manager',
      organization: 'Project Rise (Aakaar Charitable Trust)',
      duration: '2022 - 2023',
      type: 'Management',
      description: 'Led skit and video competitions to raise awareness on education among underprivileged children.',
      responsibilities: [
        'Event planning and execution',
        'Competition management',
        'Educational awareness campaigns',
        'Community engagement'
      ],
      icon: Award,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      status: 'Completed'
    },
    {
      name: 'DevOps – Planning To Production',
      issuer: 'GeeksforGeeks',
      year: '2024',
      status: 'In Progress'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leadership roles, social impact initiatives, and professional certifications
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
              Experience & Leadership
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                          <exp.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white">{exp.title}</CardTitle>
                          <p className="text-blue-400 font-medium">{exp.organization}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-gray-400 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-purple-400" />
              Certifications & Courses
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                        <p className="text-blue-400 font-medium">{cert.issuer}</p>
                      </div>
                      <Badge 
                        variant={cert.status === 'Completed' ? 'default' : 'secondary'}
                        className={cert.status === 'Completed' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-yellow-600 text-white'
                        }
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.year}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm mt-8">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Non-Technical Skills</h4>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {['Leadership', 'Team Management', 'Event Coordination', 'Social Awareness', 'Public Speaking'].map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

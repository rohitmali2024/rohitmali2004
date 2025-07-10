
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'malirohitpandurang@gmail.com',
      href: 'mailto:malirohitpandurang@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7249721249',
      href: 'tel:+917249721249',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      username: 'malirohit',
      href: 'https://github.com/malirohit',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: 'rohit-mali',
      href: 'https://linkedin.com/in/rohit-mali',
      color: 'hover:text-blue-400'
    },
    {
      icon: ExternalLink,
      name: 'GeeksforGeeks',
      username: 'rohiitttt_19',
      href: 'https://auth.geeksforgeeks.org/user/rohiitttt_19',
      color: 'hover:text-green-400'
    },
    {
      icon: ExternalLink,
      name: 'LeetCode',
      username: 'rohitmali28',
      href: 'https://leetcode.com/rohitmali28',
      color: 'hover:text-yellow-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a chat about technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Social Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all group"
                    >
                      <social.icon className={`w-5 h-5 text-gray-400 ${social.color} transition-colors`} />
                      <div>
                        <p className="text-white font-medium text-sm">{social.name}</p>
                        <p className="text-gray-400 text-xs">@{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

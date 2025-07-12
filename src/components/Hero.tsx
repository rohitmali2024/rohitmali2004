
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, ChevronDown, Download, ExternalLink } from 'lucide-react';

// interface HeroProps {
//   scrollToSection: (sectionId: string) => void;
// }

// const Hero = ({ scrollToSection }: HeroProps) => {
//   return (
//     <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
//       <div className="container mx-auto px-4 text-center">
//         <div className="animate-fade-in">
          
//           <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
//             <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold">
//               RM
//             </div>
//           </div>
          
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Rohit Pandurang Mali
//           </h1>
          
//           <p className="text-xl md:text-2xl text-gray-300 mb-2">
//             B.Tech Information Technology Student
//           </p>
          
//           <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
//             Passionate developer specializing in Full-Stack Development, Cloud Technologies, and DevOps. 
//             Currently pursuing B.Tech IT at PCCoE Pune with 8.06 CGPA.
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             <Button 
//               onClick={() => scrollToSection('projects')}
//               className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
//             >
//               View Projects
//             </Button>
//             <Button 
//               variant="outline" 
//               className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
//               onClick={() => scrollToSection('contact')}
//             >
//               Contact Me
//             </Button>
//           </div>
          
//           <div className="flex justify-center space-x-6 mb-12">
//             <a href="https://github.com/malirohit/" target="_blank" rel="noopener noreferrer" 
//                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
//               <Github className="w-8 h-8" />
//             </a>
//             <a href="https://www.linkedin.com/in/rohit-mali-6b4706255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
//                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
//               <Linkedin className="w-8 h-8" />
//             </a>
//             <a href="mailto:malirohitpandurang@gmail.com"
//                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
//               <Mail className="w-8 h-8" />
//             </a>
//           </div>
          
//           <div className="animate-bounce">
//             <button 
//               onClick={() => scrollToSection('about')}
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               <ChevronDown className="w-8 h-8 mx-auto" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in flex flex-col items-center">

          <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl sm:text-6xl font-bold">
              RM
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rohit Pandurang Mali
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-1 sm:mb-2">
            B.Tech Information Technology Student
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto px-2">
            Passionate developer specializing in Full-Stack Development, Cloud Technologies, and DevOps. 
            Currently pursuing B.Tech IT at PCCoE Pune with 8.06 CGPA.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6 sm:mb-8">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-sm sm:text-base"
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 text-sm sm:text-base"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-8 sm:mb-12">
            <a href="https://github.com/malirohit/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
              <Github className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
            </a>
            <a href="https://www.linkedin.com/in/rohit-mali-6b4706255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
              <Linkedin className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
            </a>
            <a href="mailto:malirohitpandurang@gmail.com"
               className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800">
              <Mail className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
            </a>
          </div>

          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ChevronDown className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


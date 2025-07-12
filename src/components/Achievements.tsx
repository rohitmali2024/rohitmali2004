
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Trophy, Award, Star, Target, Users, Medal } from 'lucide-react';

// const Achievements = () => {
//   const achievements = [
//     {
//       title: '500+ DSA Problems Solved',
//       description: 'Solved problems across multiple platforms including GeeksforGeeks, LeetCode, CodeChef, and HackerRank',
//       icon: Target,
//       color: 'from-green-500 to-emerald-600',
//       category: 'Coding'
//     },
//     {
//       title: 'IEEE Pune Section Outstanding Performance Award',
//       description: 'Recognized for exceptional contribution and performance in IEEE Pune Section activities',
//       icon: Award,
//       color: 'from-blue-500 to-indigo-600',
//       category: 'Recognition'
//     },
//     {
//       title: '2nd Place in Project Rise Skit Competition',
//       description: 'Secured second position in skit competition organized by Project Rise for educational awareness',
//       icon: Medal,
//       color: 'from-purple-500 to-pink-600',
//       category: 'Competition'
//     },
    
//     {
//       title: 'Kabaddi Division Captain',
//       description: 'Led team to intercollege semifinals twice as division captain, demonstrating leadership in sports',
//       icon: Users,
//       color: 'from-orange-500 to-red-600',
//       category: 'Sports Leadership'
//     }
//   ];

//   const stats = [
//     { label: 'GeeksforGeeks', value: '90+', platform: 'rohiitttt_19' },
//     { label: 'LeetCode', value: '380+', platform: 'rohitmali28' },
//     { label: 'CodeChef', value: '400+', platform: 'rohiitttt_19' },
//     { label: 'HackerRank', value: '100+', platform: 'ritikmali1249' }
//   ];

//   return (
//     <section id="achievements" className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Achievements & Recognition
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Recognition for technical excellence, leadership, and social impact
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           {achievements.map((achievement, index) => (
//             <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
//               <CardHeader className="pb-4">
//                 <div className="flex items-start space-x-4">
//                   <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
//                     <achievement.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-start justify-between mb-2">
//                       <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
//                         {achievement.title}
//                       </CardTitle>
//                       <Badge variant="secondary" className="bg-gray-700 text-gray-300 ml-2">
//                         {achievement.category}
//                       </Badge>
//                     </div>
//                     <p className="text-gray-300 text-sm leading-relaxed">
//                       {achievement.description}
//                     </p>
//                   </div>
//                 </div>
//               </CardHeader>
//             </Card>
//           ))}
//         </div>
        
//         <Card className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600 backdrop-blur-sm">
//           <CardHeader>
//             <CardTitle className="text-center text-2xl text-white mb-6 flex items-center justify-center">
//               <Trophy className="w-6 h-6 mr-3 text-yellow-400" />
//               Coding Platform Statistics
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all">
//                     <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
//                     <p className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</p>
//                     <p className="text-gray-400 text-sm">@{stat.platform}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="text-center">
//               <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-8 border border-green-500/30 inline-block">
//                 <Trophy className="w-12 h-12 text-green-400 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-white mb-2">Total Problems Solved</h3>
//                 <p className="text-5xl font-bold text-green-400 mb-2">500+</p>
//                 <p className="text-gray-400">Across all platforms</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Achievements;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target, Users, Medal } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '500+ DSA Problems Solved',
      description: 'Solved problems across multiple platforms including GeeksforGeeks, LeetCode, CodeChef, and HackerRank',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      category: 'Coding'
    },
    {
      title: 'IEEE Pune Section Outstanding Performance Award',
      description: 'Recognized for exceptional contribution and performance in IEEE Pune Section activities',
      icon: Award,
      color: 'from-blue-500 to-indigo-600',
      category: 'Recognition'
    },
    {
      title: '2nd Place in Project Rise Skit Competition',
      description: 'Secured second position in skit competition organized by Project Rise for educational awareness',
      icon: Medal,
      color: 'from-purple-500 to-pink-600',
      category: 'Competition'
    },
    {
      title: 'Kabaddi Division Captain',
      description: 'Led team to intercollege semifinals twice as division captain, demonstrating leadership in sports',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      category: 'Sports Leadership'
    }
  ];

  const stats = [
    { label: 'GeeksforGeeks', value: '90+', platform: 'rohiitttt_19' },
    { label: 'LeetCode', value: '380+', platform: 'rohitmali28' },
    { label: 'CodeChef', value: '400+', platform: 'rohiitttt_19' },
    { label: 'HackerRank', value: '100+', platform: 'ritikmali1249' }
  ];

  return (
    <section id="achievements" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Recognition for technical excellence, leadership, and social impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} flex-shrink-0`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <CardTitle className="text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs sm:text-sm">
                        {achievement.category}
                      </Badge>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-xl sm:text-2xl text-white mb-4 sm:mb-6 flex items-center justify-center">
              <Trophy className="w-5 sm:w-6 h-5 sm:h-6 mr-2 sm:mr-3 text-yellow-400" />
              Coding Platform Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 sm:p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{stat.label}</h3>
                    <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{stat.value}</p>
                    <p className="text-gray-400 text-sm">@{stat.platform}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 sm:p-8 border border-green-500/30 inline-block w-full sm:w-auto">
                <Trophy className="w-10 sm:w-12 h-10 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Total Problems Solved</h3>
                <p className="text-4xl sm:text-5xl font-bold text-green-400 mb-1 sm:mb-2">500+</p>
                <p className="text-gray-400 text-sm">Across all platforms</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Achievements;

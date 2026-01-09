import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Column: Circular Profile Image */}
          <div className="relative shrink-0">
             {/* Decorative subtle shadow/offset circle */}
             <div className="absolute inset-0 bg-forest-200 rounded-full blur-sm transform translate-x-4 translate-y-4"></div>
             <img 
               src="https://picsum.photos/seed/scientist/800/800" 
               alt="Scientist Profile" 
               className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-full shadow-2xl border-4 border-white grayscale-[10%]"
             />
          </div>

          {/* Right Column: Content */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-slate-900 mb-6 tracking-tight">
              Hello
            </h1>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              A Bit About Me
            </h2>
            
            <div className="prose prose-slate text-slate-600 mb-10 mx-auto lg:mx-0 leading-relaxed">
              <p className="mb-4">
                Science wasn't just a subject for me; it was a lens through which the world suddenly made sense. 
                My journey began not in a high-tech lab, but in a backyard garden, wondering how a tiny seed 
                could hold the blueprint for a towering oak.
              </p>
              <p>
                SOLT5 is the culmination of that journey. It's built to bridge the gap between textbook theory 
                and the awe-inspiring reality of the living world.
              </p>
            </div>

            {/* Circular Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
               
               {/* Resume - Forest Green Accent */}
               <button className="w-32 h-32 rounded-full bg-forest-300 hover:bg-forest-400 text-forest-900 font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-4 border-white">
                 Resume
               </button>

               {/* Projects - Dark Slate */}
               <button className="w-32 h-32 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-4 border-white">
                 Projects
               </button>

               {/* Contact - Teal Accent */}
               <button className="w-32 h-32 rounded-full bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center border-4 border-white">
                 Contact
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';

const CareerMap: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-forest-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-forest-600 font-semibold tracking-wide uppercase text-sm mb-2">Future Pathways</h2>
          <h3 className="text-4xl font-bold text-slate-900">Career Roadmap</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Biology isn't just about medicine. Explore the diverse landscapes where life science meets professional impact.
          </p>
        </div>

        {/* Future Embedded Content Placeholder */}
        <div className="border-2 border-dashed border-slate-300 rounded-2xl h-96 flex items-center justify-center bg-slate-50/50">
          <p className="text-slate-400 font-medium text-lg italic">I am working on it</p>
        </div>

      </div>
    </section>
  );
};

export default CareerMap;
import React, { useState } from 'react';
import { ArrowLeft, Book, FileText, Download } from 'lucide-react';

interface StudyMaterialProps {
  onBack: () => void;
}

const chapters = Array.from({ length: 10 }, (_, i) => `Chapter ${i + 1}`);

const StudyMaterial: React.FC<StudyMaterialProps> = ({ onBack }) => {
  const [grade, setGrade] = useState<'11' | '12'>('11');

  // Dummy PDF handler
  const openPdf = (chapterName: string) => {
    // In a real app, this would be a real URL
    const dummyPdfUrl = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
    window.open(dummyPdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors"
          >
            <ArrowLeft className="h-6 w-6 text-slate-700" />
          </button>
          <h1 className="text-xl font-bold text-slate-900">CBSE Study Material</h1>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        
        {/* Class Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm inline-flex">
            <button
              onClick={() => setGrade('11')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                grade === '11' 
                  ? 'bg-forest-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Class 11th
            </button>
            <button
              onClick={() => setGrade('12')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                grade === '12' 
                  ? 'bg-forest-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              Class 12th
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
              <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-forest-700" />
              </div>
              <h3 className="font-bold text-lg mb-2">Biology {grade === '11' ? 'XI' : 'XII'}</h3>
              <p className="text-sm text-slate-500 mb-4">
                Official CBSE curriculum compliant notes and study guides.
              </p>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-forest-500 w-3/4"></div>
              </div>
              <p className="text-xs text-slate-400 mt-2">10 Chapters Available</p>
            </div>
          </div>

          {/* Chapter List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                 <h2 className="font-bold text-lg text-slate-800">Chapter List</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {chapters.map((chapter, index) => (
                  <div 
                    key={index} 
                    onClick={() => openPdf(chapter)}
                    className="p-6 hover:bg-forest-50 transition-colors cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm group-hover:bg-forest-200 group-hover:text-forest-800 transition-colors">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 group-hover:text-forest-700 transition-colors">
                          {chapter}: The Science of Life
                        </h4>
                        <p className="text-xs text-slate-400">PDF • 2.4 MB</p>
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 group-hover:text-forest-600 transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
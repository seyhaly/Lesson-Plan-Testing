import React, { useState } from 'react';
import { 
  Clock, 
  BookOpen, 
  MessageSquare, 
  PenTool, 
  CheckCircle2, 
  ChevronRight, 
  Building2, 
  Users, 
  Target,
  FileText,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LessonStage {
  id: string;
  title: string;
  duration: number;
  icon: React.ReactNode;
  description: string;
  activities: string[];
  materials: string;
}

const lessonStages: LessonStage[] = [
  {
    id: 'warmup',
    title: 'Lead-in & Warm-up',
    duration: 10,
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Engage students with the theme of urban change and success.',
    activities: [
      'Show images of famous city transformations (e.g., London Docklands, NYC High Line).',
      'Discussion: "What makes a city successful?"',
      'T-Chart: Old vs. New city features.'
    ],
    materials: 'Projector/Pictures of cities'
  },
  {
    id: 'vocab-preview',
    title: 'Vocabulary Preview',
    duration: 15,
    icon: <PenTool className="w-5 h-5" />,
    description: 'Pre-teach key vocabulary from the text to ensure comprehension.',
    activities: [
      'Match words (demolish, transform, run-down, etc.) to definitions (Ex 1, p. 86).',
      'Sentence completion (Ex 2, p. 86).',
      'Peer check: Discussing opinions on city areas (Ex 3, p. 86).'
    ],
    materials: 'Textbook page 86'
  },
  {
    id: 'reading-global',
    title: 'Global Reading',
    duration: 15,
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Developing skimming and predicting skills.',
    activities: [
      'Predicting: Look at headings and pictures (Ex B, p. 86).',
      'Skimming: Read "Building a Success" quickly to check predictions.',
      'Categorizing: Decide if High Line, Brooklyn, and Fort Greene are successful or not (Ex C2, p. 86).'
    ],
    materials: 'Textbook pages 87-88'
  },
  {
    id: 'reading-close',
    title: 'Close Reading & Language',
    duration: 20,
    icon: <Target className="w-5 h-5" />,
    description: 'Scanning for specific information and identifying reasons.',
    activities: [
      'Scanning: Answer comprehension questions (Ex D1, p. 89).',
      'Language Focus: Identify phrases for reasons (because, due to, since, etc.) (Ex D2, p. 89).',
      'True/False/Not Given practice (Ex D3, p. 89).'
    ],
    materials: 'Textbook page 89'
  },
  {
    id: 'vocab-dev',
    title: 'Vocabulary: "re-" prefixes',
    duration: 15,
    icon: <Building2 className="w-5 h-5" />,
    description: 'Expanding vocabulary through word formation.',
    activities: [
      'Matching "re-" verbs to objects (Ex 1, p. 90).',
      'Contextual practice: Sentence completion (Ex 2, p. 90).',
      'Personalization: Write about things students reuse, recycle, or redo (Ex 3, p. 90).'
    ],
    materials: 'Textbook page 90'
  },
  {
    id: 'production',
    title: 'Critical Thinking & Production',
    duration: 15,
    icon: <Users className="w-5 h-5" />,
    description: 'Applying knowledge to real-world scenarios.',
    activities: [
      'Group Discussion: Think of an area in your hometown. How would you change it?',
      'Debate: "Would everyone like these changes? Who would and who wouldn\'t?" (Ex E, p. 89).',
      'Mini-presentation of "Hometown Transformation" plan.'
    ],
    materials: 'Notebooks/Whiteboard'
  }
];

export default function App() {
  const [activeStage, setActiveStage] = useState<string>(lessonStages[0].id);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 border-b border-[#1A1A1A]/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-5xl font-serif font-light tracking-tight mb-2">
                Urban <span className="italic">Success</span>
              </h1>
              <p className="text-sm uppercase tracking-widest text-[#5A5A40] font-semibold">
                B1 Level • 90 Minutes • Lesson Plan
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5">
                <Clock className="w-4 h-4 text-[#5A5A40]" />
                <span className="text-sm font-medium">90 min total</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-xs uppercase tracking-widest text-[#5A5A40] font-bold mb-4 px-2">
              Lesson Timeline
            </h2>
            {lessonStages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                  activeStage === stage.id
                    ? 'bg-[#5A5A40] text-white shadow-lg scale-[1.02]'
                    : 'bg-white hover:bg-[#5A5A40]/5 border border-black/5'
                }`}
              >
                <div className={`p-2 rounded-xl ${activeStage === stage.id ? 'bg-white/20' : 'bg-[#F5F5F0]'}`}>
                  {stage.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{stage.title}</div>
                  <div className={`text-xs ${activeStage === stage.id ? 'text-white/70' : 'text-[#5A5A40]'}`}>
                    {stage.duration} minutes
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeStage === stage.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            ))}

            <div className="mt-8 p-6 bg-[#5A5A40]/10 rounded-3xl border border-[#5A5A40]/20">
              <h3 className="flex items-center gap-2 text-sm font-bold mb-3 text-[#5A5A40]">
                <Target className="w-4 h-4" />
                Learning Objectives
              </h3>
              <ul className="text-xs space-y-2 text-[#1A1A1A]/80 leading-relaxed">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-[#5A5A40]" />
                  Identify and use vocabulary related to urban development.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-[#5A5A40]" />
                  Recognize and use "re-" prefixes for describing change.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-[#5A5A40]" />
                  Scan texts for specific reasons using transition markers.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-3 h-3 mt-0.5 shrink-0 text-[#5A5A40]" />
                  Discuss and evaluate urban transformation projects.
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {lessonStages.map((stage) => stage.id === activeStage && (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5 min-h-[500px]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#F5F5F0] rounded-2xl flex items-center justify-center text-[#5A5A40]">
                        {stage.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold">{stage.title}</h3>
                        <p className="text-sm text-[#5A5A40]">{stage.duration} minutes</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <section>
                      <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#5A5A40] mb-4">
                        <Lightbulb className="w-4 h-4" />
                        Overview
                      </h4>
                      <p className="text-lg text-[#1A1A1A]/90 leading-relaxed font-light">
                        {stage.description}
                      </p>
                    </section>

                    <section>
                      <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#5A5A40] mb-4">
                        <FileText className="w-4 h-4" />
                        Step-by-Step Activities
                      </h4>
                      <ul className="space-y-4">
                        {stage.activities.map((activity, idx) => (
                          <li key={idx} className="flex gap-4 group">
                            <span className="flex-none w-6 h-6 rounded-full bg-[#F5F5F0] text-[#5A5A40] text-xs font-bold flex items-center justify-center group-hover:bg-[#5A5A40] group-hover:text-white transition-colors">
                              {idx + 1}
                            </span>
                            <span className="text-[#1A1A1A]/80 leading-relaxed">
                              {activity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="pt-8 border-t border-black/5">
                      <div className="flex items-center gap-3 text-sm text-[#5A5A40]">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-semibold">Materials:</span>
                        <span className="italic">{stage.materials}</span>
                      </div>
                    </section>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer / Teacher Notes */}
        <footer className="mt-12 p-8 bg-white rounded-3xl border border-black/5">
          <h3 className="text-lg font-serif font-bold mb-4">Teacher's Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#1A1A1A]/70 leading-relaxed">
            <div>
              <p className="mb-4">
                <strong className="text-[#1A1A1A]">Scaffolding for B1:</strong> Students may struggle with the "Identifying Reasons" section. Provide a handout with the phrases (due to, on account of, etc.) and example sentences before they scan the text.
              </p>
              <p>
                <strong className="text-[#1A1A1A]">Vocabulary:</strong> The "re-" prefix section is a great opportunity for word-building games. Ask students to think of other "re-" words they know (replay, rewrite, return).
              </p>
            </div>
            <div>
              <p className="mb-4">
                <strong className="text-[#1A1A1A]">Engagement:</strong> The High Line is a very visual topic. If possible, show a short video clip of the park to make the text more "real" for the students.
              </p>
              <p>
                <strong className="text-[#1A1A1A]">Differentiation:</strong> For stronger students, ask them to identify the difference between "because" (followed by a clause) and "due to" (followed by a noun phrase).
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

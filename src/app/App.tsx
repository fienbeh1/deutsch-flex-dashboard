import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Progress } from './components/ui/progress';
import { Badge } from './components/ui/badge';
import {
  BookOpen,
  Headphones,
  Video,
  Search,
  Bell,
  Settings,
  User,
  ChevronRight,
  Zap,
  Trophy,
  Target,
  TrendingUp,
  Brain,
  Sparkles,
  RotateCcw,
  Volume2,
  FileText,
  Cpu
} from 'lucide-react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line
} from 'recharts';
import { motion } from 'motion/react';

// Mock data for visualizations
const learningFlowData = [
  { accuracy: 65, timeOnTask: 45, resource: 'Bücher', size: 120 },
  { accuracy: 78, timeOnTask: 62, resource: 'Audio', size: 150 },
  { accuracy: 82, timeOnTask: 55, resource: 'Video', size: 180 },
  { accuracy: 71, timeOnTask: 48, resource: 'Bücher', size: 100 },
  { accuracy: 88, timeOnTask: 70, resource: 'Video', size: 200 },
  { accuracy: 75, timeOnTask: 58, resource: 'Audio', size: 130 },
  { accuracy: 69, timeOnTask: 42, resource: 'Bücher', size: 110 },
  { accuracy: 91, timeOnTask: 75, resource: 'Video', size: 220 },
];

const engagementData = [
  { name: 'Mon', engagement: 85, completion: 72 },
  { name: 'Tue', engagement: 92, completion: 88 },
  { name: 'Wed', engagement: 78, completion: 65 },
  { name: 'Thu', engagement: 88, completion: 82 },
  { name: 'Fri', engagement: 95, completion: 90 },
  { name: 'Sat', engagement: 70, completion: 55 },
  { name: 'Sun', engagement: 65, completion: 48 },
];

const skillRadarData = [
  { skill: 'Grammatik', value: 85 },
  { skill: 'Vokabular', value: 92 },
  { skill: 'Hören', value: 78 },
  { skill: 'Sprechen', value: 75 },
  { skill: 'Schreiben', value: 88 },
  { skill: 'Lesen', value: 95 },
];

const flashcards = [
  { word: 'Verständnis', translation: 'Understanding', heat: 85 },
  { word: 'Entwicklung', translation: 'Development', heat: 62 },
  { word: 'Gesellschaft', translation: 'Society', heat: 78 },
  { word: 'Entscheidung', translation: 'Decision', heat: 91 },
];

export default function App() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 overflow-x-hidden">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 text-6xl opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🥨
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-4xl opacity-20"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          🥨
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/4 text-3xl opacity-15"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          🇩🇪
        </motion.div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <motion.div
                className="text-4xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                🦉
              </motion.div>
              <div>
                <h1 className="font-bold text-xl bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Deutsch-Flex
                </h1>
                <p className="text-xs text-gray-500 font-mono">Data-Dashboard</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources, topics..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white/50 backdrop-blur border border-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
              </div>
            </div>

            {/* Nav Icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/50 transition-colors">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Resource Pulse */}
          <div className="space-y-6">

            {/* Progress Rings */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-emerald-700">
                  <Target className="h-5 w-5" />
                  Resource Pulse
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Bücher */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-emerald-600" />
                      <span className="font-medium">Bücher</span>
                    </div>
                    <span className="font-mono text-emerald-700">87%</span>
                  </div>
                  <div className="relative h-3">
                    <div className="absolute inset-0 rounded-full bg-emerald-200/30" />
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                      initial={{ width: 0 }}
                      animate={{ width: '87%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* Audio */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">Audio-Tracks</span>
                    </div>
                    <span className="font-mono text-blue-700">72%</span>
                  </div>
                  <div className="relative h-3">
                    <div className="absolute inset-0 rounded-full bg-blue-200/30" />
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>

                {/* Video */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4 text-purple-600" />
                      <span className="font-medium">Video-Lektionen</span>
                    </div>
                    <span className="font-mono text-purple-700">94%</span>
                  </div>
                  <div className="relative h-3">
                    <div className="absolute inset-0 rounded-full bg-purple-200/30" />
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Chart */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <TrendingUp className="h-5 w-5" />
                  Weekly Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="engagement" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="completion" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Skill Radar */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-700">
                  <Brain className="h-5 w-5" />
                  Skill Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <RadarChart data={skillRadarData}>
                    <PolarGrid stroke="#c4b5fd" />
                    <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis tick={{ fontSize: 10 }} />
                    <Radar dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

          </div>

          {/* Center Column - Learning Flow Matrix */}
          <div className="space-y-6">

            <Card className="backdrop-blur-xl bg-gradient-to-br from-white/80 to-white/60 border-white/30 shadow-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  Learning Flow Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis
                      dataKey="timeOnTask"
                      name="Time on Task"
                      unit="min"
                      tick={{ fontSize: 11 }}
                      label={{ value: 'Time-on-Task (min)', position: 'bottom', fontSize: 11 }}
                    />
                    <YAxis
                      dataKey="accuracy"
                      name="Accuracy"
                      unit="%"
                      tick={{ fontSize: 11 }}
                      label={{ value: 'Accuracy (%)', angle: -90, position: 'left', fontSize: 11 }}
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter
                      name="Bücher"
                      data={learningFlowData.filter(d => d.resource === 'Bücher')}
                      fill="#10b981"
                    />
                    <Scatter
                      name="Audio"
                      data={learningFlowData.filter(d => d.resource === 'Audio')}
                      fill="#3b82f6"
                    />
                    <Scatter
                      name="Video"
                      data={learningFlowData.filter(d => d.resource === 'Video')}
                      fill="#8b5cf6"
                    />
                  </ScatterChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs">Bücher</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-xs">Audio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span className="text-xs">Video</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deep-AI Explanations */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border-yellow-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700">
                  <Cpu className="h-5 w-5" />
                  Deep-AI Explanations Lab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 space-y-1">
                    <div className="text-sm font-mono bg-yellow-100/50 p-3 rounded-lg border border-yellow-200">
                      <p className="text-xs text-yellow-800">OCR Extraction:</p>
                      <p className="mt-1 text-xs">"Die <span className="bg-yellow-300">Entwicklung</span> der deutschen <span className="bg-yellow-300">Grammatik</span> zeigt..."</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Syntax: 94%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span>Semantic: 88%</span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    🤖
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Lehrerbücher Hub */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-rose-500/10 to-rose-600/5 border-rose-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-rose-700">
                  <Volume2 className="h-5 w-5" />
                  Transkriptionen & Lehrerbücher
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-12 h-16 rounded bg-gradient-to-br from-red-400 to-red-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transform rotate-[-5deg]">
                      A1
                    </div>
                    <div className="w-12 h-16 rounded bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transform rotate-[2deg]">
                      A2
                    </div>
                    <div className="w-12 h-16 rounded bg-gradient-to-br from-green-400 to-green-600 border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transform rotate-[-3deg]">
                      B1
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-400 to-rose-600"
                        initial={{ width: 0 }}
                        animate={{ width: '68%' }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-rose-100 text-rose-700 border-rose-300">
                        Deep-Pedagogy Mode
                      </Badge>
                      <span className="text-xs text-gray-600 font-mono">68% merged</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Column */}
          <div className="space-y-6">

            {/* Flashcard Spintrix */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-700">
                  <RotateCcw className="h-5 w-5" />
                  Flashcard Spintrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {flashcards.map((card, idx) => (
                    <motion.div
                      key={card.word}
                      className="relative"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-3 rounded-lg border border-cyan-200 cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-sm">{card.word}</p>
                            <p className="text-xs text-gray-600">{card.translation}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="relative w-12 h-12">
                              <svg className="transform -rotate-90" viewBox="0 0 36 36">
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  stroke="#e0e0e0"
                                  strokeWidth="3"
                                />
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="16"
                                  fill="none"
                                  stroke={card.heat > 80 ? '#ef4444' : card.heat > 60 ? '#f59e0b' : '#10b981'}
                                  strokeWidth="3"
                                  strokeDasharray={`${card.heat} ${100 - card.heat}`}
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold">
                                {card.heat}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Games & Arcade */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <Zap className="h-5 w-5" />
                  Interactive Games
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    className="aspect-square rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 p-4 flex flex-col items-center justify-center text-white cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-3xl mb-2">🏰</span>
                    <span className="text-xs font-bold text-center">Word Castle</span>
                  </motion.div>
                  <motion.div
                    className="aspect-square rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 p-4 flex flex-col items-center justify-center text-white cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-3xl mb-2">🎯</span>
                    <span className="text-xs font-bold text-center">Grammar Quest</span>
                  </motion.div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="text-sm font-bold text-amber-900">Level 24</p>
                      <p className="text-xs text-amber-700">2,450 XP to next</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl">⭐</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Data Forensics */}
            <Card className="backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-indigo-600/5 border-indigo-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-700">
                  <Target className="h-5 w-5" />
                  Data Forensics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Milestone badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {[
                      { emoji: '🎖️', label: '100 Days', glow: 'shadow-yellow-400' },
                      { emoji: '🏆', label: 'Perfect Week', glow: 'shadow-blue-400' },
                      { emoji: '⚡', label: 'Speed Demon', glow: 'shadow-purple-400' },
                      { emoji: '🌟', label: 'Master', glow: 'shadow-green-400' },
                    ].map((badge, idx) => (
                      <motion.div
                        key={badge.label}
                        className={`flex-1 min-w-0 aspect-square rounded-lg bg-gradient-to-br from-white to-gray-50 border-2 border-indigo-200 flex flex-col items-center justify-center shadow-lg ${badge.glow}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1, type: 'spring' }}
                        whileHover={{ y: -5 }}
                      >
                        <span className="text-2xl">{badge.emoji}</span>
                        <span className="text-[10px] font-bold text-center mt-1 text-gray-700">{badge.label}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Node graph visualization */}
                  <div className="relative h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg border border-indigo-200 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      {/* Connection lines */}
                      <line x1="20%" y1="50%" x2="40%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" />
                      <line x1="40%" y1="30%" x2="60%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2" />
                      <line x1="60%" y1="60%" x2="80%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" />
                      <line x1="20%" y1="50%" x2="60%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2" />

                      {/* Nodes */}
                      <circle cx="20%" cy="50%" r="6" fill="#6366f1" className="animate-pulse" />
                      <circle cx="40%" cy="30%" r="8" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <circle cx="60%" cy="60%" r="7" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                      <circle cx="80%" cy="40%" r="6" fill="#10b981" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </main>
    </div>
  );
}

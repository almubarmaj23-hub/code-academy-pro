"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket, Play, Star, Users, BookOpen, Trophy } from "lucide-react";

const codeLines = [
  'def greet(name):',
  '    """مرحبا في عالم البرمجة"""',
  '    return f"أهلاً {name}!"',
  '',
  '# ابدأ رحلتك اليوم',
  'student = "طالب البرمجة"',
  'print(greet(student))',
  '',
  '# الناتج:',
  '➜ أهلاً طالب البرمجة!',
];

const stats = [
  { value: 27400, label: "طالب", suffix: "+" },
  { value: 8, label: "دورات", suffix: "" },
  { value: 97, label: "رضا المتعلمين", suffix: "%" },
];

const floatingBadges = [
  { icon: "🐍", label: "Python", delay: 0 },
  { icon: "⚛️", label: "React", delay: 0.5 },
  { icon: "🤖", label: "AI/ML", delay: 1 },
  { icon: "🟢", label: "Node.js", delay: 1.5 },
];

export function Hero() {
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const typeCode = () => {
      if (currentLine >= codeLines.length) {
        // Reset after completion
        setTimeout(() => {
          setDisplayedCode([]);
          setCurrentLine(0);
          setCurrentChar(0);
        }, 3000);
        return;
      }

      const line = codeLines[currentLine];
      if (currentChar <= line.length) {
        setDisplayedCode((prev) => {
          const newCode = [...prev];
          newCode[currentLine] = line.substring(0, currentChar);
          return newCode;
        });
        setCurrentChar((prev) => prev + 1);
      } else {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }
    };

    const timer = setTimeout(typeCode, currentLine > 0 && currentChar === 0 ? 200 : 45);
    return () => clearTimeout(timer);
  }, [currentLine, currentChar]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-right"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              منصة التعلم الأولى عربياً
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              تعلّم{" "}
              <span className="gradient-text">البرمجة</span>
              <br />
              وابنِ مستقبلك الرقمي
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 lg:mr-0">
              من الصفر إلى الاحتراف — 8 دورات شاملة، محرر كود تفاعلي، اختبارات
              ذكية، ومقالات احترافية بالعربية
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Rocket className="w-5 h-5 ml-2" />
                ابدأ مجاناً
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 rounded-xl text-lg px-8 py-6"
                onClick={() => {
                  document.getElementById("editor")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Play className="w-5 h-5 ml-2" />
                جرب المحرر
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black gradient-text">
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Code Window */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Code Window */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl animate-float">
                {/* Window Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-muted-foreground font-mono mr-4">
                    main.py
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed min-h-[300px]">
                  {displayedCode.map((line, index) => (
                    <div key={index} className="flex">
                      <span className="text-muted-foreground select-none w-8 text-left pl-4">
                        {index + 1}
                      </span>
                      <span className="flex-1">
                        {index === 0 && (
                          <span className="text-purple-500">def </span>
                        )}
                        {index === 0 && (
                          <span className="text-cyan-400">greet</span>
                        )}
                        {index === 0 && <span>(name):</span>}
                        {index === 1 && (
                          <span className="text-purple-300">
                            &nbsp;&nbsp;&nbsp;&nbsp;"""مرحبا في عالم البرمجة"""
                          </span>
                        )}
                        {index === 2 && (
                          <>
                            <span className="text-purple-500">&nbsp;&nbsp;&nbsp;&nbsp;return </span>
                            <span className="text-yellow-400">
                              f"أهلاً {'{'}name{'}'}!"
                            </span>
                          </>
                        )}
                        {index === 4 && (
                          <span className="text-green-500">
                            # ابدأ رحلتك اليوم
                          </span>
                        )}
                        {index === 5 && (
                          <>
                            <span className="text-foreground">student = </span>
                            <span className="text-yellow-400">
                              "طالب البرمجة"
                            </span>
                          </>
                        )}
                        {index === 6 && (
                          <>
                            <span className="text-purple-500">print</span>
                            (greet(student))
                          </>
                        )}
                        {index === 8 && (
                          <span className="text-green-500"># الناتج:</span>
                        )}
                        {index === 9 && (
                          <span className="text-cyan-400">
                            ➜ أهلاً طالب البرمجة!
                          </span>
                        )}
                        {index === currentLine && (
                          <span className="animate-pulse">│</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + badge.delay }}
                  className={`absolute bg-card border border-border rounded-xl px-4 py-2 shadow-lg flex items-center gap-2 text-sm font-medium
                    ${index === 0 ? "top-0 -left-4" : ""}
                    ${index === 1 ? "top-1/3 -right-4" : ""}
                    ${index === 2 ? "bottom-1/4 -left-4" : ""}
                    ${index === 3 ? "bottom-0 right-1/4" : ""}
                  `}
                  style={{ animationDelay: `${badge.delay}s` }}
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

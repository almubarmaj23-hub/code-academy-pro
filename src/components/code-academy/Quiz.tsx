"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { quizQuestions } from "@/lib/data";
import { motion } from "framer-motion";
import { Check, X, RotateCcw, ArrowRight } from "lucide-react";

const categories = [
  { id: "web", label: "الويب", icon: "🌐" },
  { id: "js", label: "JavaScript", icon: "⚡" },
  { id: "python", label: "Python", icon: "🐍" },
  { id: "general", label: "عام", icon: "💡" },
];

export function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = selectedCategory
    ? quizQuestions.filter((q) => q.category === selectedCategory)
    : [];

  const handleAnswer = (answerIndex: number) => {
    if (answered) return;
    setSelectedAnswer(answerIndex);
    setAnswered(true);

    if (answerIndex === questions[currentQuestion].answerIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setQuizComplete(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setQuizComplete(false);
  };

  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100);
  };

  const getEmoji = () => {
    const percentage = getScorePercentage();
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🌟";
    if (percentage >= 60) return "👍";
    return "💪";
  };

  if (!selectedCategory) {
    return (
      <section id="quiz" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-yellow-500 border-yellow-500/30">
            🧩 اختبر نفسك
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            بنك <span className="gradient-text">أسئلة شامل</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            اختر موضوعاً لبدء الاختبار
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(category.id)}
              className="cursor-pointer"
            >
              <Card className="border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6 text-center">
                  <span className="text-3xl mb-2 block">{category.icon}</span>
                  <h3 className="font-bold text-lg">{category.label}</h3>
                  <p className="text-muted-foreground text-sm">
                    {quizQuestions.filter((q) => q.category === category.id).length} سؤال
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
  }

  return (
    <section id="quiz" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {quizComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">{getEmoji()}</div>
            <h3 className="text-2xl font-black mb-2">اكتملت الاختبار!</h3>
            <p className="text-lg mb-2">
              نتيجتك: <span className="text-primary font-bold text-xl">{score}</span>/{questions.length}
            </p>
            <span className="text-muted-foreground">
              {getScorePercentage()}% إجابات صحيحة
            </span>
            <div className="flex gap-3 justify-center mt-6">
              <Button onClick={resetQuiz} variant="outline" className="gap-2">
                <RotateCcw className="w-4 h-4" />
                إعادة الاختبار
              </Button>
              <Button onClick={() => setSelectedCategory(null)} variant="outline" className="gap-2">
                <ArrowRight className="w-4 h-4" />
                موضوع آخر
              </Button>
            </div>
          </motion.div>
        ) : (
          <Card className="border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {categories.find((c) => c.id === selectedCategory)?.label || ""}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  السؤال {currentQuestion + 1} من {questions.length}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Progress value={(currentQuestion / questions.length) * 100} className="h-2 mb-6" />
              <h3 className="text-lg font-bold mb-6">{questions[currentQuestion]?.question}</h3>
              <div className="grid gap-3">
                {questions[currentQuestion]?.options.map((option: string, index: number) => {
                  const isCorrect = index === questions[currentQuestion].answerIndex;
                  const isSelected = selectedAnswer === index;
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleAnswer(index)}
                      disabled={answered}
                      className={`w-full p-4 rounded-xl border-2 text-right font-medium transition-all ${
                        answered && isCorrect
                          ? "border-green-500 bg-green-500/20 text-green-500"
                          : answered && isSelected && !isCorrect
                          ? "border-red-500 bg-red-500/20 text-red-500"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="flex-1">{option}</span>
                      {answered && isCorrect && <Check className="w-4 h-4 text-green-500 mr-2" />}
                      {answered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-500 mr-2" />}
                    </motion.button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}

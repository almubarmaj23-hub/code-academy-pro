"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  Clock,
  BookOpen,
  CheckCircle2,
  Lock,
  Trophy,
  Target,
  X,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { courses } from "@/lib/data";

// Interface for lesson with full details
interface LessonDetail {
  num: number;
  title: string;
  description: string;
  dur: string;
  free: boolean;
  videoUrl?: string;
  codeExample?: string;
}

// Lesson data with full details
const lessonsData: Record<string, LessonDetail[]> = {
  "html-css": [
    {
      num: 1,
      title: "مقدمة في HTML ومفهوم الويب",
      description: "في هذا الدرس ستتعرف على مفهوم الويب وكيف تعمل المواقع، وما هي HTML ولماذا هي اللغة الأساسية لبناء صفحات الويب.",
      dur: "15 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=qfPUMV9J5yw",
    },
    {
      num: 2,
      title: "هيكل صفحة HTML والعناصر الأساسية",
      description: "تتعلم في هذا الدرس الهيكل الأساسي لأي صفحة HTML، والعناصر الرئيسية مثل html, head, body.",
      dur: "20 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=X1ulCwyhCVM",
    },
    {
      num: 3,
      title: "العناوين والفقرات والنصوص",
      description: "شرح تفصيلي للعناوين من h1 إلى h6، وكيفية استخدام الفقرات والعناصر النصية.",
      dur: "18 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=qyVkLebgfzY&t=300",
    },
    {
      num: 4,
      title: "الروابط والتنقل بين الصفحات",
      description: "تعلم كيفية إنشاء روابط تشعبية للتنقل بين الصفحات.",
      dur: "15 دقيقة",
      free: false,
      videoUrl: "https://www.youtube.com/watch?v=qyVkLebgfzY&t=600",
    },
    {
      num: 5,
      title: "الصور والوسائط في HTML",
      description: "شرح كيفية إضافة الصور باستخدام وسم img.",
      dur: "22 دقيقة",
      free: false,
      videoUrl: "https://www.youtube.com/watch?v=qyVkLebgfzY&t=900",
    },
    {
      num: 6,
      title: "القوائم والجداول",
      description: "إنشاء القوائم والجداول بالتفصيل.",
      dur: "20 دقيقة",
      free: false,
      videoUrl: "https://www.youtube.com/watch?v=qyVkLebgfzY&t=1200",
    },
  ],
  javascript: [
    {
      num: 1,
      title: "مقدمة في JavaScript والإعداد",
      description: "تعرف على JavaScript ولماذا هي مهمة.",
      dur: "20 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=GM6dQBbb-Xg",
    },
    {
      num: 2,
      title: "المتغيرات وأنواع البيانات",
      description: "شرح المتغيرات بـ let و const وأنواع البيانات.",
      dur: "25 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=300",
    },
    {
      num: 3,
      title: "العمليات والشروط",
      description: "العمليات الحسابية وعبارات if و else.",
      dur: "18 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=600",
    },
    {
      num: 4,
      title: "الحلقات Loops",
      description: "تكرار تنفيذ الكود باستخدام for و while.",
      dur: "20 دقيقة",
      free: false,
      videoUrl: "https://www.youtube.com/watch?v=GM6dQBbb-Xg&t=900",
    },
  ],
  python: [
    {
      num: 1,
      title: "مقدمة في Python وتثبيتها",
      description: "تعرف على لغة Python ومميزاتها.",
      dur: "20 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=rvVYDsE-s7Y",
    },
    {
      num: 2,
      title: "المتغيرات وأنواع البيانات",
      description: "تعلم كيفية إنشاء المتغيرات وأنواع البيانات.",
      dur: "25 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=rvVYDsE-s7Y&t=300",
    },
    {
      num: 3,
      title: "القوائم Lists",
      description: "شرح القوائم وكيفية التعامل معها.",
      dur: "30 دقيقة",
      free: true,
      videoUrl: "https://www.youtube.com/watch?v=NgDaKmx3SoU",
    },
    {
      num: 4,
      title: "الدوال Functions",
      description: "كيفية إنشاء الدوال في Python.",
      dur: "35 دقيقة",
      free: false,
      videoUrl: "https://www.youtube.com/watch?v=JeznW_7DlB0",
    },
  ],
};

interface CourseViewerProps {
  courseId: string;
  onClose: () => void;
}

export function CourseViewer({ courseId, onClose }: CourseViewerProps) {
  const [selectedLesson, setSelectedLesson] = useState<LessonDetail | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  const course = courses.find((c) => c.id === courseId);
  const lessons = lessonsData[courseId] || [];

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`progress_${courseId}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setCompletedLessons(new Set(parsed));
    }
    if (lessons.length > 0) {
      setSelectedLesson(lessons[0]);
    }
  }, [courseId, lessons.length]);

  // Save progress to localStorage
  const toggleComplete = (lessonNum: number) => {
    const newCompleted = new Set(completedLessons);
    if (newCompleted.has(lessonNum)) {
      newCompleted.delete(lessonNum);
    } else {
      newCompleted.add(lessonNum);
    }
    setCompletedLessons(newCompleted);
    localStorage.setItem(`progress_${courseId}`, JSON.stringify([...newCompleted]));
  };

  const progress = lessons.length > 0 ? (completedLessons.size / lessons.length) * 100 : 0;

  if (!course) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{course.icon}</span>
            <div>
              <h1 className="font-bold text-xl">{course.title}</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{course.lessons} درس</span>
                <span>•</span>
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Progress Card */}
        <Card className="mb-6 overflow-hidden">
          <div className={cn("h-2 bg-gradient-to-r", course.gradient)} />
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">التقدم</div>
                  <div className="flex items-center gap-2">
                    <Progress value={progress} className="w-32 h-2" />
                    <span className="text-sm font-bold">{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">{completedLessons.size} درس مكتمل</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Video Player */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <Card className="overflow-hidden">
                <div className="aspect-video bg-black">
                  {selectedLesson.videoUrl ? (
                    <iframe
                      src={selectedLesson.videoUrl.replace("watch?v=", "embed/")}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <Lock className="w-12 h-12 opacity-50" />
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        الدرس {selectedLesson.num}
                      </Badge>
                      <h2 className="text-lg font-bold mb-2">{selectedLesson.title}</h2>
                      <p className="text-sm text-muted-foreground">{selectedLesson.description}</p>
                    </div>
                    <Button
                      variant={completedLessons.has(selectedLesson.num) ? "default" : "outline"}
                      className={cn(
                        "shrink-0",
                        completedLessons.has(selectedLesson.num) && "bg-green-500 hover:bg-green-600"
                      )}
                      onClick={() => toggleComplete(selectedLesson.num)}
                    >
                      <CheckCircle2 className="w-4 h-4 ml-2" />
                      {completedLessons.has(selectedLesson.num) ? "مكتمل" : "أكملت"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="aspect-video flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>اختر درساً للبدء</p>
                </div>
              </Card>
            )}

            {/* Learning Objectives */}
            <Card className="mt-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  أهداف التعلم
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    فهم الأساسيات والمفاهيم
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    تطبيق المعرفة في مشاريع عملية
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Lessons List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">محتوى الدورة</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {lessons.length} درس • {lessons.filter((l) => l.free).length} مجاني
                </p>
              </CardHeader>
              <Separator />
              <div className="max-h-[400px] overflow-y-auto">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.num}
                    onClick={() => setSelectedLesson(lesson)}
                    className={cn(
                      "w-full text-right p-3 flex items-start gap-3 hover:bg-muted/50 transition-colors",
                      selectedLesson?.num === lesson.num && "bg-primary/5 border-r-2 border-primary"
                    )}
                  >
                    <div
                      className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0",
                        completedLessons.has(lesson.num)
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {completedLessons.has(lesson.num) ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        lesson.num
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{lesson.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <Clock className="w-3 h-3" />
                        <span>{lesson.dur}</span>
                        {lesson.free && (
                          <Badge variant="outline" className="text-green-500 border-green-500/30 text-[10px]">
                            مجاني
                          </Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseViewer;

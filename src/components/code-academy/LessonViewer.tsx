"use client";

import { useState, useCallback } from "react";
import { VideoPlayer, VideoPlaylist } from "./VideoPlayer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Play, Clock, BookOpen, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Lesson {
  num: number;
  title: string;
  dur: string;
  free: boolean;
  videoUrl?: string;
}

interface LessonViewerProps {
  lessons: Lesson[];
  courseTitle: string;
  courseIcon?: string;
  className?: string;
}

/**
 * مكون عرض الدرس مع الفيديو والمحتوى
 * 
 * الميزات:
 * - عرض فيديو تفاعلي مع lazy loading
 * - قائمة دروس جانبية
 * - تصميم متجاوب للجوال والحاسوب
 * - دعم الدروس المجانية والمقفلة
 */
export function LessonViewer({
  lessons,
  courseTitle,
  courseIcon = "📚",
  className,
}: LessonViewerProps) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set());

  const currentLesson = lessons[currentLessonIndex];

  const handleSelectLesson = useCallback((index: number) => {
    const lesson = lessons[index];
    if (lesson.free || completedLessons.size >= index) {
      setCurrentLessonIndex(index);
    }
  }, [lessons, completedLessons]);

  const handleMarkComplete = useCallback(() => {
    setCompletedLessons((prev) => {
      const newSet = new Set(prev);
      newSet.add(currentLessonIndex);
      return newSet;
    });
  }, [currentLessonIndex]);

  const progress = (completedLessons.size / lessons.length) * 100;

  return (
    <div className={cn("grid lg:grid-cols-3 gap-6", className)}>
      {/* Video and Content Section - Takes 2 columns on large screens */}
      <div className="lg:col-span-2 space-y-6">
        {/* Video Player */}
        <Card className="overflow-hidden border-border">
          <div className="p-0">
            {currentLesson.videoUrl ? (
              <VideoPlayer
                videoUrl={currentLesson.videoUrl}
                title={currentLesson.title}
                aspectRatio="16:9"
              />
            ) : (
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Lock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>هذا الدرس مقفل</p>
                  {!currentLesson.free && (
                    <Button className="mt-4" size="sm">
                      اشترك للوصول
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Lesson Info */}
        <Card className="border-border">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    الدرس {currentLesson.num}
                  </Badge>
                  {currentLesson.free && (
                    <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                      مجاني
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl sm:text-2xl">
                  {currentLesson.title}
                </CardTitle>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground shrink-0">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{currentLesson.dur}</span>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-4">
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleMarkComplete}
                variant={completedLessons.has(currentLessonIndex) ? "default" : "outline"}
                className={cn(
                  "gap-2",
                  completedLessons.has(currentLessonIndex) && "bg-green-500 hover:bg-green-600"
                )}
              >
                <CheckCircle2 className="w-4 h-4" />
                {completedLessons.has(currentLessonIndex) ? "مكتمل" : "تحديد كمكتمل"}
              </Button>
              <Button variant="outline" className="gap-2">
                <BookOpen className="w-4 h-4" />
                ملاحظات الدرس
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Description Placeholder */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-lg">عن الدرس</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              في هذا الدرس ستتعلم المفاهيم الأساسية وستتمكن من تطبيقها عملياً. 
              شاهد الفيديو وجرّب الأمثلة بنفسك للحصول على أفضل النتائج.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar - Lesson List */}
      <div className="lg:col-span-1">
        <Card className="border-border sticky top-20">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{courseIcon}</span>
              <div>
                <CardTitle className="text-base">{courseTitle}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {completedLessons.size} / {lessons.length} دروس مكتملة
                </p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="mt-3 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-3 max-h-[500px] overflow-y-auto">
            <VideoPlaylist
              videos={lessons.map((lesson, index) => ({
                id: `lesson-${index}`,
                title: lesson.title,
                duration: lesson.dur,
                videoUrl: lesson.videoUrl,
                isFree: lesson.free,
              }))}
              currentVideoIndex={currentLessonIndex}
              onSelectVideo={handleSelectLesson}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LessonViewer;

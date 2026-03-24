"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Play } from "lucide-react";
import { Course } from "@/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  onEnroll?: (courseId: string) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  const levelColors = {
    "مبتدئ": "bg-green-500/20 text-green-500 border-green-500/30",
    "متوسط": "bg-yellow-500/20 text-yellow-500 border-yellow-500/30",
    "متقدم": "bg-red-500/20 text-red-500 border-red-500/30",
  };

  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 cursor-pointer">
        {/* Course Thumbnail */}
        <div
          className={cn(
            "h-32 flex items-center justify-center text-4xl relative bg-gradient-to-br",
            course.gradient
          )}
        >
          <span className="drop-shadow-lg">{course.icon}</span>
          <Badge
            className={cn(
              "absolute top-3 left-3 border",
              levelColors[course.level as keyof typeof levelColors] || "bg-gray-500/20"
            )}
          >
            {course.level}
          </Badge>
        </div>

        <CardHeader className="pb-3">
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-2">
            <Badge variant="secondary" className="text-xs">
              {course.category === "web" && "تطوير الويب"}
              {course.category === "mobile" && "الموبايل"}
              {course.category === "ai" && "الذكاء الاصطناعي"}
              {course.category === "backend" && "الباك إند"}
            </Badge>
          </div>
          <h3 className="font-bold text-lg leading-tight">{course.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </CardHeader>

        <CardContent className="pb-3">
          {/* Meta */}
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-primary" />
              <span>{course.lessons} درس</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-bold">{course.rating}</span>
            <span className="text-sm text-muted-foreground">(4.8K)</span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl group-hover:shadow-lg group-hover:shadow-primary/30 transition-all"
            onClick={(e) => {
              e.preventDefault();
              onEnroll?.(course.id);
            }}
          >
            <Play className="w-4 h-4 ml-2" />
            ابدأ التعلم
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

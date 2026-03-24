"use client";

import { useState } from "react";
import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "الكل" },
  { id: "web", label: "تطوير الويب" },
  { id: "mobile", label: "الموبايل" },
  { id: "ai", label: "الذكاء الاصطناعي" },
  { id: "backend", label: "الباك إند" },
];

export function CourseGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const handleEnroll = (courseId: string) => {
    // In a real app, this would enroll the user
    console.log("Enrolling in course:", courseId);
  };

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/30">
            📚 مكتبة الدورات
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            اختر <span className="gradient-text">مسارك التعليمي</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8 دورات شاملة مصممة بعناية من خبراء الصناعة — من المبتدئ إلى المحترف
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`
                rounded-full px-6 transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary"
                }
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <CourseCard course={course} onEnroll={handleEnroll} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// Import Badge
import { Badge } from "@/components/ui/badge";

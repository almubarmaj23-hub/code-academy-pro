import { db } from "@/lib/db";
import { courses, quizQuestions } from "@/lib/data";

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing data
  await db.quizQuestion.deleteMany();
  await db.lesson.deleteMany();
  await db.course.deleteMany();

  // Seed courses
  const courseData = courses.map((course, index) => ({
    id: course.id,
    title: course.title,
    description: course.description,
    icon: course.icon,
    level: course.level,
    duration: course.duration,
    lessons: course.lessons,
    rating: course.rating,
    category: course.category,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

  for (const course of courseData) {
    await db.course.create({ data: course });
  }

  // Seed lessons for each course
  const lessonTemplates = [
    { courseId: "web-basics", title: "مقدمة في HTML5 وهيكل الصفحة", duration: "20 دقيقة", order: 1, isFree: true },
    { courseId: "web-basics", title: "العناصر الدلالية Semantic Elements", duration: "25 دقيقة", order: 2, isFree: true },
    { courseId: "web-basics", title: "النماذج والإدخال Forms & Input", duration: "30 دقيقة", order: 3, isFree: true },
    { courseId: "web-basics", title: "الجداول والقوائم Tables & Lists", duration: "20 دقيقة", order: 4, isFree: false },
    { courseId: "web-basics", title: "الوسائط: الصور والفيديو والصوت", duration: "25 دقيقة", order: 5, isFree: false },
    { courseId: "web-basics", title: "إمكانية الوصول Accessibility", duration: "30 دقيقة", order: 6, isFree: false },
    { courseId: "react", title: "مقدمة في React وJSX", duration: "30 دقيقة", order: 1, isFree: true },
    { courseId: "react", title: "Components وProps وState", duration: "35 دقيقة", order: 2, isFree: true },
    { courseId: "react", title: "React Hooks الأساسية", duration: "40 دقيقة", order: 3, isFree: true },
    { courseId: "react", title: "useEffect وإدارة الدورة", duration: "35 دقيقة", order: 4, isFree: false },
    { courseId: "react", title: "Context API وإدارة الحالة", duration: "45 دقيقة", order: 5, isFree: false },
    { courseId: "react", title: "React Router للتنقل", duration: "40 دقيقة", order: 6, isFree: false },
    { courseId: "python", title: "مقدمة في Python والمتغيرات", duration: "25 دقيقة", order: 1, isFree: true },
    { courseId: "python", title: "القوائم والمعاجم Lists & Dicts", duration: "30 دقيقة", order: 2, isFree: true },
    { courseId: "python", title: "البرمجة كائنية التوجه OOP", duration: "50 دقيقة", order: 3, isFree: true },
    { courseId: "python", title: "ملفات والاستثناءات Files & Exceptions", duration: "30 دقيقة", order: 4, isFree: false },
    { courseId: "python", title: "المكتبات NumPy وPandas", duration: "60 دقيقة", order: 5, isFree: false },
    { courseId: "python", title: "Django — تطبيق ويب كامل", duration: "90 دقيقة", order: 6, isFree: false },
    { courseId: "ai-ml", title: "مقدمة في الذكاء الاصطناعي", duration: "30 دقيقة", order: 1, isFree: true },
    { courseId: "ai-ml", title: "أساسيات تعلم الآلة", duration: "45 دقيقة", order: 2, isFree: true },
    { courseId: "ai-ml", title: "الشبكات العصبية العميقة", duration: "60 دقيقة", order: 3, isFree: true },
    { courseId: "ai-ml", title: "معالجة اللغة الطبيعية NLP", duration: "50 دقيقة", order: 4, isFree: false },
    { courseId: "ai-ml", title: "الرؤية الحاسوبية Computer Vision", duration: "55 دقيقة", order: 5, isFree: false },
    { courseId: "ai-ml", title: "مشروع: نموذج AI كامل", duration: "90 دقيقة", order: 6, isFree: false },
  ];

  for (const lesson of lessonTemplates) {
    await db.lesson.create({
      data: {
        ...lesson,
        description: `${lesson.title} - تعلم المفاهيم الأساسية والمتقدمة`,
        videoUrl: `https://www.youtube.com/embed/dQw4w9WgXcQ`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  // Seed quiz questions
  for (const question of quizQuestions) {
    await db.quizQuestion.create({
      data: {
        category: question.category,
        question: question.question,
        options: JSON.stringify(question.options),
        answerIndex: question.answerIndex,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  console.log("✅ Database seeded successfully!");
  console.log(`   - ${courseData.length} courses`);
  console.log(`   - ${lessonTemplates.length} lessons`);
  console.log(`   - ${quizQuestions.length} quiz questions`);
}

main().catch(console.error);

import { Navbar } from "@/components/code-academy/Navbar";
import { Hero } from "@/components/code-academy/Hero";
import { CourseGrid } from "@/components/code-academy/CourseGrid";
import { Roadmap } from "@/components/code-academy/Roadmap";
import { CodeEditor } from "@/components/code-academy/CodeEditor";
import { Quiz } from "@/components/code-academy/Quiz";
import { Stats } from "@/components/code-academy/Stats";
import { Footer } from "@/components/code-academy/Footer";
import { ScrollToTop } from "@/components/code-academy/ScrollToTop";
import { LessonViewer } from "@/components/code-academy/LessonViewer";
import { lessonsData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  // استخدام دروس HTML كمثال للعرض
  const sampleLessons = lessonsData.html.map((lesson) => ({
    num: lesson.num,
    title: lesson.title,
    dur: lesson.dur,
    free: lesson.free,
    videoUrl: lesson.videoUrl,
  }));

  return (
    <div className="relative min-h-screen">
      {/* Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div id="courses">
          <CourseGrid />
        </div>
        
        {/* Video Lessons Section */}
        <section id="lessons" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-purple-500 border-purple-500/30">
                🎬 دروس فيديو تفاعلية
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                تعلم بالفيديو <span className="gradient-text">خطوة بخطوة</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                شاهد دروس الفيديو عالية الجودة وتابع تقدمك في كل دورة
              </p>
            </div>
            <LessonViewer
              lessons={sampleLessons}
              courseTitle="أساسيات HTML5"
              courseIcon="🌐"
            />
          </div>
        </section>
        
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="editor">
          <CodeEditor />
        </div>
        <div id="quiz">
          <Quiz />
        </div>
        <Stats />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

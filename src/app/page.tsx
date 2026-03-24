import { Navbar } from "@/components/code-academy/Navbar";
import { Hero } from "@/components/code-academy/Hero";
import { CourseGrid } from "@/components/code-academy/CourseGrid";
import { Roadmap } from "@/components/code-academy/Roadmap";
import { CodeEditor } from "@/components/code-academy/CodeEditor";
import { Quiz } from "@/components/code-academy/Quiz";
import { Stats } from "@/components/code-academy/Stats";
import { Footer } from "@/components/code-academy/Footer";
import { ScrollToTop } from "@/components/code-academy/ScrollToTop";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Award,
  Target,
  Zap,
  BookOpen,
  Users,
  CheckCircle2,
  Star,
  Download,
  Share2
} from "lucide-react";

// Achievement Card Component
function AchievementCard({
  icon,
  title,
  description,
  progress,
  total,
  color
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  progress: number;
  total: number;
  color: string;
}) {
  const percentage = Math.round((progress / total) * 100);
  
  return (
    <Card className="overflow-hidden border-border hover:border-primary/30 transition-all">
      <div className={`h-1 ${color}`} />
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center text-white`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-sm mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{description}</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full ${color} transition-all duration-500`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">{progress}/{total}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Certificate Preview Component
function CertificatePreview() {
  return (
    <Card className="overflow-hidden border-border bg-gradient-to-br from-primary/5 to-accent/5">
      <CardContent className="p-8">
        <div className="border-4 border-primary/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Code Academy Pro</span>
          </div>
          <h2 className="text-2xl font-black mb-2 gradient-text">شهادة إتمام</h2>
          <p className="text-muted-foreground mb-4">
            يشهد بأن الطالب
          </p>
          <p className="text-xl font-bold mb-4">[اسم الطالب]</p>
          <p className="text-muted-foreground mb-4">
            قد أتم بنجاح دورة
          </p>
          <p className="text-lg font-bold text-primary mb-6">أساسيات تطوير الويب</p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>التاريخ: {new Date().toLocaleDateString('ar-EG')}</span>
            <span>•</span>
            <span>ساعات التعلم: 24</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Page() {
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
        
        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/30">
                ✨ مميزات المنصة
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                لماذا <span className="gradient-text">Code Academy Pro</span>؟
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                منصة تعليمية متكاملة تجمع بين الجودة والمحتوى العربي الأصيل
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <BookOpen className="w-6 h-6" />, title: "محتوى عربي 100%", desc: "دروس ومقالات باللغة العربية من خبراء عرب" },
                { icon: <Zap className="w-6 h-6" />, title: "تعلم تفاعلي", desc: "محرر كود مباشر واختبارات ذكية" },
                { icon: <Target className="w-6 h-6" />, title: "مسارات واضحة", desc: "خارطة طريق محددة لكل تخصص" },
                { icon: <Users className="w-6 h-6" />, title: "مجتمع داعم", desc: "آلاف الطلاب يتعلمون معك" },
              ].map((feature, i) => (
                <Card key={i} className="border-border hover:border-primary/30 transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 px-4 py-2 text-yellow-500 border-yellow-500/30">
                🏆 الإنجازات والشهادات
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                تتبع <span className="gradient-text">تقدمك</span> واحصل على شهادات
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                أكمل الدروس واجمع الشارات واحصل على شهادات إتمام معتمدة
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  إنجازاتك
                </h3>
                <div className="grid gap-3">
                  <AchievementCard
                    icon={<BookOpen className="w-5 h-5" />}
                    title="قارئ نهم"
                    description="أكمل 10 دروس"
                    progress={7}
                    total={10}
                    color="bg-blue-500"
                  />
                  <AchievementCard
                    icon={<CheckCircle2 className="w-5 h-5" />}
                    title="متميز"
                    description="أكمل دورة كاملة"
                    progress={0}
                    total={1}
                    color="bg-green-500"
                  />
                  <AchievementCard
                    icon={<Star className="w-5 h-5" />}
                    title="نجم لامع"
                    description="احصل على 100% في اختبار"
                    progress={0}
                    total={1}
                    color="bg-yellow-500"
                  />
                  <AchievementCard
                    icon={<Zap className="w-5 h-5" />}
                    title="سريع التعلم"
                    description="أكمل 5 دروس في يوم واحد"
                    progress={3}
                    total={5}
                    color="bg-purple-500"
                  />
                </div>
              </div>

              {/* Certificate Preview */}
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  معاينة الشهادة
                </h3>
                <CertificatePreview />
                <div className="flex gap-3 mt-4">
                  <Button className="flex-1 gap-2">
                    <Download className="w-4 h-4" />
                    تحميل PDF
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <Share2 className="w-4 h-4" />
                    مشاركة
                  </Button>
                </div>
              </div>
            </div>
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

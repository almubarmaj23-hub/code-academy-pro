"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/lib/data";
import { useState, useEffect, useRef } from "react";
import { Trophy, BookOpen, Video, Users } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "fas fa-trophy": Trophy,
  "fas fa-book-open": BookOpen,
  "fas fa-video": Video,
  "fas fa-users": Users,
};

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

function AnimatedCounter({ target, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const increment = target / (duration / 40);
    const timer = setInterval(() => {
      setCount((prev) => {
        const newCount = Math.min(prev + increment, target);
        return newCount;
      });
    }, 40);
    const timeout = setTimeout(() => clearInterval(timer), duration);
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [isVisible, target]);

  return (
    <div ref={ref}>
      <span className="text-4xl font-black gradient-text">
        {Math.round(count).toLocaleString()}
        {suffix && <span className="text-primary">{suffix}</span>}
      </span>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon] || Trophy;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

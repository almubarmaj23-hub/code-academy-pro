"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { roadmapSteps } from "@/lib/data";
import { motion } from "framer-motion";

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-green-500 border-green-500/30">
            🗺️ خارطة الطريق
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            مسار <span className="gradient-text">المطور الشامل</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اتبع هذا المسار لتصبح مطور ويب محترف في أقل من سنة
          </p>
        </div>

        {/* Roadmap Steps */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Step Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/30 shrink-0">
                  <span className="text-lg">{step.step}</span>
                </div>

                {/* Step Content */}
                <Card className="flex-1 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          المرحلة {step.step}
                        </Badge>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                      </div>
                      <span className="text-sm text-accent shrink-0">
                        ⏱ {step.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-primary/5 border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

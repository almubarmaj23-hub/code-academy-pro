"use client";

import { motion } from "framer-motion";
import { Github, Youtube, MessageCircle, Twitter, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto py-12 bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">CodeAcademy</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-1">الدورات</h4>
            <span className="text-sm text-muted-foreground">
              منصة تعليم البرمجة بالشرب هنا
            </span>
          </div>
          <a href="#articles" className="text-sm text-muted-foreground hover:text-primary">
            المقالات التقنية
          </a>
          <a href="#quiz" className="text-sm text-muted-foreground hover:text-primary">
            الاختبارات
          </a>
          <a href="#roadmap" className="text-sm text-muted-foreground hover:text-primary">
            قاموس المصطلحات
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary">
            تواصل معنا
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-6">
          <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors">
            <Youtube className="w-5 h-5 text-red-500" />
          </a>
          <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors">
            <MessageCircle className="w-5 h-5 text-indigo-600" />
          </a>
          <a href="#" className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors">
            <Twitter className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © 2026 Code Academy Pro — جميع الحقوق محفوظة | صُنع بـ ❤️ للمتعلمين العرب
        </p>
      </div>
    </footer>
  );
}

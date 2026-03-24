export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  duration: string;
  lessons: number;
  rating: number;
  category: 'web' | 'mobile' | 'ai' | 'backend';
  gradient: string;
  lessonsList?: Lesson[];
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  videoUrl?: string;
  duration: string;
  order: number;
  isFree: boolean;
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  answerIndex: number;
}

export interface UserProgress {
  id: string;
  userId: string;
  courseId: string;
  lessonId: string;
  completed: boolean;
}

export interface RoadmapStep {
  step: number;
  title: string;
  skills: string[];
  duration: string;
  icon: string;
}

export interface Stat {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  readTime: string;
}

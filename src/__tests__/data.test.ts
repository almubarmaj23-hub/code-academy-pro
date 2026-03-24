import { describe, it, expect } from '@jest/globals';

describe('Code Academy Pro - Unit Tests', () => {
  describe('Data Module', () => {
    it('should have 8 courses', () => {
      const { courses } = require('@/lib/data');
      expect(courses).toHaveLength(8);
    });

    it('should have quiz questions', () => {
      const { quizQuestions } = require('@/lib/data');
      expect(quizQuestions.length).toBeGreaterThan(0);
    });

    it('should have roadmap steps', () => {
      const { roadmapSteps } = require('@/lib/data');
      expect(roadmapSteps).toHaveLength(5);
    });

    it('should have stats', () => {
      const { stats } = require('@/lib/data');
      expect(stats).toHaveLength(4);
    });

    it('should have testimonials', () => {
      const { testimonials } = require('@/lib/data');
      expect(testimonials.length).toBeGreaterThan(0);
    });

    it('should have default code for editor', () => {
      const { defaultCode } = require('@/lib/data');
      expect(defaultCode).toHaveProperty('html');
      expect(defaultCode).toHaveProperty('css');
      expect(defaultCode).toHaveProperty('js');
    });

    it('should have courses with correct structure', () => {
      const { courses } = require('@/lib/data');
      const course = courses[0];
      expect(course).toHaveProperty('id');
      expect(course).toHaveProperty('title');
      expect(course).toHaveProperty('description');
      expect(course).toHaveProperty('icon');
      expect(course).toHaveProperty('level');
      expect(course).toHaveProperty('duration');
      expect(course).toHaveProperty('lessons');
      expect(course).toHaveProperty('rating');
      expect(course).toHaveProperty('category');
    });

    it('should have quiz questions with correct structure', () => {
      const { quizQuestions } = require('@/lib/data');
      const question = quizQuestions[0];
      expect(question).toHaveProperty('id');
      expect(question).toHaveProperty('category');
      expect(question).toHaveProperty('question');
      expect(question).toHaveProperty('options');
      expect(question).toHaveProperty('answerIndex');
      expect(Array.isArray(question.options)).toBe(true);
    });

    it('should have roadmap steps with correct structure', () => {
      const { roadmapSteps } = require('@/lib/data');
      const step = roadmapSteps[0];
      expect(step).toHaveProperty('step');
      expect(step).toHaveProperty('title');
      expect(step).toHaveProperty('skills');
      expect(step).toHaveProperty('duration');
      expect(step).toHaveProperty('icon');
      expect(Array.isArray(step.skills)).toBe(true);
    });
  });

  describe('Utility Functions', () => {
    it('should merge class names correctly', () => {
      const { cn } = require('@/lib/utils');
      expect(cn('foo', 'bar')).toBe('foo bar');
      expect(cn('foo', false && 'bar')).toBe('foo');
      expect(cn('foo', true && 'bar')).toBe('foo bar');
    });
  });
});

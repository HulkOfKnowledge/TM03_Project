/**
 * Learn Dashboard Page
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  CreditCard,
  BookOpen,
  Bell,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Footer } from '@/components/landing/Footer';
import { Navigation } from '@/components/dashboard/Navigation';


// ==================== Main Page Component ====================
export default function LearnDashboard() {
  const [checklistOpen, setChecklistOpen] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const totalTestimonials = 5;

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === totalTestimonials - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? totalTestimonials - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Main Content */}
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Welcome Section */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-brand mb-3">
              Welcome back, Kristin 👋
            </h1>
            <p className="text-base text-gray-400">
              Here's your financial path today. We're guiding you step by step.
            </p>
          </div>

          {/* Learning Path Section - Image 1 */}
          <section className="mb-16">
            <div className="bg-gradient-to-b from-gray-100 to-white dark:from-white/5 dark:to-transparent rounded-[32px] p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    {/* Placeholder for video/image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 fill-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Understanding Credit Applications
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Taking the right steps
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full border-2 border-brand text-brand">
                      Credit Basics
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      2 min
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 fill-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Understanding Credit Reports
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Equifax vs TransUnion
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full border-2 border-brand text-brand">
                      Credit Basics
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      3-step guide
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-pink-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 fill-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Why Your Credit Score Matters
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Learn what affects your score and what doesn't.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full border-2 border-brand text-brand">
                      Credit Basics
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      1 min learning card
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Beginner's Checklist - Image 2 */}
          {checklistOpen && (
            <section className="mb-16">
              <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10 relative">
                <button
                  onClick={() => setChecklistOpen(false)}
                  className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                <div className="grid lg:grid-cols-[1fr,400px] gap-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand mb-3">
                      Beginner's Checklist
                    </h2>
                    <p className="text-gray-400 mb-8">
                      Here's your financial path today. We're guiding you step
                      by step.
                    </p>

                    <div className="space-y-6">
                      {/* Checklist Item 1 */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                          <BookOpen className="h-6 w-6 text-brand" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start mb-2">
                            <h3 className="text-base font-semibold text-white">
                              Complete beginner's course
                            </h3>
                            <Link
                              href="#"
                              className="text-sm text-brand hover:text-[#5558E3] font-medium whitespace-nowrap ml-4 underline"
                            >
                              Get Started
                            </Link>
                          </div>
                          <p className="text-sm text-gray-400">
                            This is your core education module which would teach
                            you all you need to know
                          </p>
                        </div>
                      </div>

                      {/* Checklist Item 2 */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                          <CreditCard className="h-6 w-6 text-brand" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start mb-2">
                            <h3 className="text-base font-semibold text-white">
                              Let Creduman analyse your card
                            </h3>
                            <Link
                              href="#"
                              className="text-sm text-brand hover:text-[#5558E3] font-medium whitespace-nowrap ml-4 underline"
                            >
                              Get Started
                            </Link>
                          </div>
                          <p className="text-sm text-gray-400">
                            Allow Creduman to monitor your credit limit and
                            advise accordingly
                          </p>
                        </div>
                      </div>

                      {/* Checklist Item 3 */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                          <Bell className="h-6 w-6 text-brand" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start mb-2">
                            <h3 className="text-base font-semibold text-white">
                              Enable payment reminders
                            </h3>
                            <Link
                              href="#"
                              className="text-sm text-brand hover:text-[#5558E3] font-medium whitespace-nowrap ml-4 underline"
                            >
                              Get Started
                            </Link>
                          </div>
                          <p className="text-sm text-gray-400">
                            Never miss a due date and protect your score
                            effortlessly.
                          </p>
                        </div>
                      </div>

                      {/* Checklist Item 4 */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                          <Bell className="h-6 w-6 text-brand" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start mb-2">
                            <h3 className="text-base font-semibold text-white">
                              Set usage alerts
                            </h3>
                            <Link
                              href="#"
                              className="text-sm text-brand hover:text-[#5558E3] font-medium whitespace-nowrap ml-4 underline"
                            >
                              Get Started
                            </Link>
                          </div>
                          <p className="text-sm text-gray-400">
                            Choose when Creduman warns you about high spending.
                          </p>
                        </div>
                      </div>

                      {/* Checklist Item 5 */}
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center">
                          <Award className="h-6 w-6 text-brand" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start mb-2">
                            <h3 className="text-base font-semibold text-white">
                              Share Your Success Story
                            </h3>
                            <Link
                              href="#"
                              className="text-sm text-brand hover:text-[#5558E3] font-medium whitespace-nowrap ml-4 underline"
                            >
                              Get Started
                            </Link>
                          </div>
                          <p className="text-sm text-gray-400">
                            Share your success story in 3 months from your first
                            card and earn a bonus!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-full h-full bg-white/5 rounded-3xl" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Card Overview Section - Image 3 */}
          <section className="mb-16">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-2">
                  Card Overview
                </h2>
                <p className="text-gray-400">
                  Understand your card breakdowns at a glance
                </p>
              </div>

              <div className="border-t border-white/10 pt-12">
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <CreditCard className="h-12 w-12 text-white/60" />
                  </div>
                  <p className="text-gray-400 mb-2">
                    You haven't added any credit card yet,
                  </p>
                  <Link
                    href="/cards/add"
                    className="text-brand hover:text-[#5558E3] font-medium underline"
                  >
                    click here
                  </Link>
                  <span className="text-gray-400"> to add a card</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recommended for you - Image 4 */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand mb-2">
                  Recommended for you
                </h2>
                <p className="text-gray-400">
                  Learn all you need to know about Credit in Canada
                </p>
              </div>
              <Link
                href="/learn/all"
                className="px-6 py-2.5 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                View all
              </Link>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Recommended Card 1 */}
                <div className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 fill-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Soft vs Hard Inquiries
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Which ones hurt your score
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full border-2 border-brand text-brand">
                      Credit Basics
                    </span>
                    <span className="text-sm text-gray-400">20 min watch</span>
                  </div>
                </div>

                {/* Recommended Card 2 */}
                <div className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 fill-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    What is a Credit Score?
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Your financial reputation in three digits
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full border-2 border-brand text-brand">
                      Credit Basics
                    </span>
                    <span className="text-sm text-gray-400">20 min watch</span>
                  </div>
                </div>

                {/* Recommended Card 3 */}
                <div className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Play className="h-8 w-8 text-gray-800 fill-gray-800 ml-1" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    How Payment History Impacts Your Score
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Why paying on time matters most
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full border-2 border-[#EC4899] text-[#EC4899]">
                      Intermediate
                    </span>
                    <span className="text-sm text-gray-400">2 min read</span>
                  </div>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={prevTestimonial}
                  className="h-14 w-14 rounded-full bg-brand text-white hover:bg-[#5558E3] transition-colors flex items-center justify-center"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="h-14 w-14 rounded-full bg-white text-black hover:bg-gray-100 transition-colors flex items-center justify-center"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section - Image 5 */}
          <section className="mb-16">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Testimonials
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand mb-6">
                      Learn how Jane got a good credit limit after moving to
                      Canada
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Learn all you need to know about Credit in Canada with
                      Creduman as their credit safety and learning assistant.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="px-6 py-3 rounded-xl border-2 border-brand text-brand font-medium hover:bg-brand hover:text-white transition-colors">
                      Watch Now
                    </button>
                    
                    {/* Carousel Controls */}
                    <div className="flex items-center gap-2">
                      {[...Array(totalTestimonials)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentTestimonial
                              ? 'bg-brand w-8'
                              : 'bg-gray-300 dark:bg-gray-600 w-2'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                      <button
                        onClick={nextTestimonial}
                        className="ml-2 h-8 w-8 rounded-full bg-brand text-white hover:bg-[#5558E3] transition-colors flex items-center justify-center"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img 
                    src="/testimonial.svg" 
                    alt="Testimonial" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
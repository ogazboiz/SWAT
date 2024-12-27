import React from 'react';
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        {/* Left column with images */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Business meeting"
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Business consultation"
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <div className="bg-purple-950 text-white p-6 rounded-lg">
            <div className="text-5xl font-bold">10<sup className="text-xl">+</sup></div>
            <div className="text-sm mt-2">Happy Clients</div>
          </div>
        </div>

        {/* Right column with content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-purple-600 font-medium relative inline-block">
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-red-600"></span>
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              We Are Business Consultants Dedicated To Driving Your Success
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            We've been a Strategy and Technology service provider for nearly two decades, and we bring unrivaled capabilities, tools, technologies, and talent to every engagement, augmented by an ecosystem of best-of-breed partners that provide specialized expertise. We'll help you mobilize for change, navigate uncertainty, and flex as needed, so you achieve sustained, profitable growth—a feat only 1 in 11 companies manages to pull off.
          </p>

          <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600">
            "We offer creative solutions that have helped lots of brands, individuals, organizations, and companies across the globe and sectors develop and execute winning strategies and Technology solutions".
          </blockquote>

          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-md"
          >
            Learn More <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}


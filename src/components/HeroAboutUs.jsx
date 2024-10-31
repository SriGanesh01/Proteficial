import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HeroAboutUs() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen">
      <Header />

      <main className="container mx-auto p-8 space-y-16">
        <section className="bg-purple-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-300 text-lg mb-6">
            We are a young passionate team of students, driven by innovation and committed to addressing the protein folding problem. We strive to bridge the gap between biological complexity and computational precision, aiming to enhance the understanding of the intricate protein structure and behavior in its best possibility.
          </p>
          <button className="px-4 py-2 bg-gradient-to-r from-[#0082d3] via-[#9335b6] to-[#e2008f] text-white rounded-lg">
            Read More
          </button>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0082d3] via-[#9335b6] to-[#e2008f]">
            OUR MISSION
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
          </p>
        </section>


        <section className="space-y-8">
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0082d3] via-[#9335b6] to-[#e2008f]">
              THE STORY BEHIND
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
            </p>
          </div>


          <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-2">Image Text Combo 1</h2>
            <p className="text-gray-300">Content for the Image Text Combo goes here...</p>
          </div>
        </section>


        <section className="space-y-8">
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0082d3] via-[#9335b6] to-[#e2008f]">
              OUR GOALS AND VISION
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
            </p>
          </div>
        </section>


        <section className="space-y-8">
          <div className="bg-purple-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0082d3] via-[#9335b6] to-[#e2008f]">
              MAKING AN IMPACT
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HeroAboutUs;

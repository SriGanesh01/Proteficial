import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EachaboutUs from "./EachAboutUs";
import ImageAboutUs1 from "../assets/ImageAboutUs1.svg";

function HeroAboutUs() {
    return (
        <div>

            <div className=" bg-gradient-to-b from-[#29003E] to-[#070309] h-screen flex items-center justify-center">
                <div className="bg-[#160423] rounded-2xl shadow-xl p-6 md:p-12 flex flex-col md:flex-row items-center max-w-5xl">
                    <section className="text-white max-w-2xl p-8">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-lg mb-6 leading-relaxed">
                            We are a young passionate team of students, driven by innovation and committed  to addressing the protein folding problem. We strive to bridge the gap between biological complexity and computational precision, aiming to enhance the understanding of  the intricate protein structure and behavior in its best possibility.
                        </p>
                        <button className="bg-gradient-to-tr from-[#0082d3] via-[#9335b6] to-[#e2008f] px-6 py-2 rounded-3xl text-white text-lg font-['Actor'] hover:opacity-90">
                            <a href="/blog" className="flex justify-center items-center">Read More</a>
                        </button>
                    </section>
                    <div className="p-8">
                        <img src={ImageAboutUs1} alt="Team members collaborating on a project" className="w-[36rem] h-auto rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>


            <div className="bg-[#070309]">
                <EachaboutUs title="OUR MISSION" content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph." />
                <EachaboutUs title="THE STORY BEHIND" content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph." />
                <EachaboutUs img3="https://placehold.co/600x400" title="OUR TEAM" content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph." />
                <EachaboutUs title="OUR GOALS AND VISION" content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph." />
                <EachaboutUs title="MAKING AN IMPACT" content="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph." />

                <div>

                </div>
            </div>
        </div>
    );
}

export default HeroAboutUs;

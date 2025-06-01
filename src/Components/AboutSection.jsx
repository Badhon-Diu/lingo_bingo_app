import { BookOpen, BrainCircuit, PenTool, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start\">
      <div className="rounded-full p-3 bg-[#fee5eb] text-[#ff6388] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-secondary-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-secondary-700">
              Making Japanese Learning{" "}
              <span className="text-[#e02450]">Fun & Effective</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Lingo Bingo is designed to help you master Japanese vocabulary
              through interactive, context-based learning. Our approach combines
              visual cues, pronunciation practice, and real-world usage examples
              to make your learning journey enjoyable and effective.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're a complete beginner or looking to expand your
              vocabulary, our structured lessons and interactive tools will help
              you build confidence in using Japanese in everyday situations.
            </p>
            <Link to="/start-learning">
              <button className="py-2 px-4 bg-[#ff6388] text-xl rounded-xl text-white font-semibold">
                Start Your Learning Journey
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" data-aos="fade-left" data-aos-delay="200">
            <Feature
              icon={<BookOpen size={24} />}
              title="Structured Lessons"
              description="Progress through carefully designed lessons that build your vocabulary systematically."
            />
            <Feature
              icon={<Volume2 size={24} />}
              title="Pronunciation Practice"
              description="Hear native pronunciation and practice speaking with our audio tools."
            />
            <Feature
              icon={<PenTool size={24} />}
              title="Context-Rich Learning"
              description="Learn when and how to use words in real Japanese conversations."
            />
            <Feature
              icon={<BrainCircuit size={24} />}
              title="Interactive Methods"
              description="Engage with vocabulary through multiple learning techniques for better retention."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

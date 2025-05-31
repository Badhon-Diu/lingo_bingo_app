import { Book, BookOpen, Lightbulb, Users } from "lucide-react";
import CountUp from "react-countup";

const Stat = ({ icon, value, label, suffix = "", duration = 2.5 }) => {
  return (
    <div className="text-center animate__animated  animate__backInUp ">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fee5eb] text-[#ff6388] rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-[#210036] mb-2">
        <CountUp end={value} duration={duration} suffix={suffix} />
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#210036] animate__animated  animate__backInUp">
          Our Growing Community
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat
            icon={<Users size={32} />}
            value={10450}
            label="Active Learners"
            suffix="+"
          />
          <Stat
            icon={<Book size={32} />}
            value={10}
            label="Comprehensive Lessons"
          />
          <Stat
            icon={<BookOpen size={32} />}
            value={500}
            label="Vocabulary Words"
            suffix="+"
          />
          <Stat
            icon={<Lightbulb size={32} />}
            value={24}
            label="Tutorial Videos"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;

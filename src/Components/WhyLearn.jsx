import { Briefcase, Globe, LayoutList, TrendingUp } from "lucide-react";

const Reason = ({ icon, title, description }) => {
  return (
    <div className="card p-6 h-full bg-white rounded-xs animate__animated animate__backInUp">
      <div
        className="inline-flex items-center justify-center w-12 h-12 bg-[#fff4c6]
      text-[#e6c200] rounded-full mb-4"
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-[#36005c]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyLearn = () => {
  return (
    <section className="section p-4 bg-gradient-to-r from-[#eee7f3] to-[#fef2f5] mb-12 ">
      <div className="container-custom">
        <div className="text-center mb-12  ">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 text-[#36005c] mt-3"
            data-aos="fade-up"
          >
            Why Learn Japanese?
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Japanese is more than just a language—it's a gateway to a rich
            culture, exciting opportunities, and meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reason
            icon={<Globe size={24} />}
            title="Cultural Immersion"
            description="Access Japanese media, literature, and traditions in their original form and gain deeper cultural understanding."
          />
          <Reason
            icon={<TrendingUp size={24} />}
            title="Growing Popularity"
            description="Japanese is increasingly popular globally, with anime, manga, and Japanese culture gaining international recognition."
          />
          <Reason
            icon={<LayoutList size={24} />}
            title="Unique Language Structure"
            description="Learning Japanese introduces you to a fascinating language system that develops cognitive flexibility."
          />
          <Reason
            icon={<Briefcase size={24} />}
            title="Career Opportunities"
            description="Open doors to jobs in translation, international business, tourism, and technology with Japanese companies."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;

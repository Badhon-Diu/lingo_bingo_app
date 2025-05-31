import { Star } from "lucide-react";

const Testimonial = ({ name, role, quote, avatar, rating }) => {
  return (
    <div className="card p-6 my-5">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-[#36005c]">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating ? "text-[#ffd700] fill-[#ffd700]" : "text-gray-300"
            }
          />
        ))}
      </div>

      <p className="text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

const Feedback = () => {
  return (
    <section className="section my-9">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#36005c]">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied learners who have improved their
            Japanese with Lingo Bingo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial
            name="Emma Johnson"
            role="Beginner Learner"
            quote="Lingo Bingo made learning Japanese vocabulary so much easier! The context examples really helped me understand when to use different words."
            avatar="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
            rating={5}
          />
          <Testimonial
            name="Alex Chen"
            role="Intermediate Learner"
            quote="I've tried many Japanese learning apps, but this one stands out with its pronunciation feature and real-world examples. Highly recommended!"
            avatar="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300"
            rating={4}
          />
          <Testimonial
            name="Maya Rodriguez"
            role="Advanced Learner"
            quote="The video tutorials combined with vocabulary practice create the perfect learning environment. It's helped me prepare for my trip to Japan!"
            avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
            rating={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;

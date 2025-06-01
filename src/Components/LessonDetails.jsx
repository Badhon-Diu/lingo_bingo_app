import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function LessonDetails() {
  const [alldata, setalldata] = useState([]);

  
  const params = useParams();
  console.log(alldata);
//   console.log(params);
  useEffect(() => {
    fetch(`https://badhon-diu.github.io/lessondata/${params.lessonId}.json`)
      .then((res) => res.json())
      .then((data) => setalldata(data));
  }, []);

  return (
    <>
      <div className="my-20">
        {/* Hero Section */}
        <div className="relative h-[240px] md:h-[320px] lg:h-[400px] w-full overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1549693578-d683be217e58?auto=format&fit=crop&w=1470&q=80"
            alt="Kyoto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Learn: ありがとう (Arigatou)
            </h1>
          </div>
        </div>
        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Back Link */}
          <Link
           to = "/start-learning"
            className="text-pink-600 hover:underline block mb-6"
          >
            ← Back to Cards
          </Link>
          {/* Card */}
          <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">ありがとう</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                Easy
              </span>
            </div>
            <p>
              <strong>Pronunciation:</strong>{" "}
              <span className="text-pink-600">Arigatou</span>
            </p>
            <p>
              <strong>Meaning:</strong> Thank you
            </p>
            <p>
              <strong>Lesson No:</strong> 1
            </p>
            <p>
              <strong>Part of Speech:</strong> Expression
            </p>
            {/* Example */}
            <div className="bg-gray-100 border-l-4 border-pink-500 p-4 rounded-lg">
              <p className="font-semibold">Example:</p>
              <p>ありがとう、手伝ってくれて！</p>
              <p className="text-sm text-gray-600">
                (arigatou, tetsudatte kurete!) – Thank you for helping me!
              </p>
            </div>
            {/* Bonus Content */}
            <div className="space-y-4">
              <p>
                <strong>Polite Form:</strong> ありがとうございます (arigatou
                gozaimasu)
              </p>
              {/* Audio */}
              <div>
                <p>
                  <strong>Audio Pronunciation:</strong>
                </p>
                <audio
                  controls=""
                  className="w-full rounded-lg border border-gray-300 shadow-sm"
                >
                  <source src="arigatou.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
              {/* Related Phrases */}
              <div>
                <p>
                  <strong>Related Expressions:</strong>
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  <li>どうも (Doumo) – Thanks (casual)</li>
                  <li>どうもありがとうございます – Thank you very much</li>
                </ul>
              </div>
              {/* Cultural Tip */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p>
                  <strong>Cultural Tip:</strong>
                </p>
                <p>
                  In Japan, people often bow slightly when saying “ありがとう”
                  to show politeness and gratitude.
                </p>
              </div>
              {/* Grammar Note */}
              <p>
                <strong>Grammar Note:</strong> “Arigatou” is an expression, not
                a verb. It’s used after receiving help, kindness, or gifts.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

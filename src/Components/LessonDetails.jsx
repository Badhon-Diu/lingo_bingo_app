import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function LessonDetails() {
  const [alldata, setalldata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://badhon-diu.github.io/lessondata/${params.lessonId}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch lesson data");
        }
        const data = await response.json();
        setalldata(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.lessonId]);


  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  if (!alldata)
    return <div className="text-center py-10">No data available</div>;

  return (
    <>
      <div className="my-20">
        {/* Hero Section */}
        <div className="relative h-[240px] md:h-[320px] lg:h-[400px] w-full overflow-hidden shadow-md">
          <img
            src={alldata.image}
            alt="Kyoto"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Learn : {alldata.kanji} ({alldata.romaji})
            </h1>
          </div>
        </div>
        {/* Main Content */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Back Link */}
          <Link
            to="/start-learning"
            className="text-pink-600 hover:underline block mb-6"
          >
            ← Back to Cards
          </Link>
          {/* Card */}
          <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">{alldata.kanji} </h2>
              <span
                className={`text-sm ${
                  alldata.difficulty === "Easy" &&
                  " bg-green-100 text-green-800 "
                } px-2 py-1 ${
                  alldata.difficulty === "Medium" &&
                  " bg-yellow-100 text-yellow-800 "
                } rounded-full ${
                  alldata.difficulty === "Hard" && " bg-red-100 text-red-800 "
                }   `}
              >
                {alldata.difficulty}
              </span>
            </div>
            <p>
              <strong>Pronunciation :</strong>{" "}
              <span className="text-pink-600">{alldata.romaji}</span>
            </p>
            <p>
              <strong>Meaning :</strong> {alldata.meaning}
            </p>
            <p>
              <strong>Lesson No :</strong> {alldata.lesson}
            </p>
            <p>
              <strong>Part of Speech :</strong> {alldata.part_of_speech}
            </p>
            {/* Example */}
            <div className="bg-gray-100 border-l-4 border-pink-500 p-4 rounded-lg">
              <p className="font-semibold">Example :</p>
              <p>{alldata?.example?.japanese || "No example available"}</p>
              <p className="text-sm text-gray-600">
                {alldata?.example?.romaji || ""}
              </p>
              <p className="text-sm text-gray-600">
                {alldata?.example?.translation || ""}
              </p>
            </div>
            {/* Bonus Content */}
            <div className="space-y-4">
              <p>
                <strong>Polite Form :</strong> あ{alldata.polite_form}
              </p>
              {/* Audio */}
              {alldata?.audio && (
                <div>
                  <p>
                    <strong>Audio Pronunciation:</strong>
                  </p>
                  <audio
                    controls
                    className="w-full rounded-lg  my-2"
                    onError={(e) => {
                      console.error("Error loading audio:", e.target.error);
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  >
                    <source src={`/audio/${alldata.audio}`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <p className="text-red-500 text-sm mt-1 hidden">
                    Audio not available
                  </p>
                </div>
              )}
              {/* Related Phrases */}
              <div>
                <p>
                  <strong>Related Expressions:</strong>
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {alldata.related_expressions.map((n) => (
                    <li>
                      {n.expression} – {n.meaning}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Cultural Tip */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p>
                  <strong>Cultural Tip :</strong>
                </p>
                <p>{alldata.cultural_tip}</p>
              </div>
              {/* Grammar Note */}
              <p>
                <strong>Grammar Note :</strong> {alldata.grammar_note}
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

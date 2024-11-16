import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Shimmer from "./component/Shimmer";

const MemeCard = ({ data }) => {
  const memeData = data || {};

  return (
    <div
      className="bg-slate-300 border-2 rounded shadow-2xl
       border-lime-200 w-[200px] p-5 m-5 flex flex-col justify-center hover:cursor-pointer"
      onClick={() => {
        window.open(memeData?.postLink);
      }}
    >
      {memeData.preview && memeData.preview.length > 0 ? (
        <img
          src={memeData.url}
          onError={(e) => {
            e.target.src = memeData.preview[1] || "fallback-image-url";
          }}
          alt={memeData.title || "Meme Image"}
        />
      ) : (
        <p>No image available</p>
      )}
      <p>{memeData.title || "Untitled"}</p>
    </div>
  );
};

function App() {
  const [memeResourceData, setMemeResourceData] = useState([]);

  useEffect(() => {
    getMemeResources();
  }, []);

  const getMemeResources = async () => {
    try {
      const memeData = await fetch("https://meme-api.com/gimme/20");
      const { memes } = await memeData.json();
      console.log(memes);

      if (memes) setMemeResourceData(memes);
    } catch (error) {
      console.error("Failed to fetch meme data:", error);
    }
  };

  return !memeResourceData.length ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap">
      {memeResourceData.map((memeData, index) => (
        <MemeCard key={index} data={memeData} />
      ))}
    </div>
  );
}

export default App;

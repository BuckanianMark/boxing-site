import { useState, useEffect } from "react";
import { videos } from "../lib/dummyData";
import Loading from "../assets/loading.svg";

const Videos = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating asynchronous data fetching
    setTimeout(() => {
      setData(videos);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mt-5">
    <h1 className="border-b-2 mb-2 w-max border-teal-800 text-teal-800">Workout Videos</h1>
    {loading ? (
      <div className="flex items-center justify-center"><img src={Loading} alt="Loading..." width={100}/></div>
    ) : (
      <div className="flex flex-wrap items-center gap-4 py-2">
        {data.map((vid, index) => (
          <div className="w-[300px] h-[170px] object-cover rounded py-2" key={index} dangerouslySetInnerHTML={{ __html: vid }} />
        ))}
      </div>
    )}
  </div>
  )
}

export default Videos
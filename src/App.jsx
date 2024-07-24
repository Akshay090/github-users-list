/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { AvatarCard, SkeletonAvatarCard } from "./components/AvatarCard";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { getDataByPage } from "./data";

export default function App() {
  const [data, setData] = useState([]);

  const endOfPageRef = useRef(null);

  const isEndReached = useIntersectionObserver(endOfPageRef, {
    rootMargin: "0px 0px 200px 0px", // Trigger 200px before the element is visible
  });

  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage((prevPage) => prevPage + 1);
  }, [isEndReached]);

  useEffect(() => {
    // fetch(`https://api.github.com/orgs/mozilla/members?page=${page}`)
    //   .then((response) => response.json())
    // .then((newData) => setData((prevData) => [...prevData, ...newData]));
    // setData(payload);

    console.log("data fetch page ", page);
    setIsLoading(true);
    getDataByPage(page).then((newData) => {
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div>
      <h1 className="text-center my-4">Github Org Members</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((userData, idx) => (
          <AvatarCard key={idx} userData={userData} />
        ))}
        {isLoading && <SkeletonAvatarCard />}
      </div>

      <div ref={endOfPageRef} />
    </div>
  );
}

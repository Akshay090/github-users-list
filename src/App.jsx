import { useEffect, useState, useRef } from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { getDataByPage } from "./data";
import AvatarGrid from "./components/AvatarGrid";

export default function App() {
  const [data, setData] = useState([]);

  const endOfPageRef = useRef(null);

  // TODO - current way to detect end of page needs an extra element approach can be improved
  const isEndReached = useIntersectionObserver(endOfPageRef, {
    rootMargin: "0px 0px 200px 0px", // Trigger 200px before the element is visible
  });

  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage((prevPage) => prevPage + 1);
  }, [isEndReached]);

  useEffect(() => {
    setIsLoading(true);
    getDataByPage({
      page,
      useMock: true,
    }).then((newData) => {
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div>
      <h1 className="text-center my-4">Github Org Members</h1>
      <AvatarGrid isLoading={isLoading} data={data}  endOfPageRef={endOfPageRef}/>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { AvatarCard, SkeletonAvatarCard } from "./AvatarCard";

const AvatarGrid = ({ isLoading, data = [], endOfPageRef }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((userData, idx) => (
          <AvatarCard key={idx} userData={userData} />
        ))}
        {isLoading && <SkeletonAvatarCard />}
      </div>
      <div ref={endOfPageRef} />
      {/* TODO - change implementation to know end reached
      context - adding Extra div at end to know if last element reached is a kind of hack
      */}
    </>
  );
};

export default AvatarGrid;

// TODO - Add PropTypes
// Can add Types via jsdoc as project is not ts based

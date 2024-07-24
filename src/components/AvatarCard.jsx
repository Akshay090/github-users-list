// eslint-disable-next-line react/prop-types
const AvatarCard = ({ userData }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src={userData.avatar_url}
        alt={`${userData.login}'s avatar`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{userData.login}</div>
        <p className="text-gray-700 text-base">ID: {userData.id}</p>
        <p className="text-gray-700 text-base">Type: {userData.type}</p>
        <a
          href={userData.html_url}
          className="text-blue-500 hover:text-blue-700"
        >
          GitHub Profile
        </a>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {userData.site_admin ? "Admin" : "User"}
        </span>
      </div>
    </div>
  );
};

const SkeletonAvatarCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      </div>
    </div>
  );
};

export { AvatarCard, SkeletonAvatarCard };

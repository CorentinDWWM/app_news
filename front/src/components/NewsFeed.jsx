import { useContext, useState } from "react";
import NewsForm from "./NewsForm";
import { PostContext } from "../context/PostContext";
import { AuthContext } from "../context/AuthContext";

function NewsFeed() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const { news, addNews } = useContext(PostContext);
  const { user } = useContext(AuthContext);

  // régler le pb de l'heure

  const categories = [
    { id: "all", label: "All" },
    { id: "technology", label: "Technology" },
    { id: "health", label: "Health" },
    { id: "politics", label: "Politics" },
    { id: "business", label: "Business" },
    { id: "entertainment", label: "Entertainment" },
    { id: "sports", label: "Sports" },
    { id: "science", label: "Science" },
  ];

  // Récupération et attribution des posts

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const formatDate = (createdAt) => {
    const newDate = new Date(createdAt);
    return newDate.toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 sm:mb-0">
          News Feed
        </h2>
        <button onClick={toggleForm} className="btn btn-primary">
          {isFormVisible ? "Cancel" : "Add Post"}
        </button>
      </div>

      {isFormVisible && (
        <div className="mb-6">
          <NewsForm toggleForm={toggleForm} />
        </div>
      )}

      <div className="mb-4 overflow-x-auto">
        <div className="flex space-x-2 p-1">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-1 text-sm rounded-full transition-colors 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {news.map((post) => (
          <div
            key={post._id}
            className="flex flex-col gap-2 p-4 card border-b border-r border-gray-300"
          >
            <div className="flex items-center justify-start gap-2">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">#{post.category}</p>
            </div>
            <p className="text-gray-600">{post.content}</p>
            <div className="flex items-center justify-start gap-2">
              <p className="italic text-gray-600">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;

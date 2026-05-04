import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { EmptyState, ErrorState, Loader } from "../components/ui";
import VideoCard from "../features/videos/components/VideoCard";
import { searchVideo } from "../features/videos/api";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) return;

      try {
        setLoading(true);
        setError("");

        const results = await searchVideo(query);
        setVideos(results?.videos || results || []);
      } catch (error) {
        setError(error.message || "Failed to search videos");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="flex min-h-80 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        title="Search failed"
        description={error}
      />
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-text">
          Search results
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing results for "{query}"
        </p>
      </div>

      {!videos.length ? (
        <EmptyState
          title="No videos found"
          description="Try searching with a different keyword."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchResults;
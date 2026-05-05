import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { EmptyState, ErrorState, Loader } from "../components/ui";
import VideoCard from "../features/videos/components/VideoCard";
import { searchVideoThunk } from "../features/videos/videoThunk";
import { clearSearchResults } from "../features/videos/videoSlice";

function SearchResults() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const { searchResults, loading, error } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    if (!query.trim()) {
      dispatch(clearSearchResults());
      return;
    }

    dispatch(
      searchVideoThunk({
        query,
        page: 1,
        limit: 12,
      })
    );
  }, [dispatch, query]);

  if (loading.search) {
    return (
      <div className="flex min-h-80 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <ErrorState title="Search failed" description={error} />;
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

      {!searchResults.length ? (
        <EmptyState
          title="No videos found"
          description="Try searching with a different keyword."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchResults.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </section>
  );
}

export default SearchResults;
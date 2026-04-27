import { useDispatch, useSelector } from "react-redux";
import { toggleLikeThunk } from "./likeThunk";

export const useLike = (targetType, targetId) => {
  const dispatch = useDispatch();

  const key = `${targetType}_${targetId}`;

  const likeData = useSelector((state) => state.likes.likesByTarget[key]);

  const loading = useSelector((state) => state.likes.loading);

  const isLiked = likeData?.isLiked || false;
  const likeCount = likeData?.likeCount || 0;
  const likes = likeData?.likes || [];

  const toggleLike = () => {
    dispatch(toggleLikeThunk({ targetType, targetId }));
  };

  return {
    isLiked,
    likeCount,
    likes,
    loading,
    toggleLike,
  };
};
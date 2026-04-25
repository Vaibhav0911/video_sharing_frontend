import { useDispatch, useSelector } from "react-redux";
import { toggleSubscribeChannelThunk } from "../subscriptionThunk.js";
import { getChannelProfileThunk } from "../../profile/profileThunk.js";

function SubscribeButton({
  username,
  isSubscribed,
  isOwner,
}) {
  const dispatch = useDispatch();
  const { toggleLoading } = useSelector((state) => state.subscriptions);

  const handleToggle = async () => {
    const result = await dispatch(
      toggleSubscribeChannelThunk(username)
    );

    if (toggleSubscribeChannelThunk.fulfilled.match(result)) {
      // IMPORTANT: refresh profile after toggle
      // so subscribersCount + isSubscribed update
      dispatch(getChannelProfileThunk(username));
    }
  };

  if (isOwner) return null;

  return (
    <button
      onClick={handleToggle}
      disabled={toggleLoading}
      className={`px-5 py-2 rounded-full text-sm font-semibold ${
        isSubscribed
          ? "bg-neutral-800 text-white"
          : "bg-white text-black"
      }`}
    >
      {toggleLoading
        ? "Please wait..."
        : isSubscribed
        ? "Subscribed"
        : "Subscribe"}
    </button>
  );
}

export default SubscribeButton;
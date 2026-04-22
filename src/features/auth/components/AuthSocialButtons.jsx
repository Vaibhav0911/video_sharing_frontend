import React from "react";
import { Button } from "../../../components/ui";

function AuthSocialButtons({
  onGoogleClick,
  onGithubClick,
  showGithub = false,
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Button
        type="button"
        variant="outline"
        className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10"
        onClick={onGoogleClick}
      >
        Continue with Google
      </Button>

      {showGithub ? (
        <Button
          type="button"
          variant="outline"
          className="w-full border-white/10 bg-white/5 text-white hover:bg-white/10"
          onClick={onGithubClick}
        >
          Continue with GitHub
        </Button>
      ) : null}
    </div>
  );
}

export default AuthSocialButtons;
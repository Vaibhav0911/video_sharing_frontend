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
        className="w-full border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        onClick={onGoogleClick}
      >
        Continue with Google
      </Button>

      {showGithub ? (
        <Button
          type="button"
          variant="outline"
          className="w-full border-gray-200 bg-gray-100 text-gray-900 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          onClick={onGithubClick}
        >
          Continue with GitHub
        </Button>
      ) : null}
    </div>
  );
}

export default AuthSocialButtons;
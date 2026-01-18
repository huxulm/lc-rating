"use client";

import { LC_RATING_AUTH_TOKEN_KEY } from "@/config/constants";
import { useEffect } from "react";

const AuthTokenHandler = () => {
  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const token = currentUrl.searchParams.get("token");

    if (!token) {
      return;
    }

    localStorage.setItem(LC_RATING_AUTH_TOKEN_KEY, token);
    window.dispatchEvent(new Event("lc-rating-auth-update"));
    currentUrl.searchParams.delete("token");
    window.history.replaceState({}, "", currentUrl.toString());
  }, []);

  return null;
};

export { AuthTokenHandler };

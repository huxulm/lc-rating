"use client";

import {
  API_BASE,
  LC_RATING_AUTH_TOKEN_KEY,
  LC_RATING_LAST_SYNC_AT_KEY,
} from "@/config/constants";
import { useProgressStore } from "@/hooks/useProgress";
import { useEffect } from "react";
import { toast } from "sonner";

const AuthTokenHandler = () => {
  const setAllProgress = useProgressStore((state) => state.setAllProgress);

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

    const handleSync = () => {
      fetch(`${API_BASE}/api/getprogress`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data?.success) {
            throw new Error(data?.message ?? "拉取失败");
          }

          const rows = data?.result?.results ?? data?.result ?? [];
          const progress: Record<string, string> = {};
          const progressUpdatedAt: Record<string, number> = {};
          rows.forEach(
            (row: { problem_id?: string; progress?: string; updated_at?: string }) => {
              if (row.problem_id && row.progress) {
                progress[row.problem_id] = row.progress;
                if (row.updated_at) {
                  const timestamp = Date.parse(row.updated_at);
                  if (!Number.isNaN(timestamp)) {
                    progressUpdatedAt[row.problem_id] = timestamp;
                  }
                }
              }
            }
          );

          setAllProgress(progress, progressUpdatedAt);
          const now = Date.now();
          localStorage.setItem(LC_RATING_LAST_SYNC_AT_KEY, String(now));
          toast("云端同步成功");
        })
        .catch((error) => {
          console.error("Error syncing from cloud:", error);
          toast("云端同步失败");
        });
    };

    toast("已登录，可从云端拉取进度", {
      action: {
        label: "拉取",
        onClick: handleSync,
      },
    });
  }, []);

  return null;
};

export { AuthTokenHandler };

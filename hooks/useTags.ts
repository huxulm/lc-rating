import { useEffect, useState, useTransition } from "react";

export type Tag = [number, string, string];
export type Tags = Tag[];

export function useTags() {
  // tags
  const [isPending, startTransition] = useTransition();
  const [tags, setTags] = useState<Tags>([]);

  useEffect(() => {
    fetch(
      "/lc-rating/tags.json?t=" + (new Date().getTime() / 100000).toFixed(0)
    )
      .then((res) => res.json())
      .then((result: Tags) => {
        startTransition(() => {
          setTags(
            result.sort(function (t1, t2) {
              return t1[2].localeCompare(t2[2]);
            })
          );
        });
      });
  }, []);

  return { tags, isPending };
}

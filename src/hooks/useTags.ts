import { useEffect, useState, useTransition } from "react"

type Tags = any[];

export function useTags() {
    // tags
    const [isPending, startTransition] = useTransition();
    const [tags, setTags] = useState<Tags>([]);

    useEffect(() => {
        fetch("/lc-rating/tags.json?t=" + (new Date().getTime() / 100000).toFixed(0))
            .then((res) => res.json())
            .then((result: Tags) => {
                startTransition(() => {
                    setTags(result);
                });
            });
    }, []);

    return {tags, isPending};
}
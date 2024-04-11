import { useEffect, useState, useTransition } from "react"

type Tags = Record<string, any>;

export function useQuestionTags(filter: any) {
    // tags
    const [isPending, startTransition] = useTransition();
    const [tags, setTags] = useState<Tags>({});

    useEffect(() => {
        fetch("/lc-rating/qtags.json?t=" + (new Date().getTime() / 100000).toFixed(0))
            .then((res) => res.json())
            .then((result: Tags) => {
                startTransition(() => {
                    setTags(result);
                });
            });
    }, [filter]);

    return {tags, isPending};
}
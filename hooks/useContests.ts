import { useEffect, useState, useTransition } from "react"
import { Contest, mapContests } from "../util/makeData";

type Contests = any[];

export function useContests() {
    const [isPending, startTransition] = useTransition();
    const [contests, setContests] = useState<Contest[]>([]);

    useEffect(() => {
        fetch("/lc-rating/contest.json?t=" + (new Date().getTime() / 100000).toFixed(0))
            .then((res) => res.json())
            .then((result: Contests) => {
                startTransition(() => {
                    setContests(mapContests(result));
                });
            });
    }, []);

    return {contests, isPending};
}

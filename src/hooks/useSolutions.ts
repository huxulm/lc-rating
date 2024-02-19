import { useEffect, useState, useTransition } from "react"

type Solution = any;

export function useSolutions(filter: any) {
    // solutions
    const [isPending, startTransition] = useTransition();
    const [solutions, setSolutions] = useState<Record<string, Solution>>({});

    useEffect(() => {
        fetch("/lc-rating/solutions.json?t=" + (new Date().getTime() / 100000).toFixed(0))
            .then((res) => res.json())
            .then((result: Solution[]) => {
                startTransition(() => {
                    let _solutions: any = {};
                    result.forEach(v => {
                        let key: string = v[6];
                        if (filter === "" || v[0].indexOf(filter) != -1 || v[4].indexOf(filter) != -1) {
                            _solutions[key] = v; // title_slug_hash => question
                        }
                    });
                    setSolutions(_solutions);
                });
            });
    }, [filter]);

    return solutions;
}
import { BILIBILI_0X3F_SPACE, ROUTERS } from "@/config/constants";
import Link from "next/link";
import { GithubLink } from "./GithubLink";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-[var(--content-max-width)] flex-col gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6">
        <p>
          本站所有题解来自{" "}
          <a
            href={BILIBILI_0X3F_SPACE.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand underline-offset-4 hover:underline"
          >
            {BILIBILI_0X3F_SPACE.title}
          </a>
          ，感谢！
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={ROUTERS.v2.href}
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            返回旧版
          </Link>
          <GithubLink />
        </div>
      </div>
    </footer>
  );
}

export interface TOC {
  id: string;
  title: string;
  children?: TOC[];
  className?: string;
  level: number;
  count: number;
}
export const TableOfContent: React.FC<{ toc: TOC }> = ({ toc }) => {
  const className = toc.className || "toc-list";
  return toc.children?.length ? (
    <ul className={className}>
      {toc.children.map((item) => {
        return (
          <li key={item.id}>
            <a
              className="text-danger fw-medium lh-2"
              href={item.id}
            >{`${item.title} [${item.count}]`}</a>
            {item.children && (
              <ul>
                {item.children.map((sub) => (
                  <TableOfContent toc={sub} key={sub.id} />
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <a className="text-warning-emphasis" href={toc.id}>
      {toc.title}
    </a>
  );
};

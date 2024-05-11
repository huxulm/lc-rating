export interface TOC {
  id: string;
  title: string;
  children?: TOC[];
  className?: string;
  level: number;
  count: number;
}
export const TableOfContent: React.FC<{ toc: TOC }> = ({ toc }) => {
  const { className = "toc-list", children = [], id = "", title = "", level = 0 } = toc;
  return children && children.length > 0 ? (
    <ul className={className}>
      {children &&
        children.map((item) => {
          return (
            <li>
              <a className="text-danger fw-medium lh-2" href={item.id}>{`${item.title} [${item.count}]`}</a>
              {item.children && (
                <ul>
                  {item.children.map((sub) => (
                    <TableOfContent toc={sub} />
                  ))}
                </ul>
              )}
            </li>
          );
        })}
    </ul>
  ) : (
    <li>
      <a className="text-warning-emphasis" href={id}>{title}</a>
    </li>
  );
};

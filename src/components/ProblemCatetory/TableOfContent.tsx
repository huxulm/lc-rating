export interface TOC {
  id: string;
  title: string;
  children?: TOC[];
  className?: string;
  level: number;
}
export const TableOfContent: React.FC<{ toc: TOC }> = ({ toc }) => {
  const { className = "toc-list", children = [], id = "", title = "" } = toc;
  return children && children.length > 0 ? (
    <ul className={className}>
      {children &&
        children.map((item) => {
          return (
            <li>
              <a href={item.id}>{item.title}</a>
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
      <a href={id}>{title}</a>
    </li>
  );
};

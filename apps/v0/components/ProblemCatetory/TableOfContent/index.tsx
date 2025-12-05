export interface TOC {
  id: string;
  title: string;
  children?: TOC[];
  className?: string;
  level: number;
  count: number;
}

export const TableOfContent: React.FC<{ toc: TOC }> = ({ toc }) => {
  return (
    <li className={toc.className || "toc-list"}>
      { toc.title != "介绍" ? <a className="text-warning-emphasis" href={`${toc.id}`}>
        {toc.title} [{toc.count}]
      </a> : <></>}   
      {toc.children?.length > 0 && (
        <ul>
          {toc.children.map((child) => (
            <TableOfContent toc={child} key={child.id} />
          ))}
        </ul>
      )}
    </li>
  );
};

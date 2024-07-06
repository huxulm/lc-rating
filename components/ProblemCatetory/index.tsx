import { ShareIcon } from "@components/icons";
import RatingCircle, { ColorRating } from "../RatingCircle";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Form from "react-bootstrap/esm/Form";

type ProblemCategory = {
  title: string;
  summary?: string;
  src?: string;
  original_src?: string;
  sort?: Number;
  isLeaf?: boolean;
  solution?: string;
  score?: Number;
  child?: ProblemCategory[];
  isPremium?: boolean;
};

interface ProblemCategoryProps {
  title?: string;
  summary?: string;
  data?: ProblemCategory[];
  className?: string;
  level?: number;
  rating?: boolean;
  en?: boolean;
}

export const hashCode = function (s: string) {
  var hash = 0,
    i,
    chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

function count(data: ProblemCategory[]) {
  let tot = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i].isLeaf) {
      tot += count(data[i].child);
    } else {
      tot += data[i].child ? data[i].child.length : 0;
    }
  }
  return tot;
}

function ProblemCategory({
  title,
  summary,
  data,
  className = "",
  level = 0,
  rating,
  en,
}: ProblemCategoryProps) {
  return (
    <div className={`pb-container level-${level}` + className}>
      {
        <h3 className="title p-2 text-danger" id={`${hashCode(title || "")}`}>
          <p dangerouslySetInnerHTML={{ __html: title || "" }}></p>
        </h3>
      }
      {summary && (
        <span
          className="d-inline-block p-2 mb-2 rounded summary bg-secondary-subtle text-warning-emphasis"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></span>
      )}
      <div className={`level-${level + 1}`}>
        {data &&
          data.map((item) => {
            return (
              <div className={`pb-container level-${level + 2}`}>
                {item.isLeaf ? (
                  <ProblemCategoryList rating={rating} en={en} data={item} className={`leaf`} />
                ) : (
                  item.child &&
                  item.child?.map((item) => (
                    <ProblemCategory
                      rating={rating}
                      en={en}
                      level={level + 3}
                      title={item.title}
                      data={item.child}
                      summary={item.summary}
                    />
                  ))
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

function ProblemCategoryList({
  data,
  className = "",
  en,
  rating,
}: {
  data: ProblemCategory;
  className?: string;
  en?: boolean;
  rating?: boolean;
}) {
  const getCols = (l: number) => {
    if (l < 12) {
      return "";
    }
    if (l < 20) {
      return "col2";
    }
    return "col3";
  };
  return (
    <div className="shadow rounded p-2 leaf">
      <h3 className="title" id={`${hashCode(data.title || "")}`}>
        {data.title}
      </h3>
      {data.summary && (
        <p
          className="p-2 rounded summary bg-secondary-subtle text-warning-emphasis"
          dangerouslySetInnerHTML={{ __html: data.summary }}
        ></p>
      )}
      <ul className={`list p-2 ${data.child && getCols(data.child.length)}`}>
        {data.child &&
          data.child.map((item) => (
            <li className="d-flex justify-content-between">
              <a
                href={"https://leetcode.cn/problems" + item.src}
                target="_blank"
              >
                {item.title + (item.isPremium ? " (会员题)" : "")}
                {en && <a className="ms-2" href={"https://leetcode.com/problems" + item.src} target="_blank">
                  <ShareIcon height={16} width={16}/>
                </a>}
              </a>
              {item.score && rating ? (
                <div className="ms-2 text-nowrap d-flex justify-content-center align-items-center pb-rating-bg">
                  <RatingCircle difficulty={Number(item.score)} />
                  <ColorRating
                    className="rating-text"
                    rating={Number(item.score)}
                  >
                    {Number(item.score).toFixed(0)}
                  </ColorRating>
                </div>
              ) : null}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProblemCategory;

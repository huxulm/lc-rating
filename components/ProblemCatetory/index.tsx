import { ShareIcon } from "@components/icons";
import RatingCircle, { ColorRating } from "@components/RatingCircle";
import { hashCode } from "@utils/hash";
import { useCallback, useState } from "react";
import Form from "react-bootstrap/esm/Form";

const LC_RATING_PROGRESS_KEY = (questionID: string) =>
  `lc-rating-zen-progress-${questionID}`;

// Progress Related
type ProgressData = Record<string, string>;

enum Progress {
  TODO = "TODO",
  WORKING = "WORKING",
  TOO_HARD = "TOO_HARD",
  REVIEW_NEEDED = "REVIEW_NEEDED",
  AC = "AC",
}

const progressTranslations = {
  [Progress.TODO]: "下次一定",
  [Progress.WORKING]: "攻略中",
  [Progress.TOO_HARD]: "太难了，不会",
  [Progress.REVIEW_NEEDED]: "回头复习下",
  [Progress.AC]: "过了",
};
const progressOptionClassNames = {
  [Progress.TODO]: "zen-option-TODO",
  [Progress.WORKING]: "zen-option-WORKING",
  [Progress.TOO_HARD]: "zen-option-TOO_HARD",
  [Progress.REVIEW_NEEDED]: "zen-option-REVIEW_NEEDED",
  [Progress.AC]: "zen-option-AC",
};

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
  showEn?: boolean;
  showRating?: boolean;
  showPremium?: boolean;
}

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
  showEn,
  showRating,
  showPremium,
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
                  <ProblemCategoryList
                    showEn={showEn}
                    showRating={showRating}
                    showPremium={showPremium}
                    data={item}
                    className={`leaf`}
                  />
                ) : (
                  item.child &&
                  item.child?.map((item) => (
                    <ProblemCategory
                      showEn={showEn}
                      showRating={showRating}
                      showPremium={showPremium}
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
  showEn,
  showRating,
  showPremium,
}: {
  data: ProblemCategory;
  className?: string;
  showEn?: boolean;
  showRating?: boolean;
  showPremium?: boolean;
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

  // trigger page to refresh
  const [localStorageProgressData, setLocalStorageProgressData] =
    useState<ProgressData>({});

  // Event handlers
  const handleProgressSelectChange = useCallback(
    (questionId: string, value: string) => {
      const newValue = value || Progress.TODO;
      localStorage.setItem(LC_RATING_PROGRESS_KEY(questionId), newValue);
      setLocalStorageProgressData((prevData) => ({
        ...prevData,
        [questionId]: newValue,
      }));
    },
    []
  );

  const title2id = (title: string) => {
    // title: number. title
    return title.split(". ")[0];
  };

  const progress = (title: string) => {
    const localtemp = localStorage.getItem(
      LC_RATING_PROGRESS_KEY(title2id(title))
    );
    return localtemp || Progress.TODO;
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
          data.child
            .filter((item) => !item.isPremium || showPremium)
            .map((item) => (
              <li className="d-flex justify-content-between">
                <a
                  href={"https://leetcode.cn/problems" + item.src}
                  target="_blank"
                >
                  {item.title + (item.isPremium ? " (会员题)" : "")}
                  {showEn && (
                    <a
                      className="ms-2"
                      href={"https://leetcode.com/problems" + item.src}
                      target="_blank"
                    >
                      <ShareIcon height={16} width={16} />
                    </a>
                  )}
                </a>
                {item.score && showRating ? (
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
                <div className="d-flex align-items-center ms-2">
                  <Form.Select
                    className={
                      progressOptionClassNames[progress(item.title)] || ""
                    }
                    value={
                      progress(item.title) === Progress.TODO
                        ? ""
                        : progress(item.title)
                    }
                    onChange={(e) =>
                      handleProgressSelectChange(
                        title2id(item.title),
                        e.target.value
                      )
                    }
                  >
                    {/* Empty option for TODO */}
                    <option value=""></option>

                    {[
                      Progress.WORKING,
                      Progress.TOO_HARD,
                      Progress.REVIEW_NEEDED,
                      Progress.AC,
                    ].map((p) => (
                      <option
                        key={p}
                        value={p}
                        className={progressOptionClassNames[p] || ""}
                      >
                        {progressTranslations[p]}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default ProblemCategory;

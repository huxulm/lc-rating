import { ShareIcon } from "@components/icons";
import RatingCircle, { ColorRating } from "@components/RatingCircle";
import {
  ProgressKeyType,
  useProgressOptions,
  useQuestProgress,
} from "@hooks/useProgress";
import { hashCode } from "@utils/hash";
import { useCallback, useState } from "react";
import Form from "react-bootstrap/esm/Form";

const LC_RATING_PROGRESS_KEY = (questionID: string) =>
  `lc-rating-zen-progress-${questionID}`;

// Progress Related
type ProgressData = Record<string, string>;

interface ProblemCategory {
  title: string;
  summary?: string;
  src?: string;
  original_src?: string;
  sort?: Number;
  isLeaf?: boolean;
  solution?: string | null;
  score?: Number | null;
  child?: ProblemCategory[];
  isPremium?: boolean;
  last_update?: string;
}

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

function count(data: ProblemCategory[] | undefined) {
  if (!data) {
    return 0;
  }

  let tot = 0;
  for (let i = 0; i < data.length; i++) {
    if (!data[i].isLeaf) {
      tot += count(data[i].child);
    } else {
      tot += data[i].child?.length || 0;
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
              <div
                className={`pb-container level-${level + 2}`}
                key={hashCode(item.title || "")}
              >
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
                      key={hashCode(item.title || "")}
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

const getCols = (l: number) => {
  if (l < 12) {
    return "";
  }
  if (l < 20) {
    return "col2";
  }
  return "col3";
};

const title2id = (title: string) => {
  // title: number. title
  return title.split(". ")[0];
};

function ProblemCategoryList({
  data,
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
  const { optionKeys, getOption } = useProgressOptions();
  const { allProgress, updateProgress } = useQuestProgress();

  // Event handlers
  const handleProgressSelectChange = (
    questionId: string,
    progress: ProgressKeyType
  ) => {
    updateProgress(questionId, progress);
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
            .map((item) => {
              const id = title2id(item.title);
              const progressKey = allProgress[id];
              const option = getOption(progressKey);

              const rating = Number(item.score);

              return (
                <li
                  className="d-flex justify-content-between"
                  key={hashCode(item.title || "")}
                >
                  <div>
                    <a
                      href={"https://leetcode.cn/problems" + item.src}
                      target="_blank"
                    >
                      {item.title + (item.isPremium ? " (会员题)" : "")}
                    </a>
                    {showEn && (
                      <a
                        className="ms-2"
                        href={"https://leetcode.com/problems" + item.src}
                        target="_blank"
                      >
                        <ShareIcon height={16} width={16} />
                      </a>
                    )}
                  </div>
                  {item.score && showRating ? (
                    <div className="ms-2 text-nowrap d-flex justify-content-center align-items-center pb-rating-bg">
                      <RatingCircle rating={rating} />
                      <ColorRating className="rating-text" rating={rating}>
                        {rating.toFixed(0)}
                      </ColorRating>
                    </div>
                  ) : null}
                  <div className="d-flex align-items-center ms-2">
                    <Form.Select
                      style={{
                        color: option.color,
                      }}
                      value={option.key}
                      onChange={(e) =>
                        handleProgressSelectChange(id, e.target.value)
                      }
                    >
                      {optionKeys.map((p) => (
                        <option
                          key={p}
                          value={p}
                          style={{ color: getOption(p).color }}
                        >
                          {getOption(p).label}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default ProblemCategory;

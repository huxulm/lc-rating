import { hashCode } from "@utils/hash";
import ProblemCategoryList from "./ProblemCategoryList";
import { useProgressOptions, useQuestProgress } from "@hooks/useProgress";

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
  const { optionKeys, getOption } = useProgressOptions();
  const { allProgress, updateProgress } = useQuestProgress();

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
                    optionKeys={optionKeys}
                    getOption={getOption}
                    allProgress={allProgress}
                    updateProgress={updateProgress}
                    showEn={showEn}
                    showRating={showRating}
                    showPremium={showPremium}
                    data={item}
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

export default ProblemCategory;

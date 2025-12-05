import { ShareIcon } from "@components/icons";
import RatingCircle, { ColorRating } from "@components/RatingCircle";
import {
  OptionEntry,
  ProgressKeyType,
  useProgressOptions,
  useQuestProgress,
} from "@hooks/useProgress";
import useStorage from "@hooks/useStorage";
import { hashCode } from "@utils/hash";
import Form from "react-bootstrap/esm/Form";

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

interface ProblemCategory {
  title: string;
  summary?: string;
  src?: string;
  original_src?: string;
  sort?: Number;
  isLeaf?: boolean;
  solution?: string | null;
  score?: Number | null;
  leafChild?: ProblemCategory[];
  nonLeafChild?: ProblemCategory[];
  isPremium?: boolean;
  last_update?: string;
}

interface ProblemCategoryListProps {
  optionKeys: ProgressKeyType[];
  getOption: (key?: ProgressKeyType) => OptionEntry;
  allProgress: Record<string, ProgressKeyType>;
  updateProgress: (questID: string, progress: ProgressKeyType) => void;
  removeProgress: (questID: string) => void;
  data: ProblemCategory;
  showEn?: boolean;
  showRating?: boolean;
  showPremium?: boolean;
}

function ProblemCategoryList({
  optionKeys,
  getOption,
  allProgress,
  updateProgress,
  removeProgress,
  data,
  showEn,
  showRating,
  showPremium,
}: ProblemCategoryListProps) {
  // Event handlers
  const handleProgressSelectChange = (
    questID: string,
    progress: ProgressKeyType
  ) => {
    if (progress === getOption().key) {
      removeProgress(questID);
    } else {
      updateProgress(questID, progress);
    }
  };

  const filteredChild = (data.leafChild || []).filter(
    (item) => !item.isPremium || showPremium
  );

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
      <ul className={`list p-2 ${getCols(filteredChild.length)}`}>
        {filteredChild &&
          filteredChild.map((item) => {
            const id = title2id(item.title);
            const progressKey = allProgress[id];
            const option = getOption(progressKey);
            const rating = Number(item.score);

            return (
              <li
                data-todo={option.key === getOption().key}
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
                    {optionKeys.indexOf(option.key) == -1 && (
                      <option
                        key={option.key}
                        value={option.key}
                        style={{ color: option.color }}
                      >
                        {option.label}
                      </option>
                    )}
                  </Form.Select>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ProblemCategoryList;

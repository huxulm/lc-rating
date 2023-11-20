// React imports
import React, {useCallback, useEffect, useMemo, useState, useTransition} from 'react';

// Bootstrap components
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

// Custom components
import RatingText from './components/RatingText';

// Styles
import './app.scss';
import './zen.scss';

// Constants and Enums
const LC_HOST = `https://leetcode.cn`;
const canUseLocalStorage = typeof Storage !== 'undefined' && Boolean(window?.localStorage);
const LC_RATING_PROGRESS_KEY = (questionID: string) => `lc-rating-zen-progress-${questionID}`;


// Question Data Type
type ConstQuestion = {
  cont_title: string;
  cont_title_slug: string;
  title: string;
  title_slug: string;
  question_id: string;
  rating: number;
};

// Filter Related
type Filter = {
  label: string;
  fn: (r: ConstQuestion) => boolean;
};
const createRatingFilter = (min: number, max?: number) => (r: ConstQuestion) =>
  max === undefined ? r.rating >= min : r.rating >= min && r.rating < max;
const filters: Filter[] = [
  {label: "<=1200", fn: createRatingFilter(0, 1200)},
  {label: "1200 - 1400", fn: createRatingFilter(1200, 1400)},
  {label: "1400 - 1600", fn: createRatingFilter(1400, 1600)},
  {label: "1600 - 1900", fn: createRatingFilter(1600, 1900)},
  {label: "1900 - 2100", fn: createRatingFilter(1900, 2100)},
  {label: "2100 - 2400", fn: createRatingFilter(2100, 2400)},
  {label: ">=2400", fn: createRatingFilter(2400)},
  {label: "< ALL >", fn: (_: ConstQuestion) => true},
];

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

// Filter Button Component
type FilterButtonProps = {
  filter: Filter;
  currentFilter: Filter;
  onFilterChange: (_: Filter) => void;
};
const FilterButton = React.memo(({filter, currentFilter, onFilterChange}: FilterButtonProps) => (
  <li className="nav-link">
    <button
      onClick={() => onFilterChange(filter)}
      className={`btn ${
        filter.label == currentFilter.label
          ? "btn-secondary selected"
          : "btn-outline-secondary"
      }`}
    >
      {filter.label}
    </button>
  </li>
));

// Table Row Component
type TableRowProps = {
  rowId: number;
  item: ConstQuestion;
  progress: Progress;
  handleProgressSelectChange: (questionId: string, value: string) => void;
};
const TableRow = React.memo(({rowId, item, progress, handleProgressSelectChange}: TableRowProps) =>
  <tr className="zen-table-row">
    <td className="text-center">{rowId + 1}</td>

    <td>
      <a href={`${LC_HOST}/contest/${item.cont_title_slug}`}>{item.cont_title}</a>
    </td>

    <td>
      <a href={`${LC_HOST}/problems/${item.title_slug}`}>{item.question_id}. {item.title}</a>
    </td>

    <td>
      <RatingText
        id={`rating-${item.question_id}`}
        className="text-center text-body-secondary fw-bold"
        difficulty={item.rating}
      >
        {Number(item.rating).toFixed(0)}
      </RatingText>
    </td>

    {canUseLocalStorage && (
      <td>
        <Form.Select
          className={progressOptionClassNames[progress] || ""}
          value={progress === Progress.TODO ? "" : progress}
          onChange={(e) => handleProgressSelectChange(item.question_id, e.target.value)}
        >
          {/* Empty option for TODO */}
          <option value=""></option>

          {[
            Progress.WORKING,
            Progress.TOO_HARD,
            Progress.REVIEW_NEEDED,
            Progress.AC,
          ].map((p) => (
            <option key={p} value={p} className={progressOptionClassNames[p] || ""}>
              {progressTranslations[p]}
            </option>
          ))}
        </Form.Select>
      </td>
    )}
  </tr>);

export default function Zenk() {
  // State and hooks
  const [isPending, startTransition] = useTransition();

  const [data, setData] = useState<ConstQuestion[]>([]);
  const [localStorageProgressData, setLocalStorageProgressData] = useState<ProgressData>({});

  const [currentFilter, setCurrentFilter] = useState(filters[filters.length - 1]);
  const filteredData = useMemo(() => data.filter(currentFilter.fn), [data, currentFilter]);

  useEffect(() => {
    fetch("/lc-rating/zenk.json")
      .then((res) => res.json())
      .then((result: ConstQuestion[]) => {
        const loadedLocalStorageData: ProgressData = {};
        result.forEach((item) => {
          loadedLocalStorageData[item.question_id] =
            localStorage.getItem(LC_RATING_PROGRESS_KEY(item.question_id)) || Progress.TODO;
        });

        startTransition(() => {
          setLocalStorageProgressData(loadedLocalStorageData);
          setData(result);
        });
      });
  }, []);

  // Event handlers
  const handleProgressSelectChange = useCallback((questionId: string, value: string) => {
    const newValue = value || Progress.TODO;

    localStorage.setItem(LC_RATING_PROGRESS_KEY(questionId), newValue);
    setLocalStorageProgressData(prevData => ({...prevData, [questionId]: newValue}));
  }, []);

  const handleFilterChange = useCallback((newFilter: Filter) => {
    startTransition(() => {
      setCurrentFilter(newFilter);
    });
  }, []);

  return (
    <Container fluid="md" className="zen-container">
      <nav className="nav navbar bg-white z-3 zen-nav">
        {
          filters.map((filter: Filter) => (
            <FilterButton
              key={filter.label}
              filter={filter}
              currentFilter={currentFilter}
              onFilterChange={handleFilterChange}
            />
          ))
        }
      </nav>

      <Table bordered hover variant="light">
        <thead>
        <tr className="zen-table-header">
          <th className="zen-table-header-no">#</th>
          <th>Contest</th>
          <th className="zen-table-header-question">Question</th>
          <th>Rating</th>

          {canUseLocalStorage && <th className="zen-table-header-progress">Progress</th>}
        </tr>
        </thead>

        <tbody>
        {
          isPending ?
            <tr className="zen-table-row">
              <td colSpan={5} className="zen-spinner-td"><Spinner animation="border" role="status"/></td>
            </tr> :
            filteredData.map((item, id) =>
              <TableRow
                key={item.question_id}
                rowId={id}
                item={item}
                progress={(localStorageProgressData[item.question_id] as Progress) || Progress.TODO}
                handleProgressSelectChange={handleProgressSelectChange}
              />
            )
        }
        </tbody>
      </Table>
    </Container>
  );
}

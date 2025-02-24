// Constants
const LC_RATING_PROGRESS_KEY = (questionID: string) =>
  `lc-rating-zen-progress-${questionID}`;

type ProgressDataType = {
  [questionID: string]: string;
};

class AllProgress {
  private data: ProgressDataType;

  constructor() {
    this.data = this.fetchAllProgress();
  }

  private fetchAllProgress(): ProgressDataType {
    const progressData: ProgressDataType = {};
    if (typeof Storage !== "undefined" && window.localStorage) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("lc-rating-zen-progress-")) {
          const questionID = key.replace("lc-rating-zen-progress-", "");
          const value = localStorage.getItem(key);
          if (value) {
            progressData[questionID] = value;
          }
        }
      }
    }
    return progressData;
  }

  public getProgress(questionID: string): string | null {
    return this.data[questionID] || null;
  }

  public getAllProgress(): ProgressDataType {
    return this.data;
  }

  public setAllProgress(progressData: ProgressDataType): void {
    this.data = progressData;
    for (const questionID in progressData) {
      if (progressData.hasOwnProperty(questionID)) {
        this.setProgress(questionID, progressData[questionID]);
      }
    }
  }

  private setProgress(questionID: string, value: string): void {
    this.data[questionID] = value;
    if (typeof Storage !== "undefined" && window.localStorage) {
      localStorage.setItem(LC_RATING_PROGRESS_KEY(questionID), value);
    }
  }
}

export default AllProgress;

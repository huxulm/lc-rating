export interface Tag {
  id: string;
  zh: string;
  en: string;
}

export type TagMap = Record<string, Tag>;

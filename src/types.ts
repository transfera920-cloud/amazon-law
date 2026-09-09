export interface ChapterSection {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  summary: string;
}

export interface RelatedChapter {
  chapter: string;
  title: string;
  desc: string;
  isCurrent?: boolean;
}

export interface KeyTakeaway {
  number: string;
  title: string;
  desc: string;
}

export interface ProjectChallenge {
  title: string;
  solution: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
  github: string | null;
  challenges: ProjectChallenge[];
  results: string[];
}

export interface ResourceItem {
  name: string;
  description?: string;
  url?: string;
  why?: string;
}

export interface ResourceCategory {
  category: string;
  items: (ResourceItem | CourseItem)[];
}

export interface CourseItem {
  title: string;
  instructor: string;
  platform: string;
  year: string;
  summary: string;
  skills: string[];
  url?: string;
}

export function isCourseItem(
  item: ResourceItem | CourseItem
): item is CourseItem {
  return (item as CourseItem).platform !== undefined;
}

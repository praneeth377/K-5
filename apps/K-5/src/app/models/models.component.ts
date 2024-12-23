export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  totalPoints: number;
  completedLessons: number[];
  progress: Progress;
}

export interface Progress {
  courseId: number;
  percentage: number;
}

export interface Course {
  id: number;
  name: string;
  description: string;
  chapters: number[];
}

export interface Chapter {
  id: number;
  name: string;
  description: string;
  courseId: number;
  lessons: number[];
}

export interface Lesson {
  id: number;
  name: string;
  description: string;
  xpPoints: number;
  difficulty: string;
  chapterId: number;
  isCompleted: boolean;
}

export interface AppState {
  users: User[];
  courses: Course[];
  chapters: Chapter[];
  lessons: Lesson[];
  selectedCourseId: number | null;
  selectedChapterId: number | null;
  recentChapter: Chapter | null;
}

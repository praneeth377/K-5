import { createReducer, on } from '@ngrx/store';
import { AppState, User, Course, Chapter, Lesson } from '../models/models.component';
import {selectCourse, setRecentChapter, completeLesson, selectChapter} from './actions';

// Define initial state
export const initialState: AppState = {
  users: [ 
    {
      "id": 1,
      "name": "John Doe",
      "email": "john.doe@example.com",
      "totalPoints": 4,
      "completedLessons": [101, 103],
      "progress": {
        "courseId": 1,
        "percentage": 50
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "totalPoints": 0,
      "completedLessons": [],
      "progress": {
        "courseId": 1,
        "percentage": 0
      }
    }
  ],
  courses: [{
    "id": 1,
    "name": "Mathematics",
    "description": "A course on basic and advanced mathematics.",
    "chapters": [1, 2]
  },
  {
    "id": 2,
    "name": "Physics",
    "description": "Learn the basics of classical and modern physics.",
    "chapters": [3, 4]
  }],
  chapters: [
    {
      "id": 1,
      "name": "Algebra",
      "description": "Learn the fundamentals of algebra.",
      "courseId": 1,
      "lessons": [101, 102]
    },
    {
      "id": 2,
      "name": "Trigonometry",
      "description": "Dive into the world of trigonometric equations.",
      "courseId": 1,
      "lessons": [103, 104]
    },
    {
      "id": 3,
      "name": "Mechanics",
      "description": "Understand the laws of motion and forces.",
      "courseId": 2,
      "lessons": [201, 202]
    },
    {
      "id": 4,
      "name": "Thermodynamics",
      "description": "Explore heat and energy transfer.",
      "courseId": 2,
      "lessons": [203, 204]
    }],
  lessons: [
    {
      "id": 101,
      "name": "Basics of Algebra",
      "description": "Introduction to algebra.",
      "xpPoints": 2,
      "difficulty": "Easy",
      "chapterId": 1,
      "isCompleted": true
    },
    {
      "id": 102,
      "name": "Advanced Algebra",
      "description": "Learn about quadratic equations and beyond.",
      "xpPoints": 3,
      "difficulty": "Medium",
      "chapterId": 1,
      "isCompleted": false
    },
    {
      "id": 103,
      "name": "Basics of Trigonometry",
      "description": "Understanding sine, cosine, and tangent.",
      "xpPoints": 2,
      "difficulty": "Easy",
      "chapterId": 2,
      "isCompleted": true
    },
    {
      "id": 104,
      "name": "Trigonometric Equations",
      "description": "Solving equations involving trigonometric functions.",
      "xpPoints": 4,
      "difficulty": "Hard",
      "chapterId": 2,
      "isCompleted": false
    },
    {
      "id": 201,
      "name": "Newton's Laws",
      "description": "An overview of Newton's laws of motion.",
      "xpPoints": 3,
      "difficulty": "Medium",
      "chapterId": 3,
      "isCompleted": false
    },
    {
      "id": 202,
      "name": "Friction and Dynamics",
      "description": "Study the effects of friction in motion.",
      "xpPoints": 4,
      "difficulty": "Hard",
      "chapterId": 3,
      "isCompleted": false
    },
    {
      "id": 203,
      "name": "Heat Transfer",
      "description": "Learn the basics of heat transfer mechanisms.",
      "xpPoints": 3,
      "difficulty": "Medium",
      "chapterId": 4,
      "isCompleted": false
    },
    {
      "id": 204,
      "name": "Laws of Thermodynamics",
      "description": "Explore the laws governing thermodynamics.",
      "xpPoints": 4,
      "difficulty": "Hard",
      "chapterId": 4,
      "isCompleted": false
    }],
    selectedCourseId: null,
    selectedChapterId: null,
    recentChapter: null
};


export const appReducer = createReducer(
  initialState,
  
 

  on(selectCourse, (state, { courseId }) => ({
    ...state,
    selectedCourseId: courseId
  })),
   // Set the selected chapter ID
   on(selectChapter, (state, { chapterId }) => ({
    ...state,
    selectedChapterId: chapterId
  })),

  // Update lesson completion and total points
  on(completeLesson, (state, { userId, lessonId }) => ({
    ...state,
    users: state.users.map(user =>
      user.id === userId
        ? {
            ...user,
            completedLessons: [...user.completedLessons, lessonId],
            totalPoints: user.totalPoints + (state.lessons.find(lesson => lesson.id === lessonId)?.xpPoints || 0)

          }
        : user
    )
  })),

  // Update recent chapter
  on(setRecentChapter, (state, { chapterId }) => ({
    ...state,
    recentChapter: state.chapters.find(chapter => chapter.id === chapterId) || null
  }))
);





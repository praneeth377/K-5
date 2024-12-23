import { createReducer, on } from '@ngrx/store';

import { Course } from '../../models/models.component';
import { courseAction } from '../actions/course.action';

// export const groceryReducer = createReducer(groceryState)
const initialState: Course[] = []

export const courseReducer = createReducer(
  initialState,
  on(courseAction.loadCoursesSuccess, (state, action) => {
    return action.payload
  }),
  on(courseAction.loadCoursesFailure, (state, action) => {
    return []
  })
)

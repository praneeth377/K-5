import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Course } from '../../models/models.component';

export const courseSelector = createFeatureSelector<any>('course');

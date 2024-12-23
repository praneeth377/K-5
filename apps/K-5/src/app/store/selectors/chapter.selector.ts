import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Chapter } from '../../models/models.component';

export const chapterSelector = createFeatureSelector<any>('chapter');

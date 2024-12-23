import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../../models/models.component';

export const userSelector = createFeatureSelector<any>('auth');

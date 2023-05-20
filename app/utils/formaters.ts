import type { ItemType } from '../types/types';

export const formatParticipants = ({ current, max }: ItemType['amount']) =>
  `${current} / ${max}`;
export const formatStartDate = (dbDate: ItemType['startDate']) =>
  new Date(dbDate).toLocaleString('en-GB');

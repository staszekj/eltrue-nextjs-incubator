import { OPERATIONS } from '../constants/api';

export type ItemType = {
  id: string;
  name: string;
  person: string;
  category: string;
  amount: {
    current: number;
    max: number;
  };
  startDate: string;
};

export type Operations = typeof OPERATIONS[number];
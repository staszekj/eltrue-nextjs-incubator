import { OPERATIONS } from '../constants/api';

export type ApiStatus = { 
  isMutating?: boolean;
}

export type ItemType = ApiStatus & {
  id: string;
  name: string;
  person: string;
  category: string;
  amount: {
    current: number;
    max: number;
  };
  startDate: string;
}

export type Operations = typeof OPERATIONS[number];
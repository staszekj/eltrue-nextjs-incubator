import { Operations } from "../types/types";

export const API_BASE_URL = 'http://localhost:4000';

export const API_ITEMS_URL = `${API_BASE_URL}/items`;

export const LOADING_OPERATION = 'loading' as const;
export const SEARCH_OPERATION = 'search' as const;
export const CREATE_OPERATION = 'create' as const;
export const EDIT_OPERATION = 'edit' as const;
export const DELETE_OPERATION = 'delete' as const;

export const OPERATIONS = [
  LOADING_OPERATION,
  SEARCH_OPERATION,
  CREATE_OPERATION,
  EDIT_OPERATION,
  DELETE_OPERATION,
];

// USE https://www.i18next.com/ or other library for internationalization
export const OPERATION_MESSAGES: Record<Operations, string> = {
  loading: 'Loading Items...',
  search: 'Searching Items...',
  create: 'Creating Item...',
  edit: 'Editing Item...',
  delete: 'Deleting Item...',
};
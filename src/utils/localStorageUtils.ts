import { DataType } from "./types";

const storeObjectToLocalStorage = (language: string, code: string) =>
  localStorage.setItem('last_code', JSON.stringify({language, code}));

const getObjectFromLocalStorage = (): DataType | null => {
  return JSON.parse(localStorage.getItem('last_code') || '{}');
};


export { storeObjectToLocalStorage, getObjectFromLocalStorage };

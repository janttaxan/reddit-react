import React from "react";

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => <E extends (t: T[K]) => void>(
    fn: E
  ) => (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

/**
 * Получает значение value инпута
 */
export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");

/**
 * Получает значение checked чекбокса
 */
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked");

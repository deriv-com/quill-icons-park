import { SEARCH_TEXT_DEBOUNCE_DELAY } from '../constants/text_constants';

export const debouncedStateUpdater = (
  stateUpdater?: React.Dispatch<React.SetStateAction<string>>,
) => {
  let debounceTimer: number;
  return function (changeEvent: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      stateUpdater?.(changeEvent.target.value);
    }, SEARCH_TEXT_DEBOUNCE_DELAY);
  };
};

export const getSplitIconName = (iconName: string) => {
  const splitIconName: string[] = [];

  let runningString: string[] = [];
  for (let i = 0; i < iconName.length; i++) {
    if (iconName[i] === iconName[i].toUpperCase() && runningString.length) {
      splitIconName.push(runningString.join(''));
      runningString = [];
    }
    runningString.push(iconName[i]);
  }

  if (runningString.length) splitIconName.push(runningString.join(''));

  return splitIconName;
};

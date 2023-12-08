import { SEARCH_TEXT_DEBOUNCE_DELAY } from '@deriv/constants';

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
  for (const element of iconName) {
    if (element === element.toUpperCase() && runningString.length) {
      splitIconName.push(runningString.join(''));
      runningString = [];
    }
    runningString.push(element);
  }

  if (runningString.length) splitIconName.push(runningString.join(''));

  return splitIconName;
};

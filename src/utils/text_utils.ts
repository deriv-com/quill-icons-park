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

import { useCategory, useQuillIconsModules } from '@deriv/hooks';
import { useMemo } from 'react';

export const useQuillIcons = () => {
  const { data: quillIconsArray, ...rest } = useQuillIconsModules();
  const { category, hasCategoryAllSelected } = useCategory();

  const memoizedQuillIcons = useMemo(() => {
    let quillIcons;
    if (hasCategoryAllSelected && quillIconsArray?.length) {
      quillIcons = quillIconsArray;
    } else {
      const quillIconsCategoryObject = quillIconsArray?.find(
        (quillIconsModule) => quillIconsModule.category === category,
      );
      quillIcons = quillIconsCategoryObject ? [quillIconsCategoryObject] : [];
    }
    return {
      quillIcons,
      isEmptyResult: !quillIcons
        .map((quillIconModule) => quillIconModule.quillIconsModule.length)
        .reduce((totalIconsLength, iconsLength) => totalIconsLength + iconsLength, 0),
    };
  }, [category, hasCategoryAllSelected, quillIconsArray]);

  return {
    data: memoizedQuillIcons.quillIcons,
    isEmptyResult: memoizedQuillIcons.isEmptyResult,
    ...rest,
  };
};

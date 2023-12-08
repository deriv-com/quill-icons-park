import { useMemo } from 'react';
import { useQuillIconsModules } from '..';
import { CATEGORIES } from '@deriv/constants';
import { TCategoriesType } from '@deriv/types';

export const useQuillIcons = (searchText: string, categorySelected: TCategoriesType) => {
  const { data: quillIconsArray, ...rest } = useQuillIconsModules(searchText);

  const memoizedQuillIcons = useMemo(() => {
    let quillIcons;
    if (categorySelected === CATEGORIES.ALL && quillIconsArray?.length) {
      quillIcons = quillIconsArray;
    } else {
      const quillIconsCategoryObject = quillIconsArray?.find(
        (quillIconsModule) => quillIconsModule.category === categorySelected,
      );
      quillIcons = quillIconsCategoryObject ? [quillIconsCategoryObject] : [];
    }
    return {
      quillIcons,
      isEmptyResult: !quillIcons
        .map((quillIconModule) => quillIconModule.quillIconsModule.length)
        .reduce((totalIconsLength, iconsLength) => totalIconsLength + iconsLength, 0),
    };
  }, [categorySelected, quillIconsArray]);

  return {
    data: memoizedQuillIcons.quillIcons,
    isEmptyResult: memoizedQuillIcons.isEmptyResult,
    ...rest,
  };
};

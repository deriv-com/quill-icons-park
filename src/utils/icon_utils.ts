import { CATEGORIES } from '../constants/category_constants';
import { TQuillIconsModules } from '../types/icon_modules';

const CATEGORY_PROMISES = {
  [CATEGORIES.CURRENCIES]: import('@deriv/quill-icons/Currencies'),
  [CATEGORIES.FLAGS]: import('@deriv/quill-icons/Flags'),
  [CATEGORIES.ILLUSTRATIVE]: import('@deriv/quill-icons/Illustrative'),
  [CATEGORIES.LABEL_PAIRED]: import('@deriv/quill-icons/LabelPaired'),
  [CATEGORIES.LOGO]: import('@deriv/quill-icons/Logo'),
  [CATEGORIES.MARKETS]: import('@deriv/quill-icons/Markets'),
  [CATEGORIES.SOCIAL]: import('@deriv/quill-icons/Social'),
  [CATEGORIES.STANDALONE]: import('@deriv/quill-icons/Standalone'),
};

export const getQuillIconsModules = async (searchText: string) => {
  const quillIconsModules: TQuillIconsModules[] = [];
  for await (const [category, categoryPromise] of Object.entries(CATEGORY_PROMISES)) {
    await categoryPromise
      .then((importedQuillIconsModule) => {
        quillIconsModules.push({
          category,
          quillIconsModule: Object.entries(importedQuillIconsModule)
            .filter(([iconName]) => RegExp(new RegExp(searchText, 'i')).exec(iconName)?.length)
            .map(([iconName, icon]) => ({
              category,
              icon,
              iconName,
            })),
        });
      })
      .catch((error) => ({
        category,
        error,
      }));
  }

  return quillIconsModules;
};

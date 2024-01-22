import { CATEGORY_PROMISES } from '@deriv/constants';
import { TQuillIconsModules } from '@deriv/types';

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

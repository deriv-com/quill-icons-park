import { CATEGORY_PROMISES, SELECTED__DOWNLOADABLE_ICON_ID } from '@deriv/constants';
import { TQuillIconsModuleEntry, TQuillIconsModules } from '@deriv/types';
import { saveAs } from 'file-saver';

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
              icon: icon as TQuillIconsModuleEntry['icon'],
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

export const downloadIllustrationWebp = async (iconName: string) => {
  const downloadableIcon = document.querySelector(
    `#${SELECTED__DOWNLOADABLE_ICON_ID}`,
  ) as HTMLImageElement | null;

  if (downloadableIcon?.tagName !== 'IMG' || !downloadableIcon.src) {
    return;
  }

  const response = await fetch(downloadableIcon.src);
  const blob = await response.blob();
  saveAs(blob, iconName.concat('.webp'));
};

import { CATEGORIES } from '../constants/category_constants';
import * as AllQuillIcons from '@deriv/quill-icons';
import * as CurrenciesQuillIcons from '@deriv/quill-icons/Currencies';
import * as FlagsQuillIcons from '@deriv/quill-icons/Flags';
import * as IllustrativeQuillIcons from '@deriv/quill-icons/Illustrative';
import * as LabelPairedQuillIcons from '@deriv/quill-icons/LabelPaired';
import * as LogoQuillIcons from '@deriv/quill-icons/Logo';
import * as MarketsQuillIcons from '@deriv/quill-icons/Markets';
import * as SocialQuillIcons from '@deriv/quill-icons/Social';
import * as StandaloneQuillIcons from '@deriv/quill-icons/Standalone';

export const getIcons = (searchText: string, category: string) => {
  switch (category) {
    case CATEGORIES.CURRENCIES:
      return Object.entries(CurrenciesQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.FLAGS:
      return Object.entries(FlagsQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.ILLUSTRATIVE:
      return Object.entries(IllustrativeQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.LABEL_PAIRED:
      return Object.entries(LabelPairedQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.LOGO:
      return Object.entries(LogoQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.MARKETS:
      return Object.entries(MarketsQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.SOCIAL:
      return Object.entries(SocialQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
    case CATEGORIES.STANDALONE:
      return Object.entries(StandaloneQuillIcons).filter(
        ([iconName]) =>
          iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
      );
  }
  return Object.entries(AllQuillIcons).filter(
    ([iconName]) =>
      iconName.endsWith('Icon') && iconName.toLowerCase().includes(searchText.toLowerCase()),
  );
};

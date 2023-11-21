import { CATEGORIES } from '../constants/category_constants';
import * as CurrenciesQuillIcons from '@deriv/quill-icons/Currencies';
import * as FlagsQuillIcons from '@deriv/quill-icons/Flags';
import * as IllustrativeQuillIcons from '@deriv/quill-icons/Illustrative';
import * as LabelPairedQuillIcons from '@deriv/quill-icons/LabelPaired';
import * as LogoQuillIcons from '@deriv/quill-icons/Logo';
import * as MarketsQuillIcons from '@deriv/quill-icons/Markets';
import * as SocialQuillIcons from '@deriv/quill-icons/Social';
import * as StandaloneQuillIcons from '@deriv/quill-icons/Standalone';
import * as AllQuillIcons from '@deriv/quill-icons';
import { TCategoryType } from '../types/category_types';

const getQuillIconsModule = (category: TCategoryType) => {
  switch (category) {
    case CATEGORIES.CURRENCIES:
      return CurrenciesQuillIcons;
    case CATEGORIES.FLAGS:
      return FlagsQuillIcons;
    case CATEGORIES.ILLUSTRATIVE:
      return IllustrativeQuillIcons;
    case CATEGORIES.LABEL_PAIRED:
      return LabelPairedQuillIcons;
    case CATEGORIES.LOGO:
      return LogoQuillIcons;
    case CATEGORIES.MARKETS:
      return MarketsQuillIcons;
    case CATEGORIES.SOCIAL:
      return SocialQuillIcons;
    case CATEGORIES.STANDALONE:
      return StandaloneQuillIcons;
    default:
      return AllQuillIcons;
  }
};

export const getIcons = (searchText: string, category: TCategoryType) => {
  const quillIconsModule = getQuillIconsModule(category);
  return Object.entries(quillIconsModule).filter(
    ([iconName]) =>
      iconName.endsWith('Icon') && iconName.match(new RegExp(searchText, 'i'))?.length,
  );
};

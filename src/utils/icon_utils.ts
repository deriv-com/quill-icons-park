import { CATEGORIES } from '../constants/categories';
import * as AllQuillIcons from '@deriv/quill-icons';
import * as CurrenciesQuillIcons from '@deriv/quill-icons/Currencies';
import * as FlagsQuillIcons from '@deriv/quill-icons/Flags';
import * as IllustrativeQuillIcons from '@deriv/quill-icons/Illustrative';
import * as LabelPairedQuillIcons from '@deriv/quill-icons/LabelPaired';
import * as LogoQuillIcons from '@deriv/quill-icons/Logo';
import * as MarketsQuillIcons from '@deriv/quill-icons/Markets';
import * as SocialQuillIcons from '@deriv/quill-icons/Social';
import * as StandaloneQuillIcons from '@deriv/quill-icons/Standalone';

export const getIcons = (category: string, search = '') => {
  switch (category) {
    case CATEGORIES.CURRENCIES:
      return Object.entries(CurrenciesQuillIcons);
    case CATEGORIES.FLAGS:
      return Object.entries(FlagsQuillIcons);
    case CATEGORIES.ILLUSTRATIVE:
      return Object.entries(IllustrativeQuillIcons);
    case CATEGORIES.LABEL_PAIRED:
      return Object.entries(LabelPairedQuillIcons);
    case CATEGORIES.LOGO:
      return Object.entries(LogoQuillIcons);
    case CATEGORIES.MARKETS:
      return Object.entries(MarketsQuillIcons);
    case CATEGORIES.SOCIAL:
      return Object.entries(SocialQuillIcons);
    case CATEGORIES.STANDALONE:
      return Object.entries(StandaloneQuillIcons);
  }
  return Object.entries(AllQuillIcons);
};

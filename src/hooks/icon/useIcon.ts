import {
  CATEGORIES,
  CATEGORIES_TYPE_A,
  CATEGORIES_TYPE_B,
  DEFAULT_CATEGORY,
} from '@deriv/constants';
import { IconContext } from '@deriv/stores';
import { useContext } from 'react';

export const useIcon = (iconNameToCompare?: string) => {
  const iconContext = useContext(IconContext);
  const icon = iconContext?.icon;
  const setIcon = iconContext?.setIcon;
  const clearIcon = () => setIcon?.(undefined);
  const isIconSelected = icon?.iconName === iconNameToCompare;
  const isCategoryA = CATEGORIES_TYPE_A.includes(icon?.category as string);
  const isCategoryB = CATEGORIES_TYPE_B.includes(icon?.category as string);
  const isIllustrationCategory = icon?.category === CATEGORIES.ILLUSTRATIONS;
  const hasCustomIconSizeSupport = isCategoryA;
  const hasPredefinedIconSizeSupport = isCategoryB;
  const hasFillColorSupport = isCategoryB;
  const hasPngDownloadSupport = isIllustrationCategory;

  return {
    category: icon?.category ?? DEFAULT_CATEGORY,
    hasCustomIconSizeSupport,
    hasFillColorSupport,
    hasPngDownloadSupport,
    hasPredefinedIconSizeSupport,
    setIcon,
    clearIcon,
    Icon: icon?.Icon,
    iconName: icon?.iconName ?? '',
    isIconSelected,
  };
};

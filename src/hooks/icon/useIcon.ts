import { useContext } from 'react';
import { IconContext } from '../../store/icon_context';
import { CATEGORIES_TYPE_A, CATEGORIES_TYPE_B, DEFAULT_CATEGORY } from '@deriv/constants';

export const useIcon = (iconNameToCompare?: string) => {
  const iconContext = useContext(IconContext);
  const icon = iconContext?.icon;
  const isIconSelected = icon?.iconName === iconNameToCompare;
  const isCategoryA = CATEGORIES_TYPE_A.includes(icon?.category as string);
  const isCategoryB = CATEGORIES_TYPE_B.includes(icon?.category as string);
  const hasCustomIconSizeSupport = isCategoryA;
  const hasPredefinedIconSizeSupport = isCategoryB;
  const hasFillColorSupport = isCategoryB;

  return {
    category: icon?.category ?? DEFAULT_CATEGORY,
    hasCustomIconSizeSupport,
    hasFillColorSupport,
    hasPredefinedIconSizeSupport,
    setIcon: iconContext?.setIcon,
    Icon: icon?.Icon,
    iconName: icon?.iconName ?? '',
    isIconSelected,
  };
};

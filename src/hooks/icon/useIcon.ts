import { useContext } from 'react';
import { IconContext } from '../../context_provider/icon_context';
import {
  CUSTOM_ICON_SIZE_SELECTION_CATEGORIES,
  DEFAULT_CATEGORY,
  PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES,
} from '../../constants/category_constants';

export const useIcon = (iconNameToCompare?: string) => {
  const iconContext = useContext(IconContext);
  const icon = iconContext?.icon;
  const isIconSelected = icon?.iconName === iconNameToCompare;
  const hasCustomIconSizeSupport = CUSTOM_ICON_SIZE_SELECTION_CATEGORIES.includes(
    icon?.category as string,
  );
  const hasPredefinedIconSizeSupport = PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES.includes(
    icon?.category as string,
  );

  return {
    iconName: icon?.iconName ?? '',
    Icon: icon?.Icon,
    category: icon?.category ?? DEFAULT_CATEGORY,
    isIconSelected,
    hasCustomIconSizeSupport,
    hasPredefinedIconSizeSupport,
    setIcon: iconContext?.setIcon,
  };
};

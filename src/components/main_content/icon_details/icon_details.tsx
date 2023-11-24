import { useContext, useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import { IconContext } from '../../../context/icon_context';
import { CategoryContext } from '../../../context/category_context';
import classNames from 'classnames';
import NoIconSelected from './no_icon_selected/no_icon_selected';
import { getSplitIconName } from '../../../utils/text_utils';
import ActionButton from './action_button/action_button';
import { SELECTED__DOWNLOADABLE_ICON_ID } from '../../../constants/icon_constants';
import { IconSize } from '@deriv/quill-icons';
import IconSizeSelection from './icon_size_selection/icon_size_selection';
import { TCustomIconSize } from '../../../types/icon_types';
import {
  CUSTOM_ICON_SIZE_SELECTION_CATEGORIES,
  PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES,
} from '../../../constants/category_constants';

const IconDetails = () => {
  const iconContext = useContext(IconContext);
  const categoryContext = useContext(CategoryContext);
  const [customIconSize, setCustomIconSize] = useState<TCustomIconSize>({
    height: '120px',
    width: '120px',
  });
  const [predefinedIconSize, setPredefinedIconSize] = useState<IconSize>('2xl');

  const iconSelected = iconContext?.iconSelected;
  const setIconSelected = iconContext?.setIconSelected;
  const iconName = iconSelected?.iconName ?? '';
  const Icon = iconSelected?.Icon;

  const categorySelected = categoryContext?.categorySelected;

  const customIconSizeProps = CUSTOM_ICON_SIZE_SELECTION_CATEGORIES.includes(
    categorySelected as string,
  )
    ? {
        height: customIconSize.height,
        width: customIconSize.width,
      }
    : {};
  const predefinedIconSizeProps = PREDEFINED_ICON_SIZE_SELECTION_CATEGORIES.includes(
    categorySelected as string,
  )
    ? {
        iconSize: predefinedIconSize,
      }
    : {};
  const iconProps = { ...customIconSizeProps, ...predefinedIconSizeProps };

  useEffect(() => setIconSelected?.(undefined), [categorySelected, setIconSelected]);

  const downloadSvg = () => {
    const downloadableIcon = document.querySelector(`#${SELECTED__DOWNLOADABLE_ICON_ID}`);
    const svgBlob = new Blob([downloadableIcon?.outerHTML ?? ''], { type: 'image/svg+xml' });
    saveAs(svgBlob, iconName.concat('.svg'));
  };

  return (
    <div className='relative p-4'>
      <NoIconSelected isVisible={!Icon} />
      <div
        className={classNames(
          'sticky top-36 flex flex-col gap-8 rounded-xl bg-white p-4 shadow-xl transition-all',
          Icon ? 'opacity-1 translate-y-0' : 'translate-y-96 opacity-0',
        )}
      >
        <div className='flex flex-col gap-2'>
          <div className='font-bold text-slate-400'>Selected Icon</div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <span className='flex h-32 w-full max-w-[18rem] items-center justify-center overflow-scroll rounded-lg border-2'>
              {Icon && <Icon id={SELECTED__DOWNLOADABLE_ICON_ID} {...iconProps} />}
            </span>
            <div>{getSplitIconName(iconName).join(' ')}</div>
          </div>
        </div>
        <IconSizeSelection
          customIconSize={customIconSize}
          setCustomIconSize={setCustomIconSize}
          predefinedIconSize={predefinedIconSize}
          setPredefinedIconSize={setPredefinedIconSize}
        />
        <ActionButton primary label='Download SVG' onClick={downloadSvg} disabled={!iconSelected} />
      </div>
    </div>
  );
};

export default IconDetails;

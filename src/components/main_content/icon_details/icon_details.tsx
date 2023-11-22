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

const IconDetails = () => {
  const iconContext = useContext(IconContext);
  const categoryContext = useContext(CategoryContext);
  const [iconSize, setIconSize] = useState<IconSize>('2xl');

  const iconSelected = iconContext?.iconSelected;
  const setIconSelected = iconContext?.setIconSelected;
  const iconName = iconSelected?.iconName ?? '';
  const Icon = iconSelected?.Icon;

  const categorySelected = categoryContext?.categorySelected;

  useEffect(() => setIconSelected?.(undefined), [categorySelected, setIconSelected]);

  const downloadSvg = () => {
    const downloadableIcon = document.querySelector(`#${SELECTED__DOWNLOADABLE_ICON_ID}`);
    const svgBlob = new Blob([downloadableIcon?.outerHTML ?? ''], { type: 'image/svg+xml' });
    saveAs(svgBlob, iconName.concat('.svg'));
  };

  return (
    <div className='relative p-4'>
      <div
        className={classNames(
          'sticky top-36 flex flex-col gap-8 rounded-xl bg-white p-4 shadow-xl transition-all',
          Icon ? 'opacity-1 translate-y-0' : 'translate-y-96 opacity-0',
        )}
      >
        <div>Icon Details</div>
        <div className='flex w-full flex-col items-center justify-center gap-4'>
          <span className='flex min-h-[6rem] w-full items-center justify-center'>
            {Icon && <Icon id={SELECTED__DOWNLOADABLE_ICON_ID} iconSize={iconSize} />}
          </span>
          <div>{getSplitIconName(iconName).join(' ')}</div>
        </div>
        <IconSizeSelection iconSize={iconSize} setIconSize={setIconSize} />
        <ActionButton primary label='Download SVG' onClick={downloadSvg} disabled={!iconSelected} />
      </div>
      <NoIconSelected isVisible={!Icon} />
    </div>
  );
};

export default IconDetails;

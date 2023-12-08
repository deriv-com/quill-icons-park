import { useState } from 'react';
import classNames from 'classnames';
import NoIconSelected from './no_icon_selected/no_icon_selected';
import { getSplitIconName } from '../../../utils/text_utils';
import { IconSize } from '@deriv/quill-icons';
import IconSizeSelection from './icon_size_selection/icon_size_selection';
import { TCustomIconSize } from '../../../types/icon_types';
import IconCodeView from './icon_code_view/icon_code_view';
import { useIcon } from '@deriv/hooks';
import IconFill from './icon_fill/icon_fill';
import { SELECTED__DOWNLOADABLE_ICON_ID } from '@deriv/constants';

const IconDetails = () => {
  const {
    Icon,
    iconName,
    hasFillColorSupport,
    hasCustomIconSizeSupport,
    hasPredefinedIconSizeSupport,
  } = useIcon();
  const [fillColor, setFillColor] = useState('#000000');
  const [customIconSize, setCustomIconSize] = useState<TCustomIconSize>({
    height: '120px',
    width: '120px',
  });
  const [predefinedIconSize, setPredefinedIconSize] = useState<IconSize>('2xl');

  const fillColorProps = hasFillColorSupport
    ? {
        fill: fillColor,
      }
    : {};
  const customIconSizeProps = hasCustomIconSizeSupport
    ? {
        height: customIconSize.height,
        width: customIconSize.width,
      }
    : {};
  const predefinedIconSizeProps = hasPredefinedIconSizeSupport
    ? {
        iconSize: predefinedIconSize,
      }
    : {};
  const iconProps = { ...fillColorProps, ...customIconSizeProps, ...predefinedIconSizeProps };

  return (
    <div className='relative p-4'>
      <NoIconSelected isVisible={!Icon} />
      <div
        className={classNames(
          'sticky top-36 flex w-96 flex-col gap-6 rounded-xl bg-white p-4 shadow-xl transition-all',
          Icon ? 'opacity-1 translate-y-0' : 'translate-y-96 opacity-0',
        )}
      >
        <div className='flex flex-col gap-2'>
          <div className='font-bold text-slate-400'>Selected Icon</div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='h-32 w-full max-w-[20rem] overflow-scroll rounded-lg border-2'>
              {Icon && <Icon id={SELECTED__DOWNLOADABLE_ICON_ID} {...iconProps} />}
            </div>
            <div>{getSplitIconName(iconName).join(' ')}</div>
          </div>
        </div>
        <IconFill fillColor={fillColor} setFillColor={setFillColor} />
        <IconSizeSelection
          customIconSize={customIconSize}
          setCustomIconSize={setCustomIconSize}
          predefinedIconSize={predefinedIconSize}
          setPredefinedIconSize={setPredefinedIconSize}
        />
        <IconCodeView
          iconName={iconName}
          fillColor={hasFillColorSupport ? fillColor : undefined}
          customIconSize={hasCustomIconSizeSupport ? customIconSize : undefined}
          predefinedIconSize={hasPredefinedIconSizeSupport ? predefinedIconSize : undefined}
        />
      </div>
    </div>
  );
};

export default IconDetails;

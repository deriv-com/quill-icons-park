import { IconCodeView, IconFill, IconSizeSelection, NoIconSelected } from '@deriv/components';
import { SELECTED__DOWNLOADABLE_ICON_ID } from '@deriv/constants';
import { useIcon } from '@deriv/hooks';
import { IconSize } from '@deriv/quill-icons';
import { TCustomIconSize } from '@deriv/types';
import { getSplitIconName } from '@deriv/utils';
import classNames from 'classnames';
import { useState } from 'react';

export const IconDetails = () => {
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
            <div className='h-32 w-full overflow-scroll rounded-lg border-2'>
              {Icon && <Icon id={SELECTED__DOWNLOADABLE_ICON_ID} {...iconProps} />}
            </div>
            <div className='grid w-full grid-cols-[1fr_max-content] gap-2'>
              <div>{getSplitIconName(iconName).join(' ')}</div>
              <div className='h-min cursor-pointer rounded-md border-2 border-slate-50 px-2 py-1 shadow-md hover:border-slate-300'>
                Copy Name
              </div>
            </div>
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

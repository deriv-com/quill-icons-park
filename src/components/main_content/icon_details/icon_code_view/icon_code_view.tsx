import { ActionButton } from '@deriv/components';
import { SELECTED__DOWNLOADABLE_ICON_ID } from '@deriv/constants';
import {
  IconSize,
  IllustrativeEtfIcon,
  LabelPairedArrowDownToBracketMdRegularIcon,
} from '@deriv/quill-icons';
import { TCustomIconSize } from '@deriv/types';
import { saveAs } from 'file-saver';
import { useEffect, useState } from 'react';

type TIconCodeView = {
  iconName: string;
  customIconSize?: TCustomIconSize;
  fillColor?: string;
  predefinedIconSize?: IconSize;
};

export const IconCodeView = ({
  iconName,
  customIconSize,
  fillColor,
  predefinedIconSize,
}: TIconCodeView) => {
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy Code');

  let timeOut = 0;
  useEffect(() => clearTimeout(timeOut), [timeOut]);

  const customIconSizeHeightProp = customIconSize?.height
    ? `height='${customIconSize.height}'`
    : '';
  const customIconSizeWidthProp = customIconSize?.width ? `width='${customIconSize.width}'` : '';
  const customIconSizeProp = [customIconSizeHeightProp, customIconSizeWidthProp].join(' ');

  const fillColorProp = fillColor ? `fill='${fillColor}'` : '';

  const predefinedIconSizeProp = predefinedIconSize ? `iconSize='${predefinedIconSize}'` : '';

  const iconNameComponentElements = [
    '<'.concat(iconName),
    customIconSizeProp,
    fillColorProp,
    predefinedIconSizeProp.concat('/>'),
  ];
  const iconNameComponentUsageCode = iconNameComponentElements.join(' ').trim();

  const downloadSvg = () => {
    const downloadableIcon = document.querySelector(`#${SELECTED__DOWNLOADABLE_ICON_ID}`);
    const svgBlob = new Blob([downloadableIcon?.outerHTML ?? ''], { type: 'image/svg+xml' });
    saveAs(svgBlob, iconName.concat('.svg'));
  };

  const copyCode = () => {
    navigator.clipboard.writeText(iconNameComponentUsageCode);
    setCopyButtonLabel('Copied!');
    timeOut = setTimeout(() => {
      setCopyButtonLabel('Copy Code');
    }, 1000);
  };

  return (
    !!iconNameComponentUsageCode && (
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <span className='font-bold text-slate-400'>Code Usage</span>
          <div className='overflow-scroll rounded-lg border-2 p-2'>
            {iconNameComponentUsageCode}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <ActionButton
            label='Download SVG'
            onClick={downloadSvg}
            Icon={LabelPairedArrowDownToBracketMdRegularIcon}
          />
          <ActionButton
            primary
            label={copyButtonLabel}
            onClick={copyCode}
            Icon={IllustrativeEtfIcon}
          />
        </div>
      </div>
    )
  );
};

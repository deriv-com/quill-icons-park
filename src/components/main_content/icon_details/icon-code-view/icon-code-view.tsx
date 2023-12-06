import { IconSize } from '@deriv/quill-icons';
import { TCustomIconSize } from '../../../../types/icon_types';
import ActionButton from '../action_button/action_button';
import { useState } from 'react';
import { IllustrativeEtfIcon } from '@deriv/quill-icons/Illustrative';
import { LabelPairedArrowDownToBracketRegularIcon } from '@deriv/quill-icons/LabelPaired';
import { SELECTED__DOWNLOADABLE_ICON_ID } from '../../../../constants/icon_constants';
import { saveAs } from 'file-saver';

type TIconCodeView = {
  iconName: string;
  customIconSize?: TCustomIconSize;
  predefinedIconSize?: IconSize;
};

const IconCodeView = ({ iconName, customIconSize, predefinedIconSize }: TIconCodeView) => {
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy Code');

  const customIconSizeHeightProp = customIconSize?.height
    ? `height='${customIconSize.height}'`
    : '';
  const customIconSizeWidthProp = customIconSize?.width ? `width='${customIconSize.width}'` : '';
  const customIconSizeProp = [customIconSizeHeightProp, customIconSizeWidthProp].join(' ');

  const predefinedIconSizeProp = predefinedIconSize ? `iconSize='${predefinedIconSize}'` : '';

  const iconNameComponentElements = [
    '<'.concat(iconName),
    customIconSizeProp,
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
    setTimeout(() => {
      setCopyButtonLabel('Copy Code');
    }, 1000);
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='overflow-scroll rounded-lg border-2 p-2'>{iconNameComponentUsageCode}</div>
      <div className='grid grid-cols-2 gap-4'>
        <ActionButton
          label='Download SVG'
          onClick={downloadSvg}
          Icon={LabelPairedArrowDownToBracketRegularIcon}
        />
        <ActionButton
          primary
          label={copyButtonLabel}
          onClick={copyCode}
          disabled={!iconNameComponentUsageCode}
          Icon={IllustrativeEtfIcon}
        />
      </div>
    </div>
  );
};

export default IconCodeView;

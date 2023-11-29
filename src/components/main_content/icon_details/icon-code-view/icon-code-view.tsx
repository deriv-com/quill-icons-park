import { IconSize } from '@deriv/quill-icons';
import { TCustomIconSize } from '../../../../types/icon_types';
import ActionButton from '../action_button/action_button';
import { useState } from 'react';

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
      <ActionButton
        primary
        label={copyButtonLabel}
        onClick={copyCode}
        disabled={!iconNameComponentUsageCode}
      />
    </div>
  );
};

export default IconCodeView;

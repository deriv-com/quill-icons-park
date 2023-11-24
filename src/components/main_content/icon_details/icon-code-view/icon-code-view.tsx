import { IconSize } from '@deriv/quill-icons';
import { TCustomIconSize } from '../../../../types/icon_types';
import ActionButton from '../action_button/action_button';

type TIconCodeView = {
  iconName: string;
  customIconSize: TCustomIconSize;
  predefinedIconSize: IconSize;
};

const IconCodeView = ({ iconName, customIconSize, predefinedIconSize }: TIconCodeView) => {
  const customIconSizeHeightProp = customIconSize.height ? `height='${customIconSize.height}'` : '';
  const customIconSizeWidthProp = customIconSize.width ? `width='${customIconSize.width}'` : '';
  const customIconSizeProp = [customIconSizeHeightProp, customIconSizeWidthProp].join(' ');

  const predefinedIconSizeProp = predefinedIconSize ? `iconSize='${predefinedIconSize}'` : '';

  const iconNameComponentElements = [
    '<',
    iconName,
    customIconSizeProp,
    predefinedIconSizeProp,
    '/>',
  ];
  const iconNameComponent = iconNameComponentElements.join(' ').trim();

  const copyCode = () => {
    console.log('Copied to clipboard');
  };

  return (
    <div className='flex flex-col gap-4'>
      <div className='rounded-lg border-2 p-2'>{iconNameComponent}</div>
      <ActionButton primary label='Copy Code' onClick={copyCode} disabled={!iconNameComponent} />
    </div>
  );
};

export default IconCodeView;

import { TCustomIconSize } from '../../../../../types/icon_types';

type TCustomIconSelection = {
  customIconSize: TCustomIconSize;
  setCustomIconSize: React.Dispatch<React.SetStateAction<TCustomIconSize>>;
};

const CustomIconSizeSelection = ({ customIconSize, setCustomIconSize }: TCustomIconSelection) => {
  const sizeFields = ['height', 'width'] as const;

  return (
    <div className='flex flex-col gap-2'>
      {sizeFields.map((fieldName) => (
        <div className='flex items-center justify-between'>
          <span>{fieldName.substring(0, 1).toUpperCase().concat(fieldName.substring(1))}</span>
          <input
            className='w-20 rounded-xl border-2 border-transparent px-4 py-2 shadow-xl outline-none transition-all focus:border-rose-500'
            type='text'
            value={customIconSize[fieldName]}
            onChange={(event) =>
              setCustomIconSize({ ...customIconSize, [fieldName]: event.target.value })
            }
          />
        </div>
      ))}
    </div>
  );
};

export default CustomIconSizeSelection;

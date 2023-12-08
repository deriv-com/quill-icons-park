import { TCustomIconSize } from '@deriv/types';

type TCustomIconSelection = {
  customIconSize: TCustomIconSize;
  setCustomIconSize: React.Dispatch<React.SetStateAction<TCustomIconSize>>;
};

export const CustomIconSizeSelection = ({
  customIconSize,
  setCustomIconSize,
}: TCustomIconSelection) => {
  const sizeFields = ['height', 'width'] as const;

  return (
    <div className='flex justify-between gap-2'>
      {sizeFields.map((fieldName) => (
        <div key={fieldName} className='flex items-center gap-2'>
          <span>{fieldName.substring(0, 1).toUpperCase().concat(fieldName.substring(1))}:</span>
          <input
            className='w-20 rounded-xl border-2 px-4 py-1 shadow-lg outline-none transition-all focus:border-rose-500'
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

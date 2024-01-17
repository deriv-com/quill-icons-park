import { useIcon } from '@deriv/hooks';
import { throttledStateUpdater } from '@deriv/utils';
import { useMemo, useState } from 'react';

type TIconFill = {
  fillColor: string;
  setFillColor: React.Dispatch<React.SetStateAction<string>>;
};

export const IconFill = ({ fillColor, setFillColor }: TIconFill) => {
  const { hasFillColorSupport } = useIcon();
  const [fillColors, setFillColors] = useState<string[]>([]);

  const memoizedOnChangeHandler = useMemo(
    () => throttledStateUpdater(setFillColor, setFillColors),
    [setFillColor],
  );

  return (
    hasFillColorSupport && (
      <div className='flex flex-col gap-2'>
        <span className='font-bold text-slate-400'>Icon Fill</span>
        <div className='flex h-8 items-center gap-2 overflow-scroll'>
          <div className='flex h-full w-min cursor-pointer items-center gap-2 rounded-md border-2 border-slate-50 px-2 py-1 shadow-md hover:border-slate-300'>
            <input
              type='color'
              id='colorPicker'
              name='colorPicker'
              value={fillColor}
              onChange={memoizedOnChangeHandler}
              className='cursor-pointer'
            />
            <label htmlFor='colorPicker' className='w-max cursor-pointer'>
              Custom Color
            </label>
          </div>
          {fillColors.map((fillColor, index) => (
            <div
              key={index}
              onClick={() => setFillColor(fillColor)}
              className='h-full w-8 cursor-pointer rounded-md border-2 border-slate-50 p-1 shadow-md hover:border-slate-300'
            >
              <div className='h-full w-full' style={{ background: fillColor }} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

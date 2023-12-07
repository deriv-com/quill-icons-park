type TIconFill = {
  fillColor: string;
  setFillColor: React.Dispatch<React.SetStateAction<string>>;
};

const IconFill = ({ fillColor, setFillColor }: TIconFill) => {
  return (
    <div className='flex flex-col gap-2'>
      <span className='font-bold text-slate-400'>Icon Fill</span>
      <div className='flex items-center gap-4'>
        <span className='flex w-min cursor-pointer items-center gap-2 rounded-md border-2 border-slate-50 px-2 py-1 shadow-md hover:border-slate-300'>
          <input
            type='color'
            id='colorPicker'
            name='colorPicker'
            value={fillColor}
            onChange={(event) => setFillColor(event.target.value)}
            className='cursor-pointer '
          />
          <label htmlFor='colorPicker' className='w-max cursor-pointer'>
            Custom Color
          </label>
        </span>
      </div>
    </div>
  );
};

export default IconFill;

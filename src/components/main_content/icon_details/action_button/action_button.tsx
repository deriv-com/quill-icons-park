import classNames from 'classnames';

type TActionButton = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
};

const ActionButton = ({ label, onClick, disabled, primary }: TActionButton) => (
  <button
    disabled={disabled}
    className={classNames(
      'flex w-full cursor-pointer justify-center rounded-lg border-2 px-4 py-2 font-bold shadow-md transition-all hover:shadow-xl',
      disabled
        ? 'bg-slate-100 text-slate-300 hover:bg-slate-100 hover:shadow-md'
        : primary
        ? 'border-rose-500 bg-rose-500 text-white hover:border-rose-600 hover:bg-rose-600'
        : ' border-rose-500 bg-white text-rose-500 hover:bg-rose-50',
    )}
    onClick={onClick}
  >
    {label}
  </button>
);

export default ActionButton;

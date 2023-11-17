import classNames from 'classnames';

type TActionButton = {
  label: string;
  onClick: () => void;
  primary?: boolean;
};

const ActionButton = ({ label, onClick, primary }: TActionButton) => (
  <button
    className={classNames(
      'flex w-full cursor-pointer justify-center rounded-lg border-2 px-4 py-2 font-bold shadow-md transition-all hover:shadow-xl',
      primary
        ? 'border-rose-500 bg-rose-500 text-white hover:border-rose-600 hover:bg-rose-600'
        : ' border-rose-500 bg-white text-rose-500 hover:bg-rose-50',
    )}
    onClick={onClick}
  >
    {label}
  </button>
);

export default ActionButton;

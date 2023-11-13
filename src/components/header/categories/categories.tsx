import { CATEGORIES } from '../../../constants/categories';
import './categories.scss';

const Categories = () => (
  <div className='categories flex w-full items-center justify-center gap-2'>
    {CATEGORIES.map((category) => (
      <div key={category}>{category}</div>
    ))}
  </div>
);

export default Categories;

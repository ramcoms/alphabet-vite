import { NavLink } from 'react-router-dom';

const HomeBtn = () => {
  return (
    <button>
      <NavLink to='/'>
        <span>Home</span>
      </NavLink>
    </button>
  );
};

export default HomeBtn;

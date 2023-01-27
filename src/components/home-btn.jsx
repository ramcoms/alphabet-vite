import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

const HomeBtn = () => {
  return (
    <button>
      <NavLink to='/'>
        {/* <span>Home</span> */}
        <span>
          <AiFillHome />
        </span>
      </NavLink>
    </button>
  );
};

export default HomeBtn;

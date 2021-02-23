import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/okinawa">
            沖縄リトリート
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/yokohama">
            横浜2Days
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/osasoi">
            お誘い文に代えて
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/requirements">
            参加要件
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/videos">
            動画リンク集
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/staff">
            スタッフ
          </Link>
        </li>
      </ul>
      {/* <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul> */}
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Menu;

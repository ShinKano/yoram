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
          <Link onClick={props.onToggleMenu} to="/tokyo">
            東京・基礎編
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/okinawa">
            沖縄・基礎編
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/okinawa-2">
            沖縄・応用編
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/invitation">
            オーガナイザーチームから
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/requirements">
            参加にあたってのお願い
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/videos">
            動画リンク集
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/nvc">
            NVCについて
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

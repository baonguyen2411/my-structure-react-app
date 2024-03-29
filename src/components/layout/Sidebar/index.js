import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import { FiMenu, FiSearch, FiFolder, FiUser, FiSettings } from 'react-icons/fi';

import './styles.scss';

const Sidebar = ({ isActivated, onToggle }) => {
  const styleClasses = ['sidebar'];

  if (isActivated) {
    styleClasses.push('active');
  }

  return (
    <div className={styleClasses.join(' ')}>
      <div className="sidebar__logo-content">
        <div className="sidebar__logo">
          <div className="sidebar__logo-name">CodingLab</div>
        </div>
        <i
          className="sidebar__btn-toggle"
          onClick={onToggle}
          role="button"
          tabIndex="0"
        >
          <FiMenu size={20} />
        </i>
      </div>

      <ul className="nav_list">
        <li>
          <a href="#search">
            <i className="bx bx-search">
              <FiSearch size={20} />
            </i>
            <input type="text" name="" id="" placeholder="Search..." />
          </a>
          <span
            className="tooltip"
            css={css`
              color: #11101d;
            `}
          >
            Search
          </span>
        </li>
        <li>
          <Link to="/user">
            <i className="bx bx-user">
              <FiUser size={16} />
            </i>
            <span className="links_name">User</span>
          </Link>
          <span className="tooltip">User</span>
        </li>
        <li>
          <Link to="/file-manager">
            <i className="bx bx-folder">
              <FiFolder size={16} />
            </i>
            <span className="links_name">File Manager</span>
          </Link>
          <span className="tooltip">File Manager</span>
        </li>
        <li>
          <Link to="/setting">
            <i className="bx bx-cog">
              <FiSettings size={16} />
            </i>
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  isActivated: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  isActivated: true,
};

export default memo(Sidebar);

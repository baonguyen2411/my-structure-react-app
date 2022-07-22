/* eslint-disable react/no-array-index-key */
import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import { BsArrowLeftShort } from 'react-icons/bs';
import { AiFillEnvironment } from 'react-icons/ai';
import { RiDashboardLine } from 'react-icons/ri';

const MENUS = [
  {
    title: 'Dashboard',
    icon: <RiDashboardLine />,
  },
  {
    title: 'Pages',
    icon: <RiDashboardLine />,
  },
  {
    title: 'Media',
    icon: <RiDashboardLine />,
  },
  {
    title: 'Project',
    icon: <RiDashboardLine />,
  },
  {
    title: 'Analytics',
    icon: <RiDashboardLine />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-[#463E78] h-screen relative pb-5 transition-all duration-300 ${
        open ? 'w-72' : 'w-20'
      }`}
    >
      <BsArrowLeftShort
        className={`bg-white text-[#50A4B9] text-3xl rounded-full absolute -right-3 top-7 border cursor-pointer transition-all duration-300 ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex bg-[#2BAAA7] p-6 w-full">
        <AiFillEnvironment
          className={`bg-white text-[#463E78] min-w-[36px] text-4xl rounded cursor-pointer block float-left mr-2 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-300 ${
            !open && 'scale-0'
          }`}
        >
          Tailwindcss
        </h1>
      </div>
      <ul className="p-4 pt-2">
        {MENUS.map((menu, index) => (
          <li
            key={index}
            className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#342F5C] rounded-md mt-2"
          >
            <span className="text-2xl block float-left">{menu.icon}</span>
            <span
              className={`text-base font-medium flex-1 ${!open && 'hidden'}`}
            >
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default memo(Sidebar);

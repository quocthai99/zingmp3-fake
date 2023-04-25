import React from 'react'
import logo from '../../../assets/logo-dark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faRadio, faMusic, faHeartMusicCameraBolt, faStar, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';

import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const NAV_MENU = [
  { title: "Khám Phá", path: '/', icon: <FontAwesomeIcon icon={faCompactDisc} />},
  { title: "#zingchart", path: '/zing-chart', icon: <FontAwesomeIcon icon={faChartBar} />},
  { title: "Radio", path: '/radio', icon: <FontAwesomeIcon icon={faRadio} />},
  { title: "Thư Viện", path: '/mymusic', icon: <FontAwesomeIcon icon={faMusic} />},
]
const NAV_MENU_SECOND = [
  { title: "Nhạc Mới", path: '/moi-phat-hanh', icon: <FontAwesomeIcon icon={faHeartMusicCameraBolt} />},
  { title: "Chủ Đề & Thể Loại", path: '/hub', icon: <FontAwesomeIcon icon={faListCheck} />},
  { title: "Top 100", path: '/top100', icon: <FontAwesomeIcon icon={faStar} />},
]

const Sidebar = () => {
  return (
    <div className={cx('wrapper')} >
      <div className={cx('inner')}>
        <div className={cx('main-logo')} ><img src={logo} alt='logo' /></div>
        <div className={cx('nav-first')} >
          {
            NAV_MENU.map((nav, index) => {
              return (
                <NavLink className={(nav) => cx('nav-first--item', { active: nav.isActive })} key={index} to={nav.path}>
                  <span className={cx('item-icon')}>{nav.icon}</span>
                  <span className={cx('item-title')}>{nav.title}</span>
                </NavLink>
              )
            })
          }
        </div>
        <div className={cx('nav-second')}>
          <div className={cx('nav-second-list')} >
            {
              NAV_MENU_SECOND.map((nav, index) => {
                return (
                  <NavLink className={(nav) => cx('nav-second--item', { active: nav.isActive })} key={index} to={nav.path}>
                    <span className={cx('item-icon')}>{nav.icon}</span>
                    <span className={cx('item-title')}>{nav.title}</span>
                  </NavLink>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
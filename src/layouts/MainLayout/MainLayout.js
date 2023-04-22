import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'
import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
            <div className={cx('sidebar')} >
                <Sidebar />
            </div>
            <div className={cx('inner')} >
                <div className={cx('header')} >
                    <Header />
                </div>
                <div className={cx('content')} >
                    {children}
                </div>
            </div>
        </div>
        <div className={cx('player')} >
            <Player />
        </div>
    </div>
  )
}

export default MainLayout
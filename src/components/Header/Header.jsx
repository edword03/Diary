import React from 'react';
import classes from './Header.module.css';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Filter from '../Filter/Filter';

import logo from '../../assets/icon.svg';
import BtnSvg from '../../assets/display-grid.svg';
import pen from '../../assets/pen.svg';

const Header = React.memo(({ setIsNote, isNote }) => {
  const onAddNote = () => setIsNote(false);
  const onList = () => setIsNote(true);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <h1 className={classes.title}>Дневник</h1>
        </div>
        {isNote && <Filter />}
        <nav className={classes.nav}>
          <div className={classes.navWrapper}>
            <Button primary={true} btnImg={BtnSvg} onClick={onList}>
              Список
            </Button>
            <Button primary={false} btnImg={pen} onClick={onAddNote}>
              Запись
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
});

Header.propTypes = {
  setIsNote: PropTypes.func.isRequired,
  isNote: PropTypes.bool,
};

export default Header;

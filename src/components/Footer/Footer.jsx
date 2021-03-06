import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import GithubButton from '../GithubButton/GithubButton';
import toolsData from '../../data/tools';
import settings from '../../data/settings';
import classes from './Footer.styles.less';

export default function Footer({ className }) {
  const tools = toolsData.map((tool) => (
    <Link className={classes.link} to={tool.link} key={tool.name}>
      {tool.name}
    </Link>
  ));

  return (
    <footer className={cx(classes.footer, className)}>
      <div className={classes.inner}>
        <div className={classes.main}>
          <div className={classes.links}>
            <h3 className={classes.title}>Tools</h3>
            <div className={classes.chunks}>{tools}</div>
          </div>

          <div className={classes.links}>
            <h3 className={classes.title}>Application</h3>
            <Link className={classes.link} to="/about">
              About
            </Link>
            <a href={settings.bugs} className={classes.link}>
              Report issue
            </a>
          </div>
        </div>

        <div className={classes.control}>
          <GithubButton />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

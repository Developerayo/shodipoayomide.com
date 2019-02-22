import React from 'react';
import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
        </div>
        <a
          href="https://github.com/developerayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href="https://twitter.com/developerayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/developerayo"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      <div style={{ float: 'right' }}>
      &copy; Copyright 2019
      </div>
      </footer>
    );
  }
}


export default Footer;

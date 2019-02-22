import React from 'react';
import profilePic from '../assets/developerayo-img.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Developerayo`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
            borderRadius: '20%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Articles on Software Engineering by{' '}
          <a href="https://twitter.com/developerayo" target="_blank">Developerayo</a>.{' '}
          Developer Advocate & Software Engineer .
        </p>
      </div>
    );
  }
}

export default Bio;

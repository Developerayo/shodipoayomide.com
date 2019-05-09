import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "";
    this.instance.appendChild(s);
  }

  render() {
    return <div ref={el => (this.instance = el)} />;
  }
}

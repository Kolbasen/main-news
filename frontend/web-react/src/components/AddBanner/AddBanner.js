import React, { Component } from 'react';

class AdBanner extends Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const style = {
      display: 'block',
    };

    return(
		    <ins className="adsbygoogle"
        style={style}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2885533890606756"
        data-ad-slot={this.props.slot}>
      </ins>
    );
  }
}

export default AdBanner;
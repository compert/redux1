import React from 'react';
import PropTypes from 'prop-types';

class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {frame: 1};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mout-set-state
        frame: this.state.frame + 1
      });
    }, this.props.interval);
  }

  componentWillUnMount() {
    clearInterval(this.interval);
  }

  render() {
    let text = '';
    if (this.props.loading) {
      let dots = this.state.frame % (this.props.dots + 1);
      while (dots > 0) {
        text += '.';
        dots--;
      }
    }
    return <span>{text}&nbsp;</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 300, dots: 3
};

LoadingDots.propTypes = {
  loading: PropTypes.bool,
  interval: PropTypes.number,
  dots: PropTypes.number
};

export default LoadingDots;

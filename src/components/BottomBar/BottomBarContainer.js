import React from "react";
import { connect } from "react-redux";
import BottomBar from "./BottomBar";

class BottomBarContainer extends React.Component {
  render() {
      console.log("burp", this.props.navigatorIsAside)
    return this.props.navigatorIsAside ? <BottomBar /> : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorIsAside: true
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomBarContainer);

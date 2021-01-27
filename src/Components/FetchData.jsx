import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchData } from "../redux/action";

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleFetchData = () => {
    this.props.fetchData(2);
    // console.log("AMAN")
  };

  render() {
      console.log("components",this.props)
    return (
      <div>
        <button onClick={this.handleFetchData}>Click to fetch data</button>
        <div>datat:{ this.props.user }</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.FetchDataReducer.user,
    error: state.FetchDataReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(fetchData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchData);

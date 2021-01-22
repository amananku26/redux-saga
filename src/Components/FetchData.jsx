import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {fetchData} from "../redux/action"



class FetchData extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:""
        }
    }

    handleFetchData = () => {
        this.props.fetchData(2)
        // console.log("AMAN")
    }
  
    render() {
        return (
            <div>
                <button onClick={this.handleFetchData} >Click to fetch data</button>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
 return{
     user:state.fetchDataReducer.user,
     error:state.fetchDataReducer.error
 }
}

const mapDispatchToProps = (dispatch) => {
  return{
      fetchData:(id)=> {
          dispatch(fetchData(id))
      }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(FetchData)
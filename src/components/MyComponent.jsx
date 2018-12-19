import React,{ Component } from 'react';

class MyComponent extends Component {

  constructor(){
    super();
    this.state={
      current:''
    }
    console.log("MOUNTING");
    console.log("==================");
    console.log("constructor");
  }

  componentWillMount(){
    console.log("componentWillMount")
  }
  
  componentDidMount(){
    console.log("componentDidMount")
    console.log("==================")
  }

  componentWillReceiveProps(nextProps){
  	console.log("UPDATING");
    console.log("==================");
    console.log("componentWillReceiveProps");
    console.log(nextProps)
  }

  componentWillUpdate(nextProps, nextState){
    console.log("componentWillUpdate")
    /*console.log(nextProps)
    console.log(nextState)*/
  }

  shouldComponentUpdate(nextProps, nextState){
  	console.log("shouldComponentUpdate")
    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot){
  	console.log("componentDidUpdate")
  	console.log(prevProps)
  	console.log(prevState)
  	/*console.log(snapshot)*/
  }
  componentWillUnmount(){
  	console.log("componentWillUnmount")
  	this.props.unmount(100)
  }

  render() {
  	console.log("render")
    return (
      <div>
      	<p>{this.props.value}</p>
      </div>
    );
  }
}

export default MyComponent;

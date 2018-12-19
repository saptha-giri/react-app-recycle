import React, { Component } from 'react';
import MyComponent from './components/MyComponent'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      value:0,
      mount:true
    }
    
  }

  unmount(value){
      this.setState({value})
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.mount ? 
            <MyComponent 
            value={this.state.value}
            unmount={(val)=>this.unmount(val)}/> : 
            null
          }
          <button onClick={()=>{
            this.setState({
              value:this.state.value+1
            })
          }}>Increment</button>

          <button onClick={()=>{
            this.setState({
              mount:!this.state.mount
            })
          }}>(un)mount</button>
        </header>
      </div>
    );
  }
}

export default App;

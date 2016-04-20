/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name: 'Student'
         }
        // this.onChange = this.onChange.bind(this);
    }
   
  onChange(e){
     this.setState({
         name:e.target.value
     })
  }
    render(){

        return (
            <div>
                <h1>Welcome to ReactJS {this.state.name}</h1>
                <strong>Enter your name</strong><br/>
                <form>
                <input type="text" onChange={this.onChange.bind(this)} />
                </form>
            </div>
        )
    }
}
 
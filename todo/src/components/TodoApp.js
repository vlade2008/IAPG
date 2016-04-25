/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';

export default  class TodoApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
          mytodo:'',
            list:[
              'Vote dutarte',
              'Vote pacquioa'
            ]
        };
    }

      onChange=(e)=>{
       this.setState({
           mytodo:e.target.value
       })
    };

    onAddItem=(e)=>{

      if (e.key === 'Enter') {
        var tmp = this.state.list;
       tmp.push(this.state.mytodo);

       this.setState({
        list:tmp,
        mytodo:' '
       })
      }
       
    };
  
    render(){
      let items = [];
      
      for(var i=0; i<this.state.list.length;i++){
        items.push(<li key={i}>{this.state.list[i]}</li>);
      }

        return (
            <div>
                <h1>My todo list</h1>
                <input type="text" onChange={this.onChange}  onKeyUp={this.onAddItem} value={this.state.mytodo}/>
                
                <ol>
                    {items}
                </ol>
            </div>
        )
    }
}

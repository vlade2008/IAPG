/**
 * Created by albertoclarit on 4/18/16.
 */
import React from 'react';
import TodoItem from './TodoItem'

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

    deleteMe=(index)=>{
      var tmp = this.state.list;
      tmp.splice(index,1);
        this.setState({
          list:tmp
        });
    };
  
    render(){
      let items = [];
      
      // for(var i=0; i<this.state.list.length;i++){
      //   items.push(<li key={i}>{this.state.list[i]}</li>);
      // }

      for(var i=0; i<this.state.list.length;i++){
        items.push(<TodoItem  key={i}
                              description={this.state.list[i]}
                              index={i}
                              removeMe={this.deleteMe}

          />);
      }
        return (
            <div className="todoapp">
                <h1 className="header">My todo list</h1>
                <input className="todoInput" type="text" onChange={this.onChange}  onKeyUp={this.onAddItem} value={this.state.mytodo}/>
                
                    {items}
            </div>
        )
    }
}

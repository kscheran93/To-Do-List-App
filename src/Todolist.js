import React,{Component} from 'react';
import './index.css';
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Todos:['Writing Books','Playing Cricket','Watching TV'],
            task:''
         }
    }

    addTask=(e)=>{
        this.setState({Todos:[...this.state.Todos,this.state.task]})
    }

    deleteTask = t => {
        var delet = this.state.Todos;
        delet.splice(t, 1);
        this.setState([...delet]);
      };
    render() { 
        return ( 
            <div>
                <input type='text' onChange={(e)=>this.setState({task:e.target.value})} placeholder='Enter Task'/>
                <button className='submit' onClick={this.addTask}>+</button>
                <div className='todolist'>
                  <span> {this.state.Todos.map(items=><li>{items}<button onClick={this.deleteTask}className='remove'> - </button></li>)}</span>
                </div>
                
               
            </div>
          );
    }
}
 
export default Todolist;
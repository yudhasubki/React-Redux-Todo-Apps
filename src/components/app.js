import React,{Component} from 'react';
import Todo from '../containers/todo';
import TodoList from '../containers/todo_list';

class App extends Component{
    render(){
        return(
            <div>
                <Todo/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/index';
import { bindActionCreators } from 'redux';
class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                {
                    this.props.todo.map((value,index) => {
                        return (
                            <li key={index}>
                                { value }
                                <button onClick={() => this.props.removeTodo(value)}>Hapus List </button>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeTodo}, dispatch);
}

function mapStateToProps(state){
    return{
        todo:state
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
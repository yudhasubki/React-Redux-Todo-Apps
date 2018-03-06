import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addTodo,todos }  from '../actions/index';
import { bindActionCreators } from 'redux';
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            query:'',
        };
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }


    onChangeHandler(e){
        this.setState({
            query:e.target.value,
        });
    }

    onSubmitHandler(e){
        e.preventDefault();
        this.props.addTodo(this.state.query);
    }

    render(){
        return(
            <div>
                <h1>My Todo Apps!</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" placeholder="add todo..." onChange={this.onChangeHandler} />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTodo}, dispatch);
}

export default connect(null, mapDispatchToProps)(Todo);
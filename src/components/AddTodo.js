import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class AddTodo extends Component{
    state = {
        title: ''
    };

    onChange = (e) => this.setState({title: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    };
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex', padding: '20px', height: '100px'}}>
                <input type="text"
                       name="title"
                       placeholder="Add Todo..."
                       style={{flex: '20', padding: '5px', fontSize: '15px'}}
                       value={this.state.title}
                        onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn" style={{flex: '1', fontSize: '15px'}}/>
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo
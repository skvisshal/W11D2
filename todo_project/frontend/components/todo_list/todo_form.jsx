import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: "", body: "", done: false};
        this.update = this.update.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    };


    update(event) {
    this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input onChange={this.update("title")} type="text" value={this.state.title} name="title"></input>
                </label>
                <label>Body
                    <textarea onChange={this.update("body")} value={this.state.body} name="body"></textarea>
                </label>
                <label>Done
                    <label> Yes
                        <input onChange={this.update("done")} type="radio" name="Done" value="true"></input>
                    </label>
                    <label> No
                        <input onChange={this.update("done")} type="radio" name="Done" value="false" selected></input>
                    </label>
                </label>

                <input type="submit" value="Submit">Create Todo</input>
            </form>
        );
    }
}

export default TodoForm;
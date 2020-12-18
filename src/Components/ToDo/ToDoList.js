import React, {Component} from 'react';

class ToDoList extends Component {

    constructor(){
        super();

        this.state={
            Item:'',
            list: []
        };
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        })
    }

    addListItem() {
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        // spread operator will copy the state list
        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem:""
        });
    }

    render() {
        return(
            <div>
                <input
                type='text'
                placeholder="type to do item here"
                value={this.state.newItem}
                onChange={e => this.updateInput("newToDo", e.target.value)}
                />
                <br />
                <br />
                <button
                    onClick={() => this.addListItem()}>
                    Add Item to List
                </button>
            </div>
        )
    }
}

export default ToDoList;
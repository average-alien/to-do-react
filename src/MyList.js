import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    console.log("Clearing list!")

    this.setState({
      taskArray: []
    })
  }

  handleChange = e => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
    console.log(this.state)
  }

  render() {
    const toDoItems = this.state.taskArray.map((item, i) => {
      return <ListItem task={item} key={i} />
    })

    return(
      <>
        <h1>Things I should Stop procrastinating:</h1>

        <form onSubmit={this.addItem}>
          <label htmlFor='newItem' >New To Do:</label>
          <input type='text'
            placeholder='Type an item here'
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <button type='submit'>Add to List!</button>
        </form>

        <ul>
          {toDoItems}
        </ul>

        <button onClick={this.clearList}>Finished the list!</button>
      </>
    )
  }
}

export default MyList
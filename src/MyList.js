import React, { Component } from 'react'
import ListItem from './ListItem'

class MyList extends Component {
  render() {
    const toDoItems = this.props.theList.map((item, i) => {
      return <ListItem task={item} key={i} />
    })
    return(
      <div>
        <h1>Things I should Stop procrastinating:</h1>

        <ul>
          {toDoItems}
        </ul>
      </div>
    )
  }
}

export default MyList
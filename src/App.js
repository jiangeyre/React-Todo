import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      toDos: [
        {
          task: 'Drink enough tea',
          id: 666,
          completed: false
        },
        {
          task: 'Read Balzac',
          id: 420,
          completed: false
        }
      ],
      toDo: ''
    };
  }

  addToDo = event => {
    event.preventDefault();
    const newToDo = { task: this.state.toDo, completed: false, id: Date.now() };
    this.setState({
      toDos: [...this.state.toDos, newToDo],
      toDo: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;

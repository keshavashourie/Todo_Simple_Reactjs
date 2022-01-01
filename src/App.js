import React from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  /*
  Add items to todo when submit is clicked
  */
  function handleSubmit(event) {
    event.preventDefault();
    if (!value) return;
    //console.log(value);
    addTodo(value);
    setValue("");
  }

  return (
    <Form onClick={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
        <br />
        <Button className="primary mb-3" type="submit">
          submit
        </Button>
      </Form.Group>
    </Form>
  );
}

function TodoItems({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <Button variant="outline-success" onClick={() => markTodo(index)}>
        ✓
      </Button>{" "}
      <Button variant="outline-danger" onClick={() => removeTodo(index)}>
        ✕
      </Button>
    </div>
  );
}

//function used to add all todos
function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "test",
      isDone: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    console.log(...todos);
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="text-center mb-4">
          <h1>Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <TodoItems
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

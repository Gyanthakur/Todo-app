import Todo from "./Todo";

const TodoList = ({todoList,setTodoList})=>{
    return(
        <div><h2>{todoList.map((todoItem)=>(
            // <Todo key={todoItem.id} todoItem={todoItem} ></Todo>
            <Todo
            setTodoList={setTodoList}
             key={todoItem.id} 
             todoItem={todoItem} 
             todoList={todoList} ></Todo>
        ))}
        </h2></div>
    )
};
export default TodoList;
import shortid from "shortid";
import styles from "../style.module.css";
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
	const handleChange = (event) => {
		setTodo(event.target.value);
		// console.log(todo);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// setTodoList([...todoList,{name:todo,id:shortid.generate()}]);
		// setTodoList([...todoList,todo]);
		setTodoList([...todoList, { name: todo, id: shortid.generate() }]);
		console.log(todoList);
		setTodo("");
	};
	return (
		<div className={styles.todoForm}>
			<form onSubmit={handleSubmit}>
				<input
					value={todo}
					onChange={handleChange}
					className={styles.todoinput}
					placeholder="Add Todo Item"
				></input>
				<button typeof="submit" className={styles.todobutton}>
					Add
				</button>
			</form>
		</div>
	);
};
export default Form;

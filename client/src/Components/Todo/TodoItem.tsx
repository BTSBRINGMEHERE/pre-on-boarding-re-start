import styled from "@emotion/styled"
import { useAppDispatch, useAppSelector } from "../../Hook/dispatchhook"
import { CgAdd, CgRemove } from "react-icons/cg"
import { setTodos } from "../../Store/todoSlice"
import { useState, MouseEvent } from "react"
import { Todo } from "../../Types/todo"

const TodoItem = () => {
	const [titleId, setTitleId] = useState(false)
	const [titleChange, setTitleChange] = useState("")

	const { TodoList } = useAppSelector((state) => state.todo)
	const dispatch = useAppDispatch()

	const updateTodo = (id: any) => {
		const setTodolist = [...TodoList]
		let updateTodoIdx = setTodolist.findIndex((item) => item.id === id)

		setTitleId((prev) => !prev)

		console.log(setTodolist[updateTodoIdx + 1])
	}

	const onRemoveTodo = (id: any) => {
		const setTodolist = [...TodoList]
		const removeTodoIdx = setTodolist.findIndex((item) => item.id === id)

		setTodolist.splice(removeTodoIdx, 1)
		dispatch(setTodos(setTodolist))
	}

	const Todolists: JSX.Element[] = TodoList.map((todo: Todo) => (
		<TodoLists key={`${todo.title}_${todo.id}`}>
			<p>{todo.title}</p>
			<span>{todo.content}</span>
			<div>
				<Button onClick={updateTodo}>
					<CgAdd />
				</Button>
				<Button onClick={onRemoveTodo}>
					<CgRemove />
				</Button>
			</div>
		</TodoLists>
	))

	return <>{Todolists}</>
}

const TodoLists = styled.li`
	width: 325px;
	height: 34px;
	display: flex;
	border: 1px solid black;
	margin-top: 10px;
	display: flex;
	align-items: center;
	div {
		float: right;
		visibility: hidden;
	}
	&:hover {
		div {
			visibility: visible;
		}
	}
`

const Button = styled.button`
	background-color: #fff;
`

export default TodoItem

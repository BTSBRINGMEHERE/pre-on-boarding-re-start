import styled from "@emotion/styled"
import { FormEvent } from "react"
import AuthLogin from "../Components/Auth/AuthLogin"
import AuthHeader from "../Components/Auth/AuthHeader"

const Login = () => {
	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<AuthContainer>
			<AuthHeader />
			<Form onSubmit={onSubmit}>
				<AuthLogin />
			</Form>
		</AuthContainer>
	)
}

const AuthContainer = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 500px;
	height: 500px;
	border: 1px solid #c9c9c9;
	border-radius: 10px;
	box-shadow: 2px 2px 6px -1px #212121;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: #f5f5f5;
`

const Form = styled.form``

export default Login

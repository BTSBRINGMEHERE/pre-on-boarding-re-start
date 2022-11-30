import styled from "@emotion/styled"
import React from "react"

const TodoInput = () => {
	return (
		<>
			<Container>
				<InputTitleSection>
					<Input type="text" placeholder="제목" />
				</InputTitleSection>
				<InputContentsSection>
					<TextArea type="textarea" placeholder="내용" />
					<button>작성</button>
					<button>취소</button>
				</InputContentsSection>
			</Container>
		</>
	)
}

const Container = styled.form`
	width: 800px;
	height: 570px;
	border: 1px solid black;
	margin: 15px 15px;
`

const InputTitleSection = styled.section`
	width: 770px;
	height: 70px;
	margin: 15px 15px;
`

const Input = styled.input`
	width: 770px;
	height: 70px;
	font-size: 40px;
`

const InputContentsSection = styled.section`
	width: 770px;
	height: 455px;
	margin: 0 15px 15px 15px;
`

const TextArea = styled.input`
	width: 770px;
	height: 405px;
	font-size: 20px;
`

export default TodoInput

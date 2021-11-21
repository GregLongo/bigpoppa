import React from "react"
import styled from "@emotion/styled"

const ScoreContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 0.2rem;
	img {
		width: 16px;
	}
`

const Pops = styled.span`
	margin-right: .3rem;
	margin-left: .3rem;
	font-size: 16px;
`

export default function Score(props) {
	return (
		<ScoreContainer>
			<img src={props.src} />
			<Pops>{props.value}</Pops>
			{props.text && <span>{props.text}</span>}
		</ScoreContainer>
	)
}

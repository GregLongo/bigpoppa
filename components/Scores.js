import React from "react"
import styled from "@emotion/styled"

const ScoresContainer = styled.div`
	display: flex;
	align-items: center;
	width: 160px;
	justify-content: flex-start;
	img {
		width: 16px;
	}
`

const Pops = styled.span`
	margin-right: 1rem;
	margin-left: 1rem;
	font-size: 16px;
`

export default function Scores(props) {
	return (
		<ScoresContainer>
				<img src="img/bulb.svg" />
				<Pops>{props.popups}</Pops>
			<span>Popups</span>
			{/* <img src="img/interactive.svg" />
      <span>{props.interactive} </span>
      <span>⛷	</span>
      <span>{props.something}</span> */}
		</ScoresContainer>
	)
}

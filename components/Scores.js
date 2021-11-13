import React from "react"
import styled from "@emotion/styled"

const ScoresContainer = styled.div`
	display: flex;
	align-items: center;
	width: 160px;
	justify-content: flex-end;
	img {
		width: 20px;
		padding-right: 0.5rem;
	}
`

export default function Scores(props) {
	return (
		<ScoresContainer>
			<span>
				<img src="img/bulb.svg" />
				<span>{props.popups} </span>
			</span>
			<span>Popups </span>
			{/* <img src="img/interactive.svg" />
      <span>{props.interactive} </span>
      <span>⛷	</span>
      <span>{props.something}</span> */}
		</ScoresContainer>
	)
}

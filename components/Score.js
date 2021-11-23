import React from "react"
import styled from "@emotion/styled"

export default function Score(props) {
	const ScoreContainer = styled.div`
		display: flex;
		align-items: center;
		justify-content: flex-end;
		img {
			width: 16px;
		}
	`

	const Pops = styled.span`
		font-size: 16px;
	`

	const WhiteSpace = styled.span`
		margin: 0.2rem;
	`

	return (
		<ScoreContainer>
			<img src={props.src} />
			<WhiteSpace/>
			<Pops>{props.value}</Pops>
			{props.text && <React.Fragment><WhiteSpace/><span>{props.text}</span></React.Fragment>}
		</ScoreContainer>
	)
}

import React from "react"
import styled from "@emotion/styled"

export default function PopupInspector(props) {
  
	const Inspector = styled.div`
		padding: 2rem;
		background: white;
		height: 70vh;
	`

	const Category = styled.div`
		background: ${({ text }) =>
			text == "theme"
				? "#F48C71"
				: text == "plot"
				? "#77C294"
				: text == "characters"
				? "#A4DCF7"
				: text == "setting"
				? "#FFCB41"
				: text == "conflict / problem solution"
				? "#F48C71"
				: text == "text evidence / inference"
				? "#FFCB41"
				: text == "compare / contrast"
				? "#77C294"
				: text == "sequence / summary"
				? "#F48C71"
				: text == "challenge"
				? "#77C294"
				: text == "vocabulary"
				? "#A4DCF7"
				: text == "author / illustrator"
				? "#FFCB41"
				: text == "structure - part / whole"
				? "#F48C71"
				: text == "point of view"
				? "#FFCB41"
				: text == "impact of illustrationas"
				? "#FFCB41"
				: text == "connection with source materials"
				? "#F48C71"
				: "#F48C71"};
		width: fit-content;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		padding: 0.5rem 1rem;
		border-radius: 16px;
		color: white;
	`
	const Title = styled.div`
		margin-bottom: 2rem;
		font-size: 1.5em;
		font-style: bold;
	`
	const Text = styled.div`
		font-size: 1.2em;
		font-style: italic;
	`

	return (
		<Inspector key={props.popup}>
			<Title>{props.popups[props.popup]["popup title"]}</Title>
			{props.popups[props.popup].primary.map((category, index) => {
				return (
					<Category text={category} key={index}>
						{category}
					</Category>
				)
			})}
			<Text>Page : {props.popups[props.popup].page}</Text>
			<Text>{props.popups[props.popup]["popup summary"]}</Text>
		</Inspector>
	)
}

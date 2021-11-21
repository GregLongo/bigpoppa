/** @jsxImportSource @emotion/react */

import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

export default function PopupInspector(props) {

	const Inspector = styled.div`
		padding: 2rem;
		background: white;
		height: 70vh;
	`

	const Category = styled.div`
	background: ${({ text }) =>
			text == "theme"
				? "#E37F4A"
				: text == "plot"
					? "#B93454"
					: text == "characters"
						? "#FECE80"
						: text == "setting"
							? "#32658C"
							: text == "conflict / problem solution"
								? "#9F3801"
								: text == "text evidence / inference"
									? "#7E001E"
									: text == "compare / contrast"
										? "#77C294"
										: text == "sequence / summary"
											? "#0F314D"
											: text == "challenge"
												? "#7897AF"
												: text == "vocabulary"
													? "#02A87D"
													: text == "author / illustrator"
														? "#73C6B0"
														: text == "structure - part / whole"
															? "#B7D3E8"
															: text == "point of view"
																? "#E995A9"
																: text == "impact of illustrationas"
																	? "#CB9D85"
																	: text == "connection with source materials"
																		? "#0F314D"
																		: "#0F314D"};
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
    margin-bottom: 1.5rem
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
			{
				props.popups[props.popup]["popup type"] == "interactive" ?
					<div>
						<Text>{props.popups[props.popup]["interactive prompt"]}</Text>
						{
							['A', 'B', 'C', 'D'].map((answer) => {
								if (props.popups[props.popup]["response " + answer])
									return <Text key={answer}><span css={{ color: props.popups[props.popup]["correct " + answer] ? "green" : "" }}>{answer}. {props.popups[props.popup]["response " + answer]}</span></Text>
							})
						}
					</div>
					: ``}
		</Inspector>
	)
}

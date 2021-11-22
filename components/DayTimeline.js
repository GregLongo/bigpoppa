import { css } from "@emotion/react";
import styled from "@emotion/styled"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import React, { useEffect, useState } from "react"

let counter = 0;
const CATEGORY_COLORS = {
	"theme": "#E37F4A",
	"plot": "#B93454",
	"characters": "#FECE80",
	"setting": "#32658C",
	"conflict / problem solution": "#9F3801",
	"text evidence / inference": "#7E001E",
	"compare / contrast": "#77C294",
	"sequence / summary": "#0F314D",
	"challenge": "#7897AF",
	"vocabulary": "#02A87D",
	"author / illustrator": "#73C6B0",
	"structure - part / whole": "#B7D3E8",
	"point of view": "#E995A9",
	"impact of illustrationas": "#CB9D85",
	"connection with source materials": "#0F314D"
}

export default function DayTimeline(props) {

	const DateButton = styled.button`
		background: transparent;
		border: none;
		border-top: 3px solid lightblue;
		padding-top: 0.5rem;
		margin-right: 0.5rem;
		cursor: pointer;
		&:hover {
			border-top: 3px solid teal;
		}
		&.active {
			border-top: 3px solid teal;
		}
	`
	
	const ChartContainer = styled.div`
		.cat {
			background: #0F314D;
			padding: 0.2rem 0.4rem;
			border-radius: 16px;
			color: white;
      /* text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100px; */
		}
		.pop {
			display: flex;
			flex-direction: column;
			align-items: center;
			cursor: pointer;
		}
		img {
			width: 20px;
			height: 20px;
			margin: 0.5rem;
		}
	`

	return (
		<div>
			{props.dates.map((thisDate, index) => {
				var myDate = new Date(thisDate);

				return (
					<DateButton
						className={props.selectedDateIndex == index ? 'active': ''}
						key={index}
						onClick={(e) => {
							e.preventDefault();
							props.onSelectDate(myDate, index);
						}}
					>
						{props.onGetReadableDate(myDate)}
					</DateButton>
				)
			})}
			<div>
				<ChartContainer>
					<HighchartsReact highcharts={Highcharts} options={props.options} />
				</ChartContainer>
			</div>
		</div>
	)
}

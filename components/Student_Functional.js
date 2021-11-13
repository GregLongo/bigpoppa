import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getStudent } from "../store/actions/studentAction.js"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Scores from "../components/Scores.js"
import BulletChart from "../components/BulletChart.js"

export default function Student(props) {

	const Student = styled.div`
		display: grid;
		grid-template-columns: 30% 70%;
		height: 140px;
		width: 90%;
		padding: 0.5rem 1rem;
		background-color: #fff;
		align-items: center;
		border-radius: 10px;
		&:hover {
			outline: 2px solid #ccc;
		}
		@media (min-width: 768px) {
			width: 380px;
		}
	`

	const Avatar = styled.img`
		height: 50%;
		width: auto;
		justify-content: center;
		display: flex;
		max-width: 50%;
	`

	const NameScore = styled.div`
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0.5rem 0 0.5rem;
	`

	return (
		<Student>
			<Avatar src={props.avatar} />
			<div>
				<NameScore>
					<span>{props.student}</span>
					<Scores popups={props.popupCount} interactive={11} something={3} />
				</NameScore>
				{props.speed > 0 ? (
					<BulletChart
						val={parseFloat(props.speed)}
						max={2000}
						title={"Avg Speed"}
						color={"#77C294"}
					/>
				) : null}
			</div>
		</Student>
	)
}

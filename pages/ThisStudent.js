import React, { useState, useCallback, useEffect } from "react"
import DayTimeline_functional from "../components/DayTimeline_functional"
import TimelineProvider from "../components/TimelineProvider"
import PopupInspector from "../components/PopupInspector.js"
import BookTimeline from "../components/BookTimeline.js"
import { useDispatch, useSelector } from "react-redux"
import { getPopups } from "../store/actions/popupsAction"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import Scores from "../components/Scores.js"
import Teacher from "../components/Teacher.js"
import { getStudent } from "../store/actions/studentAction"
import { getStudentBook } from "../store/actions/studentbookAction"
import avatars from "../assets/avatars.js"
import BulletChart from "../components/BulletChart.js"

export default function ThisStudent(props) {

	const Container = styled.div`
		display: grid;
		grid-template-columns: 100%;
		grid-gap: 3rem;
		margin: 4rem;
		max-width: 100vw;
		@media (min-width: 900px) {
			grid-template-columns: 55% 40%;
		}
	`
	const LeftContainer = styled.div`
		background: white;
		padding: 1rem;
		border-radius: 10px;
	`
	const RightContainer = styled.div`
		background: white;
		padding: 3rem 1rem;
		border-radius: 10px;
	`
	const Name = styled.div`
		font-size: 2em;
		margin-bottom: 1rem;
	`
	const Reading = styled.div`
		font-size: 1.5em;
		margin-bottom: 1rem;
	`
	const Marquis = styled.div`
		padding-left: 2rem;
	`

	const Info = styled.div`
		display: grid;
		grid-template-columns: 100%;
		align-items: center;
		padding: 2rem;
		@media (min-width: 768px) {
			grid-template-columns: 25% 75%;
		}
	`

	const [thisPopup, selectPopup] = useState("LP001")

	const parentCallback = useCallback((poppers) => {
		selectPopup(poppers)
	}, [])

	const dispatch1 = useDispatch()
	const popupsList = useSelector((state) => state.popupsList)
	const { loading1, error1, popupsVal } = popupsList

	const dispatch2 = useDispatch()
	const myList = useSelector((state) => state.myList)
	const { loading2, error2, studentVal } = myList

	const dispatch3 = useDispatch()
	const studentBookList = useSelector((state) => state.studentBookList)
	const { loading3, error3, studentBookVal } = studentBookList

	useEffect(() => {
		dispatch1(getPopups(studentVal.nowReading))
	}, [dispatch1])

	useEffect(() => {
		dispatch2(getStudent(props.classroom, props.student))
	}, [dispatch2])

	useEffect(() => {
		dispatch3(getStudentBook(props.classroom, props.student, "BC001"))
		// console.log(studentBookVal)
	}, [dispatch3])

	const [currentPages, setPages] = useState(200)

	useEffect(() => {
		switch (studentVal.nowReading) {
			case "BC001":
				setPages(154)
			case "AFARM":
				setPages(121)
			case "Romeo":
				setPages(195)
			case "Hamlet":
				setPages(201)
			default:
				setPages(200)
		}
		console.log(currentPages)
	}, [studentVal])

	return (
		<>
			<Teacher teacher={props.classroom} />
			<Container>
				<LeftContainer>
					<Info>
						<div>
							<img src={avatars[studentVal.avatarIndex]} />
						</div>
						<Marquis>
							<Name>{props.student}</Name>
							{studentVal.lastEvent ? (
								<Reading>Now Reading: {studentVal.nowReading}</Reading>
							) : null}
							<Scores popups={studentBookVal.popupCount} />
						</Marquis>
					</Info>
					<BookTimeline
						parentCallback={parentCallback}
						pages={currentPages}
						popups={popupsVal}
						last={
							studentVal
								? studentVal.lastEvent
									? studentVal.lastEvent.popupId
									: `LP001`
								: `LP001`
						}
					/>
					<TimelineProvider classroom={props.classroom} student={props.student}>
						<DayTimeline_functional
							parentCallback={parentCallback}
							popups={popupsVal}
						/>
					</TimelineProvider>
				</LeftContainer>
				<RightContainer>
					<div>
						{!studentVal ? (
							``
						) : studentVal.speed > 0 ? (
							<BulletChart
								val={parseFloat(studentVal.speed)}
								max={2000}
								title={"Avg Speed"}
								color={"#77C294"}
							/>
						) : null}
					</div>
					{!!popupsVal[thisPopup] ? (
						<PopupInspector popup={thisPopup} popups={popupsVal} />
					) : (
						``
					)}
				</RightContainer>
			</Container>
		</>
	)
}

ThisStudent.getInitialProps = ({ query: { student, classroom } }) => {
	return { student, classroom }
}

import styled from "@emotion/styled"
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import avatars from "../assets/avatars.js"
import BookTimeline from "../components/BookTimeline.js"
import BulletChart from "../components/BulletChart.js"
import DayTimeline_functional from "../components/DayTimeline_functional"
import PopupInspector from "../components/PopupInspector.js"
import Scores from "../components/Scores.js"
import Teacher from "../components/Teacher.js"
import TimelineProvider from "../components/TimelineProvider"
import { getPopups } from "../store/actions/popupsAction"
import { getStudent } from "../store/actions/studentAction"
import { getStudentBook } from "../store/actions/studentbookAction"

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

	const dispatch = useDispatch()
	const popupsList = useSelector((state) => state.popupsList)
	const { loading1, error1, popupsVal } = popupsList

	const thisStudent = useSelector((state) => state.thisStudent)
	const { loading2, error2, student: studentVal } = thisStudent

	const studentBookList = useSelector((state) => state.studentBookList)
	const { loading3, error3, studentBookVal } = studentBookList

	useEffect(() => {
		if (studentVal) {
			dispatch(getPopups(studentVal.nowReading))
			dispatch(getStudentBook(props.classroom, studentVal.key, "BC001"))
		}
	}, [dispatch, studentVal])

	const [currentPages, setPages] = useState(200)

	useEffect(() => {
		if (studentVal) {
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
		}
	}, [studentVal])

	return studentVal && (
		<>
			<Teacher teacher={props.classroom} />
			<Container>
				<LeftContainer>
					<Info>
						<div>
							<img src={studentVal.avatar} />
						</div>
						<Marquis>
							<Name>{props.student}</Name>
							{studentVal.lastEvent ? (
								<Reading>Now Reading: {studentVal.nowReading}</Reading>
							) : null}
							{studentBookVal && <Scores popups={studentBookVal.popupCount} />}
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

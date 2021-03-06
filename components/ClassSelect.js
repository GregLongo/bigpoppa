import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getClasslist } from "../store/actions/classlistAction"
import Dropdown from "../components/Dropdown.js"
import styled from "@emotion/styled"

const ClassSelect = () => {

	const Splash = styled.div`
		margin-left: auto;
		margin-right: auto;
		width: fit-content;
		height: 100vh;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	`
	const Title = styled.div`
		font-size: 36px;
		font-family: 'BauhausStd-Light';
	`
	const Subtitle = styled.div`
		font-size: 24px;
		margin: 2rem;
	`
	const dispatch = useDispatch()
	const classList = useSelector((state) => state.classList)
	const { loading, error, classlistVal } = classList
	useEffect(() => {
		dispatch(getClasslist())
	}, [dispatch])
	return (
		<>
			{loading ? (
				"Loading..."
			) : error ? (
				error.message
			) : (
				<Splash>
					<Title>LP-Bookspace Teacher Dashboard</Title>
					<Subtitle>Please Choose Your Class </Subtitle>
					<Dropdown paths={classlistVal} />
				</Splash>
			)}
		</>
	)
}

export default ClassSelect

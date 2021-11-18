import Head from "next/head"
import Image from "next/image"
import Classroom from "../components/Classroom.js"
import ClassSelect from "../components/ClassSelect.js"
import styled from "@emotion/styled"

export default function Home() {
	const BGBlue = styled.div`
		background-color: #589ACC;
		color: white;
	`
	return (
		<BGBlue>
			<ClassSelect />
		</BGBlue>
	)
}

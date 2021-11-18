import React from "react"
import styled from "@emotion/styled"

export default function Teacher({ teacher }) {
	const Teacher = styled.div`
		padding-top: 2rem;
		padding-bottom: 2rem;
		padding-left: 3rem;
		font-size: 36px;
		border-bottom: 2px solid #cecece;
		color: white
	`
	if (!teacher) {
		teacher = 'Class not selected!'
	}
	return <Teacher>{teacher}</Teacher>;
}

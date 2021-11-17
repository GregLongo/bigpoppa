import styled from "@emotion/styled"
import { faCommentAlt, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Burger from "./Burger.js"
import NavButton from "./NavButton.js"

export default function Nav(props) {
	const [open, setOpen] = useState(false)

	const NavBar = styled.div`
		height: 100vh;
		width: 140px;
		background: #77c294;
		color: white;
		align-items: center;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		z-index: 10;
		position: ${({ open }) => (open ? "relative" : "absolute")};
		@media (min-width: 768px) {
			transform: translateX(0);
			position: relative;
		}
	`

	const Logo = styled.div`
		cursor: pointer;
	`

	const route = useRouter()
	const { classroom } = route.query;

	const navButtons = [
		{
			label: "Students",
			path: "/StudentPage",
			icon: <FontAwesomeIcon icon={faUserGraduate} />,
			props: {
				classroom: !!classroom ? classroom : ''
			}
		},
		{
			label: "Popups",
			path: "/PopupsLegend",
			icon: <FontAwesomeIcon icon={faCommentAlt} />,
			props: {
				classroom: !!classroom ? classroom : ''
			}
		},
	]

	return (
		<>
			<Burger open={open} setOpen={setOpen} />
			<NavBar open={open}>
				<Link href={"/"}>
					<Logo>Living Popups Dashboard App</Logo>
				</Link>
				{navButtons.map((button) => (<NavButton
					key={button.path}
					path={button.path}
					label={button.label}
					icon={button.icon}
					{...button.props}
				/>
				))}
			</NavBar>
		</>
	)
}

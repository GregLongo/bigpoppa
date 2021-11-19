import styled from "@emotion/styled"
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
		background: #F4F4F4;
		color: #0F314D;
		align-items: center;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		z-index: 10;
		position:fixed;
		transition: all 1s ease
		position: ${({ open }) => (open ? "fixed" : "absolute")};
		@media (min-width: 768px) {
			transform: translateX(0);
			position: relative;
		}
	`

	const MobileHeader = styled.div`
		background-color: #272274;
		height: 64px;
		width: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 2rem;
		@media (min-width: 768px) {
			display: none;
		}
	`

	const Logo = styled.div`
		cursor: pointer;
	`

	const route = useRouter()
	let { classroom } = route.query;
	classroom = !!classroom ? classroom : '';

	const navButtons = [
		{
			label: "Students",
			path: "/StudentPage",
			icon: 'img/students.png',
			props: {
				classroom
			}
		},
		{
			label: "Popups",
			path: "/PopupsLegend",
			icon: 'img/popups.png',
			props: {
				classroom
			}
		},
	]

	return (
		<>
			<MobileHeader>
				<Burger open={open} setOpen={setOpen} />
			</MobileHeader>
			<NavBar open={open}>
				<Link href={{
					pathname: "/",
					query: { classroom }
				}}>
					<Logo><img src='img/lp_logo.png' /></Logo>
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

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
		padding: 0 2rem;
		flex-direction: column;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		z-index: 300;
		position:fixed;
		transition: all 1s ease
		position: ${({ open }) => (open ? "fixed" : "absolute")};
		@media (min-width: 768px) {
			transform: translateX(0);
			position: relative;
		}
	`

	const MobileHeader = styled.div`
		background-color: #0F314D;
		color:white;
		font-family: 'BauhausStd-Light';
		font-size: 16px;
		height: 3rem;
		width: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 1rem;
		@media (min-width: 480px) {
			font-size: 24px;
		}
		@media (min-width: 768px) {
			display: none;
		}
		z-index: 200;
	`

	const Logo = styled.div`
		cursor: pointer;
		padding: 1rem;
	`

	const route = useRouter()
	let { classroom } = route.query;
	classroom = !!classroom ? classroom : '';

	const navButtons = [
		{
			label: "Students",
			path: "/StudentPage",
			icon: 'img/students.svg',
			props: {
				classroom
			}
		},
		{
			label: "Class",
			path: "/ClassPage",
			icon: 'img/class.svg',
			props: {
				classroom
			}
		},
		{
			label: "Popups",
			path: "/PopupsLegend",
			icon: 'img/popups.svg',
			props: {
				classroom
			}
		}
	]

	return (
		<>
			<MobileHeader>
				<span>Lp-Bookspace Teacher's Dashboard</span>
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

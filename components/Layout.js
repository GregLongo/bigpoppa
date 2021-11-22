import Nav from "./Nav.js"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

const Layout = (props) => {

	const Backdrop = styled.div`
		background: #589ACC;
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
		left: 0;
		right: 0;
	`
	const Layout = styled.div`
		display: flex;
		width: 100%;
	`

	return (
		<Layout>
			<Nav />
			<Backdrop>{props.children}</Backdrop>
		</Layout>
	)
}

export default Layout

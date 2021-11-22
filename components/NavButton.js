import Link from "next/link"
import { withRouter, useRouter } from "next/router"
import styled from "@emotion/styled"

const StyledNavButton = styled.div`
	cursor: pointer;
	padding: 1rem;
	text-align: center;
	opacity: 0.5;
	&:hover {
		opacity: 0.7;
	}
	&.active {
		opacity: 1;
	}
`
const NavIcon = styled.div`
	font-size: 36px;
	img {
		width: 140px;
	}
`

const NavButton = (props) => {
	const { classroom } = props;
	let query = "";
	if (!!classroom) {
		query = "classroom=" + classroom;
	}
	return (
		<Link
			href={{
				pathname: props.path,
				query
			}}
		>
			<StyledNavButton
				className={`NavButton ${props.router.pathname === props.path ? "active" : ""
					}`}
			>
				<NavIcon><img src={props.icon} /></NavIcon>
				<span className="Label">{props.label}</span>
			</StyledNavButton>
		</Link>
	)
};
export default withRouter(NavButton)

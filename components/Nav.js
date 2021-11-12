
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faUserGraduate,
faCommentAlt
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { withRouter, useRouter } from "next/router";
import NavButton from "./NavButton.js"
import styled from "@emotion/styled"
import Burger from "./Burger.js"


const navButtons = [
  {
    label: "Students",
    path: "/StudentPage",
    icon: <FontAwesomeIcon icon={faUserGraduate} />
  },
  {
    label: "Popups",
    path: "/PopupsLegend",
    icon: <FontAwesomeIcon icon={faCommentAlt} />
  },
];





export default function Nav(props){

  const [open, setOpen] = useState(false)

  const NavBar = styled.div`
    height: 100vh;
    width: 140px;
    /* position: absolute; */
    background: #77C294;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    @media(min-width:768px){
      transform: translateX(0)
    }
  `
  const Logo = styled.div`
  cursor:pointer
  `

  const blor = useRouter()
  const blorquery = blor.query
  // console.log(blorquery.classroom)

  return(
    <>
    <Burger open={open} setOpen={setOpen} />
  <NavBar open={open}>
    <Link href={'/'}>
      <Logo>Living Popups Dashboard App</Logo>
    </Link>
    {navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
        classroom={blorquery.classroom}
      />
    ))}
  </NavBar>
  </>)
}

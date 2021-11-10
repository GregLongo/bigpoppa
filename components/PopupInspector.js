import React from "react"
import styled from "@emotion/styled"


export default function PopupInspector(props){

  const Inspector = styled.div`
    padding: 2rem
  `

  const Category = styled.div`
    background: #B4D260;
    width: fit-content;
    margin-top: .5rem;
    margin-bottom: 1rem;
    padding: .5rem 1rem;
    border-radius: 16px;
    color: white
  `
  const Title = styled.div`
    margin-bottom: 2rem;
    font-size: 1.5em;
    font-style: bold;
  `
  const Text = styled.div`
    font-size: 1.2em;
    font-style: italic;
  `

  // console.log(props.popups[props.popup])

    return (
      <Inspector key={props.popup}>
      <Title>
         {props.popups[props.popup]["popup title"]}
      </Title>
      {props.popups[props.popup].primary.map((category, index) =>{
        return <Category key={index}>{category}</Category>
      })}
      <Text>
         Page : {props.popups[props.popup].page}
      </Text>
      <Text>
         {props.popups[props.popup]["popup summary"]}
      </Text>
      </Inspector>
    )
}

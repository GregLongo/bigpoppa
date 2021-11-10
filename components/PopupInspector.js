import React from "react"
import styled from "@emotion/styled"


export default function PopupInspector(props){

  const Category = styled.div`
    background: #B4D260;
    width: fit-content;
    margin-bottom: 2rem;
    padding: .5rem 1rem;
    border-radius: 16px;
    color: white
  `
  const Text = styled.div`
    font-size: 1.2em;
    font-style: italic;
  `

  // console.log(props.popups[props.popup])

    return (
      <div key={props.popup}>
      <Text>
         {props.popups[props.popup]["popup title"]}
      </Text>
      {props.popups[props.popup].primary.map((category, index) =>{
        return <Category key={index}>{category}</Category>
      })}
      <Text>
         Page : {props.popups[props.popup].page}
      </Text>
      <Text>
         {props.popups[props.popup]["popup summary"]}
      </Text>
      </div>
    )
}

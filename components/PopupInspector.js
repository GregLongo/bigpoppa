import React from "react"


export default function PopupInspector(props){

  console.log(props.popups[props.popup])

    return (
      <div key={props.popup}>
        {props.popup}
         {props.popups[props.popup]["popup title"]}
      </div>
    )
}

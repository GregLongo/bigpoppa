import React from "react"


export default function PopupInspector(props){

  console.log(props.test)

    return (
      <div key={props.popup}>
        {props.popup}
      </div>
    )
}

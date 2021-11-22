import React from "react"
import styled from "@emotion/styled"

export default function SecondaryHeader(props) {
    const SecondaryHeaderComponent = styled.div`
        font-size: 44px;
		font-weight: 500;
		color: white;
	`
    return <SecondaryHeaderComponent>{props.children}</SecondaryHeaderComponent>;
}

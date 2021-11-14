import React from "react"
import styled from "@emotion/styled"

export default function NoData({ label }) {
    const NoDataComponent = styled.div`
		font-size: 24px;
        display:flex;
	`
    if (!label) {
        label = 'Not data found!'
    }
    return <NoDataComponent>{label}</NoDataComponent>;
}

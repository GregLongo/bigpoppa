import styled from "@emotion/styled"
import React from "react"
import ReactTooltip from "react-tooltip"

const DEFAULT_TOOLTIP_CONSTANTS = {
    borderColor: "#6E7880",
    color: "white",
    backgroundColor: "#122433",
    radius: 22,
    label: "?",
    fontSize: 18
}

export default function Tooltip({
    id,
    text,
    label,
    borderColor,
    color,
    backgroundColor,
    radius,
    fontSize
}) {
    const TooltipComponent = styled.div`
        border: solid 1px ${props => props.borderColor};
        width: ${props => props.radius}px;
        height: ${props => props.radius}px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        background-color: ${props => props.backgroundColor};
        span {
            font-size: ${props => props.fontSize}px;
            color: ${props => props.color};
        }
    `
    return (
        <div>
            <TooltipComponent
                data-tip={text}
                data-for={id}
                data-iscapture={true}
                borderColor={borderColor || DEFAULT_TOOLTIP_CONSTANTS.borderColor}
                color={color || DEFAULT_TOOLTIP_CONSTANTS.color}
                backgroundColor={backgroundColor || DEFAULT_TOOLTIP_CONSTANTS.backgroundColor}
                radius={radius || DEFAULT_TOOLTIP_CONSTANTS.radius}
                fontSize={fontSize || ((radius || DEFAULT_TOOLTIP_CONSTANTS.radius) - 2)}
            >
                <span>{label || DEFAULT_TOOLTIP_CONSTANTS.label}</span>
            </TooltipComponent>
            <ReactTooltip
                id={id}
            />
        </div>
    )
}

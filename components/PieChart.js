import { ClassNames } from "@emotion/react"
import styled from "@emotion/styled"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import HPie from 'highcharts/modules/variable-pie'
import React, { useState } from "react"

export default function PieChart(props) {
    HPie(Highcharts);

    const [options, setOptions] = useState({
        chart: {
            type: 'variablepie',
            styledMode: false
        },
        // title: {
        //     enabled: false,
        //     style: {
        //         display: 'none'
        //     }
        // },
        title: {
            text : '60%',
            verticalAlign: 'middle',
            y: 30,
            style: {
                fontSize: 40
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                }
            }
        },
        series: [{
            type: 'pie',
            minPointSize: 40,
            innerSize: '80%',
            zMin: 0,
            name: 'countries',
            data: [{
                name: 'Characters',
                y: 10,
                color: "#FECE80"
            }, {
                name: 'Point of View',
                y: 60,
                color: "#014A37"
            }, {
                name: 'Author/Illustraitor',
                y: 30,
                color: "#73C6B0"
            }]
        }]
    })

    return (
        <ClassNames>
            {({ css, cx }) => (
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    containerProps={{
                        className: css({
                            height: "100%",
                            width: "100%"
                        })
                    }}
                />
            )}
        </ClassNames>
    )
}

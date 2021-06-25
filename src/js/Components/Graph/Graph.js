import React from 'react';
import { Bar } from 'react-chartjs-2';
import {useSelector} from 'react-redux';
import styled from 'styled-components';



const StyledGraph = styled.section`
    width: inherit;
    height: 600px;

    padding-bottom: 50px;
`;
const GraphHeader = styled.section`
    margin: 20px;
    text-align: center;
    font-size: 21px;
`;

function Graph(props) { 

    const state = useSelector(state => state);

    let graphData = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    state.arrObjs.forEach((item) => {
        if (state.activeDevices.indexOf(item["n"]) !== -1) {


            item["o"].forEach((date) => {
                let index = new Date(date["n"]).getDay();
                date["o"].forEach((user) => {
                    // eslint-disable-next-line default-case
                    if (user["n"] == "adult") {
                        graphData[index][0] += user["v"]
                    }
                    if (user["n"] == "kid") {
                        graphData[index][1] += user["v"]
                    }
                    if (user["n"] == "old") {
                        graphData[index][2] += user["v"]
                    }
                    if (user["n"] == "undefined") {
                        graphData[index][3] += user["v"]
                    }
                    if (user["n"] == "young") {
                        graphData[index][4] += user["v"]
                    }
                });
            });
        }
    });
    

    
    return (
        <StyledGraph>
            <GraphHeader>Total views: Age (by day of week)</GraphHeader>

            <Bar 
                data={{
                    labels: ['Monday', 'Tuesday', ' Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                    datasets: [
                        {
                            label: 'Undefined',
                            data: [
                                graphData[1][3], 
                                graphData[2][3],
                                graphData[3][3], 
                                graphData[4][3], 
                                graphData[5][3], 
                                graphData[6][3], 
                                graphData[0][3]
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor:'rgba(255, 255, 233, 1)',
                            borderWidth: 1,
                        },

                        {
                            label: 'Kids',
                            data: [
                                graphData[1][1], 
                                graphData[2][1],
                                graphData[3][1], 
                                graphData[4][1], 
                                graphData[5][1], 
                                graphData[6][1], 
                                graphData[0][1]
                            ],
                            backgroundColor: [
                                'rgba(153, 102, 255, 0.2)',
                            ],
                            borderColor: 'rgba(255, 255, 233, 1)',
                            borderWidth: 1,
                        },

                        {
                            label: 'Young',
                            data: [
                                graphData[1][4], 
                                graphData[2][4],
                                graphData[3][4], 
                                graphData[4][4], 
                                graphData[5][4], 
                                graphData[6][4], 
                                graphData[0][4]
                            ],
                            backgroundColor: [
                                'rgba(255, 205, 86, 0.2)',
                            ],
                            borderColor: 'rgba(255, 255, 233, 1)',
                            borderWidth: 1,
                        },

                        {
                            label: 'Adult',
                            data: [
                                graphData[1][0], 
                                graphData[2][0],
                                graphData[3][0], 
                                graphData[4][0], 
                                graphData[5][0], 
                                graphData[6][0], 
                                graphData[0][0]
                            ],
                            backgroundColor: [
                                'rgba(75, 192, 192, 0.2)',
                            ],
                            borderColor: 'rgba(255, 255, 233, 1)',
                            borderWidth: 1,
                        }, 

                        {
                            label: 'Senior',
                            data: [
                                graphData[1][2], 
                                graphData[2][2],
                                graphData[3][2], 
                                graphData[4][2], 
                                graphData[5][2], 
                                graphData[6][2], 
                                graphData[0][2]
                            ],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: 'rgba(255, 255, 233, 1)',
                            borderWidth: 1,
                        },
                    ]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,                   
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true
                        },
                        y: {
                            stacked: true
                        }
                    }
                }}
            />
        </StyledGraph>
    );
}

export default Graph;
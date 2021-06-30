import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import GraphService from '../../../services/graph-service';



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

function Graph() { 
    
    const prototype = {       
        viewchanel: {
            views: [
                {
                    label: "Undefined",
                    data: GraphService(3)
                },
                {
                    label: "Kids",
                    data: GraphService (1)
                },
                {
                    label: "Young Adult",
                    data: GraphService (4),
                },
                {
                    label: "Adult",
                    data: GraphService (0),
                },
                {
                    label: "Senior",
                    data: GraphService (2)
                }
            ]
        }
    };
    const colors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)'
    ];

    const viewsdata = prototype.viewchanel.views.map(
        (views, index) => {
            return {
                label: views.label,
                backgroundColor: colors[index],
                data: views.data,                
            };
        }    );  

    const data = {       
       labels: ["March", "April", "May", "June", "July", "August", "September"],
        datasets: viewsdata
    };
    
    return (
        <StyledGraph>
            <GraphHeader>Total views: Age (by day of week)</GraphHeader>
            <Bar 
                data={data}
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
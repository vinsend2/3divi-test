import {useSelector} from 'react-redux';


export default function GraphService (index) {
    
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
                date["o"].forEach((user) =>{                
                    switch(user["n"]){
                        case "adult":
                            graphData[index][0] += user["v"];
                            break;
                        case "kid":
                            graphData[index][1] += user["v"];
                            break;
                        case "old":
                            graphData[index][2] += user["v"];
                            break;
                        case "undefined":
                            graphData[index][3] += user["v"];
                            break;
                        case "young":
                            graphData[index][4] += user["v"];
                            break;
                            default:  
                            console.log('error');
                    }
                });
            });
        }
    });

    const NewGraphData = () => { 
        const newgraphData = [
        graphData[1][index], 
        graphData[2][index],
        graphData[3][index], 
        graphData[4][index], 
        graphData[5][index], 
        graphData[6][index], 
        graphData[0][index]
    ];    
        return newgraphData ;         
 };
    return NewGraphData();
}
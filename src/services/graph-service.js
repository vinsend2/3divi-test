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
                    const GraphDataPreset = (set) => {
                        return graphData[index][set] += user["v"];
                     };       
                    switch(user["n"]){                        
                        case "adult":
                            GraphDataPreset(0);
                            break;
                        case "kid":
                            GraphDataPreset(1);
                            break;
                        case "old":
                            GraphDataPreset(2);
                            break;
                        case "undefined":
                            GraphDataPreset(3);
                            break;
                        case "young":
                            GraphDataPreset(4);
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
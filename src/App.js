import React, {Fragment, useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';


import DeviceList from './js/Components/Devices/DeviceList';
import { itemsLoaded } from './redux/actions';

import Graph from './js/Components/Graph/Graph';
import Spinner from './js/Components/spinner';
import Error from './js/Components/error';
import GotService from './services/fetch-service';


function App(props) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);   
    const [loaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    console.disableYellowBox = true;

    useEffect(() => {
        
        const gotServ = new GotService();
        gotServ.getResourse(`https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0`)
        .then(
            (result) => {
                setItems(result["data"]["o"]);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

    dispatch(itemsLoaded(items));



    if (error) {
        return    <Error></Error>
    } else if (!loaded) {
        return   <Spinner></Spinner>;
    } else {
        return (
            <Fragment>
            <DeviceList items={items}/>        
            <Graph></Graph>
          
            </Fragment>
        );
    }
}

export default App;
import React, { useState} from 'react';
import {useDispatch} from 'react-redux';
import { activateDevice, deactivateDevice} from '../../../redux/actions/';
import styled from 'styled-components';

const DeviceListItemSection = styled.div`
        width: inherit;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 20px 0px;
        border: 2px solid z;
        border-radius: 6px;
        transition: .3s linear;
`;

function DeviceListItem (props) {
    const [isActive, setActive] = useState(true);
    const [id] = useState(props.id);
    const [deactive] = useState(props.deactive);

    console.log(deactive);

    const dispatch = useDispatch();

    function handleActivesChange(){
        setActive(!isActive);

        if(!isActive){
            dispatch(activateDevice(id));
        }else{
            dispatch(deactivateDevice(id));
        }
    }

   

    return (
        <DeviceListItemSection className="device-list__item">           
            
            <input type="checkbox" className="device-list__item-checkbox" name="devices" disabled={!deactive} value={id} checked={isActive} onClick={handleActivesChange} onChange={e => {}} />
            <label className="device-list__item-header" name="devices" value={id} checked={isActive} onClick={handleActivesChange} onChange={e => {}}>{id} </label>
        </DeviceListItemSection>
    );
}

export default DeviceListItem;
import React from 'react';
import { useSelector } from 'react-redux'

import DeviceListItem from './DeviceListItem';
import styled from 'styled-components';
import './devicesStyle.css';

const DeviceListSection = styled.section`
      height: 300px;
      margin-top: 20vh;
      display: flex;
      flex-wrap: wrap;
      color: #B0B0B0;
`;

function DeviceList(props) {
  const devices = useSelector(state => state.devices); 
  const arr = useSelector(state => state);  

  let arrNotNull = [];
  arr.arrObjs.forEach((item) => {
     arrNotNull.push(item["v"] !== 0)           
  })


  
  return (
    <DeviceListSection>
      {
        devices.map((item, index) => (
          <DeviceListItem
          key={item}
          id={item} 
          deactive={arrNotNull[index]}
          />
        ))
      }
    </DeviceListSection>
  );
};

export default DeviceList;
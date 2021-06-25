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
  
  return (
    <DeviceListSection>
      {
        devices.map(item => (
          <DeviceListItem
          key={item}
            id={item} 
          />
        ))
      }
    </DeviceListSection>
  );
};

export default DeviceList;
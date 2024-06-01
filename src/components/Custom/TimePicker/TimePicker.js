import React, { useState } from 'react';
import styled from 'styled-components';

const TimePickerContainer = styled.div`
  display: flex;
`;

const TimeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100px;
  width: 50px;
  position: relative;
`;

const TimeItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ArrowButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px;
  margin: 5px 0;
  &:hover {
    background-color: #d0d0d0;
  }
`;

const CustomTimePicker = ({ onChange }) => {
  const hours = Array.from({ length: 24 }, (_, i) =>
    i < 10 ? `0${i}` : `${i}`
  );
  const minutes = ['00', '30'];
  const [selectedHour, setSelectedHour] = useState(hours[0]);
  const [selectedMinute, setSelectedMinute] = useState(minutes[0]);

  const handleHourChange = direction => {
    const currentIndex = hours.indexOf(selectedHour);
    const newIndex = (currentIndex + direction + hours.length) % hours.length;
    setSelectedHour(hours[newIndex]);
    onChange(`${hours[newIndex]}:${selectedMinute}`);
  };

  const handleMinuteChange = direction => {
    const currentIndex = minutes.indexOf(selectedMinute);
    const newIndex =
      (currentIndex + direction + minutes.length) % minutes.length;
    setSelectedMinute(minutes[newIndex]);
    onChange(`${selectedHour}:${minutes[newIndex]}`);
  };

  return (
    <TimePickerContainer>
      <div>
        <ArrowButton onClick={() => handleHourChange(-1)}>&#9650;</ArrowButton>
        <TimeList>
          {hours.map((hour, index) => (
            <TimeItem
              key={index}
              style={{
                backgroundColor:
                  hour === selectedHour ? '#e0e0e0' : 'transparent',
              }}
              onClick={() => {
                setSelectedHour(hour);
                onChange(`${hour}:${selectedMinute}`);
              }}
            >
              {hour}
            </TimeItem>
          ))}
        </TimeList>
        <ArrowButton onClick={() => handleHourChange(1)}>&#9660;</ArrowButton>
      </div>
      <div>
        <ArrowButton onClick={() => handleMinuteChange(-1)}>
          &#9650;
        </ArrowButton>
        <TimeList>
          {minutes.map((minute, index) => (
            <TimeItem
              key={index}
              style={{
                backgroundColor:
                  minute === selectedMinute ? '#e0e0e0' : 'transparent',
              }}
              onClick={() => {
                setSelectedMinute(minute);
                onChange(`${selectedHour}:${minute}`);
              }}
            >
              {minute}
            </TimeItem>
          ))}
        </TimeList>
        <ArrowButton onClick={() => handleMinuteChange(1)}>&#9660;</ArrowButton>
      </div>
    </TimePickerContainer>
  );
};

export default CustomTimePicker;

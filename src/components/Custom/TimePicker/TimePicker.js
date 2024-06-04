import React, { useEffect, useRef, useState } from 'react';
import {
  ClockIcon,
  Label,
  OptionsList,
  OptionsTitle,
  PickerContainer,
  PickerTitle,
  TimeItem,
  TimeList,
  TimeListsContainer,
  TimePickerWrapper,
} from './TimePicker.styled';

const TimePicker = ({ onChange }) => {
  const IMAGE_BASE_URL = process.env.PUBLIC_URL + '/images';

  const [selectedTime, setSelectedTime] = useState('09:00');
  const [isClockPickerOpen, setClockPickerOpen] = useState(false);
  const timeRef = useRef(null);

  const times = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
  ];

  const formatTime = time => {
    return time.replace(':', '  :  ');
  };

  const toggleFilter = () => {
    setClockPickerOpen(!isClockPickerOpen);
  };

  const handleTimeClick = time => {
    setSelectedTime(time);
    setClockPickerOpen(false);
    onChange(time);
  };

  const handleClickOutside = event => {
    if (timeRef.current && !timeRef.current.contains(event.target)) {
      setClockPickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <TimePickerWrapper onClick={toggleFilter}>
      <PickerContainer>
        <PickerTitle>
          <Label>{selectedTime}</Label>
          <ClockIcon
            src={`${IMAGE_BASE_URL}/svg/clock.svg`}
            width="20"
            height="20"
            alt="arrow"
          />
        </PickerTitle>
      </PickerContainer>
      {isClockPickerOpen && (
        <OptionsList>
          <OptionsTitle>Meeting time</OptionsTitle>
          <TimeListsContainer>
            <TimeList>
              {times.map((time, index) => (
                <TimeItem key={index} onClick={() => handleTimeClick(time)}>
                  {formatTime(time)}
                </TimeItem>
              ))}
            </TimeList>
          </TimeListsContainer>
        </OptionsList>
      )}
    </TimePickerWrapper>
  );
};

export default TimePicker;

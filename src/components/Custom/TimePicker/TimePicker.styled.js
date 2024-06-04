import styled from 'styled-components';

export const TimePickerWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: 232px;
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(25, 26, 21, 0.1);
`;

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PickerTitle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  color: #191a15;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
`;

export const ClockIcon = styled.img`
  position: absolute;
  right: 18px;
  top: 16px;
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 110%;
  right: -4px;
  background: white;
  width: 151px;
  padding: 16px;
  border-radius: 10px;
  z-index: 10;
  box-shadow: 0px 20px 69px rgba(0, 0, 0, 0.07);

  height: 180px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px; /* Ширина вертикального скроллбара */
    height: 12px; /* Высота горизонтального скроллбара */
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #fc832c;
    border-radius: 10px;
    border: 3px solid #f1f1f1; /* Обводка вокруг ползунка, создающая эффект пространства между треком и ползунком */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-corner {
    background: #f1f1f1;
  }
`;

export const OptionsTitle = styled.p`
  color: #191a15;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */

  margin-bottom: 16px;
`;

export const TimeListsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export const TimeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TimeItem = styled.li`
  color: rgba(25, 26, 21, 0.3);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  cursor: pointer;

  &:hover,
  &:focus {
    color: #191a15;
  }
`;

import styled from 'styled-components';

export const NotificationWrapper = styled.div<{ $isError: boolean }>`
  background: ${({ $isError }) => ($isError ? "#FFB5B5" : "#B5FFB8")};
  padding: 16px;
  min-width: 250px;
  border-radius: 8px;
  position: fixed;
  z-index: 300;
  top: 32px;
  right: 24px;
  border: 1px solid ${({ $isError }) => ($isError ? "#FF7474" : "#33A166")};

  @media (max-width: 425px){
    padding: 12px;
    top: 24px;
    right: 16px;
  }
`;

export const NotificationTitle = styled.h3<{ $isError: boolean }>`
  color: ${({ $isError }) => ($isError ? "#FF3636" : "#268A48")};
  margin: 0;
`;

export const NotificationContent = styled.p<{ $isError: boolean }>`
  color: ${({ $isError }) => ($isError ? "#FC5757" : "#33A166")};
  margin: 0;
  font-size: 16px;

  @media (max-width: 425px){
    font-size: 12px;
  }
`;

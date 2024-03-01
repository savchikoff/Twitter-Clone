import styled from 'styled-components';

export const NotificationWrapper = styled.div<{ $isError: boolean }>`
  background: #FFB5B5;
  padding: 16px;
  min-width: 250px;
  border-radius: 8px;
  position: fixed;
  z-index: 300;
  top: 32px;
  right: 24px;
  border: 1px solid #FF7474;
`;

export const NotificationTitle = styled.h3<{ $isError: boolean }>`
  margin: 0;
`;

export const NotificationContent = styled.p<{ $isError: boolean }>`
  margin: 0;
  font-size: 16px;
`;

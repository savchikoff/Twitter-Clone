import styled from "styled-components";

export const NavItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`

export const IconWrapper = styled.div<{ $isActive: boolean }>`
    & > svg > g > path {
        fill: ${({ $isActive }) => ($isActive ? `#1D9BF0` : '#000000')};
    }
`;

export const NavItemText = styled.div<{ $isPrimary: boolean, $isActive: boolean }>`
    font-size: 18px;
    font-weight:  ${({ $isPrimary }) => ($isPrimary ? `700` : '600')};
    color:  ${({ $isActive }) => ($isActive ? `#1D9BF0` : 'inherit')};
`
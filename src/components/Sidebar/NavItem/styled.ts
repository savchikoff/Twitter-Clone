import styled from "styled-components";

export const NavItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`

export const NavItemIcon = styled.img`
    width: 28px;
    height: 28px;
`

export const NavItemText = styled.div<{ $isPrimary: boolean }>`
    font-size: 18px;
    font-weight:  ${({ $isPrimary }) => ($isPrimary ? `700` : '600')};
`
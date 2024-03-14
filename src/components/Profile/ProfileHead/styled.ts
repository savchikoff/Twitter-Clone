import styled, { DefaultTheme } from "styled-components";

const s0 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s0;
const s1 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s1;
const s4 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s4;
const s8 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s8;
const s10 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s10;
const s16 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s16;
const s18 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s18;
const s20 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s20;
const s24 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s24;
const s32 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s32;
const s40 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s40;
const s48 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s48;
const s56 = ({ theme }: DefaultTheme) => theme.themeType.sizes.s56;
const graniteGray = ({ theme }: DefaultTheme) => theme.themeType.colors.graniteGray;
const silver = ({ theme }: DefaultTheme) => theme.themeType.colors.silver;
const black = ({ theme }: DefaultTheme) => theme.themeType.colors.black;
const flashWhite = ({ theme }: DefaultTheme) => theme.themeType.colors.flashWhite;
const semiBold = ({ theme }: DefaultTheme) => theme.themeType.fontWeights.semiBold;

export const ProfileHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${s4};
    padding: ${s0} ${s24} ${s24} ${s24};
`;

export const ProfileHeaderName = styled.h6`
    font-size: ${s20};    
`;

export const ProfileHeaderTweets = styled.h6`
    font-size: ${s16}; 
    color: ${graniteGray};   
`;

export const ProfileHeat = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const ProfileHeatImage = styled.img`
    object-fit: cover;
    width: 100%;
`

export const ProfileInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${s0} ${s24};
    margin-top: -${s40};
    padding-bottom: ${s48};
    border-bottom: ${s1} solid ${silver};
`;

export const TopInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${s8};
`;

export const ProfileImage = styled.img`
    width: 126px;
    height: 138px;
`;

export const EditButton = styled.button<{ $isGoogle: boolean }>`
    display: ${({ $isGoogle }) => ($isGoogle ? `none` : `block`)};
    font-size: ${s18};
    font-weight: ${semiBold};
    padding: ${s10} ${s16};
    border: none;
    outline: none;
    background-color: transparent;
    border: ${s1} solid ${black};
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: ${flashWhite};
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${s4};
    margin-bottom: ${s16};
`;

export const UserName = styled.h3`
    font-size: ${s24};
`

export const UserNickname = styled.span`
    color: ${graniteGray};
`

export const ProfileDescription = styled.div`
    font-size: ${s18};
    margin-bottom: ${s56};
`;

export const SubscriptionsWrapper = styled.div`
    display: flex;
    gap: ${s32};
`;

export const FollowingInfo = styled.span`
    font-size: ${s18};
`

export const FollowersInfo = styled(FollowingInfo)``;

export const Strong = styled.strong``;
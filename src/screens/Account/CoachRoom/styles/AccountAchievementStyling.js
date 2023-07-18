import styled, { css } from "styled-components"

export const AccountAchievementStyling = styled.div`
  height: 100%;
  width: 50%;
`

// Badge
export const Badge = styled.div`
  align-items: center;
  background-color: #0e51fe;
  border-radius: 15px;
  display: flex;
  margin: auto;
  padding: 1rem 1rem;
  position: relative;
  width: 100%;

  -webkit-box-shadow: 0px 12px 6px -8px #0e51fe;
  box-shadow: 0px 12px 6px -8px #0e51fe;
`

export const BgBadge = styled.div`
  background-color: #0e51fe;
  border-radius: 40px;
  bottom: -5px;
  height: 10px;
  left: 20px;
  position: absolute;
  width: 85%;
`

export const BadgeIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`

export const BadgeText = styled.p`
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  margin-left: 0.5rem;
  text-transform: uppercase;
`

// All Achievements
export const AllAchievements = styled.p`
  color: #d2fa64;
  font-size: 0.5rem;
  letter-spacing: 1.2px;
  padding: 1.5rem 2rem;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  text-underline-offset: 5px;
`

export const FriendsContainer = styled.div`
  background-color: #242424;
  border-radius: 32px;
  height: 76%;
  padding: 1.5rem;
`

export const FriendsTitle = styled.p`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-transform: uppercase;
`

// FriendRow
export const FriendRowStyling = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const RowStyling = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;
  width: 100%;

  &:hover {
    background-color: #f5f5f0;
    p {
      color: #000;
    }
  }

  ${({ isSelected }) =>
    isSelected === "selected" &&
    css`
      background-color: #373737;
      p {
        color: #fff;
      }
    `}
`

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 2rem;
  margin-right: 0.6rem;
  width: 2rem;
`

export const FriendName = styled.p`
  color: #fff;
`

export const IconsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 1rem;
  width: 20%;
`

export const IconAction = styled.img`
  height: 1rem;
  width: 1rem;
`

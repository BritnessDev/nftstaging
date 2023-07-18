import {
  Position,
  Prize,
  TournamentPositionContainer,
} from "./styles/AccountElementsStyling"

const TournamentPosition = ({ color, position, prize }) => {
  return (
    <TournamentPositionContainer color={color}>
      <Position>#{position}</Position>
      <Prize>{prize}</Prize>
    </TournamentPositionContainer>
  )
}

export default TournamentPosition

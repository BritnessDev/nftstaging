import styled, { css } from "styled-components"
import DT from "../../static/design-token.json"

export const CssDiv = styled.div`
  margin-top: 40px;
  @media screen and (max-width: ${DT.breakpoints.md}) {
    margin-top: 30px;
  }
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
    ${(props) => {
    if (props.pl) {
      return `padding-left: ` + props.pl + `;`
    }
  }}
    ${({ pr }) => {
    if (pr) {
      return `padding-right: ` + pr + `;`
    }
  }}
    ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

    ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}

    ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
    ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
    ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
    ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
    ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
    ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
    ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
    ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
    ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
    ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
    ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}
    ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
    ${({ transform }) =>
    transform &&
    css`
      transform: ${transform};
    `}
    ${({ border }) =>
    border &&
    css`
      border: ${border};
    `}
    ${({ borderTop }) =>
    borderTop &&
    css`
      border-top: ${borderTop};
    `}
    ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
    ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius &&
    css`
      border-top-left-radius: ${borderTopLeftRadius};
    `}
    ${({ borderTopRightRadius }) =>
    borderTopRightRadius &&
    css`
      border-top-right-radius: ${borderTopRightRadius};
    `}
    ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius &&
    css`
      border-bottom-left-radius: ${borderBottomLeftRadius};
    `}
    ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius &&
    css`
      border-bottom-right-radius: ${borderBottomRightRadius};
    `}
    ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
    ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
    ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: ${backgroundImage};
    `}
    ${({ backgroundSize }) =>
    backgroundSize &&
    css`
      background-size: ${backgroundSize};
    `}
    ${({ backgroundPosition }) =>
    backgroundPosition &&
    css`
      background-position: ${backgroundPosition};
    `}
    ${({ backgroundRepeat }) =>
    backgroundRepeat &&
    css`
      background-repeat: ${backgroundRepeat};
    `}
    ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
    ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `}
    ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}
    ${({ overflow }) =>
    overflow &&
    css`
      overflow: ${overflow};
    `}
    ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: ${boxShadow};
    `}
    ${({ transition }) =>
    transition &&
    css`
      transition: ${transition};
    `}
    ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}
    ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
`
export const CssDivs = styled.div`
  margin-top: 10px;
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
    ${(props) => {
    if (props.pl) {
      return `padding-left: ` + props.pl + `;`
    }
  }}
    ${({ pr }) => {
    if (pr) {
      return `padding-right: ` + pr + `;`
    }
  }}
    ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}

    ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}

    ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
    ${({ flex }) =>
    flex &&
    css`
      flex: ${flex};
    `}
    ${({ flexWrap }) =>
    flexWrap &&
    css`
      flex-wrap: ${flexWrap};
    `}
    ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
    ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
    ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
    ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
    ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
    ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
    ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `}
    ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `}
    ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight};
    `}
    ${({ transform }) =>
    transform &&
    css`
      transform: ${transform};
    `}
    ${({ border }) =>
    border &&
    css`
      border: ${border};
    `}
    ${({ borderTop }) =>
    borderTop &&
    css`
      border-top: ${borderTop};
    `}
    ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
    ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius &&
    css`
      border-top-left-radius: ${borderTopLeftRadius};
    `}
    ${({ borderTopRightRadius }) =>
    borderTopRightRadius &&
    css`
      border-top-right-radius: ${borderTopRightRadius};
    `}
    ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius &&
    css`
      border-bottom-left-radius: ${borderBottomLeftRadius};
    `}
    ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius &&
    css`
      border-bottom-right-radius: ${borderBottomRightRadius};
    `}
    ${({ background }) =>
    background &&
    css`
      background: ${background};
    `}
    ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
    ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: ${backgroundImage};
    `}
    ${({ backgroundSize }) =>
    backgroundSize &&
    css`
      background-size: ${backgroundSize};
    `}
    ${({ backgroundPosition }) =>
    backgroundPosition &&
    css`
      background-position: ${backgroundPosition};
    `}
    ${({ backgroundRepeat }) =>
    backgroundRepeat &&
    css`
      background-repeat: ${backgroundRepeat};
    `}
    ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
    ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `}
    ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}
    ${({ overflow }) =>
    overflow &&
    css`
      overflow: ${overflow};
    `}
    ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: ${boxShadow};
    `}
    ${({ transition }) =>
    transition &&
    css`
      transition: ${transition};
    `}
    ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `}
    ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
`


export const CssP = styled.p`
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
    ${(props) => {
    if (props.pl) {
      return `padding-left: ` + props.pl + `;`
    }
  }}
    ${({ pr }) => {
    if (pr) {
      return `padding-right: ` + pr + `;`
    }
  }}
    ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
    ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `}
    ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
    ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
    ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
    ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
    ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}

    ${({ position }) =>
    position &&
    css`
      position: ${position};
    `}
    ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
    ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ transform }) =>
    transform &&
    css`
      transform: ${transform};
    `}
    ${({ border }) =>
    border &&
    css`
      border: ${border};
    `}
    ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius};
    `}
    ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
    ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}
    ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `}
    ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}
    ${({ textAlign }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `}
    ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
    ${({ opacity }) =>
    opacity &&
    css`
      opacity: ${opacity};
    `}
    ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${fontFamily};
    `}
`

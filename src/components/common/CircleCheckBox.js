import { CssDiv } from "components/CssStyledComponent/CssStyledComponent"
import React, { useRef } from "react"

export const CircleCheckBox = ({
  checked,
  onChange,
  outWidth,
  outHeight,
  outBg,
  outOpacity,
  innerWidth,
  innerHeight,
  innerBg,
  style,
}) => {
  const checkBoxElmnt = useRef(null)

  const onClickCircleCheckBox = () => {
    checkBoxElmnt.current.click()
  }

  return (
    <div style={style}>
      <input
        type={"checkbox"}
        checked={checked}
        onChange={onChange}
        ref={checkBoxElmnt}
        style={{ display: "none" }}
      />
      <CssDiv
        width={outWidth}
        height={outHeight}
        backgroundColor={outBg}
        opacity={outOpacity}
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        onClick={onClickCircleCheckBox}
      >
        {checked && (
          <CssDiv
            width={innerWidth}
            height={innerHeight}
            backgroundColor={innerBg}
            borderRadius="50%"
          />
        )}
      </CssDiv>
    </div>
  )
}

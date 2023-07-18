import React from "react"
import {
  InnerSubscribeBox,
  Input,
  InputContainer,
  NavBtn,
  NavBtnLink,
  SubscribeBoxContainer,
} from "../styles/SubscribeStyling"

export const SubscribeBox = ({
  newsletterEmail,
  setNewsletterEmail,
  subscribeHandler,
}) => {
  return (
    <SubscribeBoxContainer>
      <p className="header1">
        Subscribe to our <br /> newsletters
      </p>

      <InnerSubscribeBox>
        <p>
          Be aware of all YourLife events and be the first among others to
          receive prizes!
        </p>
        <InputContainer>
          <Input
            placeholder="E-MAIL"
            className="placeholder-white"
            type="text"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
          />
          <NavBtn>
            <NavBtnLink onClick={subscribeHandler}>SUBSCRIBE</NavBtnLink>
          </NavBtn>
        </InputContainer>
      </InnerSubscribeBox>
    </SubscribeBoxContainer>
  )
}

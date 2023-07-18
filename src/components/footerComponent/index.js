import React, { useContext, useState, useEffect } from "react"
import DocumentIcon from "../../images/document-icon.svg"
import logo from "../../images/yourlife_white.png"
import { authAdminHeaderList, authUserHeaderList, headerList } from "../../utils/const"
import { FooterLinksContent, FooterLinksContainer, LogoImage, NavLinks, Image, SocialLogo, CopyrightText, Links, LinksContainer, } from "./FooterElements"
import { useMedia } from "hooks/useMedia"
import { useMoralis } from "react-moralis"

const FooterComponent = () => {
  const [footerItems, setFooterItems] = useState(headerList)
  const { user, isAuthenticated } = useMoralis()
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  const isDesktop = useMedia("(min-width: 1024px)")
  const isMobile = useMedia("(max-width: 1024px)")

  useEffect(() => {
    setFooterItems(isAuthenticated ? user?.attributes.isAdmin ? authAdminHeaderList : authUserHeaderList : headerList)
  }, [isAuthenticated])

  return (
    <>
      {(
        <FooterLinksContent>
          <FooterLinksContainer>
            <SocialLogo to="/" onClick={toggleHome}>
              <LogoImage src={logo} />
            </SocialLogo>
            {isDesktop && (<LinksContainer>
              <Links>
                {footerItems.map((item, index) => (
                  <NavLinks
                    key={index}
                    to={item.link}
                    spy="true"
                    duration={500}
                    exact="true"
                    offset={0}
                  >
                    {item.icon && <Image src={DocumentIcon} alt="React Logo" />}
                    {item.title}
                  </NavLinks>
                ))}
              </Links>
            </LinksContainer>)}
          </FooterLinksContainer>
          <CopyrightText>YourLife. 2022</CopyrightText>
        </FooterLinksContent>
      )}
    </>
  )
}

export default FooterComponent

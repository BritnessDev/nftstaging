import { LandingSection, LandingTopSection, LandingTopDesc, LandingButtonSection } from "./styles/signinStyling"

const Landing = ({ moralis }) => {
  return (
    <LandingSection>
        <LandingTopSection>
            <LandingTopDesc>
                <h1>Put the Future in Your Hands</h1>
                <p>
                Money from the Player NFT sales is transferred to real teams to help
                support and develop youth sports leagues.
                </p>
                <p>
                This unique opportunity provides both Fun & Finances at the same time!
                Live YourLIfe and Earn!
                </p>
            </LandingTopDesc>
        </LandingTopSection>
        <LandingButtonSection>
            <h1>Earn by Inviting, Watching, Playing!</h1>
            <p>
            We are building a Web3 SportsFi platform that encompasses the minting
            of NFTs and unique Watch & Earn Capabilities. A user can earn the
            YourLife token by simply inviting, playing, and watching.
            </p>
        </LandingButtonSection>
    </LandingSection>
  )
}

export default Landing

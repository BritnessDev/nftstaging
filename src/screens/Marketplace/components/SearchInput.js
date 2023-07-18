import { BiSearch } from "react-icons/bi"
import {
  Heading,
  FormInput,
  InnerContainer,
  SearchBarContainer,
  FiltersIcons,
} from "../styles/SearchInputStyling"

export const SearchInput = ({ userInput, setUserInput }) => {
  return (
    <InnerContainer>
      <Heading>marketplace</Heading>
      <SearchBarContainer>
        <FormInput
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          required
          placeholder="SEARCH..."
        />
        <BiSearch size={25} />
        <FiltersIcons
          src={require("../../../images/filtersIconsMobile.svg").default}
        />
      </SearchBarContainer>
    </InnerContainer>
  )
}

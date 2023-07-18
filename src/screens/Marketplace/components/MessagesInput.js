import { BiSearch } from "react-icons/bi"
import {
  Heading,
  FormInput,
  InnerContainer,
  SearchBarContainer,
  FiltersIcons,
} from "../styles/SearchInputStyling"

export const MessagesInput = ({ userInput, setUserInput }) => {
  return (
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
  )
}

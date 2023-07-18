import { sports } from "utils/dummyData"
import { SportsCategoryTitle } from "./styles/AccountElementsStyling"

const SportsCategories = ({ active, setActive }) => {
  return (
    <>
      {sports.map((sport) => (
        <div key={sport.id}>
          <SportsCategoryTitle>{sport.value}</SportsCategoryTitle>
        </div>
      ))}
    </>
  )
}

export default SportsCategories

import { CardStyling } from "../styles/SuperAdminStyling"

const Card = ({ title, description, checked, children }) => {
  return (
    <CardStyling>
      <p className="title" type="button">
        {title}
      </p>
      <p>{description}</p>
      <div>{children}</div>
    </CardStyling>
  )
}

export default Card

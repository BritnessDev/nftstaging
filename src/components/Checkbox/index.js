import { CheckBoxContainer, CheckBox } from "./styles"

export const Checkbox = ({value=false, onClickHandler={}, label=""}) => (
    <CheckBoxContainer>
        <CheckBox onClick={onClickHandler} style={{background: value ? '#3985F5' : '#3985F502'}} />
        <span onClick={onClickHandler}>{label}</span>
    </CheckBoxContainer>
)

export default Checkbox;
import { useState, useRef } from "react";
import { SelectBoxContainer, SelectContainer, SelectItemContainer, OverflowContainer } from "./styles"
import useOutsideClick from '../../hooks/useOutSideClick';

export const SelectBox = ({
    options = [],
    selectedOption = "",
    onChange = {},
    color="#737373",
    placeholder="",
}) => {
    const [isOpen, setOpen] = useState('');
    const ref = useRef(null);
    useOutsideClick(ref, () => setOpen(false));
    return(
        <SelectContainer ref={ref}>
            <SelectBoxContainer isFocused = {isOpen} onClick={() => setOpen(!isOpen)} color={color}>
                <span>{selectedOption ?? placeholder}</span>
                <img src="/dropdown.svg" alt="" />
            </SelectBoxContainer>
            <OverflowContainer>
            {
                isOpen && (
                    options.map((item, key) => (
                        <SelectItemContainer key={key} isLast={key == (options.length - 1)} onClick={() => {onChange(item);setOpen(false);}}>
                            {item}
                        </SelectItemContainer>
                    ))
                )
            }
            </OverflowContainer>
        </SelectContainer>
    )
}

export default SelectBox
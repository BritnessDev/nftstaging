import React, { useState, useCallback } from "react"
import { Collapse, Input, Slider, Space, Row, Col } from "antd"
import { filtersOptions } from "utils/dummyData"
import { CheckboxContainer, MainContainer } from "../styles/FiltersStyling"
import "../styles/filters.css"

const { Panel } = Collapse

const Filters = () => {
  const [fromCost, setFromCost] = useState(0)
  const [toCost, setToCost] = useState(0)
  const [costSlider, setCostSlider] = useState([0, 100])

  const onChangeFromCost = useCallback((value) => {
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(value) || value === "" || value === "-") {
      setFromCost(value)
      setCostSlider((prev) => [value, prev[1]])
    }
  }, [])

  const onChangeToCost = useCallback((value) => {
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(value) || value === "" || value === "-") {
      setToCost(value)
      setCostSlider((prev) => [prev[0], value])
      //   setAllNftFilteredItems((prev) => ({
      //     ...prev,
      //     costRange: [prev.costRange[0], value],
      //   }))
    }
  }, [])

  const onChangeCostSlider = useCallback((value) => {
    setFromCost(value[0])
    setToCost(value[1])
    setCostSlider(value)
    // setAllNftFilteredItems((prev) => ({ ...prev, costRange: value }))
  }, [])

  return (
    <MainContainer className="marketPlacePanelFilters">
      <Collapse expandIconPosition="end">
        <hr style={{ width: "100%", marginBottom: "0px" }} />
        <Panel header="Price" key={"1"} style={{fontBold: "700"}}>
          <Row align="middle" gutter={5}>
            <Col>
              of
            </Col>
            <Col lg={10}>
              <Input
                placeholder="From"
                maxLength={10}
                value={fromCost}
                onChange={(event) => onChangeFromCost(event.target.value)}
                style={{border: "1px solid #3985F5"}}
              />
            </Col>
            <Col>
              to
            </Col>
            <Col lg={10}>
              <Input
                placeholder="To"
                maxLength={10}
                value={toCost}
                onChange={(event) => onChangeToCost(event.target.value)}
                style={{border: "1px solid #3985F5"}}
              />
            </Col>
          </Row>
          
          <Slider
            range={{ draggableTrack: true }}
            value={costSlider}
            min={0}
            max={1500}
            onChange={onChangeCostSlider}
          />
        </Panel>

        {filtersOptions.map((filter) => (
          <>
            <hr style={{ width: "100%", marginBottom: "0px" }} />
            <Panel header={filter.name} key={filter.id}>
              {filter.options.map((option) => (
                <CheckboxContainer key={option.id}>
                  <input type="checkbox" name={option.name} id={option.name} style={{width: "24px", height: "24px"}} />
                  <p style={{fontSize: "18px"}}>{option.name}</p>
                </CheckboxContainer>
              ))}
            </Panel>
          </>
        ))}
      </Collapse>
    </MainContainer>
  )
}

export default Filters

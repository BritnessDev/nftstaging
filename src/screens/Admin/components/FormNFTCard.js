/* eslint-disable prettier/prettier */
import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { Loading } from "notiflix"
import { useHistory } from "react-router"
import "../styles/formNftCard.css"
import { Modal } from "antd"
import { ExclamationCircleOutlined } from "@ant-design/icons"
import {
  DropDownContainer,
  DropFileStyle,
  AttachContainer,
  FormStyling,
  SubmitBtn,
  TitleField,
  NetworkCheckGroup,
  SelectBoxDropdown,
  AsideContainer,
  AsideImageContainer,
} from "../styles/CreateNFTStyles"
import attachSvg from "../../../images/attach.svg"
import { sports, femalSports, NFTFunctionTypes } from "utils/dummyData"
import { filtersOptions, BoosterTypes } from "utils/dummyData"
import { countries } from "../countries"
import { lazyMintNft, createToken } from "utils/helpers/ylnft721"
import { lazy1155MintNft, create1155Token } from "utils/helpers/ylnft1155"
import { useMoralis } from "react-moralis"
import { Select, Input, DatePicker, Radio, Typography, Row, Col, Card } from "antd"
import CheckBox from "components/Checkbox"
import SelectBox from "components/SelectBox"
const { TextArea } = Input;

const InputComponent = ({ title, placeholder, name, onChange, type }) => {
  return (
    <>
      <TitleField>{title}</TitleField>
      {
        type == "text" || type == "number" ?
          <Input
            className="select-field"
            required
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
          />
          :
          <TextArea
            className="select-field"
            name={name}
            placeholder={placeholder}
            cols={10}
            rows={8}
            onChange={onChange}
            style={{
              height: "300px",
              paddingTop: "20px",
              paddingBottom: "100px",
            }}
          />
      }
    </>
  )
}

const SelectComponent = ({ title, name, onChange, values, itemName }) => {
  return (
    <>
      <TitleField>{title}</TitleField>
      <Select
        className="select-field"
        name={name}
        onChange={onChange}
      >
        {values.map(({ id, value }) => (
          <Select.Option key={id} value={value} name={itemName}>
            {value}
          </Select.Option>
        ))}
      </Select>
    </>
  )
}

const CardComponent = ({ title, name, value, onChange }) => {
  return (
    <Col xs={24} sm={12} md={8} xl={6}>
      <Card
        title={title}
        bordered={false}
        bodyStyle={{
          backgroundColor: "white",
          padding: "8px 0 8px 30px",
          border: "1px solid #61616A",
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "8px",
          color: "#242424",
        }}
        headStyle={{
          backgroundColor: "#61616A",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #61616A",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          color: "rgba(255, 255, 255)",
        }}
        style={{
          color: "#242424",
          backgroundColor: "#e7e9ed",
        }}
        hoverable
      >
        <Input
          name={name}
          className="custom-input"
          allowClear
          bordered={false}
          placeholder={"---"}
          type="number"
          value={value}
          onChange={onChange}
        />
      </Card>
    </Col>
  )
}

export const FormNFTCard = ({ propNftType }) => {
  const history = useHistory()
  const { Moralis, user } = useMoralis()
  const [files, setFiles] = useState([])
  const [selectedFields, setSelectedFields] = useState({
    boosterType: "Players",
    network: "Binance",
    mintType: null,
    sport: null,
    nftDuration: null,
    boostedCharact: null,
    boostedAmount: null,
    amount: "1",
    nftName: null,
    nftDesc: null,
    athleteBirthday: null,
    athleteCountry: null,
    athleteRegion: null,
    athleteTeam: null,
    biography: null,
    privacy: null,
    power: "",
    energy: "",
    luck: "",
    speed: "",
    wizzardy: "",
  })
  const {
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    e.preventDefault()
    const {
      boosterType,
      network,
      mintType,
      sport,
      nftDuration,
      boostedCharact,
      boostedAmount,
      amount,
      nftName,
      nftDesc,
      athleteBirthday,
      athleteCountry,
      athleteRegion,
      athleteTeam,
      biography,
      privacy,
      power,
      energy,
      luck,
      speed,
      wizzardy,
    } = selectedFields
    Loading.standard()

    try {
      const data = files[0]
      const image_ipfs = new Moralis.File(data.name, data)
      const img = await image_ipfs.saveIPFS()
      const image = "https://gateway.moralisipfs.com/ipfs/" + img._hash
      const personal =
        propNftType !== "Booster"
          ? {
            power,
            energy,
            luck,
            speed,
            wizzardy,
            athleteBirthday,
            athleteCountry,
            athleteRegion,
            athleteTeam,
            biography,
            privacy,
          }
          : null

      const options = JSON.stringify({
        name: nftName,
        description: nftDesc,
        type: propNftType,
        sport,
        image,
        nftDuration,
        boosterType,
        boostedCharact,
        boostedAmount,
        amount,
        personal,
        date: Date.now(),
      })
      const file = new Moralis.File("file.json", {
        base64: btoa(options),
      })
      const response = await file.saveIPFS()
      const metadata_hash = "https://gateway.moralisipfs.com/ipfs/" + response._hash
      let transaction
      if (propNftType !== "Booster") {
        if (mintType == "Normal") {
          transaction = await Moralis.executeFunction(
            createToken(metadata_hash, sport, propNftType),
          )
        } else {
          transaction = await Moralis.executeFunction(
            lazyMintNft(metadata_hash, sport, propNftType),
          )
        }
      } else {
        if (mintType == "Normal") {
          transaction = await Moralis.executeFunction(
            create1155Token(metadata_hash, sport, propNftType, amount),
          )
        } else {
          transaction = await Moralis.executeFunction(
            lazy1155MintNft(metadata_hash, sport, propNftType, amount),
          )
        }
      }
      await transaction.wait()
      // history.push("/admin/allnfts")
    } catch (error) {
      Modal.error({
        icon: <ExclamationCircleOutlined />,
        content: error.data ? error.data.message : error.message,
      })
    }
    Loading.remove()
  }

  const thumbs = files.map((file) => (
    <AsideImageContainer key={file.name}>
      <img
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </AsideImageContainer>
  ))

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  return (
    <FormStyling id="createNFTForm" onSubmit={onSubmit}>
      {propNftType === "Booster" &&
        <>
          <TitleField>{"booster for"}</TitleField>
          <SelectBoxDropdown>
            <SelectBox
              options={BoosterTypes.map(item => item.value)}
              selectedOption={selectedFields.boosterType}
              onChange={(value) => setSelectedFields({ ...selectedFields, boosterType: value })}
              placeholder="booster for"
            />
          </SelectBoxDropdown>
        </>
      }

      <TitleField>Select Network</TitleField>
      <NetworkCheckGroup>
        {
          ['Binance', 'Polygon'].map((item, key) => (
            <CheckBox
              value={selectedFields.network == item}
              onClickHandler={() => {
                setSelectedFields({ ...selectedFields, network: item });
              }}
              label={item}
              key={key}
            />
          ))
        }
      </NetworkCheckGroup>

      {/* Mint Type */}
      <TitleField>{"Type of mint"}</TitleField>
      <SelectBoxDropdown>
        <SelectBox
          options={NFTFunctionTypes.map(item => item.value)}
          selectedOption={selectedFields.mintType}
          onChange={(value) => setSelectedFields({ ...selectedFields, mintType: value })}
          placeholder="Select the mint type"
        />
      </SelectBoxDropdown>

      {/* kind of sport */}
      {(propNftType !== "Booster" || selectedFields.boosterType != "Contests") &&
        <>
          <TitleField>{"Select kind of sport"}</TitleField>
          <SelectBoxDropdown>
            <SelectBox
              options={user?.attributes.isMale ? sports.map(item => item.value) : femalSports.map(item => item.value)}
              selectedOption={selectedFields.sport}
              onChange={(value) => setSelectedFields({ ...selectedFields, sport: value })}
              placeholder="Select kind of sport"
            />
          </SelectBoxDropdown>
        </>
      }

      {propNftType === "Booster" &&
        <InputComponent
          title="Amount of NFT" placeholder="Amount of NFT" name="amount" type="number"
          onChange={(e) => setSelectedFields({ ...selectedFields, amount: e.target.value })}
        />
      }

      <InputComponent
        title="NFT name" placeholder="NFT Name" name="nftName" type="text"
        onChange={(e) => setSelectedFields({ ...selectedFields, nftName: e.target.value })}
      />

      {propNftType === "Booster" && selectedFields.boosterType != "Contests" &&
        <>
          <InputComponent
            title="Set duration time" placeholder="Set duration time" name="nftDuration" type="number"
            onChange={(e) => setSelectedFields({ ...selectedFields, nftDuration: e.target.value })}
          />

          <TitleField>{"choose boosted characteristic"}</TitleField>
          <SelectBoxDropdown>
            <SelectBox
              options={filtersOptions[3].options.map(item => item.name)}
              selectedOption={selectedFields.boostedCharact}
              onChange={(value) => setSelectedFields({ ...selectedFields, boostedCharact: value })}
              placeholder="Choose boosted characteristic"
            />
          </SelectBoxDropdown>

          <InputComponent
            title="set the boosted amount" placeholder="Boosted amount" name="boostedAmount" type="number"
            onChange={(e) => setSelectedFields({ ...selectedFields, boostedAmount: e.target.value })}
          />
        </>
      }

      {propNftType !== "Booster" &&
        <InputComponent
          title="NFT description" placeholder="Description" name="nftDesc" type="textArea"
          onChange={(e) => setSelectedFields({ ...selectedFields, nftDesc: e.target.value })}
        />
      }

      <>
        <TitleField>
          Enter media to upload to IPFS <br />
          <span>The file must be PNG, and no more than 3 MB</span>
        </TitleField>
        <DropDownContainer>
          <DropFileStyle {...getRootProps()}>
            <input
              type="url"
              placeholder="Enter media to upload to IPFS"
              {...register("Enter media to upload to IPFS", {})}
              {...getInputProps()}
            />
            <p>Drop files here</p>
            <AttachContainer>
              <img src={attachSvg} alt="attach" />
              <span>Attach file</span>
            </AttachContainer>
            <AsideContainer>
              {thumbs}
            </AsideContainer>
          </DropFileStyle>
        </DropDownContainer>
      </>

      {propNftType !== "Booster" && (
        <>
          <Typography.Title style={{ marginTop: "50px", marginBottom: "15px", fontSize: "24px" }}>
            Enter characteristics
          </Typography.Title>
          <Row gutter={[16, 24]}>
            <CardComponent title="Power" name="power" value={selectedFields.power}
              onChange={(e) => setSelectedFields((prev) => ({ ...prev, power: e.target.value, }))} />
            <CardComponent title="Energy" name="energy" value={selectedFields.energy}
              onChange={(e) => setSelectedFields((prev) => ({ ...prev, energy: e.target.value, }))} />
            <CardComponent title="Luck" name="luck" value={selectedFields.luck}
              onChange={(e) => setSelectedFields((prev) => ({ ...prev, luck: e.target.value, }))} />
            <CardComponent title="Speed" name="speed" value={selectedFields.speed}
              onChange={(e) => setSelectedFields((prev) => ({ ...prev, speed: e.target.value, }))} />
            <CardComponent title="Wizzardy" name="wizzardy" value={selectedFields.wizzardy}
              onChange={(e) => setSelectedFields((prev) => ({ ...prev, wizzardy: e.target.value, }))} />
          </Row>

          <>
            <TitleField>Enter athlete's birthday</TitleField>
            <DatePicker
              className="select-field date"
              placeholder="Enter your birthday"
              name="athleteBirthday"
              format="DD/MM/YYYY"
              style={{ color: "#fff" }}
              required
              onChange={(value) =>
                setSelectedFields({ ...selectedFields, athleteBirthday: value })
              }
            />
          </>
          {/* Select athlete's country */}
          <TitleField>{"Select athlete's country"}</TitleField>
          <SelectBoxDropdown>
            <SelectBox
              options={countries.map(item => item.value)}
              selectedOption={selectedFields.athleteCountry}
              onChange={(value) => setSelectedFields({ ...selectedFields, athleteCountry: value })}
              placeholder="Select athlete's country"
            />
          </SelectBoxDropdown>

          <InputComponent
            title="Type athlete's region" placeholder="Select your region" name="athleteRegion" type="text"
            onChange={(e) => setSelectedFields({ ...selectedFields, athleteRegion: e.target.value, })}
          />
          <InputComponent
            title="Enter teamn" placeholder="Enter team" name="athleteTeam" type="text"
            onChange={(e) => setSelectedFields({ ...selectedFields, athleteTeam: e.target.value, })}
          />
          <InputComponent
            title="Player biography" placeholder="Text..." name="biography" type="textArea"
            onChange={(e) => setSelectedFields({ ...selectedFields, biography: e.target.value })}
          />
          <InputComponent
            title="Privacy Policy" placeholder="Text..." name="privacy" type="textArea"
            onChange={(e) => setSelectedFields({ ...selectedFields, privacy: e.target.value })}
          />
        </>
      )}
      <SubmitBtn type="submit" placeholder="MINT" value="MINT" />
    </FormStyling>
  )
}

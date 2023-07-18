import React, { useEffect, useState, useCallback } from "react"
import {
  OuterContainer,
  Title,
  MenuButtonContainer,
  MenuList,
  StepButton,
  DepositBox,
  DepositText,
  BalanceBox,
  WalletBalanceText,
  InsuffiText,
  GoSwapButton,
  Balance,
  ResultImage,
  NotificationBox,
  ProfileBox,
  TitleField,
  DropDownContainer,
  DropFileStyle,
  AttachContainer,
  AsideContainer,
  AsideImageContainer,
  ClubContainer,
  ClubItem,
} from "./styles/AuthStyling"
import { useForm } from "react-hook-form"
import { CloseButton } from "./styles/SidebarStyling"
import { CheckOutlined, CloseOutlined } from "@ant-design/icons"
import { userRoles, clubList } from "utils/dummyData"
import { useDropzone } from "react-dropzone"
import { Input } from "antd"
import Lock from "../../images/authentication/lock.png"
import Logo from "../../images/authentication/logo.png"
import attachSvg from "../../images/attach.svg"
import { useHistory } from "react-router"

const { TextArea } = Input
const InputComponent = ({ title, placeholder, name, onChange, type }) => {
    return (
      <>
        { title && <TitleField>{title}</TitleField> }
        {
          type == "text" || type == "number" ?
            <Input
              className="select-field"
              required
              type={type}
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              style={{borderRadius: "8px"}}
            />
            :
            <TextArea
              className="select-field"
              name={name}
              placeholder={placeholder}
              onChange={onChange}
              style={{
                height: "150px",
                padding: "20px",
                borderRadius: "8px",
              }}
            />
        }
      </>
    )
  }

const AccountType = ({ menuData = [], title, setAccountType, setStep }) => {
    const [role, setRole] = useState(-1)
    const onClickAcceptHandler = () => {
        setAccountType(role)
        setStep(0)
    }
    return (
        <>
            <div>
                <Title>{title}</Title>
                <MenuList>
                    {menuData?.map((menu, key) => (
                        <MenuButtonContainer key={key} isSelected={key === role} onClick={() => setRole(key)}> {/*disabled={true} */}
                            {menu?.title}
                            {/* <p>coming soon</p>
                            <img src={Lock} alt="no lock image" /> */}
                        </MenuButtonContainer>
                    ))}
                </MenuList>
            </div>
            <StepButton onClick={onClickAcceptHandler}>Accept</StepButton>
        </>
    )
}

const Notification = ({title, onClickHandler}) => (
    <>
        <div>
            <Title>{title}</Title>
            <NotificationBox>
                <p>
                    Selecting this type of account will create a list of athletes. You will need to add athletes from your school or club to it.
                </p>
                <p>
                    You can see it later in your account.
                </p>
            </NotificationBox>
        </div>
        <StepButton onClick={onClickHandler}>Confirm</StepButton>
    </>
)

const Deposit = ({title="", desc="", balance, label, active=false, onClickHandler}) => (
    <>
        <div>
            <Title>{title}</Title>
            <DepositText>{desc}</DepositText>
            <BalanceBox>
                <Balance>
                    <img src={Logo} alt="no logo" />
                    <p>100000</p>
                </Balance>
                <p>current amount</p>
            </BalanceBox>
            <WalletBalanceText>
                On your account: <span>{balance} YLT</span>
            </WalletBalanceText>
            {active && (
                <>
                <InsuffiText>{label}</InsuffiText>
                <GoSwapButton>GO TO SWAP</GoSwapButton>
                </>
            )}
        </div>
        <StepButton onClick={onClickHandler} disabled={!active}>Confirm Deposit</StepButton>
    </>
)

const DepositResult = ({title, result = "", desc = "", onClickHandler}) => (
    <>
        <Title>{title}</Title>
        <DepositBox>
            <ResultImage style={{ backgroundColor: "#90E040"}}>
                <CheckOutlined style={{ backgroundColor: "#90E040", borderRadius: "50%" }} />
            </ResultImage>
            <p>{result}</p>
            <p>{desc}</p>
        </DepositBox>
        <StepButton onClick={onClickHandler}>NEXT</StepButton>
    </>
)

const Profile = ({title, bio = true, onClickHandler}) => {
    const [files, setFiles] = useState([])
    const {
        register,
        formState: { errors },
    } = useForm()
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
    return (
        <>
        <div>
            <Title>{title}</Title>
            <InputComponent
                title="Enter real name" placeholder="Real name" name="realName" type="text"
            />
            {
                bio &&
                <InputComponent
                    title="Enter biography" placeholder="Biography" name="bio" type="textArea"
                />
            }
            <ProfileBox>
                <h1>Enter your HighSchool or Club logo</h1>
                <p>The file must be PNG, and no more than 3 MB</p>
            </ProfileBox>
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
        </div>
        <StepButton onClick={onClickHandler}>ACCEPT</StepButton>
    </>
    )
}

const Club = ({ clubList, title, onClickHandler }) => {

    const [club, setClub] = useState(-1)
    return (
        <>
            <div>
                <Title>{title}</Title>
                <InputComponent placeholder="Search" name="search" type="text" />
                <ClubContainer>
                    {
                        clubList?.map((clubItem, key) => (
                            <ClubItem key={key} onClick={() => setClub(key)} isSelected={key === club}>
                                <img src={clubItem?.image} alt={clubItem?.image} />
                                <p>{clubItem?.name}</p>
                            </ClubItem>
                        ))
                    }
                </ClubContainer>
            </div>
            <StepButton onClick={onClickHandler}>ACCEPT</StepButton>
        </>
    )
}

const AuthFlow = ({ moralis, closeSidebar }) => {
  const [closebutton, showCloseButton] = useState(true)
  const [content, setContent] = useState(null)
  const [step, setStep] = useState(-1)
  const [accountType, setAccountType] = useState(-1)
  const history = useHistory()
  
  const close = useCallback(() => {
    setContent(
        <AccountType
          title="Type of account"
          menuData={userRoles}
          setStep={setStep}
          setAccountType={setAccountType}
        />,
      )
    setAccountType(-1)
    setStep(-1)
    closeSidebar()
    // setContent(null)
    showCloseButton(true)
  }, [closeSidebar])

  useEffect(() => {
    if(accountType !== -1 && step !== -1) {
        switch(accountType) {
            case 0:
            case 1:
                switch(step) {
                    case 0:
                        setContent(null)
                        setContent(<Deposit
                        title="deposit"
                        desc="In order to become an administrator, you need to make a deposit."
                        balance="1236"
                        label="insufficient funds to make a deposit"
                        onClickHandler={() => {
                            setStep(1);
                        }}
                        active={true} // false
                        />)
                        break;
                    case 1:
                        setContent(<DepositResult
                        title="Deposit"
                        result="deposit successfully replenished!"
                        desc="Request sent to super admin, you will get admin rights soon"
                        onClickHandler={() => {setStep(2);}}
                        />)
                        break;
                    case 2:
                        setContent(<Notification
                        title="Creating list of athletes"
                        onClickHandler={() => {setStep(3)}}
                        />);
                        break;
                    case 3:
                        setContent(<DepositResult
                        title="Creating list of athletes"
                        result="List created successfully!"
                        onClickHandler={() => {setStep(4)}}
                        />);
                        break;
                    case 4:
                        setContent(
                            <Profile
                            title="profile Info"
                            onClickHandler={() => {setStep(5)}}
                            />
                        )
                        break;
                    case 5:
                        setContent(<DepositResult
                        title="Data is filled"
                        result="Successfully!"
                        onClickHandler={() => {history.push("/admin/super");close()}}
                        />);
                        break;
                    default:
                        break;
                }
                break;
            case 2:
            case 3:
                switch(step) {
                    case 0:
                        setContent(<Club
                            title="Choose club"
                            clubList={clubList}
                            onClickHandler={() => {setStep(1)}}
                            />)
                        break;
                    case 1:
                        setContent(<Profile
                            title="profile Info"
                            onClickHandler={() => {setStep(2)}}
                            />)
                        break;
                    case 2:
                        setContent(<DepositResult
                            title="Data is filled"
                            result="Successfully!"
                            onClickHandler={() => {close()}}
                            />)
                        break;
                    default:
                        break;
                }
                break;
            case 4:
            case 7:
                switch(step) {
                    case 0:
                        setContent(<Deposit
                        title="deposit"
                        desc="In order to become an administrator, you need to make a deposit."
                        balance="1236"
                        label="insufficient funds to make a deposit"
                        onClickHandler={() => {
                            setStep(1);
                        }}
                        active={true} // false
                        />)
                        break;
                    case 1:
                        setContent(<DepositResult
                            title="Deposit"
                            result="deposit successfully replenished!"
                            desc="Request sent to super admin, you will get admin rights soon"
                            onClickHandler={() => {setStep(2)}}
                            />)
                        break;
                    case 2:
                        setContent(<Profile
                            title="profile Info"
                            onClickHandler={() => {setStep(3)}}
                            />)
                        break;
                    case 3:
                        setContent(<DepositResult
                            title="Data is filled"
                            result="Successfully!"
                            onClickHandler={() => {history.push("/admin/super");close()}}
                            />)
                        break;
                    default:
                        break;
                }
                break;
            case 6:
                switch(step) {
                    case 0:
                        setContent(<Profile
                            title="profile Info"
                            onClickHandler={() => {setStep(3)}}
                            bio={false}
                            />)
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    } else {
        setContent(
            <AccountType
              title="Type of account"
              menuData={userRoles}
              setStep={setStep}
              setAccountType={setAccountType}
            />
          )
    }
  }, [accountType, step])

  return (
    <OuterContainer>
      {content}
      {closebutton && (
        <CloseButton onClick={close}>
          <CloseOutlined />
        </CloseButton>
      )}
    </OuterContainer>
  )
}

export default AuthFlow

import { useLocation } from "react-router"
import { Menu } from "antd"
import { NavLink } from "react-router-dom"

function MenuItems() {
  const { pathname } = useLocation()

  return (
    <Menu
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#191919",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/nftMarket">
        <NavLink to="/nftMarket">Explore YLG NFT Collections</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">Your YLG NFT Collections</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftTransactions">
        <NavLink to="/nftTransactions">YLG NFT Transactions</NavLink>
      </Menu.Item>
      <Menu.Item key="/transfers">
        <NavLink to="/transfers">transfers</NavLink>
      </Menu.Item>
    </Menu>
  )
}

export default MenuItems

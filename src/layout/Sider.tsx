import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SiderMenu from "./SiderMenu";
import LogoSvg from "@/assets/logo.svg";
import { Scrollbars } from "react-custom-scrollbars";

import type { SiderProps } from "antd";

const SiderStyled = styled(Layout.Sider)`
  position: fixed !important ;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const titleHide = keyframes`
    0% {
      display: none;
      opacity: 0;
    }

    80% {
      display: none;
      opacity: 0;
    }

    to {
      display: unset;
      opacity: 1;
    }
  `;

const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 32px;
  }
  & img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }
  & h1 {
    height: 32px;
    margin: 0 0 0 12px;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    vertical-align: middle;
    animation: ${titleHide} 0.3s;
  }
`;

const AsderFooter = styled.div`
  padding: 12px;
  text-align: center;
  animation: ${titleHide} 0.3s;
`;

export default function Sider(props: { collapsed: boolean }) {
  const siderConfig: SiderProps = {
    width: 210,
    collapsedWidth: 64,
    collapsed: props.collapsed,
    theme: "light",
  };

  const {
    token: { colorTextTertiary },
  } = theme.useToken();
  return (
    <>
      <Layout.Sider {...siderConfig}></Layout.Sider>
      <SiderStyled {...siderConfig}>
        <Logo>
          <Link to="/">
            <img src={LogoSvg} alt="logo" />
            <h1 style={{ display: props.collapsed ? "none" : "block" }}>
              {process.env.REACT_APP_WEBSITE_NAME}
            </h1>
          </Link>
        </Logo>

        <Scrollbars style={{ height: "calc(100% - 132px)" }} autoHide>
          <SiderMenu />
        </Scrollbars>

        <AsderFooter
          style={{
            display: props.collapsed ? "none" : "block",
            color: colorTextTertiary,
          }}
        >
          <div>
            © 2024 Made with <span style={{ color: "#e5e0d8" }}>❤</span>
          </div>
          <div>by CaiHai</div>
        </AsderFooter>
      </SiderStyled>
    </>
  );
}

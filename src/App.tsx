import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React from "react";
import CypressContent from "./CypressContent";
import TestDescriptionList from "./TestDescriptionList";
// antd reset css import
import "antd/dist/reset.css";
const { Header, Footer, Content } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <CypressContent />
            <TestDescriptionList />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by <strong>Mohammad Dehgamwala</strong>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;

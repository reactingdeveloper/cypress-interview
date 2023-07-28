import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Space,
  Typography,
  notification,
} from "antd";

import { useState } from "react";
import { PAGE_TITLE } from "./constants";

const { Search } = Input;

const CypressContent = () => {
  const [api, contextHolder] = notification.useNotification();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    api.success({
      message: "Form saved",
      description: "You need to confirm this text is visible in the browser.",
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openNotification = () => {
    api.open({
      message: "Test cypress title",
      description: "You need to confirm this text is visible in the browser.",
      duration: 0,
    });
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onSearch = (value: string) => {
    api.info({
      message: "Search",
      description: `You searched for "${value}"`,
    });
  };

  return (
    <>
      {contextHolder}
      <Typography.Title level={2}>{PAGE_TITLE}</Typography.Title>
      <Space>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Button type="default" onClick={openNotification}>
          Open the notification box
        </Button>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        okText="Confirm"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CypressContent;

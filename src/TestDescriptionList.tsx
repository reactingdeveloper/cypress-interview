import { Alert, Divider, List, Space, Tag } from "antd";

const TestDescriptionList = () => {
  return (
    <>
      <Divider>First Test</Divider>

      <List size="large" bordered>
        <List.Item>1. Click on nav 1 on navbar</List.Item>
        <List.Item>
          2. Confirm the title of this page is "Cypress Test"{" "}
          <Tag color="cyan">READ</Tag>
        </List.Item>
        <List.Item>3. Click on notification button</List.Item>
        <List.Item>
          4. Confirm if the title of notification is "Test cypress title"{" "}
          <Tag color="cyan">READ</Tag>
        </List.Item>
        <List.Item>5. Close notification by clicking on close button</List.Item>
        <List.Item>6. Click on modal button</List.Item>
        <List.Item>
          7. Fill all the fields in form (any random data) inside modal. also
          uncheck remember me checkbox <Tag color="purple">UPDATE</Tag>
          {/* required mark */}
          <span
            style={{
              color: "#ff4d4f",
              marginLeft: 4,
            }}
          >
            *
          </span>
        </List.Item>
        <List.Item>8. Click on confirm button</List.Item>
        <List.Item>
          9. Confirm if the notification is visible with title "Form saved"{" "}
          <Tag color="cyan">READ</Tag>
        </List.Item>

        <List.Item>
          10. Click on search bar and type for "admin". after you typed hit
          enter. as soon as you hit enter there should be a notification saying
          "You searched for 'admin'" <Tag color="gold">OPTIONAL</Tag>
        </List.Item>
      </List>

      <Divider>Second Test</Divider>

      <List size="large" bordered>
        <List.Item>
          1. Go to constants file and change the value of{" "}
          <code>PAGE_TITLE</code> to "Cypress Test Updated"{" "}
          <Tag color="purple">UPDATE</Tag>
        </List.Item>
        <List.Item>
          2. Test should fail with error "expected 'Cypress Test Updated' to
          equal 'Cypress Test'" <Tag color="cyan">READ</Tag>{" "}
          <Tag color="error">FORCE ERROR</Tag>
        </List.Item>
      </List>

      <Divider>Note</Divider>
      <Alert
        type="warning"
        message="There are total 12 tests from which you need to pass atleast 8 tests to get the job."
      />
      <Divider />
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Alert
          type="info"
          message="Read and Update are the main pillars of CRUD. Create, Read, Update and Delete."
        />
        <Alert type="info" message="* means required test." />
      </Space>
    </>
  );
};

export default TestDescriptionList;

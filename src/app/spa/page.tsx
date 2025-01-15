"use client";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  DatePicker,
  Radio,
  InputNumber,
  Select,
  message,
  Space,
  Table,
  Checkbox,
  CheckboxChangeEvent,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { translate } from "@/utils/translation";
import CitizenInput from "./components/citizenInput";
import {
  addFormData,
  deleteFormData,
  FormUserData,
  setFormData,
  updateFormData,
} from "@/store/slices/formSlice";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
dayjs.extend(utc);

export default function FrontendReact() {
  const locale = useSelector((state: RootState) => state.language.locale);
  const router = useRouter();
  const formData = useSelector((state: RootState) => state.form);
  const [form] = Form.useForm();
  const dispatch: AppDispatch = useDispatch();

  const [editingRecord, setEditingRecord] = useState<FormUserData | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const onFinish = (values: FormUserData) => {
    if (editingRecord) {
      dispatch(updateFormData({ ...editingRecord, ...values }));
      message.success("Data updated successfully!");
    } else {
      const newData = { ...values, id: Date.now().toString() };
      dispatch(addFormData(newData));
      message.success("Data added successfully!");
    }
    form.resetFields();
    setEditingRecord(null);
  };

  const onEdit = (record: FormUserData) => {
    setEditingRecord(record);

    form.setFieldsValue({
      ...record,
      birthday: record.birthday ? dayjs(record.birthday) : null,
    });
  };

  const handleSelectAll = (e: CheckboxChangeEvent) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allKeys = formData.data.map((item) => item.id);
      setSelectedRowKeys(allKeys);
    } else {
      setSelectedRowKeys([]);
    }
  };
  const onDelete = (id: string) => {
    dispatch(deleteFormData(id));
    message.success("Data deleted successfully!");
  };

  const onDeleteSelected = () => {
    selectedRowKeys.forEach((id) => dispatch(deleteFormData(id as string)));
    setSelectedRowKeys([]);
    setSelectAll(false);
    message.success("Selected data deleted!");
  };

  const columns = [
    {
      title: translate("fullName", locale),
      key: "firstName",
      render: (_: void, record: FormUserData) =>
        `${record.firstName} ${record.lastName}`,
    },
    {
      title: translate("Gender", locale),
      key: "gender",
      render: (_: void, record: FormUserData) =>
        `${translate(record.gender, locale)}`,
    },
    {
      title: translate("Mobile Phone", locale),
      key: "mobilePhone",
      render: (_: void, record: FormUserData) =>
        `${record.prefix}${record.mobilePhone}`,
    },
    {
      title: translate("Nationality", locale),
      key: "nation",
      render: (_: void, record: FormUserData) =>
        `${translate(record.nation, locale)}`,
    },
    {
      title: translate("Manage", locale),
      key: "action",
      render: (_: void, record: FormUserData) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => onEdit(record)}
            className="fontPrimaryColor"
          >
            {translate("Edit", locale)}
          </Button>
          <Button
            type="link"
            onClick={() => onDelete(record.id)}
            className="fontPrimaryColor"
          >
            {translate("Delete", locale)}
          </Button>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedKeys);
      setSelectAll(newSelectedKeys.length === formData.data.length);
    },
  };

  const paginationConfig = {
    pageSize: 5,
    total: formData.data.length,
    position: ["topRight" as const]  ,
    showSizeChanger: false,
    itemRender: (
      current: number,
      type: string,
      originalElement: React.ReactNode
    ) => {
      if (type === "prev") {
        return <Button type="link">PREV</Button>;
      }
      if (type === "next") {
        return <Button type="link">NEXT</Button>;
      }
      return originalElement;
    },
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
    dispatch(setFormData(storedData));
  }, []);
  const prefixSelector = (
    <Form.Item name="prefix" noStyle rules={[{ required: true, message: "" }]}>
      <Select style={{ width: 100, background: "#fff", borderRadius: "6px" }}>
        <Select.Option value="+66">🇹🇭 +66</Select.Option>
        <Select.Option value="+1">🇺🇸 +1</Select.Option>
        <Select.Option value="+33">🇫🇷 +33</Select.Option>
      </Select>
    </Form.Item>
  );
  return (
    <div>
      <h1 className="titleText">{translate("descriptionTest3", locale)}</h1>
      <Button
        style={{ position: "fixed", right: "0vw", marginRight: "10px" }}
        onClick={() => router.push("/")}
      >
        {translate("Home", locale)}
      </Button>
      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        initialValues={{
          gender: "male",
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0vh 20vw 5vh 20vw",
          padding: "1vw 2vw 0vw 2vw",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      >
        {/* Row 1: Title, First Name, Last Name */}
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              label={translate("Title name", locale)}
              name="title"
              rules={[{ required: true, message: "" }]}
            >
              {/* <Input /> */}
              <Select placeholder={translate("title placeholder", locale)}>
                <Select.Option value="mr">
                  {translate("Mr.", locale)}
                </Select.Option>
                <Select.Option value="mrs">
                  {translate("Mrs.", locale)}
                </Select.Option>
                <Select.Option value="ms">
                  {translate("Ms.", locale)}
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              label={translate("First Name", locale)}
              name="firstName"
              rules={[{ required: true, message: "" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              label={translate("Last Name", locale)}
              name="lastName"
              rules={[{ required: true, message: "" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 2: Birthday, Nation */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={translate("Birthday", locale)}
              name="birthday"
              rules={[{ required: true, message: "" }]}
            >
              <DatePicker
                placeholder={translate("birthday placeholder", locale)}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label={translate("Nationality", locale)}
              name="nation"
              rules={[{ required: true, message: "" }]}
            >
              {/* <Input /> */}
              <Select
                placeholder={translate("nationality placeholder", locale)}
              >
                <Select.Option value="thai">
                  {translate("thai", locale)}
                </Select.Option>
                <Select.Option value="french">
                  {translate("french", locale)}
                </Select.Option>
                <Select.Option value="american">
                  {translate("american", locale)}
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 3: Personal ID */}

        <CitizenInput />

        {/* Row 4: Gender */}
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              label={translate("Gender", locale)}
              name="gender"
              rules={[{ required: true, message: "" }]}
            >
              <Radio.Group>
                <Radio value="male">{translate("male", locale)}</Radio>
                <Radio value="female">{translate("female", locale)}</Radio>
                <Radio value="unsex">{translate("unsex", locale)}</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 5: Mobile Phone */}
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              label={translate("Mobile Phone", locale)}
              name="mobilePhone"
              rules={[{ required: true, message: "" }]}
            >
              <InputNumber
                maxLength={9}
                addonBefore={prefixSelector}
                placeholder="Mobile Number"
                style={{ width: "100%" }}
                controls={false}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 6: Passport No */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={translate("Passport No", locale)}
              name="passportNo"
            >
              <InputNumber maxLength={9} controls={false} />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 7: Expected Salary, Reset and Submit Buttons */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={translate("Expected Salary", locale)}
              name="expectedSalary"
              rules={[{ required: true, message: "" }]}
            >
              <InputNumber style={{ width: "100%" }} controls={false} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button type="default" htmlType="reset" style={{ width: "100%" }}>
              {translate("RESET", locale)}
            </Button>
          </Col>
          <Col span={8}>
            <Button type="default" htmlType="submit" style={{ width: "100%" }}>
              {translate("SUBMIT", locale)}
            </Button>
          </Col>
        </Row>
      </Form>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          paddingInline: "5vw",
        }}
      >
        <Checkbox
          checked={selectAll}
          onChange={handleSelectAll}
          style={{ marginRight: 10 }}
        >
          Select All
        </Checkbox>

        <Button
          type="default"
          disabled={!selectedRowKeys.length}
          onClick={onDeleteSelected}
        >
          Delete Selected
        </Button>
      </div>
      <div style={{ padding: "0vh 10vw 10vh 10vh" }}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={formData.data}
          pagination={paginationConfig}
          rowKey="id"
        />
      </div>
    </div>
  );
}

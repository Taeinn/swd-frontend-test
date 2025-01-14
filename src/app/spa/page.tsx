"use client";
import { useState, useRef } from "react";
import { Button, Form, Input, Row, Col, DatePicker, Radio, InputNumber } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { translate } from "@/utils/translation";

export default function FrontendReact() {
  const locale = useSelector((state: RootState) => state.language.locale);

  // References for the personal ID inputs
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);

  // Handle personal ID focus logic
  const handlePersonalIDChange = (value: string, index: number) => {
    if (value && index < 4) {
      switch (index) {
        case 0:
          input2Ref.current?.focus();
          break;
        case 1:
          input3Ref.current?.focus();
          break;
        case 2:
          input4Ref.current?.focus();
          break;
        case 3:
          input5Ref.current?.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <h1 className="titleText">{translate("descriptionTest3", locale)}</h1>

      <Form
        layout="vertical"
        initialValues={{
          gender: "male", // Default gender
        }}
      >
        {/* Row 1: Title, First Name, Last Name */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="First Name" name="firstName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Last Name" name="lastName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 2: Birthday, Nation */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Birthday" name="birthday" rules={[{ required: true }]}>
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Nation" name="nation" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 3: Personal ID */}
        <Row gutter={16}>
          <Col span={4}>
            <Form.Item name="personalID1" rules={[{ required: true }]}>
              <Input
                maxLength={1}
                ref={input1Ref}
                onChange={(e) => handlePersonalIDChange(e.target.value, 0)}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="personalID2" rules={[{ required: true }]}>
              <Input
                maxLength={4}
                ref={input2Ref}
                onChange={(e) => handlePersonalIDChange(e.target.value, 1)}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="personalID3" rules={[{ required: true }]}>
              <Input
                maxLength={5}
                ref={input3Ref}
                onChange={(e) => handlePersonalIDChange(e.target.value, 2)}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="personalID4" rules={[{ required: true }]}>
              <Input
                maxLength={2}
                ref={input4Ref}
                onChange={(e) => handlePersonalIDChange(e.target.value, 3)}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="personalID5" rules={[{ required: true }]}>
              <Input
                maxLength={1}
                ref={input5Ref}
                onChange={(e) => handlePersonalIDChange(e.target.value, 4)}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 4: Gender */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="unsex">Unsex</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 5: Mobile Phone */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Mobile Phone" name="mobilePhone" rules={[{ required: true }]}>
              <Input
                addonBefore="+66"
                placeholder="Mobile Number"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 6: Passport No */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Passport No" name="passportNo" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Row 7: Expected Salary, Reset and Submit Buttons */}
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Expected Salary" name="expectedSalary">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button type="default" htmlType="reset" style={{ width: "100%" }}>
              Reset
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
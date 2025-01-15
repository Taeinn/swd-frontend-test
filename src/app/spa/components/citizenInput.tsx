"use client";
import { RootState } from "@/store/store";
import { translate } from "@/utils/translation";
import { Col, Form, InputNumber, Row } from "antd";
import { useRef } from "react";
import { useSelector } from "react-redux";

export default function CitizenInput() {
  const locale = useSelector((state: RootState) => state.language.locale);

  // References for the personal ID inputs
  const input1Ref = useRef<HTMLInputElement | null>(null);
  const input2Ref = useRef<HTMLInputElement | null>(null);
  const input3Ref = useRef<HTMLInputElement | null>(null);
  const input4Ref = useRef<HTMLInputElement | null>(null);
  const input5Ref = useRef<HTMLInputElement | null>(null);
  const handlePersonalIDChange = (value: string, index: number) => {
    if (value && index < 4) {
      switch (index) {
        case 0:
          if (value.length === 1) {
            input2Ref.current?.focus();
          } else {
            input1Ref.current?.focus();
          }
          break;
        case 1:
          if (value.length === 4) {
            input3Ref.current?.focus();
          } else {
            input2Ref.current?.focus();
          }
          break;
        case 2:
          if (value.length === 5) {
            input4Ref.current?.focus();
          } else {
            input3Ref.current?.focus();
          }
          break;
        case 3:
          if (value.length === 2) {
            input5Ref.current?.focus();
          } else {
            input4Ref.current?.focus();
          }
          break;
        default:
          break;
      }
    }
  };
  return (
    <Row gutter={16}>
      <Col
        span={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "34px",
        }}
      >
        {translate("CitizenID", locale)} :
      </Col>
      <Col span={2}>
        <Form.Item
          // label={translate("CitizenID", locale)}
          name="personalID1"
          rules={[{ required: true, message: "" }]}
        >
          <InputNumber
            controls={false}
            maxLength={1}
            ref={input1Ref}
            onChange={(e) => handlePersonalIDChange(e!.toString(), 0)}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          />
        </Form.Item>
      </Col>
      <Col
        span={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "34px",
        }}
      >
        -
      </Col>
      <Col span={4}>
        <Form.Item name="personalID2" rules={[{ required: true, message: "" }]}>
          <InputNumber
            controls={false}
            maxLength={4}
            ref={input2Ref}
            onChange={(e) => handlePersonalIDChange(e!.toString(), 1)}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          />
        </Form.Item>
      </Col>
      <Col
        span={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "34px",
        }}
      >
        -
      </Col>
      <Col span={4}>
        <Form.Item name="personalID3" rules={[{ required: true, message: "" }]}>
          <InputNumber
            controls={false}
            maxLength={5}
            ref={input3Ref}
            onChange={(e) => handlePersonalIDChange(e!.toString(), 2)}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          />
        </Form.Item>
      </Col>
      <Col
        span={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "34px",
        }}
      >
        -
      </Col>
      <Col span={3}>
        <Form.Item name="personalID4" rules={[{ required: true, message: "" }]}>
          <InputNumber
            controls={false}
            maxLength={2}
            ref={input4Ref}
            onChange={(e) => handlePersonalIDChange(e!.toString(), 3)}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          />
        </Form.Item>
      </Col>
      <Col
        span={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "34px",
        }}
      >
        -
      </Col>
      <Col span={2}>
        <Form.Item name="personalID5" rules={[{ required: true, message: "" }]}>
          <InputNumber
            controls={false}
            maxLength={1}
            ref={input5Ref}
            onChange={(e) => handlePersonalIDChange(e!.toString(), 4)}
            style={{
              width: "100%",
              textAlign: "center",
            }}
          />
        </Form.Item>
      </Col>
    </Row>
  );
}

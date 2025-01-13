"use client";

import Link from "next/link";
import { Menu } from "antd";
import { useState } from "react";
import i18next from "../i18n";

const Navigation = () => {
  const [lang, setLang] = useState("en");
  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang); // Change the language to the selected one
    setLang(lang);
  };
  return (
    <Menu mode="horizontal" theme="light">
      <Menu.Item key="home">
        <Link href="/">หน้าแรก</Link>
      </Menu.Item>
      <Menu.Item key="shape-control">
        <Link href="/shape-control">ฟีเจอร์ควบคุมรูปทรง</Link>
      </Menu.Item>
      <Menu.Item key="person-management">
        <Link href="/person-management">การจัดการข้อมูลบุคคล</Link>
      </Menu.Item>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("th")}>Thai</button>
    </Menu>
  );
};

export default Navigation;

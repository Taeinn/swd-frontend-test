"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import i18next from "../i18n";
import { Card } from "antd";
import ShapeControl from "@/components/ShapeControl";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { translate } from "@/utils/translation";

export default function Home() {
  const router = useRouter();
  const locale = useSelector((state: RootState) => state.language.locale);
  const cardData = [
    {
      title: "titleTest1",
      description: "descriptionTest1",
      navigation: "/frontend-react",
    },
    {
      title: "titleTest2",
      description: "descriptionTest2",
      navigation: "",
    },
    {
      title: "titleTest3",
      description: "descriptionTest3",
      navigation: "/spa",
    },
  ];
  return (
    // <div className={styles.page}>
    <div
      style={{
        display: "flex",
        gap: "20px",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          style={{
            padding: "0px",
            width: 300,
            cursor: "pointer",
            borderRadius: 0,
            marginBottom: "20vh",
          }}
          onClick={() => router.push(card.navigation)}
        >
          <p style={{ paddingBottom: "40px", fontWeight: "bold" }}>
            {translate(card.title, locale)}
          </p>
          <p>{translate(card.description, locale)}</p>{" "}
          {/* Dynamic description translation */}
        </Card>
      ))}
    </div>
  );
}

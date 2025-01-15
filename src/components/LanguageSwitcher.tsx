"use client";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/slices/languageSlice";
import { RootState } from "../store/store";
import { translate } from "@/utils/translation";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.language.locale);

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        padding: "20px 10px 10px 10px",
      }}
    >
      <Select
        value={locale}
        style={{ width: 75, borderRadius: 0 }}
        // dropdownStyle={{ borderRadius: 0 }}
        onChange={(e) => changeLanguage(e)}
        options={[
          { value: "en", label: translate("en", locale) },
          { value: "th", label: translate("th", locale) },
        ]}
      />
    </div>
  );
};

export default LanguageSwitcher;

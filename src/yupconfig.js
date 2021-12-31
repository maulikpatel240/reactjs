// import { setLocale } from "yup";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const YupLocale = () => {
  const { t } = useTranslation();

  Yup.setLocale({
    mixed: {
      default: t("mixed.default"),
      required: t("mixed.required"),
      oneOf: t("mixed.oneOf"),
      notOneOf: t("mixed.notOneOf"),
      defined: t("mixed.defined"),
      string: {
        length: t("mixed.string.length"),
        min: t("mixed.string.min"),
        max: t("mixed.string.max"),
        matches: t('mixed.string.matches'),
        email: t("mixed.string.email"),
        url: t("mixed.string.url"),
        uuid: t("mixed.string.uuid"),
        trim: t("mixed.string.trim"),
        lowercase: t("mixed.string.lowercase"),
        uppercase: t("mixed.string.uppercase"),
      },
      number: {
        min: t("mixed.number.min"),
        max: t("mixed.number.max"),
        lessThan: t("mixed.number.lessThan"),
        moreThan: t("mixed.number.moreThan"),
        positive: t("mixed.number.positive"),
        negative: t("mixed.number.negative"),
        integer: t("mixed.number.integer"),
      },
      date: {
        min: t("mixed.date.min"),
        max: t("mixed.date.max"),
      },
      boolean: {
        isValue: t("mixed.boolean.isValue"),
      },
      object: {
        noUnknown: t("mixed.object.noUnknown"),
      },
      array: {
        min: t("mixed.array.min"),
        max: t("mixed.array.max"),
        length: t("mixed.array.length"),
      },
    },
  });
};

export default YupLocale;

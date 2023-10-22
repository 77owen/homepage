import { useTranslation } from "react-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();
  const { widget } = service;

  const { data: userInfo, error: userError } = useWidgetAPI(widget);

  if (userError) {
    return <Container service={service} error={userError} />;
  }

  if (!userInfo) {
    return (
      <Container service={service}>
        <Block label="Account" />
        <Block label="Days Left" />
        <Block label="Points" />
      </Container>
    );
  }

  const acccountType = userInfo.type === "premium" ? "Premium" : "Free";
  return (
    <Container service={service}>
      <Block label="Account" value={acccountType} />
      <Block label="Days Left" value={t("common.number", { value: Math.ceil(userInfo.premium / (3600 * 24)) })} />
      <Block label="Points" value={t("common.number", { value: userInfo.points })} />
    </Container>
  );
}

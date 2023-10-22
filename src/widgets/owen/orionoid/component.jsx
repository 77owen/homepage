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
        <Block label="Usage" />
      </Container>
    );
  }

  const acccountType = userInfo.data.subscription.package.type;
  const expirationDate = new Date(userInfo.data.subscription.time.expiration * 1000); // expiration date comes as a UNIX timestamp
  const date = new Date();
  const timeLeft = Math.ceil((expirationDate.getTime() - date.getTime()) / (1000 * 3600 * 24)); // convert to days
  const usage = `${Math.trunc(
    (userInfo.data.requests.streams.daily.used / userInfo.data.requests.streams.daily.limit) * 100,
  )} %`; // get percentage
  return (
    <Container service={service}>
      <Block label="Account" value={acccountType.charAt(0).toUpperCase() + acccountType.slice(1)} />
      <Block label="Days Left" value={t("common.number", { value: timeLeft })} />
      <Block label="Usage" value={usage} />
    </Container>
  );

}

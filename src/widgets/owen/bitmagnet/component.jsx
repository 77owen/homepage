import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { widget } = service;

  const { data: userInfo, error: userError } = useWidgetAPI(widget);

  if (userError) {
    return <Container service={service} error={userError} />;
  }

  if (!userInfo) {
    return (
      <Container service={service}>
        <Block label="Version" />
        <Block label="Allocated Bytes" />
      </Container>
    );
  }

  return (
    <Container service={service}>
      <Block label="Version" value={userInfo.component.version} />
      <Block label="Allocated Bytes" value={userInfo.system.alloc_bytes} />
    </Container>
  );
}

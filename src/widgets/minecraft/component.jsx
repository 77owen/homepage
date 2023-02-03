import Block from "components/services/widget/block";
import Container from "components/services/widget/container";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
    const { widget } = service;

    const { data: minecraftData} = useWidgetAPI(widget);
    try{
    return (
        <Container service={service}>
          <Block label="PLAYERS" value={minecraftData.players.online} />
          <Block label="VERSION" value={minecraftData.version} />
        </Container>
      );
 } catch(error){
    return (
        <Container service={service}>
          <Block value="OFFLINE" />
        </Container>
      );
 }

}
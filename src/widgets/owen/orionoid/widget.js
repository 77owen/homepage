import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "https://api.orionoid.com/?keyapp={keyapp}&keyuser={keyuser}&mode=user&action=retrieve",
  proxyHandler: genericProxyHandler,
};

export default widget;

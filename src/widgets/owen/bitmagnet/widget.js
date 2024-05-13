import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "{endpoint}/status",
  proxyHandler: genericProxyHandler,
};

export default widget;

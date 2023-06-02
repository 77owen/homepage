import genericProxyHandler from "utils/proxy/handlers/generic";

const widget = {
  api: "https://api.real-debrid.com/rest/1.0/user?auth_token={key}",
  proxyHandler: genericProxyHandler,
};

export default widget;

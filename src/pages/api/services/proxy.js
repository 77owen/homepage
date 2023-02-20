import { formatApiCall } from "utils/proxy/api-helpers";
import createLogger from "utils/logger";
import genericProxyHandler from "utils/proxy/handlers/generic";
import widgets from "widgets/widgets";

const logger = createLogger("servicesProxy");

export default async function handler(req, res) {
  try {
    const { type } = req.query;
    const widget = widgets[type];

    if (!widget) {
      logger.debug("Unknown proxy service type: %s", type);
      return res.status(403).json({ error: "Unkown proxy service type" });
    }

    const serviceProxyHandler = widget.proxyHandler || genericProxyHandler;

    if (serviceProxyHandler instanceof Function) {
      // map opaque endpoints to their actual endpoint
      if (widget?.mappings) {
        const mapping = widget?.mappings?.[req.query.endpoint];
        const mappingParams = mapping?.params;
        const map = mapping?.map;
        const endpoint = mapping?.endpoint;
        const endpointProxy = mapping?.proxyHandler || serviceProxyHandler;

        if (!endpoint) {
          logger.debug("Unsupported service endpoint: %s", type);
          return res.status(403).json({ error: "Unsupported service endpoint" });
        }

        req.method = mapping?.method || "GET";
        if (mapping?.body) req.body = mapping?.body;
        req.query.endpoint = endpoint;

        if (req.query.segments) {
          const segments = JSON.parse(req.query.segments);
          req.query.endpoint = formatApiCall(endpoint, segments);
        }

        if (req.query.query && mappingParams) {
          const queryParams = JSON.parse(req.query.query);
          const query = new URLSearchParams(mappingParams.map((p) => [p, queryParams[p]]));
          req.query.endpoint = `${req.query.endpoint}?${query}`;
        }

        if (endpointProxy instanceof Function) {
          return endpointProxy(req, res, map);
        }

        return serviceProxyHandler(req, res, map);
      }

      return serviceProxyHandler(req, res);
    }

    logger.debug("Unknown proxy service type: %s", type);
    return res.status(403).json({ error: "Unkown proxy service type" });
  } catch (ex) {
    logger.error(ex);
    return res.status(500).send({ error: "Unexpected error" });
  }
}

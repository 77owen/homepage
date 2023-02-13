import dynamic from "next/dynamic";

const components = {
  adguard: dynamic(() => import("./adguard/component")),
  authentik: dynamic(() => import("./authentik/component")),
  autobrr: dynamic(() => import("./autobrr/component")),
  bazarr: dynamic(() => import("./bazarr/component")),
  changedetectionio: dynamic(() => import("./changedetectionio/component")),
  cloudflared: dynamic(() => import("./cloudflared/component")),
  coinmarketcap: dynamic(() => import("./coinmarketcap/component")),
  deluge: dynamic(() => import("./deluge/component")),
  diskstation: dynamic(() => import("./diskstation/component")),
  downloadstation: dynamic(() => import("./downloadstation/component")),
  docker: dynamic(() => import("./docker/component")),
  kubernetes: dynamic(() => import("./kubernetes/component")),
  emby: dynamic(() => import("./emby/component")),
  fileflows: dynamic(() => import("./fileflows/component")),
  flood: dynamic(() => import("./flood/component")),
  gluetun: dynamic(() => import("./gluetun/component")),
  gotify: dynamic(() => import("./gotify/component")),
  hdhomerun: dynamic(() => import("./hdhomerun/component")),
  homebridge: dynamic(() => import("./homebridge/component")),
  jackett: dynamic(() => import("./jackett/component")),
  jellyfin: dynamic(() => import("./emby/component")),
  jellyseerr: dynamic(() => import("./jellyseerr/component")),
  komga: dynamic(() => import("./komga/component")),
  lidarr: dynamic(() => import("./lidarr/component")),
  mastodon: dynamic(() => import("./mastodon/component")),
  medusa: dynamic(() => import("./medusa/component")),
  mikrotik: dynamic(() => import("./mikrotik/component")),
  minecraft: dynamic(() => import("./minecraft/component")),
  miniflux: dynamic(() => import("./miniflux/component")),
  moonraker: dynamic(() => import("./moonraker/component")),
  mylar: dynamic(() => import("./mylar/component")),
  navidrome: dynamic(() => import("./navidrome/component")),
  nextdns: dynamic(() => import("./nextdns/component")),
  npm: dynamic(() => import("./npm/component")),
  nzbget: dynamic(() => import("./nzbget/component")),
  octoprint: dynamic(() => import("./octoprint/component")),
  omada: dynamic(() => import("./omada/component")),
  ombi: dynamic(() => import("./ombi/component")),
  opnsense: dynamic(() => import("./opnsense/component")),
  overseerr: dynamic(() => import("./overseerr/component")),
  paperlessngx: dynamic(() => import("./paperlessngx/component")),
  photoprism: dynamic(() => import("./photoprism/component")),
  proxmoxbackupserver: dynamic(() => import("./proxmoxbackupserver/component")),
  pihole: dynamic(() => import("./pihole/component")),
  plex: dynamic(() => import("./plex/component")),
  portainer: dynamic(() => import("./portainer/component")),
  prowlarr: dynamic(() => import("./prowlarr/component")),
  proxmox: dynamic(() => import("./proxmox/component")),
  pyload: dynamic(() => import("./pyload/component")),
  qbittorrent: dynamic(() => import("./qbittorrent/component")),
  radarr: dynamic(() => import("./radarr/component")),
  readarr: dynamic(() => import("./readarr/component")),
  rutorrent: dynamic(() => import("./rutorrent/component")),
  sabnzbd: dynamic(() => import("./sabnzbd/component")),
  scrutiny: dynamic(() => import("./scrutiny/component")),
  sonarr: dynamic(() => import("./sonarr/component")),
  speedtest: dynamic(() => import("./speedtest/component")),
  strelaysrv: dynamic(() => import("./strelaysrv/component")),
  tautulli: dynamic(() => import("./tautulli/component")),
  tdarr: dynamic(() => import("./tdarr/component")),
  traefik: dynamic(() => import("./traefik/component")),
  transmission: dynamic(() => import("./transmission/component")),
  tubearchivist: dynamic(() => import("./tubearchivist/component")),
  truenas: dynamic(() => import("./truenas/component")),
  unifi: dynamic(() => import("./unifi/component")),
  watchtower: dynamic(() => import("./watchtower/component")),
  xteve: dynamic(() => import("./xteve/component")),
  immich: dynamic(() => import("./immich/component")),
  uptimekuma: dynamic(() => import("./uptimekuma/component")),
};

export default components;
import Stremio from 'stremio-addons/index-browser';

const CINEMETA_ENDPOINT = "http://cinemeta.strem.io/stremioget/stremio/v1";
const CHANNELS_ENDPOINT = "http://channels.strem.io/stremioget/stremio/v1";
const FILMON_ENDPOINT = "http://filmon.strem.io/stremioget/stremio/v1";

const stremioImdb = (function () {

  const addons = new Stremio.Client();

  addons.add(CINEMETA_ENDPOINT);
  addons.add(FILMON_ENDPOINT);

  return addons;
} ());

const stremioChannels = (function () {

  const addons = new Stremio.Client();

  addons.add(CHANNELS_ENDPOINT);

  return addons;
} ());

export default {
  stremioImdb,
  stremioChannels
};


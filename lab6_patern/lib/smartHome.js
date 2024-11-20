class SettingsManager {
  constructor() {
    if (SettingsManager.instance) {
      return SettingsManager.instance;
    }
    this.settings = {};
    SettingsManager.instance = this;
  }

  setSetting(key, value) {
    this.settings[key] = value;
  }

  getSetting(key) {
    return this.settings[key];
  }
}

class SmartHomeFacade {
  constructor() {
    this.lighting = null;
    this.security = null;
    this.climate = null;
    this.entertainment = null;
  }

  activateSecuritySystem() {
    console.log("Security system activated.");
  }

  setClimateControl(temperature) {
    console.log(`Climate control set to ${temperature}°C.`);
  }

  controlLighting(mode) {
    console.log(`Lighting set to ${mode}.`);
  }
}

module.exports = { SettingsManager, SmartHomeFacade };

import currencies from "./currencies";
import masker from "./masker";

const Currency = {
  install(Vue, options = {}) {
    const defaultConfig = {
      code: "",
      symbol: "$",
      thousand: ",",
      precision: 2,
      decimal: ".",
      symbolFirst: true,
      symbolSeparator: " "
    };

    let configs = Object.assign(defaultConfig, options);

    const currencyFilter = (value, params = {}) => {
      const customConfigs = {};
      Object.assign(customConfigs, configs, params);
      return masker(value, customConfigs);
    };

    Vue.filter("currency", currencyFilter);

    Vue.prototype.$currency = Vue.currency = {
      setConfig: code => {
        const options = typeof code === "object" ? code : currencies[code];

        configs = Object.assign(defaultConfig, options);
      },
      getConfig: () => configs
    };
  }
};

export default Currency;

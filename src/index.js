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
      configs = Object.assign(params, configs);
      return masker(value, configs);
    };

    Vue.filter("currency", currencyFilter);

    Vue.prototype.$currency = Vue.currency = {
      setConfig: code => {
        const options = { code, ...currencies[code] };
        configs = Object.assign(defaultConfig, options);
      },
      getConfig: () => configs
    };
  }
};

export default Currency;

import { shallowMount, createLocalVue } from "@vue/test-utils";
import Currency from "../src/index.js";
import Dummy from "./Dummy.vue";

describe("CurrencyPlugin", () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(Currency);

    wrapper = shallowMount(Dummy, {
      localVue
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("tests with default settings", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.setData({ value: 12.34 });
    expect(valueParagraph.text()).toEqual("$ 12.34");
  });

  it("tests negative values", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.setData({ value: -12.34 });
    expect(valueParagraph.text()).toEqual("-$ 12.34");
  });

  it("tests values with thousand separators", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.setData({ value: 12345.67 });
    expect(valueParagraph.text()).toEqual("$ 12,345.67");
  });

  it("tests value precision", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.setData({ value: 12345.679 });
    expect(valueParagraph.text()).toEqual("$ 12,345.68");

    wrapper.setData({ value: 12345.675 });
    expect(valueParagraph.text()).toEqual("$ 12,345.67");
  });

  it("tests currency changes on the fly", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.vm.$currency.setConfig("AED");
    wrapper.setData({ value: 12345.67 });
    expect(valueParagraph.text()).toEqual("AED 12,345.67");
  });

  it("tests NaN values", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.setData({ value: "text" });
    expect(valueParagraph.text()).toEqual("$ 0.00");
  });

  it("tests decimal separator", () => {
    const valueParagraph = wrapper.find("[data-test='default']");

    wrapper.vm.$currency.setConfig("BRL");
    wrapper.setData({ value: 12345.67 });
    expect(valueParagraph.text()).toEqual("R$ 12.345,67");
  });

  it("should accept empty symbol", () => {
    const valueParagraph = wrapper.find("[data-test='noSymbol']");

    wrapper.vm.$currency.setConfig("BRL");
    wrapper.setData({ value: 12345.67 });
    expect(valueParagraph.text()).toEqual("12.345,67");
  });

  it("should accept precision 0", () => {
    const valueParagraph = wrapper.find("[data-test='noPrecision']");

    wrapper.vm.$currency.setConfig("BRL");
    wrapper.setData({ value: 125.67 });
    expect(valueParagraph.text()).toEqual("R$ 126");
  });
});

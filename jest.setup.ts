import "@testing-library/jest-dom";

// https://github.com/jsdom/jsdom/issues/2524
import { TextEncoder } from "util";
// eslint-disable-next-line no-undef
global.TextEncoder = TextEncoder;

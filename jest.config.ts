/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.{ts,tsx}",
    "!src/breakpoints.ts",
    "!src/test-utils.tsx",
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["src/index.ts"],
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {},
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default config;

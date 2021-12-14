/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  //  verbose: true,
  setupFilesAfterEnv: ["jest-extended/all"],
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: './tsconfig.json'
    }
  }
};
export default config;


// module.exports = {
//     transform: {
//         "^.+\\.tsx?$": "ts-jest",
//     },
//     testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
//     testPathIgnorePatterns: ["/dist/", "/lib/", "/node_modules/"],
//     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// //    collectCoverage: true,
//     setupFilesAfterEnv: ["jest-extended"],
// };
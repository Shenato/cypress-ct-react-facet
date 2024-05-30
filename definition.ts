import { defineComponentFramework } from "cypress";

const reactFacetDep: Cypress.CypressComponentDependency = {
  // Unique, semantic identifier.
  type: "@mojang/react-facet",

  // Human readable name.
  name: "React Facet",

  // Package name install from `npm`.
  package: "@mojang/react-facet",

  /**
   * Similar to package, but can include a version or tag.
   * Used during setup to generate an install command for users.
   * Eg: `solid-js@next`
   */
  installer: "@mojang/react-facet",

  // Human readable description.
  description: "React facetified",

  // Minimum supported version.
  minVersion: "^0.0.13",
};

/**
 * The definition.
 */
export default defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: "@mojang/cypress-ct-react-facet",

  /**
   * The label that shows up when configuring Component Testing
   * for the first time.
   */
  name: "React Facet",

  /**
   * Supported bundlers. Can be "webpack" and/or "vite".
   */
  supportedBundlers: ["webpack"],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   * In this example, if a module matching `solidDep`
   * is found in the user's project,
   * Solid.js will automatically be selected when configuring Component Testing.
   */
  detectors: [reactFacetDep],

  /**
   * Optionally, some conditional logic, based on whether
   * the user selected Vite or webpack.
   */
  dependencies: (bundler) => {
    return [reactFacetDep];
  },
});

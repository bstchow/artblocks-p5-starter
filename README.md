## Art Blocks P5 Starter Project
A set of tool configurations to kickstart an Art Blocks project utilizing the p5 library.

- Defines separate development and staging/production environments
  - Art Blocks production/staging
    - Expects to be provided a token hash as a source of randomness
    - Expects p5 to be provided as a module in the window context
  - Development
    - Provides p5 
    - Provides a pseudorandomly generated token hash
- Produces JS bundles for an Art Blocks project's content and [feature calculations](https://docs.artblocks.io/creator-docs/creator-onboarding/readme/features/)

Combines configurations for these tools:
- [Typescript](https://www.typescriptlang.org/)
- The Art Blocks supported version (1.9) of [p5](https://p5js.org/) as of Jan. 2024 according to [a Discord announcement](https://discord.com/channels/411959613370400778/450278286862450701/1192936586531328193)
  - [The Art Blocks docs are currently a little outdated](https://docs.artblocks.io/creator-docs/creator-onboarding/readme/#limited-dependencies)
- [The Art Blocks randomness utils + some extra utils](https://docs.artblocks.io/creator-docs/creator-onboarding/readme/#safely-deriving-randomness-from-the-token-hash) 
- [Webpack](https://webpack.js.org/) for bundling and serving the webapp locally
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks

## Building

### Development
It is useful to have a hot reloading development environment where artists can see the outputs of there work. The webpack.dev.js configuration defines this environment.\
Use `yarn start` to start the development environment.

The development environment injects p5 and pseudorandom number generators.

### Production/Staging
Once an artist is ready to submit, they will want to build their project into a Javascript bundle that the Art Blocks systems can process.
In a production/staging ArtBlocks environment, p5 will automatically be provided and a token hash will automatically be provided.

`yarn build` produces a bundle.js file at dist/bundle.js without minification\
`yarn build-min` produces a bundle.js file at dist/bundle.js with minification\
\
`yarn build-features` produces a calculateFeatures.js file at dist/calculateFeatures.js without minification\
`yarn build-features-min` produces a calculateFeatures.js file at dist/calculateFeatures.js with minification\


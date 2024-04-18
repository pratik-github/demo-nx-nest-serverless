# DEMO-NX-NEST-SERVERLESS

### prerequisites

use node v20.x
configure aws cli credentials

## Steps to reproduce

- npm install
- npx nx deploy graphql

// This will deploy application on aws lambda but getting error: `Runtime.ImportModuleError: Error: Cannot find module 'main'`

## Resources / References:

- https://docs.nestjs.com/faq/serverless
- https://nx.dev/recipes/webpack/webpack-config-setup

// steps used for initial setup:
`npx create-nx-workspace nd-server --preset=nest --bundler=webpack`

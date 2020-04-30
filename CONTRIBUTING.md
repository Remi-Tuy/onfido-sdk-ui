## Contributors guidelines
 
### Getting started
To start contributing to the Onfido Web SDK, clone this repository and run the following commands:
 
- `npm install` to install the project dependencies
- `npm run dev` to generate the build and run the dev server
 
The SDK will be running on https://localhost:8080.
 
Note: the SDK runs using `https`. You will see an error in your browser if you try to use `http`.
 
You can also run it using Docker and `docker-compose` by using the following command: `docker-compose -f docker-compose.dev.yml`.
 
### Testing
The Web SDK has a large coverage of UI tests. To set up your environment, please refer to the [testing guidelines](./test/TESTING_GUIDELINES.md).
Once your environment is ready, you can run UI tests using this command `npm run build:test && npm run travis && npm run test:ui`.
The Web SDK has partial coverage of unit tests that can be executed with `npm run test`.
You can also run a type checker and linter errors by running `npm run check`.
 
### Contributing
When creating a new branch, we use the following convention `{task-type}/{task-description}-{ticket-number}`.
The most used task types are `feature`, `fix` or `improvement`. The ticket number is optional and is only expected from internal contributors.
 
For more details, check out the [pull request checklist](./.github/PULL_REQUEST_TEMPLATE.md).
 
In order to get a Pull Request approved, you should get an approval from 2 Onfido team members. All the Pull Request checks must pass.
 
The current Pull Request checks are
- Bundle size - to make sure that your contribution is not increasing the size of the SDK
- Travis CI - Our continuous integration tool.
 
At build time, we run the following tests:
- UI
- Unit
- Type checker
- Linter
- Dependencies vulnerability detection
 
All of the above must be green in order for the build to pass.
 
### Internationalization
 
The SDK supports several languages. To pull the translations from our localisation service run `npm run lokalise:download`.
Every time you add, remove or edit a translation key or value, please remember to update the MIGRATION file with the relevant key, so that the integrators that use language customisation can keep track of language changes. These changes will result in a MINOR version release.
 
### Accessibility
The Onfido SDK team values accessibility. Please make sure that your code is accessible 
by following the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) and by adding [automated accessibility tests](test/utils/accessibility.js) for any new screen.

### Private environment variables

In order to run the Web SDK locally as an internal contributor you will need the following environment variables:
- `$LOKALISE_TOKEN`
- `$LOKILISE_PROJECT_ID`
- `$SDK_TOKEN_FACTORY_SECRET`

Please speak to a member of the Onfido SDK team to obtain them.

### Troubleshooting
 
If you are testing on Internet Explorer, you might see errors when opening localhost due to bugs in `webpack-dev-server` dependencies. As a workaround you can run `npm run build && npm run travis` instead of `npm run dev`.
 
Thank you so much for contributing! :heart: :heart: :heart:
 
The Onfido SDK Team
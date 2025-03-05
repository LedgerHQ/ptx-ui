# @ledgerhq/ptx-ui

[![storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://main--67c58c8d579862e4290ccbfe.chromatic.com) [![chromatic](https://img.shields.io/badge/chromatic-grey?logo=chromatic&labelColor=%232E3438)](https://www.chromatic.com/library?appId=67c58c8d579862e4290ccbfe)

This package provides an internal React component library for PTX live apps.

It can serve as a layer between [`@ledgerhq/react-ui`](https://www.npmjs.com/package/@ledgerhq/react-ui) and the live apps so it's important to note that the components in this lib may rely on being wrapped (by the consumer) in `<StyleProvider />` from `@ledgerhq/react-ui` in order to have access to the theme.

## Installation

```bash
npm install @ledgerhq/ptx-ui
```

## Usage example

```JSX
import { ExampleComponent } from '@ledgerhq/ptx-ui';

const Page = () => {
  return (
    <>
      ...
      <ExampleComponent text="some text" />
      ...
    </>
  )
}
```

## Contributing

Develop directly in Storybook where you can easily switch between themes and breakpoints:

```bash
pnpm storybook
```

Test local changes within live apps before releasing by running the [link-pkg](./link-pkg.sh) script to create and link a package bundle:

```bash
pnpm link-pkg

# Give the file permission to execute if needed:
chmod +x link-pkg.sh
```

**Pipeline checks:**

- New components and changes should be covered with **Jest** tests, with at least 80% code coverage.

- **SonarCloud** analysis will highlight issues with code and test coverage. Some issues may be minor and will allow the Quality Gate to pass but it's good practice to fix those as they show up before merging.

- **Chromatic** publishes the Storybook and runs visual regression tests requiring any changes to be reviewed and approved. The PR Storybook and test build can be accessed through the related Github checks.

- Accessibility tests based on standard WCAG guidelines using **@storybook/addon-a11y**

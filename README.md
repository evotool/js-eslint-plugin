# @evojs/eslint-plugin

Plugin for eslint.

## Setup

### ECMAScript

```json
{
  "ignorePatterns": ["public/", "dist/", "node_modules/"],
  "root": true,
  "env": {
    "node": true
  },
  "plugins": ["@evojs"],
  "extends": ["plugin:@evojs/ecmascript"],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "rules": {},
  "overrides": []
}
```

### TypeScript

You also need to install `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`:

```sh
npm install --save-dev \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin
```

```json
{
  "ignorePatterns": ["public/", "dist/", "node_modules/"],
  "root": true,
  "env": {
    "node": true
  },
  "plugins": ["@evojs"],
  "extends": ["plugin:@evojs/ecmascript"],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "rules": {},
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "plugins": ["@evojs"],
      "extends": ["plugin:@evojs/typescript"],
      "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
      },
      "rules": {}
    }
  ]
}
```

### React + TypeScript

You also need to install `@typescript-eslint/parser`, `@typescript-eslint/eslint-plugin`, `eslint-plugin-react`, `eslint-plugin-react-hooks`:

```sh
npm install --save-dev \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

```json
{
  "ignorePatterns": ["public/", "dist/", "node_modules/"],
  "root": true,
  "env": {
    "node": true
  },
  "plugins": ["@evojs"],
  "extends": ["plugin:@evojs/ecmascript", "plugin:@evojs/react"],
  "parserOptions": {
    "ecmaVersion": 2021
  },
  "rules": {},
  "overrides": [
    {
      "files": ["**/*.{ts,tsx}"],
      "plugins": ["@evojs"],
      "extends": ["plugin:@evojs/typescript"],
      "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
      },
      "rules": {}
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

## Features

1. All in one (ecmascript, react, typescript)
2. Very convenient and strict linter configuration

## License

Licensed under MIT license.

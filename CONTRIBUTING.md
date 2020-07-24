# Introduction and prerequisites

freight-trust uses lerna to manage multi-package repositories. Each freight-trust/carbon module is defined in its own npm package in the `packages/` directory.

The entry point of these modules is `@freight-trust/carbon-*`.

Install lerna:

```shell
$ npm install -g lerna
$ npm install -g yarn
```



### Write your branding module / stlying component

The setup is done, you can now write your command and organize your module as you want in: `packages/`. You can have a look at `packages/` which is a good starting example to follow.
# angular-webpack

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/nkbt/help)

Angular + Webpack build with Karma tests support

### Install

```sh
git clone git@github.com:packetloop/angular-webpack.git
cd angular-webpack
npm install
npm start
```

Then 

```sh
open http://localhost:8080
```

To run tests

```sh
npm test
```

Coverage

```sh
open ./coverage/index.html
```


### Features, TODO

- [x] Build basic Angular app with webpack
- [x] Couple of dependent modules `Hello` and `Blah`
- [x] Controller, directive and service for Hello module
- [x] Tests for `HelloService`, mocking `HelloHelloService` and `BlahService`
- [x] Tests for `<hello>` directive mocking `HelloService`
- [x] Tests for `HelloController` mocking `HelloService`
- [x] `npm test` script with CI-friendly karma + webpack run
- [x] Separate HTML template for `<hello>` + webpack build
- [x] Separate CSS for `<hello>` + webpack build
- [x] Embed images
- [x] Coverage report with full ES6 support
- [x] Multiple pages to load additional components asynchronously
- [x] ESLint `npm run lint`
- [x] ESLint loader for compile-time validation
- [x] FIX dynamic Angular modules loading (fixed in #2)
- [x] Allow to use HAML templates
- [x] BabelJS and full ES6/7 support
- [x] Running tests in PhantomJS


### Demo build

[http://packetloop.github.io/angular-webpack/dest/](http://packetloop.github.io/angular-webpack/dest/)

### Coverage

[http://packetloop.github.io/angular-webpack/coverage/](http://packetloop.github.io/angular-webpack/coverage/)

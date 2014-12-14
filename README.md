# angular-webpack

Angular + Webpack build with Karma tests support

### Install

```
git clone git@github.com:packetloop/angular-webpack.git
cd angular-webpack
npm install
npm run build
```

Then open `index.html`

To run tests
```
npm test
```

### TODO

- [x] Build basic Angular app with webpack
- [x] Couple of dependent modules `Hello` and `Blah`
- [x] Controller, directive and service for Hello module
- [x] Tests for `HelloService`, mocking `HelloHelloService` and `BlahService`
- [x] Tests for `<hello>` directive mocking `HelloService`
- [x] Tests for `HelloController` mocking `HelloService`
- [x] `npm test` script with CI-friendly karma + webpack run
- [x] Separate HTML template for `<hello>` + webpack build
- [x] Separate CSS for `<hello>` + webpack build
- [ ] Coverage report

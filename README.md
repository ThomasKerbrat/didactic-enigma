> Angular library to demonstrate the DemoLibModule is not a NgModule error.

Steps to reproduce:

1. Checkout the repository
2. `cd my-demo-lib` and `npm install`
3. `cd ../my-demo-app` and `npm install`
4. `npm start`

The following error should appear:
(I'm most concerned with the `ERROR in Error encountered resolving symbol values statically.` and not the resolution error)

```
$ ng serve

** NG Live Development Server is running on http://localhost:4200 **
Hash: 03504df24a3b3aa04e2c                                                              
Time: 6731ms
chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 160 kB {4} [initial] [rendered]
chunk    {1} main.bundle.js, main.bundle.js.map (main) 3.69 kB {3} [initial] [rendered]
chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 9.77 kB {4} [initial] [rendered]
chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.4 MB [initial] [rendered]
chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry] [rendered]

ERROR in Error encountered resolving symbol values statically. Calling function 'ɵmakeDecorator', function calls are not supported. Consider replacing the function or lambda with a reference to an exported function, resolving symbol NgModule in /home/tkerbrat/Development/QuodFinancial/test/is-not-an-ng-module/my-demo-app/node_modules/my-demo-lib/node_modules/@angular/core/core.d.ts, resolving symbol DemoLibModule in /home/tkerbrat/Development/QuodFinancial/test/is-not-an-ng-module/my-demo-app/node_modules/my-demo-lib/dist/demo-lib.module.d.ts, resolving symbol DemoLibModule in /home/tkerbrat/Development/QuodFinancial/test/is-not-an-ng-module/my-demo-app/node_modules/my-demo-lib/dist/demo-lib.module.d.ts

ERROR in ./src/app/app.module.ts
Module not found: Error: Can't resolve 'my-demo-lib' in '/home/tkerbrat/Development/QuodFinancial/test/is-not-an-ng-module/my-demo-app/src/app'
 @ ./src/app/app.module.ts 11:0-44
 @ ./src/main.ts
 @ multi webpack-dev-server/client?http://localhost:4200 ./src/main.ts
webpack: Failed to compile.
webpack: Compiling...
Hash: 03504df24a3b3aa04e2c             
Time: 1614ms
chunk    {0} polyfills.bundle.js, polyfills.bundle.js.map (polyfills) 160 kB {4} [initial]
chunk    {1} main.bundle.js, main.bundle.js.map (main) 3.69 kB {3} [initial]
chunk    {2} styles.bundle.js, styles.bundle.js.map (styles) 9.77 kB {4} [initial]
chunk    {3} vendor.bundle.js, vendor.bundle.js.map (vendor) 2.4 MB [initial]
chunk    {4} inline.bundle.js, inline.bundle.js.map (inline) 0 bytes [entry]

ERROR in ./src/app/app.module.ts
Module not found: Error: Can't resolve 'my-demo-lib' in '/home/tkerbrat/Development/QuodFinancial/test/is-not-an-ng-module/my-demo-app/src/app'
 @ ./src/app/app.module.ts 11:0-44
 @ ./src/main.ts
 @ multi webpack-dev-server/client?http://localhost:4200 ./src/main.ts
webpack: Failed to compile.
```

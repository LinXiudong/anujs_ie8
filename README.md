react-webpack-boilerplate
-----------------------------------------
A basic Webpack boilerplate with React / anu.

基于 https://github.com/sitorhy/react-webpack-boilerplate 项目做了一点修改，使用react/anujs兼容ie8

## Usage
- Install:
    - npm: `npm install`
    - yarn: `yarn install`

* Run dev server:
    `npm run dev` or `npm run start`

* Build:
    `npm run build`

* Run in IE 8
    + step 1:
        `npm run watch`
    
    + step 2:
        another session, use with npm 'http-server'.

        install 'http-server' first : `npm install http-server -g`

        then run:

        `http-server ./dist -p 8086`

        visit `http://127.0.0.1:8086/` in IE8.


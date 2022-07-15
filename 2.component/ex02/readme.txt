ex02: Component Styling

1) Inline Styling: 01
2) Normal CSS
    - css-loader options: {module: false}
    - [ex02]$ npm run debug src=01 css-module=false
3) CSS Module 1
    - css-loader options: {module: true}
    - [ex02]$ npm run debug src =01 (css-module=true)
4) CSS Module 2
    - css-loader options: {module: true}
    - [ex02]$ npm run debug src =01 (css-module=true)
5)
6)
7)


=============================================================
1. 설치
    [ex08]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    [ex08]$ npm i react react-dom prop-types

2. 설정
babel.config.json
webpack.config.js

3. npm scripting

4. 실행
    [ex08]$ npm run debug src=(01|02|03|04|05|06|07|08)
            npm run debug src=01
    [ex08]$ npx webpack serve --progress --env //src=01
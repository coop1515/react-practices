ex04: State *********

01. 기본 개념
    1) State
    2) 예제 src/01
02. 제어 컴포넌트
    4) 제어 컴포넌트: 예제 src/02
    5) 비제어 컴포넌트: 예제 src/03
03. 상태 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
    예제: emaillist
04.


=============================================================
1. 설치
    [ex03]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    [ex03]$ npm i react react-dom prop-types

2. 설정
babel.config.json
webpack.config.js

3. npm scripting

4. 실행
    [ex03]$ npm run debug src=(01|02|03|04|05|06|07|08)
            npm run debug src=01
    [ex03]$ npx webpack serve --progress --env //src=01
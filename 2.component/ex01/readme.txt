ex01: Property(props)
1) 컴포넌트의 데이터
2) 부모에서 자식으로 전달한다.
    - Component Communication(컴포넌트간의 통신), Data Flow
    - Top -> Down
3) 자식 컴포넌트에서 변경 불가
4) 부모가 소유하는 데이터
01. FoodList: 클래스 컴포넌트
02. FoodList: Data Flow(Top -> Down): 클래스 컴포넌트
03. FoodList: Data Flow(Top -> Down): 함수 컴포넌트
04. Property Validation


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
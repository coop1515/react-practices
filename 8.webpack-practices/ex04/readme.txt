ex04: CSS Module 번들링하기

1. 설치 패키지
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

2. css Loader 설정(webpack.config.js)
    module:{
        rules:[{
            test: /\.css$/i, //.css로 끝나는 모든 것. i = ignore
            use:['style-loader','css-loader']
        }]
    }

3. 개발 서버 실행
[ex04]$ npm start
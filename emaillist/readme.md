# React Practices - Integration(개발통합환경)
## emaillist
    - 개발통합 환경 설정(with Spring Boot BE)
    - Backend: APIs (jar 배포)
    - Frontend: React(SPA)
    - AJAX: fetch API

#### Configuration
1.  Application(Projcet) 구조
<pre>
/emaillist
    |--- /backend
    |       |--- src
    |       |--- pom.xml
    |--- /frontend
    |       |--- /config
    |       |       |--- babel.config.json
    |       |       |--- webpack.config.js
    |       |--- /public       
    |       |       |--- favicon.ico
    |       |       |--- index.html
    |       |--- /src
    |       |       |--- assets
    |       |       |       |--- css
    |       |       |       |--- scss
    |       |       |       |--- images
    |       |       |--- component
    |       |       |--- store
    |       |       |--- util
    |       |--- /node_modules
    |       |--- package.json
    |       |--- package-lock.json
    
</pre>
1.  webpack configuration
2.  babel configuration
3.  package.json
4.  concurrently
## backend

#### 테스트
eclipse Ctrl+F11 (IDE Run)

#### 빌드
```sh
$ mvn -f kanbanboard/backend clean package
$ mvn -f kanbanboard/backend exec:exec clean package
```
1. 결과: kanbanboard/backend/target/kanbanboard07.jar
2. 실행:
  ```
  $ java -jar kanbanboard/backend/target/kanbanboard07.jar
  $ java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard07.jar

  ```
#### ssh 연결(ssh key 사용하기)
1. key 생성하기
```
$ ssh-keygen -t rsa -b 2048 -m PEM -C "kickscar@gmail.com"
```

2. 생성 확인
  - id_rsa : private key
  - id_rsa.pub : public key

3. 공개키(id_rsa.pub) 서버 설치
```
  # mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
```

4. ssh(client) 연결 테스트
```
$ ssh -i mykey.pem root@서버
```

5. ssh 연결 환경 설정(~/.ssh/environment)
   ```
  # vi ~/.ssh/environment
   ```

   내용
   PATH=

   ```
   # vi /etc/ssh/sshd_config
   ```
   수정
   PermitUserEnvironment yes
  
   ```
   # systemctl restart sshd  
   ```



6. jenkins ssh server 설정
  1) Publish over SSH plugin 설치
  2) Publish over SSH plugin으로 ssh server 등록하기
  3) project 빌드 후 조치(build-post action) 설정
    - proj-apps.jar
    - launch.sh: transfer + execution

7. 

## frontend
#### 설치
``` sh
$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react @babel/plugin-syntax-throw-expressions @babel/plugin-transform-runtime
$ npm i react react-dom prop-types react-addons-update react-router react-router-dom
```

#### 설정
1. config/babel.config.json
2. config/webpack.config.js

#### npm 스크립팅
```json
"scripts": {
    "start": "npx webpack serve --config config/webpack.config.js --progress --mode development",
    "build": "npm install && npx webpack --config config/webpack.config.js -- mode production"
  }
```

#### 테스트
```sh
$ npm start
```

#### 빌드
```sh
$ npm run build
```
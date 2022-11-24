---
date: '2022-06-06'
title: 'Webpack Study Week 2'
categories: ['webpack']
summary: '웹팩 핸드북 읽고 정리하기'
thumbnail: '../../assets/cat.jpg'
draft: false
---

[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/getting-started.html)  
Getting Started, Concepts, Tutorials

---

## 1. 개발 환경 구성과 빌드 과정

### 웹 페이지 자원 구성

아래 명령어로 `package.json` 파일 생성 후 웹팩과 `lodash` 라이브러리 설치

```bash
npm init -y

npm i webpack webpack-cli -D
npm i lodash
```

`index.html` 파일과 `src` 폴더 아래에 `index.js` 생성

```html
<html>
  <head>
    <title>Webpack Demo</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="src/index.js"></script>
  </body>
</html>
```

```javascript
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

### 웹팩 빌드를 위한 구성 및 빌드

`index.html`를 다음과 같이 수정

```html
<html>
  <head>
    <title>Webpack Demo</title>
  </head>
  <body>
    <script src="dist/main.js"></script>
  </body>
</html>
```

`package.json`에 웹팩 빌드 명령어 추가

```json
"scripts": {
  "build": "webpack --mode=none"
}
```

`npm run build` 명령어 실행 후 라이브 서버로 실행
프로젝트 루트 레벨에 `webpack.config.js` 생성 후 아래 내용 추가

```javascript
// `webpack` command will pick up this config setup by default
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

`package.json` 수정

```json
"scripts": {
  "build": "webpack"
```

`npm run build` 실행하여 빌드 확인!

---

## 2. 웹팩의 4가지 속성

웹팩의 빌드(파일 변환) 과정을 이해하기 위해서는 아래 4가지 주요 속성에 대해 알아야 한다.
일단 이전에 작성했던 `webpack.config.js` 파일은 다음과 같다.

```javascript
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

### 1) Entry

말 그대로 웹 자원을 변환하기 위해 필요한 "최초 진입점"이자 자바스크립트 파일 경로

```javascript
module.exports = {
  entry: './src/index.js',
};
```

위와 같이 되어 있으면 웹팩 실행 시 `index.js`를 대상으로 빌드를 수행한다는 뜻이다.  
따라서 `entry`로 지정한 파일에는 웹 어플리케이션의 전반적인 구조와 내용을 담고 있어야 한다.

```javascript
entry: {
  login: './src/LoginView.js',
  main: './src/MainView.js'
}
```

위와 같이 엔트리 포인트를 2개 이상 사용하는 방식은 멀티 페이지 어플리케이션에 적합하다.

### 2) Output

웹팩 사용 후 결과물의 파일 경로를 의미한다.  
옵션은 객체 형태로 추가해야 하며, 일반적으로 `filename`과 `path` 속성을 함께 정의한다.

```javascript
var path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
};
```

위 코드에서 `path.resolve()`는 인자로 넘어온 경로를 조합하여 유효한 파일 경로를 만들어 주는 Node.js의 API이다. 즉, `./dist/bundle.js`에 결과물을 저장한다는 뜻이다!

`filename` 속성에는 여러 옵션을 넣을 수 있다.

```javascript
output: {
  filename: '[name].bundle.js';
  filename: '[id].bundle.js';
  filename: '[name].[hash].bundle.js';
  filename: '[chunkhash].bundle.js';
}
```

- 결과 파일 이름에 `entry` 속성을 포함
- 결과 파일 이름에 웹팩 내부 모듈 ID를 포함
- 빌드할 때마다 고유한 해시값을 붙임
- 웹팩 모듈 내용을 기준으로 생성된 해시값 붙임

### 3) Loader

웹팩이 웹 어플리케이션을 해석할 때 JS 파일이 아닌 웹 자원(HTML, CSS, Images, Fonts)들을 변환할 수 있도록 도와주는 속성 - `module` 이라는 이름 사용

```javascript
module.exports = {
  module: {
    rules: [],
  },
};
```

**🏷 CSS Loader 적용하기**
`css-loader` 설치 후 `webpack.config.js` 파일을 다음과같이 변경한다.

```bash
npm i css-loader -D
```

```javascript
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
};
```

- `test`: 로더를 적용할 파일 유형 (보통 정규식 사용)
- `user`: 해당 파일에 적용할 로더의 이름

**🏷 자주 사용되는 로더 종류**

- Babel Loader
- Sass Loader
- File Loader
- Vue Loader
- TS Loader

**🏷 로더 적용 순서**
특정 파일에 대해 여러 로더를 사용하는 경우, 적용 순서에 주의해야 한다.  
로더는 기본적으로 **오른쪽에서 왼쪽 ⬅** 순으로 적용된다.

```javascript
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
    },
  ];
}
```

위 코드는 scss 파일을 sass로더로 전처리 한 다음, 웹팩에서 css 파일을 인식할 수 있도록 css 로더를 적용한다.

### 4) Plugin

웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.  
플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다.

```javascript
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
};
```

- `HtmlWebpackPlugin`: 웹팩으로 빌드한 결과물로 HTML 파일 생성
- `ProgressPlugin`: 웹팩의 빌드 진행률을 표시

---

## 3. Tutorials

`mode` 속성은 웹팩으로 빌드할 때 `development`, `production`, `none` 모드를 설정할 수 있다.

```javascript
module.exports = {
  mode: 'none',
};
```

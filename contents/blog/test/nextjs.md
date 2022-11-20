---
date: '2022-07-29'
title: 'Next.js + TypeScript 개발 환경 수동으로 세팅하기'
categories: ['test']
summary: create-next-app(CNA)을 사용하지 않고 개발 환경 구축하기 ✨ 최근들어 CRA나 CNA를 사용하지 않고 개발환경을 직접 구축해 보고 싶은 마음이 생겼다. [공식 문서]에도 잘 나와 있지만, 더 쓰기 편하도록 내 나름대로 정리해 봤다. 최근들어 CRA나 CNA를 사용하지 않고 개발환경을 직접 구축해 보고 싶은 마음이 생겼다.
draft: false
---

`create-next-app`(CNA)을 사용하지 않고 개발 환경 구축하기 ✨

최근들어 CRA나 CNA를 사용하지 않고 개발환경을 직접 구축해 보고 싶은 마음이 생겼다. [공식 문서](https://nextjs.org/docs/getting-started)에도 잘 나와 있지만, 더 쓰기 편하도록 내 나름대로 정리해 봤다.

---

## Setup

### 1. package.json 생성하기

프로젝트 폴더 생성 후 해당 디렉토리에서 아래 명령어를 실행한다.

```bash
yarn init -y
```

### 2. 필요한 package 설치하기

TypeScript 기반으로 React와 Next를 사용하기 때문에 필요한 패키지를 설치한다.

```bash
yarn add react next react-dom
```

TypeScript를 사용한다면 아래와같이 `devDependencies`를 추가로 설정한다.
`devDependencies`로 추가한 아래 모듈들은 배포 시 포함되지 않는다.

```bash
yarn add --dev typescript @types/react @types/node eslint eslint-config-next
```

### 3. package.json에 script 추가하기

`package.json` 파일에 다음을 추가한다.

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### 4. public, pages 폴더 생성

- `pages` 파일 이름에 기반하여 라우팅 기능을 제공한다.
- `public` 이미지, 폰트와 같은 static asset들을 저장하는 공간이다.

### 5. pages 폴더에 \_app.tsx 파일 생성

`_app.tsx`에서는 컴포넌트 공통적으로 적용되는 레이아웃이나 상태 등을 적용할 수 있다.

```typescript
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

이외에도 `_document.tsx`나 `_error.tsx` 등을 생성할 수 있는데, 각 파일에 대한 설명은 [이 글](https://beside-lab.tistory.com/entry/Nextjs-App-Document-Error)을 참고하면 좋을 것 같다.

### 6. .gitignore 설정❗️

이거 까먹고 설정 안 하면 깃허브 레포지토리에 `node_modules` 통째로 올라간다...  
어떻게 아냐구요? 나도 알고 싶지 않았음...

`.gitignore`에 관한 정보는 [여기](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)에서 볼 수 있다.

아래 코드는 cna 실행 시 자동으로 만들어지는 `.gitignore` 파일 형태다.

```bash
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env*.local

# vercel
.vercel
```

나는 아래와같이 지금 당장 필요해 보이는 것들만 추가했다!

```bash
# dependencies
/node_modules

# next.js
/.next/

# production
/build

# misc
.DS_Store
*.pem

# local env files
.env*.local

```

### 7. .eslintrc.json

`yarn lint` 명령어를 실행하면 아래 파일이 자동으로 생성된다.
아래는 Next.js에서 권장하는 설정 방식이다. 다른 옵션은 [공식 문서](https://nextjs.org/docs/basic-features/eslint)를 참고하면 된다!

```json
{
  "extends": "next/core-web-vitals"
}
```

---

## ??

`yarn dev` 실행 후 `next-env.d.ts` 파일이 생성되는데 이건 몰까.
[Next.js 공식 문서 ](https://nextjs.org/docs/basic-features/typescript)를 찾아보자!

> A file named `next-env.d.ts` will be created in the root of your project. This file ensures Next.js types are picked up by the TypeScript compiler. You cannot remove it or edit it as it can change at any time.

> Instead of editing `next-env.d.ts`, you can include additional types by adding a new file e.g. `additional.d.ts` and then referencing it in the `include` array in your `tsconfig.json`.

... 그렇다고 한다.

---

## Error

### 에러

`yarn dev` 명령어를 실행했더니 다음과 같은 에러 발생

```bash
Option '--resolveJsonModule' cannot be specified without 'node' module resolution strategy.
```

구글링하니 vscode 종료했다 다시 켜면 된다는데 난 그래도 해결 안 됨...

### 해결

`tsconfig.json` 파일에 다음을 추가하면 된다.

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```

[모듈 해석 전략](https://typescript-kr.github.io/pages/module-resolution.html) 글을 보면 `classic`과 `node` 두 가지 값이 있다는데, [이 글](https://www.typescriptlang.org/tsconfig#moduleResolution)을 읽어 보니 `classic`은 최근에 잘 사용하지 않는 것 같다.

---

## ✨ 끝! ✨

CNA로 프로젝트를 생성하는 게 확실히 더 간편하겠지만, 이번 기회를 통해 프로젝트의 세부 사항들을 꼼꼼히 살펴볼 수 있었다. CRA 없이 개발 환경 구축하는 게 더 복잡해 보이던데 다음에는 그걸 시도해 봐야겠다~! 😁

---

## 참고 자료

- [Next.js Docs - Getting Started](https://nextjs.org/docs/getting-started)
- [Next.js Docs - ESLint](https://nextjs.org/docs/basic-features/eslint)
- [Next.js Docs - TypeScript](https://nextjs.org/docs/basic-features/typescript)
- [Github Docs - Ignoring files](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)
- [TypeScript Docs - Modules](https://www.typescriptlang.org/tsconfig#moduleResolution)
- [TypeScript-Handbook - Module Resolution Strategies](https://typescript-kr.github.io/pages/module-resolution.html)
- [Next.js - \_app.js, \_document.js, \_error.js에 대해 알아보자](https://beside-lab.tistory.com/entry/Nextjs-App-Document-Error)

---
date: '2022-11-24'
title: 'Gatsby의 StaticImage는 styled 적용을 못한다!'
categories: ['gatsby']
summary: '포스트 목록에 썸네일 이미지를 추가하고 싶어서 gatsby-plugin-image 라이브러리의 StaticImage로 대충 디자인 해 보고 있었다.'
thumbnail: '../../../contents/assets/cat.jpg'
draft: false
---

포스트 목록에 썸네일 이미지를 추가하고 싶어서 `gatsby-plugin-image` 라이브러리의 `StaticImage`로 구현해 보고 있었다. 그런데 emotion의 `styled`를 적용하면 이미지가 아예 뜨질 않았다 😳

<br/>

**emotion의 styled를 사용하는 경우**

![styled를 사용하는 경우](https://velog.velcdn.com/images/corinthionia/post/0379b45d-cd71-4da3-a798-956575a20abd/image.png)

<br/>

**그냥 \<StaticImage \/\>를 사용하는 경우**

![그냥 StaticImage를 사용하는 경우](https://velog.velcdn.com/images/corinthionia/post/2e83630c-ccad-4cba-88ac-87a74900a5f9/image.png)

<br/>

## Gatsby 공식문서

아무리 봐도 고작 `styled` 사용 유무만 달라서 검색해 보다가 Gatsby 공식 문서의 내용을 보게 되었는데...

> If you use Emotion you can use the provided css prop instead

Emotion을 사용하면 `css` prop을 사용해라!

> Unfortunately the css prop from styled-components turns the code into a styled function under the hood and as explained above StaticImage doesn’t support that syntax.
> You can also use a regular style or className prop. Note that in all of these cases the styling is applied to the wrapper, not the image itself.

`StaticImage` 는 styled-components를 지원하지 않기 때문에 regular style이나 className prop을 이용해야 한다.

<br/>

## 해결!

`css` prop을 이용하여 해결했다.

```javascript
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

<StaticImage
  src="./cat.jpg"
  alt="A kitten"
  css={css`
    width: 100%;
    height: 205px;
    object-fit: cover;
  `}
/>;
```

---

### 참고

[Gatsby 공식문서 - Gatsby Image plugin](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#using-staticimage-with-css-in-js-libraries)

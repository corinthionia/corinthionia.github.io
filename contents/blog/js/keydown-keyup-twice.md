---
date: '2022-02-17'
title: '[JS] keydown/keyup에서 한글 입력 시 함수가 두 번 실행되는 경우'
categories: ['js']
summary: '오랫동안 고민하던 에러 해결하기...'
draft: false
---

![](<https://images.velog.io/images/corinthionia/post/c0ce7130-d508-4b9f-a928-bcebc19fb2a1/Feb-14-2022%2022-01-19%20(1).gif>)

<br/>

[MailedIt!](https://mailedit.me) 서비스를 개발하다 오랫동안 해결하지 못한 에러가 있었다.
Notion처럼 텍스트를 입력하고 엔터를 누르면 새로운 블럭이 만들어지는데, 기존 텍스트의 마지막 음절이 딸려오는 에러가 발생했다.

---

## 원인 분석

### 1. onKeyDown과 onKeyPress?

구글링 해 본 결과, 단순히 `onKeyDown`을 `onKeyPress`로 바꾸면 해결된다고 한다.
그럼 우선 이 둘의 차이점을 알아보자.

> **onKeyDown:** keycode 값 - 한/영, Shift, Backsapce 등 인식 가능<br/> **onKeyPress:** ASCII 값 - 한/영, Shift, Backsapce 등 인식 불가

하지만 우리 프로젝트에서는 `Shift` 키와 `Backspace` 키를 인식해야 해서 `onKeyPress`를 **사용할 수는 없었다.**

### 2. KeyboardEvent.isComposing?

`KeyboardEvent.isComposing`은 입력한 문자가 조합문자인지 아닌지를 판단한다. 한글은 자음과 모음의 조합으로 한 음절이 만들어지기 때문에 조합문자이고, 영어는 조합문자가 아니다.

한글을 입력할 때 자세히 보면 입력 중인 글자 바로 아래에 검은 밑줄이 생기는 경우가 있는데, 이 밑줄이 보이는 상황에서 `Enter`키를 입력하면 이벤트가 2번 발생하는 이슈가 있다. 왜냐하면 글자가 조합 중인 건지, 조합이 끝난 상태인지 파악하기가 어렵기 때문이다.

그래서 이 이슈는 영어를 입력할 때에는 발생하지 않고, 한글을 입력할 때에만 발생한다 ㅠㅠ!

<!-- 하나의 버튼에 하나의 값이 입력되는 영어와는 다르게, 한국어의 자음과 모음의 결합처럼 여러 버튼을 눌러서 하나의 입력 값을 만들 수 있는 언어들은 입력할 때 자세히 살펴보면, 화면에 입력중인 문자 바로 아래에 작은 밑줄이 나타나는 경우를 볼 수 있습니다. 만약 keyup, keydown 타입으로 이벤트 핸들러를 등록하고, 그 밑줄이 보이는 상황에서 enter나 esc, 혹은 방향키와 같은 키보드 버튼을 누를 경우 해당 버튼에 대한 이벤트가 2번 중복해서 반응하는 이슈가 있습니다. 왜냐하면 글자가 조합 중인지, 조합이 완료된 것인지 쉽게 파악하기 어렵기 때문인데요. 그래서 이렇게 특별한 상황에 따라서는 keypress가 필요할 수도 있다는 점. 참고해 두시면 좋을 것 같습니다 :) -->

---

## 해결 과정

### 1. 프로젝트 로직 설명

- `Enter` 키 입력 시 블럭 생성
- `Shift + Enter` 키 입력 시 블럭 내에서 줄바꿈
- `Backspace`키가 입력되고, 블럭 안의 텍스트가 없거나 공백 문자만 있다면 블럭 삭제

내가 작성한 코드는 아니지만,, 이전에 작성했던 코드는 다음과 같다.

```jsx
onKeyDownHandler(e) {
    if (e.key === 'Enter') {
      if (this.state.previousKey !== 'Shift') {
        e.preventDefault();
        this.props.addBlock({ 새로운 블럭 추가 (코드 생략) });
      }
    } else if (
      e.key === 'Backspace' &&
      (this.state.html === '' || this.state.html === '<br>')
    ) {
      e.preventDefault();
      this.props.deleteBlock({ 블럭 삭제 (코드 생략) });
    }
    this.setState({ previousKey: e.key });
  }
```

<br/>

### 2. onKeyDown을 onKeyPress로 바꿔 보기

이렇게 하면 `Shift` 키와 `Delete` 키를 **인식하지 못해서** 줄바꿈과 블럭 삭제가 안 되는 문제가 발생했다. 우리는 저 두 가지 키를 꼭 인식해야 하므로... `onKeyDown`을 사용하며 해결할 방법을 모색했다.
<br/>

### 3. event.nativeEvent.isComposing === false 추가하기 ✓

```jsx
onKeyDownHandler(e) {
    if (e.key === "Enter") {
      if (
        e.nativeEvent.isComposing === false &&
        this.state.previousKey !== "Shift"
      ) {
        e.preventDefault();
        this.props.addBlock({ 새로운 블럭 추가 (코드 생략) });
      }
    }
```

조건식에 `e.nativeEvent.isComposing === false` 을 추가했다.

<br/>

![](https://images.velog.io/images/corinthionia/post/7fef91ff-02e7-4f89-9077-f32c205be242/Feb-14-2022%2023-47-01.gif)

콘솔에서 `e.nativeEvent.isComposing` 값을 확인해 보면, 첫 글자를 입력할 때와 공백을 입력할 때 `false` 값이 찍히고, 글자를 입력하는 동안에는 `true`, 마지막에 `Enter` 키를 누르면 `true`와 `false`가 **함께** 찍히게 된다.

따라서 이전에 입력한 키가 `Shift` 키가 **아니고**, `Enter`를 입력했을 때 `e.nativeEvent.isComposing` 값이 `false`이면 블럭을 추가하도록 구현하여 마지막 음절이 딸려오는 에러를 해결할 수 있었다!

<br/>

---

## 참고 링크

https://ggmouse.tistory.com/179 <br/>
https://circus7.tistory.com/6

---
date: '2021-11-28'
title: 'Utterances 댓글을 다른 포스트로 옮기기'
categories: ['etc']
summary: 'Utterances 댓글을 다른 포스트로 옮겨 보자!'
draft: false
---

## Intro

Gatsby와 댓글 플러그인 Utterances를 사용하다 보면 아래와 같은 경우가 발생한다.

- 카테고리명 수정
- 카테고리 이동
- markdown 파일명 변경

<br/>하지만 댓글이 변경된 포스트를 따라 자동으로 옮겨지지 않기 때문에 코멘트가 저장되는 repository의 issue를 직접 수정해야 한다.<br/><br/>

## 예를 들어 보자!

나는 `FE` 카테고리에 `React Router Dom`이라는 글을 작성했고, 파일명은 `RRD.md`였다. 본래는 테스트용으로 작성한 글이었는데, 지인들이 단 댓글을 그냥 지우기 아까워서 방명록 글을 새로 팠고 해당 포스트에 댓글들을 옮기고 싶었다.<br/><br/>

![20](https://user-images.githubusercontent.com/79887293/143772882-5df088c9-edef-4e0a-bdd3-2f79394dfafe.PNG)  
blog-comments repository의 issue에는 이렇게 등록되어 있었다.<br/><br/>

![21](https://user-images.githubusercontent.com/79887293/143773143-dbb10079-a8f9-4e53-ac5e-1177fb20e1f0.PNG)  
먼저 해당 issue의 제목을 `${카테고리명}/${파일명}/` 으로 변경한다.  
나는 `etc` 카테고리에 `guest-book.md` 파일을 작성했기 때문에 위와같이 변경해 주었다.<br/><br/>

사실 **여기까지만 해도** 댓글이 옮겨지는 것을 볼 수 있다.<br/><br/>

![22](https://user-images.githubusercontent.com/79887293/143773679-3e2c276d-42cb-48eb-a411-e8f4461f8681.PNG)  
그래도 난 본문 내용까지 바꿔 주었다.<br/><br/>
![23](https://user-images.githubusercontent.com/79887293/143773743-63ad54c4-c6e8-42dd-a8e0-893e964643b4.PNG)  
근데 진짜 아무렇게나 적어도 댓글은 잘 옮겨진다.

## 끝!

![24](https://user-images.githubusercontent.com/79887293/143773814-c84b5c34-a1cb-4188-a051-5d129ba78e4a.PNG)  
댓글들이 아주 자알 옮겨졌다!<br/><br/>
근데 쓰고 나니까 진짜 별거없네,,, 🙄

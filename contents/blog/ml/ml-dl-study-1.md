---
date: '2022-09-15'
title: '머신러닝 딥러닝 스터디 1주차'
categories: ['ml']
summary: '[혼자 공부하는 머신러닝 + 딥러닝] 읽고 공부하깅'
thumbnail: '../../../contents/thumbnail/ml-dl-study-1.png'

#thumbnail: 'https://velog.velcdn.com/images/corinthionia/post/e343937a-b244-493a-8d88-5aed16cb1c77/image.png'
draft: false
---

[혼자 공부하는 머신러닝+딥러닝](http://www.yes24.com/Product/Goods/96024871)

---

## 1-1 인공지능과 머신러닝, 딥러닝

### 인공지능

사람처럼 학습하고 추론할 수 있는 지능을 가진 컴퓨터 시스템을 만드는 기술
Strong AI: SF 속 인공지능의 모습
Weak AI: 특정 분야에서 사람의 일을 도와주는 역할

### 머신러닝

자동으로 데이터에서 규칙을 학습하는 알고리즘을 연구하는 분야
**Scikit-learn** 대표적인 머신러닝 라이브러리

### 딥러닝

머신러닝 알고리즘 중 인공신경망을 기반으로 한 방법들
**TensorFlow, Pytorch** 대표적인 딥러닝 라이브러리

---

## 1-2 코랩과 주피터 노트북

### 구글 코랩

클라우드 기반의 주피터 노트북 개발 환경

### 텍스트 셀

HTML과 마크다운을 혼용해서 사용할 수 있다.
텍스트 셀의 수정을 끝내려면 ESC 키를 누르면 된다!

### 코드 셀

마지막 실행 코드의 반환값만 자동 출력한다.

### 노트북

- 대화식 프로그래밍 환경인 Jupyter를 커스터마이징한 것!
- 코랩 노트북은 5개 이상 실행할 수 없기 때문에 [런타임] -> [세션 관리] 메뉴에서 실행 중인 노트북을 종료할 수 있다.
- 이 노트북은 구글 클라우드의 컴퓨트 엔진에 연결되어 있다.
  ![](https://velog.velcdn.com/images/corinthionia/post/e343937a-b244-493a-8d88-5aed16cb1c77/image.png)

---

## 1-3 (예제) 마켓과 머신러닝

- 머신러닝은 스스로 기준을 찾아서 일을 함 + 이 기준을 이용해 판별
- 분류(classification): 머신러닝에서 여러 개의 종류(class) 중 하나를 구별해 내는 문제
- 이진분류(binary classification): 2개의 클래스 중 하나를 고르는 문제
- 특성(feature): 데이터의 특징

### 도미 데이터 준비하기

- matplotlib(plt): 과학계산용 그래프를 그리는 패키지
- 산점도(scatter plot): x, y축으로 이루어진 좌표계에 두 변수(x, y)의 관계를 표현하는 방법

```python
import matplotlib.pyplot as plt

plt.scatter(bream_length, bream_weight)
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/e433a957-1562-4b0b-8cb0-9bce88900eb7/image.png)

### 빙어 데이터 준비하기

```python
plt.scatter(bream_length, bream_weight)
plt.scatter(smelt_length, smelt_weight)
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/c93159e6-428f-435c-9d95-0bcfdc43ed15/image.png)

### 첫 번째 머신러닝 프로그램

- k-최근접 이웃 알고리즘 사용
- scikit-learn: 머신러닝 패키지이며, 2차원 리스트가 필요함
- python의 zip 함수 사용 - 나열된 리스트에서 원소를 하나씩 꺼냄
- 훈련(training): 모델에 데이터를 전달하여 규칙을 학습하는 과정
- 모델(model): 머신러닝 알고리즘을 구현한 프로그램/알고리즘을 구체화하여 표현한 것

```python
length = bream_length + smelt_length
weight = bream_weight + smelt_weight

fish_data = [[l, w] for l, w in zip(length, weight)]
print(fish_data)
```

정답 제공을 위한 데이터도 만든다.

```python
fish_target = [1] * 35 + [0] * 14
print(fish_target)
```

사이킷런 패키지에서 k-최근접 이웃 알고리즘을 구현한 클래스인 KNeighborsClassifier를 임포트하고 KNeighborsClassifier 클래스의 객체를 만든다.

```python
from sklearn.neighbors import KNeighborsClassifier
kn = KNeighborsClassifier()
```

사이킷런에서 모델을 평가하는 메서드는 score()로, 0에서 1 사이의 값(정확도)을 반환한다.

```python
from sklearn.neighbors import KNeighborsClassifier
kn = KNeighborsClassifier()

kn.fit(fish_data, fish_target)
kn.score(fish_data, fish_target)
```

### k-최근접 이웃 알고리즘

- 어떤 데이터에 대한 답을 구할 때, 주위의 다른 데이터를 보고 다수를 차지하는 것을 정답으로 사용함
- 직선 거리를 계산하는 데에 많은 시간이 들기 때문에 데이터가 많은 경우 사용하기 어렵다.

```python
kn.predict([[30, 600]])
```

실행해 보면 `array([1])` 이 출력된다.
`predict()` 메소드는 새로운 데이터의 정답을 예측한다.

```python
print(kn._fit_X)
print(kn._y)
```

KNeighborsClassifier 클래스는 `_fit_X` 속성에 `fish_data`를, `_y` 속성에 `fish_target`을 가지고 있다.

KNeighborsClassifier 클래스는 가장 가까운 데이터 5개를 기본적으로 참고한다. 이 기준은 `n_neighbors` 매개변수로 바꿀 수 있다.

```python
kn49 = KNeighborsClassifier(n_neighbors=49)
```

---

## 정리

- KNeighborsClassifier(): k-최근접이웃분류모델을 만드는 사이킷런 클래스
- fit(특성, 정답 데이터): 사이킷런 모델을 훈련할 때 사용하는 메서드
- predict(특성): 사이킷런 모델을 훈련하고 예측할 때 사용하는 메서드
- score(): 훈련된 사이킷런 모델의 성능을 측정

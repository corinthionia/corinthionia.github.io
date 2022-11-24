---
date: '2022-10-06'
title: '머신러닝 딥러닝 스터디 4주차'
categories: ['ml']
summary: '[혼자 공부하는 머신러닝 + 딥러닝] 읽고 공부하깅'
thumbnail: '../../../contents/assets/profile-image.jpg'

#thumbnail: 'https://velog.velcdn.com/images/corinthionia/post/3950f585-3b21-4c61-957b-0d35d997e1b0/image.png'
draft: false
---

[혼자 공부하는 머신러닝+딥러닝](http://www.yes24.com/Product/Goods/96024871)

---

## 로지스틱 회귀

### 로지스틱 회귀

- 로지스틱 회귀는 회귀 모델이 아닌 **분류 모델**
- 시그모이드 함수의 범위는 0~1
- 이진분류의 경우 시그모이드 함수의 출력이 0.5보다 크면 양성, 작으면 음성 클래스로 판단한다.

```python
import matplotlib.pyplot as plt

z = np.arange(-5, 5, 0.1)
phi = 1 / (1 + np.exp(-z))

plt.plot(z, phi)
plt.xlabel('z')
plt.ylabel('phi')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/3950f585-3b21-4c61-957b-0d35d997e1b0/image.png)

### 로지스틱 회귀로 다중 분류 수행하기

- 반복적인 알고리즘 사용 (`max_iter` 매개변수로 반복 횟수 지정)
- L2규제: 릿지 회귀와 같이 계수의 제곱을 규제
- 이진분류에서는 시그모이드 함수를 사용하고, 다중분류는 소프트맥스 함수를 사용한다.
- 다중분류일 경우에는 클래스 개수만큼 방정식을 훈련하고, 각 출력값을 소프트맥스 함수를 통과시켜 전체 클래스에 대한 합이 항상 1이 되도록 만든다. 이 값은 각 클래스에 대한 확률로 이해할 수 있다.

```python
from scipy.special import softmax

proba = softmax(decision, axis=1)
print(np.round(proba, decimals=3))
```

---

## 확률적 경사 하강법

### 점진적인 학습

- 확률적 경사 하강법: 대표적인 점진적 학습 알고리즘 - 가장 가파른 경사를 따라 원하는 지점에 도달하는 것이 목표!
- 에포크: 경사 하강법에서 훈련 세트를 한 번 모두 사용하는 과정
- 미니배치 경사 하강법: 여러 개의 샘플을 이용해 경사 하강법을 수행하는 방식
- 배치 경사 하강법: 전체 샘플을 사용해 경사 하강법을 수행하는 방식
- 손실 함수: 문제에서 머신러닝 알고리즘이 얼마나 엉터리인지 측정하는 기준 (작을수록 좋다)

### 로지스틱 손실 함수

- 이진 크로스엔트로피 손실 함수
- 로지스틱 손실 함수를 사용하면 로지스틱 회귀 모델이 만들어짐
- 이진분류는 로지스틱 손실함수를 사용하고 다중분류는 크로스 엔트로피 손실함수를 사용!

### SGDClassifier

- 일정 에포크 동안 성능이 향상되지 않으면 자동으로 멈춘다.
- loss 매개변수의 기본값은 'hinge'이다.
- 힌지손실(hinge loss)은 서포트 벡터 머신이라는 머신러닝 알고리즘을 위한 손실 함수이다.

```python
from sklearn.linear_model import SGDClassifier

sc = SGDClassifier(loss='log', max_iter=10, random_state=42)
sc.fit(train_scaled, train_target)

print(sc.score(train_scaled, train_target))
print(sc.score(test_scaled, test_target))
```

모델을 1 에포크씩 이어서 훈련할 때에는 `partial_fit()` 메서드 사용

```python
sc.partial_fit(train_scaled, train_target)

print(sc.score(train_scaled, train_target))
print(sc.score(test_scaled, test_target))
```

결과를 보면 점수가 향상됨!!
그럼 이 모델을 여러 번 훈련해 볼 필요가 있는데, 반복 횟수는 어떻게 정할까?

### 에포크와 과대/과소 적합

- 에포크가 진행됨에 따라 모델의 정확도를 나타내는 그래프를 그려 보면 테스트 세트 점수는 어느 순간 감소하기 시작하는데, 바로 이 지점이 모델이 과대적합되기 시작하는 곳이다.
- 조기 종료: 과대적합이 시작하기 전에 훈련을 멈추는 것

```python
train_score = []
test_score = []
classes = np.unique(train_target)

for _ in range(0, 300):
  sc.partial_fit(train_scaled, train_target, classes=classes)
  train_score.append(sc.score(train_scaled, train_target))
  test_score.append(sc.score(test_scaled, test_target))

plt.plot(train_score)
plt.plot(test_score)
plt.xlabel('epoch')
plt.ylabel('accuracy')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/7c2da6eb-7ef0-4e13-a9d8-769bc91f8f7f/image.png)
그래프를 보면 100번째 에포크 이후에 훈련세트와 테스트세트의 점수가 벌어지고 있다 => 100번째 에포크가 적절한 반복횟수로 보인다!
그럼 반복횟수를 100에 맞추고 다시 훈련해 보자.

```python
sc = SGDClassifier(loss='log', max_iter=100, tol=None, random_state=42)
sc.fit(train_scaled, train_target)
print(sc.score(train_scaled, train_target))
print(sc.score(test_scaled, test_target))
```

훈련세트와 테스트세트에서의 정확도 점수가 비교적 높게 나왔다!
힌지손실(hinge loss)은 서포트 벡터 머신이라는 머신러닝 알고리즘을 위한 손실 함수이다.

```python
c = SGDClassifier(loss='hinge', max_iter=100, tol=None, random_state=42)
sc.fit(train_scaled, train_target)

print(sc.score(train_scaled, train_target))
print(sc.score(test_scaled, test_target))
```

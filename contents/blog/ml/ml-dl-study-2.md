---
date: '2022-09-22'
title: '머신러닝 딥러닝 스터디 2주차'
categories: ['ml']
summary: '[혼자 공부하는 머신러닝 + 딥러닝] 읽고 공부하깅'
thumbnail: '../../../contents/assets/profile-image.jpg'

#thumbnail: 'https://velog.velcdn.com/images/corinthionia/post/0aede4bc-ceae-4c20-b30c-d2e13f027560/image.png'
draft: false
---

[혼자 공부하는 머신러닝+딥러닝](http://www.yes24.com/Product/Goods/96024871)

---

## 2-1. 훈련 세트와 테스트 세트

### 지도 학습과 비지도 학습

- 지도 학습: 정답(target)을 가지고 정답을 학습
- 비지도 학습: target 없이 입력 데이터만 사용
- 강화 학습: 알고리즘이 행동한 결과로 얻은 보상을 사용해 학습

### 훈련 세트와 테스트 세트

- 훈련 세트: 훈련에 사용되는 데이터
- 테스트 세트: 테스트에 사용되는 데이터

```python
train_input = fish_data[:35]
train_target = fish_target[:35]

test_input = fish_data[35:]
test_target = fish_target[35:]

kn = kn.fit(train_input, train_target) # fit 메서드로 훈련
kn.score(test_input, test_target) # score 메서드로 평가
```

우와 정확도가 0.0이네요!!
=> 알고 보니 훈련 세트에는 도미 데이터만, 테스트 세트에는 빙어 데이터만 있어서 그렇군요
=> 이렇게 샘플이 골고루 섞여 있지 않은 상황을 **샘플링 편향(sampling bias)**라고 한다.

### Numpy

Python의 대표적인 배열 라이브러리 - 고차원 배열을 쉽게 만들고 조작 가능
python 리스트를 numpy 배열로 바꾸기

```python
import numpy as np

input_arr = np.array(fish_data)
target_arr = np.array(fish_target)

print(target_arr)
print(input_arr.shape)  # (샘플수, 특성수) 출력
```

인덱스 번호가 담긴 배열을 생성하여 인덱스 번호들을 무작위로 섞어 준다.

```python
np.random.seed(42)
index = np.arange(49)  # np.arrange()를 사용해 인덱스 생성
np.random.shuffle(index)

print(index)
```

- 넘파이의 무작위 함수들을 실행 시 다른 결과를 생성한다. 랜덤 시드를 지정하면 이를 방지할 수 있다.
- `np.arange(N)`는 0부터 N-1까지의 수가 담긴 배열을 만든다.
- `np.shuffle(arr)`은 주어진 배열을 무작위로 섞는다.

넘파이는 `배열 인덱싱`을 제공한다. 다음과같이 작성하면 2번째와 4번째 샘플을 선택하여 출력한다.

```python
print(input_arr[[1, 3]])
```

배열 인덱싱 대신 넘파이 배열을 인덱스로 전달할 수 있다.

```python
train_input = input_arr[index[:35]]
train_target = target_arr[index[:35]]

print(input_arr[45], train_input[1])
```

matplotlib을 사용하여 산점도를 그린다.

- 2차원 배열은 행과 열 인덱스를 콤마로 나누어 지정한다. 슬라이싱 연산자로 처음부터 마지막 원소까지 모두 선택하는 경우, 시작과 종료 인덱스를 생략할 수 있다.

```python
import matplotlib.pyplot as plt

plt.scatter(train_input[:, 0], train_input[:, 1])
plt.scatter(test_input[:, 0], test_input[:, 1])

plt.xlabel('length')
plt.ylabel('weight')

plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/0aede4bc-ceae-4c20-b30c-d2e13f027560/image.png)

---

## 2-2. 데이터 전처리

### 넘파이로 데이터 준비하기

- `np.colum_stack()`은 전달받은 리스트를 일렬로 세우고 나란히 연결한다.
- 튜플은 리스트와 달리 수정이 불가하기 때문에 매개변수 값으로 많이 이용한다.

```python
fish_data = np.column_stack((fish_length, fish_weight))
fish_target = np.concatenate((np.ones(35), np.zeros(14)))

print(fish_data[:5])
```

`np.ones()`와 `np.zeros()`를 이용하면 타킷데이터를 쉽게 만들 수 있다.
데이터 크기가 커질 경우 파이썬 리스트보다 넘파이 배열을 사용하는 게 효율적이다.

```python
fish_target = np.concatenate((np.ones(35), np.zeros(14)))
```

### 사이킷런으로 훈련 세트와 테스트 세트 나누기

저번주차에는 넘파이 배열의 인덱스를 섞어 훈련 세트와 테스트 세트로 나누었는데, 다음으로 소개하는 방법은 이보다 훨씬 세련된 방법이다. `train_test_split()`을 사용하면 알잘딱깔센 비율에 맞게 훈련 세트와 테스트 세트로 나누어 준다.

- `random_state`는 저번과같이 42로 설정한다.
- `stratify` 매개변수에 타깃 데이터를 전달하면 클래스 비율에 맞게 데이터를 나눈다.

```python
from sklearn.model_selection import train_test_split

train_input, test_input, train_target, test_target = train_test_split(fish_data, fish_target, stratify=fish_target, random_state=42)
print(test_target)
```

```python
print(train_input.shape, test_input.shape)
print(train_target.shape, test_target.shape)

print(test_target)
```

```bash
(36, 2) (13, 2)
(36,) (13,)
[0. 0. 1. 0. 1. 0. 1. 1. 1. 1. 1. 1. 1.]
```

### 수상한 도미 한 마리

도미 데이터를 넣었는데 빙어로 예측함...!

```python
from sklearn.neighbors import KNeighborsClassifier

kn = KNeighborsClassifier()
kn.fit(train_input, train_target)
kn.score(test_input, test_target)

print(kn.predict([[25, 150]]))
```

한번 산점도를 그려 보자.

```python
import matplotlib.pyplot as plt

plt.scatter(train_input[:,0], train_input[:,1])
plt.scatter(25, 150, marker='^') # marker 매개변수는 모양을 지정한다.
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/78630aec-a447-41ab-8bc6-77abee0fcdb3/image.png)
산점도를 봐도 분명히 도미 데이터에 더 가까운데 왜 빙어로 예측한 걸까?

- k-최근접 이웃은 주변 샘플 중 다수인 클래스를 예측으로 사용한다.
- KNeighborsClassifier 클래스의 이웃 개수인 `n_neighbors`의 기본값은 5이므로 5개의 이웃이 반환된다.
- 아래와같이 이웃 샘플을 따로 구분해 산점도를 그려 보자.

```python
distances, indexes = kn.kneighbors([[25, 150]])

plt.scatter(train_input[:,0], train_input[:,1])
plt.scatter(25, 150, marker='^')
plt.scatter(train_input[indexes, 0], train_input[indexes, 1], marker='D')
plt.xlabel('length')
plt.ylabel('weight')
```

가장 가까운 데이터 5개 중 4개가 빙어이기 때문에 빙어로 예측한 것이었다.
![](https://velog.velcdn.com/images/corinthionia/post/633fe704-6bc4-4f72-8c67-9337af650085/image.png)

### 기준을 맞춰라

이러한 현상은 x축의 범위(10~40)와 y축의 범위(0~1000)가 달라서 발생하는 문제였다. (= 스케일이 달라서 발생하는 문제였다.) 따라서 y축으로 조금만 멀어져도 거리가 아주 큰 값으로 계산된다.

x와 y축의 범위를 동일하게 0~1000으로 맞춰 보자. `xlim()`을 이용한다.

```python
plt.scatter(train_input[:,0], train_input[:,1])
plt.scatter(25, 150, marker='^')
plt.scatter(train_input[indexes,0], train_input[indexes,1], marker="D")

plt.xlim((0, 1000))
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/97fdb5ac-1e73-4c6e-8419-eedd5ddb1f75/image.png)

데이터를 표현하는 기준이 다르면 알고리즘이 올바르게 예측할 수 없다.
**데이터 전처리**를 통해 특성값을 일정한 기준으로 맞춰 줘야 한다.

가장 널리 사용하는 방법은 **표준점수**이다. 이는 평균에서 표준편차의 몇 배만큼 떨어져 있는지를 나타낸다.
계산 방법은 평균을 빼고 표준편차를 나누면 된다.

```python
mean = np.mean(train_input, axis=0)
std = np.std(train_input, axis=0)
```

`axis=0`을 하면 행을 따라 각 열의 통계값을 계산한다.

넘파이는 `브로드캐스팅` 기능을 제공한다.

```python
train_scaled = (train_input - mean) / std
```

### 전처리 데이터로 모델 훈련하기

다시 산점도를 그려 보자.

```python
plt.scatter(train_scaled[:,0], train_scaled[:,1])
plt.scatter(25, 150, marker='^')
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/25ce2d00-24c6-4d94-8bbd-26ff0199cadd/image.png)
위와 같은 결과가 일어나는 게 당연하다... 샘플 데이터도 mean, std를 이용해 변환해야 한다.
아래와같이 코드를 수정해 보자.

```python
new = ([25, 150] - mean) / std
plt.scatter(train_scaled[:,0], train_scaled[:,1])
plt.scatter(new[0], new[1], marker='^')
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/5e7c903d-c63f-4899-8029-60814e1b6ac9/image.png)

이제 x와 y의 스케일이 같아졌으므로 k-최근접 이웃 모델을 다시 훈련해 보자.
여기서 주의할 점은, **테스트 세트도 훈련 세트의 평균과 표준편차로 변환해야 한다는 것이다.**
훈련 후 테스트 세트를 평가할 때에는 훈련 세트의 기준으로 테스트 세트를 변환해야 같은 스케일로 산점도를 그릴 수 있기 때문이다.

```python
test_scaled = (test_input - mean) / std
kn.score(test_scaled, test_target)
print(kn.predict([new]))
```

드디어!! 도미(1)로 예측에 성공했다.
산점도를 다시 그려 보자.

```python
distances, indexes = kn.kneighbors([new])
plt.scatter(train_scaled[:,0], train_scaled[:,1])
plt.scatter(new[0], new[1], marker='^')
plt.scatter(train_scaled[indexes,0], train_scaled[indexes,1], marker='D')
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/6ed12652-aea6-4ab9-bd3c-e5cd3a9995ec/image.png)

### 스케일이 다른 특성 처리

특성의 스케일을 조정하는 방법은 표준점수 외에도 많지만, 대부분 표준점수를 활용한다.
데이터 전처리 과정에서 중요한 점은, **훈련 세트를 변환한 방식 그대로 테스트 세트도 변환해야 한다는 것이다.**

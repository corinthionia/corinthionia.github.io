---
date: '2022-09-29'
title: '머신러닝 딥러닝 스터디 3주차'
categories: ['ml']
summary: '[혼자 공부하는 머신러닝 + 딥러닝] 읽고 공부하깅'
thumbnail: '../../assets/cat.jpg'
draft: false
---

[혼자 공부하는 머신러닝+딥러닝](http://www.yes24.com/Product/Goods/96024871)

---

## 3-1. k-최근접 이웃 회귀

### 지도학습 알고리즘

- 분류 (2장)
- 회귀 (3장)

### k-최근접 이웃 회귀

- 회귀(regression): 두 변수 사이의 상관관계를 분석하는 방법 (임의의 숫자를 예측)
- 예측하려는 샘플에 가장 가까운 샘플 k개를 선택
- 타깃을 예측하는 가장 간단한 방법은 **평균 구하기**

### 실습

- (Remind) 사이킷런에 사용할 훈련 세트는 2차원 배열이어야 함
- 넘파이의 `reshape()` 메서드를 사용하면 배열의 크기를 바꿀 수 있음
- `reshape(-1, 1)`과같이 사용하면 배열의 전체 원소 개수를 외울 필요가 없음

```python
test_array = np.array([1, 2, 3, 4])
print(test_array.shape) # (4,)

test_array = test_array.reshape(2, 2)
print(test_array.shape)
```

```python
train_input = train_input.reshape(-1, 1)
test_input = test_input.reshape(-1, 1)

print(train_input.shape, test_input.shape)
```

### 결정계수(R²)

- 회귀는 결정계수 값으로 평가함
- R² = 1- ((타깃-예측)^2 의 합) / ((타깃-평균)^2 의 합)
- `mean_absolute_error`는 타깃과 예측의 절댓값 오차를 평균하여 반환

```python
# 타깃과 예측한 값 사이의 차이 구해 보기

from sklearn.metrics import mean_absolute_error

# 테스트 세트에 대한 예측을 만듦
test_prediction = knr.predict(test_input)

# 테스트 세트에 대한 평균 절댓값 오차를 계산
mae = mean_absolute_error(test_target, test_prediction)
print(mae)
```

```bash
19.157142857142862
```

즉, 19g 정도 타깃값과 다르다는 것!

### 과대적합 vs. 과소적합

- 훈련 세트에 **과대적합**: 훈련 세트에 비해 테스트 세트에서의 점수가 낮을 경우
- 훈련 세트에 **과소적합**: 훈련 세트보다 테스트 세트의 점수가 높거나 둘다 낮은 경우
- 과소적합은 훈련 세트와 테스트 세트의 크기가 작은 경우 발생할 수 있음 -> 모델을 복잡하게 만들어야 함 -> k-최근접 이웃의 경우 k값을 줄임
- 과대적합은 모델을 덜 복잡하게 만들어야 함 -> k-최근접 이웃의 경우 k값을 늘림

```python
# 이웃의 개수를 3으로 설정
knr.n_neighbors = 3

# 모델을 다시 훈련
knr.fit(train_input, train_target)
print(knr.score(train_input, train_target)) # 훈련 세트의 R² 점수
print(knr.score(test_input, test_target))  # 테스트 세트의 R² 점수
```

```bash
0.9804899950518966
0.9746459963987609
```

테스트 세트의 점수가 훈련 세트보다 낮아졌으므로 **과소적합 문제가 해결됨!**

### 회귀 문제 다루기

- 사이킷런은 회귀 모델의 점수로 R²(결정계수) 값을 반환하고, 이 값은 1에 가까울수록 좋음
- 정량적인 평가를 위해 절댓값 오차를 사용할 수도 있음
- 훈련 세트와 테스트 세트의 평가점수 차이가 크면 좋지 않음

---

## 3-2. 선형 회귀

### k-최근접 이웃의 한계

- k-최근접 이웃 회귀는 가장 가까운 샘플을 찾아 타깃의 평균을 내기 때문에 새로운 샘플이 훈련 세트의 범위를 벗어나면 엉뚱한 값으로 예측할 수 있음

### 선형 회귀

- 특성이 하나인 경우, 그 특성을 잘 나타내는 직선을 학습하는 알고리즘
- 사이킷런의 `LinearRegression` 클래스로 선형회귀 알고리즘을 사용할 수 있음
- 직선의 기울기와 절편은 `lr` 객체의 `coef_`와 `intercept_` 속성으로 확인할 수 있음
- 직선의 기울기와 절편은 '모델 파라미터'라 하고, 머신러닝 알고리즘의 훈련 과정은 최적의 모델 파라미터를 찾는 것이라고 할 수 있다. 이를 모델 기반 학습이라고 부른다.

```python
from sklearn.linear_model import LinearRegression
lr = LinearRegression()

# 선형회귀 모델을 훈련
lr.fit(train_input, train_target)

print(lr.predict([[50]]))
```

```python
print(lr.coef_, lr.intercept_) # [39.01714496] -709.0186449535477
```

농어의 길이 15에서 50까지 직선으로 그려 보자.
앞에서 구한 기울기와 절편을 사용하여 (15, 15*39-709), (50, 50*39-709) 두 점을 이으면 된다.

```python
plt.scatter(train_input, train_target)

# 15에서 50까지 1차 방정식 그래프 그리기
plt.plot([15, 50], [15*lr.coef_ + lr.intercept_, 50*lr.coef_ + lr.intercept_])

plt.scatter(50, 1241.8, marker='^')
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/b23d1e64-0a6d-4c14-ac78-9f424102ee6b/image.png)

```python
print(lr.score(train_input, train_target))
print(lr.score(test_input, test_target))
```

```bash
0.939846333997604
0.8247503123313558
```

훈련 세트의 점수도 높지 않기 때문에 전체적으로 과소적합되었다 할 수 있음
현재 그려진 그래프도 데이터를 대표한다고 볼 수는 없음

### 다항 회귀

- 최적의 곡선 찾기
- 길이를 제곱한 항을 훈련 세트에 추가해야 함 -> 넘파이 `column_stack()` 사용
- 타깃 값은 제곱 항 추가하지 않고 그대로 사용

```python
point = np.arange(15, 50)

plt.scatter(train_input, train_target)

plt.plot(point, 1.01*point**2 - 21.6*point + 116.05)

plt.scatter(50, 1574, marker='^')
plt.xlabel('length')
plt.ylabel('weight')
plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/bc6ac3a0-aa4d-4c4c-b0dc-d468cd86c044/image.png)

평가해 보면 여전히 과소적합...
다음 장에 이어서...

---

## 3-3. 특성 공학과 규제

### 다중 회귀

- 여러 개의 특성을 사용한 선형회귀
- 선형회귀는 특성이 많을수록 효과가 더 좋음! - 사이킷런의 `PolynomialFeatures` 클래스 사용
- **특성공학**: 기존의 특성을 사용해 새로운 특성을 뽑아내는 작업

### 데이터 준비

- 데이터 분석 라이브러리인 판다스 사용 - `.csv` 파일
- `.csv` 파일을 판다스 데이터프레임에 저장하고, 넘파이 배열로 변환하여 선형 회귀 모델을 훈련해 보자.

```python
import pandas as pd

df = pd.read_csv('https://bit.ly/perch_csv_data')
perch_full = df.to_numpy()
print(perch_full)
```

### 사이킷런의 변환기

- **변환기**: 특성을 만들거나 전처리하기 위한 클래스 - `fit()`, `transform()` 메서드 제공
- 우리가 사용할 변환기는 사이킷런의 `PolynomialFeatures` 클래스
- 훈련을 해야 변환이 가능하기 때문에 `fit()`, `transform()` 메서드를 차례대로 호출
- `PolynomialFeatures` 클래스는 각 특성을 제곱한 항을 추가하고 특성끼리 서로 곱한 항을 추가함

```python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(include_bias=False)
poly.fit([[2, 3]])
print(poly.transform([[2, 3]]))
```

```bash
[[2. 3. 4. 6. 9.]]
```

### 다중 회귀 모델 훈련하기

- 특성이 늘어나면 선형회귀의 능력이 매우 강하다는 것을 알 수 있음
- `PolynomialFeatures` 클래스의 `degree` 매개변수를 사용하여 고차항의 최대 차수를 지정할 수 있음

```python
poly = PolynomialFeatures(degree=5, include_bias=False)

poly.fit(train_input)

train_poly = poly.transform(train_input)
test_poly = poly.transform(test_input)

lr.fit(train_poly, train_target)
print(lr.score(train_poly, train_target)) # 0.9999999999991097
print(lr.score(test_poly, test_target)) # -144.40579242684848
```

왜 음수가 나왔을까?
특성의 개수를 늘리면 선형모델은 강력해지지만 훈련 세트에 과대적합 되므로 테스트 세트에서는 형편없는 점수가 나온다. 이 문제를 해결하기 위해서는 특성의 개수를 줄이거나 **규제**를 사용할 수 있다.

### 규제

- 머신러닝 모델이 훈련 세트를 과도하게 학습하지 못하도록 방해하는 것을 말함. 즉, 모델이 훈련 세트에 과대적합되지 않게 함.
- 선형회귀 모델의 경우 특성에 곱해지는 계수의 크기를 작게 만드는 것
- 규제를 적용하기 전에 **정규화** 과정을 먼저 거쳐야 함 - 사이킷런의 `StandardScaler` 클래스 사용
- (Remind) 훈련 세트로 학습한 변환기를 사용해 테스트 세트까지 변환해야 함!!

```python
from sklearn.preprocessing import StandardScaler

ss = StandardScaler()
ss.fit(train_poly)

train_scaled = ss.transform(train_poly)
test_scaled = ss.transform(test_poly)
```

### 릿지(Ridge) 회귀

- 선형회귀모델에 계수를 제곱한 값을 기준으로 규제를 추가한 모델
- alpha 매개변수로 규제의 강도를 조절 - 이때의 alpha 값은 하이퍼파라미터!
- 적절한 알파값은 알파값에 대한 R² 값의 그래프를 그려 보면 된다. 훈련 세트와 테스트 세트의 점수가 가장 가까운 지점이 최적의 알파 값!

```python
# alpha 값을 0.001에서 100까지 10배씩 늘려가며 릿지 회귀모델 훈련

import matplotlib.pyplot as plt

train_score = []
test_score = []

alpha_list = [0.001, 0.01, 1, 10, 100]

for alpha in alpha_list:
  ridge = Ridge(alpha=alpha)
  ridge.fit(train_scaled, train_target)

  train_score.append(ridge.score(train_scaled, train_target))
  test_score.append(ridge.score(test_scaled, test_target))
```

그래프를 그려 보자.

```python
plt.plot(np.log10(alpha_list), train_score)
plt.plot(np.log10(alpha_list), test_score)

plt.xlabel('alpha')
plt.ylabel('R²')

plt.show()
```

![](https://velog.velcdn.com/images/corinthionia/post/a553dfeb-ec9d-4201-8969-271d05c50c4b/image.png)
훈련 세트와 테스트 세트의 점수 차이가 크다!!
적절한 알파 값은 두 그래프가 가장 가깝고 테스트 세트의 점수가 가장 높은 -1, 즉 10^(-1)이므로 0.1이다.

이후 알파 값 0.1로 최종 모델을 훈련해 보면 과대적합과 과소적합 사이에서 균형을 맞추고 있다!

### 라쏘(Lasso) 회귀

- 선형회귀모델에 계수의 절댓값을 기준으로 규제를 적용한 모델
- Ridge 클래스를 Lasso 클래스로 바꾸면 라쏘 모델 훈련이 가능함
- 라쏘 모델은 유용한 특성을 골라내는 용도로도 사용할 수 있음

```python
from sklearn.linear_model import Lasso

lasso = Lasso()
lasso.fit(train_scaled, train_target)

print(lasso.score(train_scaled, train_target)) # 0.989789897208096
print(lasso.score(test_scaled, test_target)) # 0.9800593698421883
```

과대적합을 잘 억제한 결과를 보여준다!
라쏘 모델도 알파 매개변수로 규제의 강도를 조절할 수 있다.

```python
train_score = []
test_score = []

alpha_list = [0.001, 0.01, 0.1, 1, 10, 100]

for alpha in alpha_list:
  lasso = Lasso(alpha=alpha, max_iter=10000)
  lasso.fit(train_scaled, train_target)

  train_score.append(lasso.score(train_scaled, train_target))
  test_score.append(lasso.score(test_scaled, test_target))
```

그래프를 그려 보면 왼쪽은 과대적합이고, 오른쪽으로 갈수록 격차가 줄어들고 있다.
라쏘 모델에서 최적의 알파 값은 1, 즉 10^1이므로 10이다.
![](https://velog.velcdn.com/images/corinthionia/post/45dd982a-20be-4613-8da7-f3a14201b847/image.png)

모델을 다시 훈련해 보자.

```python
lasso = Lasso(alpha=10)
lasso.fit(train_scaled, train_target)

print(lasso.score(train_scaled, train_target)) # 0.9888067471131867
print(lasso.score(test_scaled, test_target)) # 0.9824470598706695
```

모델이 잘 훈련되었다! 과대적합을 잘 억제하고 테스트의 성능을 크게 높였다.

---
date: '2022-11-26'
title: '졸업 프로젝트 개발 과정 1 - Object Detection / Colab / Tencent Cloud'
categories: ['astee']
summary: '저는 현재 졸업 프로젝트를 진행하고 있습니다! 저희 팀의 주제는 사용자 경험 향상을 위한 UIUX 분석 서비스로, 모바일 스크린샷을 업로드하면 사진 속 UI 컴포넌트들의 종류를 분류하고, 각각에 맞는 UX 고려 사항들을 제시해 주는 서비스를 기획했습니다. '
thumbnail: '../../../contents/thumbnail/astee01.png'
draft: false
---

![](https://velog.velcdn.com/images/corinthionia/post/e94410ab-ba2b-4012-a023-e31dc477aa95/image.png)

저는 현재 졸업 프로젝트를 진행하고 있습니다! 저희 팀의 주제는 '사용자 경험 향상을 위한 UIUX 분석 서비스'로, 모바일 스크린샷을 업로드하면 사진 속 UI 컴포넌트들의 종류를 분류하고, 각각에 맞는 UX 고려 사항들을 제시해 주는 서비스를 기획했습니다. 이 주제의 관건은 **딥러닝을 이용하여 모바일 스크린샷 속 UI 컴포넌트를 인식**하는 것인데, 아무래도 객체 탐지 기술이 필요하다고 생각했고, 딥러닝 모델 구현을 위해 Object detection에 대해 알아보는 시간을 가졌습니다.

처음 접하는 분야다 보니 초심자의 입장에서 공부한 내용을 기록해 보았습니다 😀 하단에 참고한 자료, 논문, 영상들의 출처를 적어 놓았으니 관심있으신 분들은 하나씩 확인해 보셔도 좋을 것 같습니다!

---

# Object detection 알아보기

## Object Detection?

말 그대로 사진 속의 모든 객체(object)를 탐지(detect)하는 문제(task)입니다.
![출처: Review of Deep Learning Algorithms for Object Detection](https://velog.velcdn.com/images/corinthionia/post/bf826718-78da-405d-9fe9-87344b6c4b53/image.png)

**1) Classification**

- 하나의 객체의 종류를 파악

**2) Classification + Localization**

- 하나의 객체의 종류 파악 + 위치 정보 획득

**3) Object Detection**

- Bounding box를 이용하여 각 사물의 위치와 클래스 분류

**4) Instance Segmentation**

- 다양한 사물 인스턴스를 픽셀 단위로 구분

<br/>

## 2-Stage Detector vs. 1-Stage Detector

객체 검출(Object Detection) 방식은 2-Stage 방식과 1-Stage 방식으로 나눌 수 있습니다.

### 1) 2-Stage Detector

2-Stage Detector는 물체의 위치를 찾는 문제와 분류 문제를 **순차적으로** 해결합니다. 대표적으로 **R-CNN 계열**의 모델들이 여기에 해당합니다.

### 2) 1-Stage Detector

물체의 위치를 찾는 문제와 분류 문제를 **한번에** 해결합니다.
대표적으로 **YOLO**가 이에 해당합니다.

먼저 자주 사용되는 용어들부터 짚고 넘어가겠습니다.

- Region proposals: 위치 정보 제안
- Feature extraction: 각각의 위치에 대해 feature 추출
- Classification & Regression: Feature를 토대로 class를 분류하고, 위치에 대한 정보를 조정하는 regression 과정(bounding box의 정보를 예측)

2-Stage Detector는 Region proposal을 먼저 진행한 후에 Classification을 하겠다는 것입니다. 이러한 방식은 정확도가 높다는 장점이 있지만, 후보군이 많다 보니 Inference time이 길다는 문제점이 있습니다.
1-Stage Detector는 오래 걸리는 Region proposal 과정을 생략하고, 이미지를 Grid로 나누어 각 Grid 별로 Bounding box와 class, 그리고 confidence까지 예측하게 합니다.

<br/>

## 객체 검출 방식: 2-Stage 방식 예시

**밑에서 모델 선정 과정에 대해 설명하겠지만,** 우리는 Faster R-CNN 방식을 사용할 것이기 때문에 2-Stage Detector만 살펴 보겠습니다. 2-Stage Detector에는 R-CNN, Fast R-CNN, Faster R-CNN이 해당됩니다.
![](https://velog.velcdn.com/images/corinthionia/post/82e154fe-8aae-4734-9af3-2eeb17b44c48/image.png)

앞서 말했듯이, 2-Stage Detector는 물체의 위치를 찾는 문제와 분류 문제를 **순차적으로** 해결합니다.

### 1) R-CNN

![](https://velog.velcdn.com/images/corinthionia/post/84a77d83-d3ff-474f-8b57-e7042503d20f/image.png)

**1. Input Images**
Input images를 준비합니다.

**2. Extract region proposals (~2k)**
이미지에 대하여 **CPU 상에서 Selective Search**를 진행합니다. 이를 통해 물체가 있을 것으로 예상되는 곳에 약 2000개의 region을 생성합니다. 사진 속 노란 박스가 Region을 의미합니다!

**2.5. Warped region**
이렇게 얻어진 Region을 warp하는 과정을 거칩니다. Warp이란, 얻어진 Region들을 crop & reshape하여 모두 같은 크기로 맞춰 주는 작업을 의미합니다.

**3. Compute CNN features**
Wareped region들을 CNN 모델에 통과시켜 feature 벡터를 추출합니다. Feature vector들에 대해 SVM(Support Vector Machine)을 이용하여 classification을 진행하고, Regressors를 이용해서 정확한 위치를 예측할 수 있게 합니다.

### 2) Fast R-CNN

![](https://velog.velcdn.com/images/corinthionia/post/a0f87b1f-13ca-458b-a310-3226c359d616/image.png)
Fast R-CNN은 R-CNN과 마찬가지로 input 이미지에 대하여 **CPU 상에서 Selective Search**를 진행하고, 약 2000개의 Region을 찾게 됩니다.

그렇다면 R-CNN과의 차이점은 무엇일까요? 앞에 `Fast`가 붙었듯이, R-CNN보다 속도 측면에서 향상된 모델입니다. 약 2000개에 해당하는 모든 Region에 대해 CNN을 통과시켜야 하는 R-CNN과 달리, Fast R-CNN은 Feature map을 추출하기 위해 CNN을 한 번만 거치기 때문에 속도가 훨씬 빨라졌겠죠?

다시 말하자면, input image에서 resion proposal을 수행하는 것이 아니라, 이미지를 CNN에 우선 통과시켜 feature map을 얻은 후, 이 feature에 대해 region proposal을 진행한다는 것입니다. 그후 Softmax를 이용해 각 클래스에 대한 probability를 구한다는 점도 차이점이라 할 수 있습니다.

### 3) Faster R-CNN

![](https://velog.velcdn.com/images/corinthionia/post/820a421f-765d-4f2b-bbe8-44159021090f/image.png)
R-CNN과 Faster R-CNN은 CPU 상에서 Region proposal을 진행하기 때문에 매우 느립니다. 따라서 Region proposal을 위한 모든 연산을 GPU 상에서 수행할 수 있도록 하는 RPN(Region Proposal Network)을 제안합니다. RPN은 Feature map을 보고 어느 곳에 물체가 있을 법한지 예측할 수 있도록 합니다. 즉, Selective search의 시간적 단점을 해결할 수 있는 대안입니다.
그 이후에는 Fast R-CNN과 같은 과정 거치므로, Faster R-CNN은 Region Proposal과 Fast R-CNN을 합쳤다고도 볼 수 있습니다.

## 4. 물체가 있을 법한 위치 찾기(Region Proposal)

### 3) Sliding Window

![](https://velog.velcdn.com/images/corinthionia/post/9ae6446a-8edb-4b7c-9dab-99051b2cd844/image.png)

이미지에서 다양한 형태의 윈도우를 슬라이딩하며 물체가 존재하는지 확인하는 방법입니다.
너무 많은 영역에 대해 확인해야 한다는 단점이 존재하며, GPU에서 적용하기 때문에 Faster-RCNN이 사용하는 방법입니다.

### 2) Selective Search

![](https://velog.velcdn.com/images/corinthionia/post/3f48a504-9bb8-4d46-b5ea-53839649189c/image.png)
인접한 영역끼리 유사성을 측정해 큰 영역으로 점차 통합해 나가는 방식입니다. CPU 기반에서 연산되기 때문에 한 장에 이미지에 대해 2초 가량의 시간이 걸리며, R-CNN과 Fast-R-CNN에서 사용되는 region proposal 방법입니다.

## Intersection over Union (IoU)

IoU는 두 바운딩 박스가 겹치는 비율을 의미합니다.![](https://velog.velcdn.com/images/corinthionia/post/462604ea-7672-4ca2-9c3a-cda51e923630/image.png)

IoU는 아래 두 가지 상황에 주로 사용됩니다.

- 성능 평가: mAP@0.5는 정답과 예측의 IoU가 50% 이상일 때 정답으로 판정하겠다는 의미
- NMS 계산: 같은 클래스끼리 IoU가 50% 이상일 때, 낮은 confidence의 box를 제거

### NMS (Non Maximum Suppression)

![](https://velog.velcdn.com/images/corinthionia/post/d0038731-cc2a-43ab-9f73-8eb76485f7fb/image.png)
객체 검출에서는 하나의 인스턴스에 하나의 bounding box가 적용되어야 합니다. 따라서 여러 개의 bounding box가 겹쳐 있는 경우에는 **하나로 합치는 방법이 필요**하기 때문에, IoU가 특정 임계점(threshold) 이상인 중복 box를 제거하는 과정을 말합니다.

<br/>

# RCNN 계열의 논문 리뷰

## R-CNN (CVPR 2014)

### RCNN의 동작 과정

- Selective Search를 이용해 2,000개의 RoI(Region of Interest) 추출합니다.
- 각 RoI에 대하여 wraping(Region들을 crop & reshape하여 모두 같은 크기로 맞춰 주는 작업)을 수행하여 동일한 크기의 입력 이미지로 변경합니다.
- Warped image를 CNN에 넣어(forward) 이미지 feature를 추출합니다.
- Feature를 SVM에 넣어 클래스(class) 분류 결과를 얻습니다.
  이때 각 클래스에 대해 독립적으로 훈련된 이진(binary) SVM을 사용합니다.
- Feature를 Bbox reg(Bounding box regressor)에 넣어 물체가 이미지의 어느 부분에 위치하는지도 파악할 수 있게 합니다.

### Bounding Box Regression

지역화(localization) 성능을 높이기 위해 bounding-box regressor(Bbox reg)를 사용합니다. 이는 bounding box의 중간 지점(x, y), 박스의 높이와 너비(h, w)에 해당하는 4개의 파라미터를 학습하여 linear regression을 진행합니다. 이를 통해 예측된 위치가 주어졌을 때 실제 ground truth를 정확히 예측할 수 있도록 학습합니다.

### R-CNN의 한계점

- 입력 이미지에 대하여 CPU 기반의 Selective Search를 진행해야 하므로 많은 시간이 소요됩니다.

- 전체 아키텍처에서 SVM, Regressor 모듈이 CNN과 분리되어 있습니다.

  - CNN은 고정되므로 SVM과 Bounding Box Regression 결과로 CNN을 업데이트할 수 없습니다. 즉, end-to-end 방식으로 학습할 수 없기 때문에 정확도가 낮습니다.

- 모든 RoI(Region of Interest)를 CNN에 넣어야 하기 때문에 2,000번의 CNN 연산이 필요합니다. 즉, 학습과 평가 과정에 많은 시간이 소요됩니다.

<br/>

## Fast R-CNN (ICCV 2015)

- 동일한 Region proposal을 이용하되, **이미지를 한 번만 CNN에 넣어** Feature Map을 생성합니다.
- 생성된 Feature map은 원본 이미지에서의 위치에 따른 정보를 포함하고 있기 때문에, Feature map으로 RoI projection을 시켜서 사물이 존재할 법한 위치를 Feature map 상에서 찾도록 만들 수 있는 것입니다!
- 이어서 RoI pooling을 거쳐서 Feature map 상에서 사물이 존재할 법한 위치에서 필요한 정보를 추출합니다.
- 결과적으로 추출된 Feature vector를 이용하여 실제로 Classification과 Bounding box regression을 진행합니다. 이때 Classification에는 일반적인 CNN에서 사용되는 Softmax가 쓰입니다. 또한 정확한 바운딩 박스의 위치 파악을 위해 Regression 모델이 사용됩니다.

### Fast R-CNN: RoI Pooling Layer

![](https://velog.velcdn.com/images/corinthionia/post/107e7fb8-101a-4634-841d-760ecb7bcd54/image.png)
기본적으로 분류를 위해서는 Fully connected layer를 사용해야 하는데, Fully connected layer의 입력으로 고정된 벡터가 들어가야 합니다.
따라서 항상 고정된 크기의 Feature vector를 뽑기 위해 각 RoI 영역에 대해 Max pooling을 활용하여 고정된 크기의 벡터를 생성합니다.

![](https://velog.velcdn.com/images/corinthionia/post/f3ddbd2d-51b6-4e43-8a64-990933210941/image.png)

예를 들어, 위 그림과같이 2 by 2 크기의 feature를 추출한다고 해 봅시다.

- 특정한 크기의 RoI feature map이 2 by 2로 적절히 나누어지게 영역을 구분합니다.
- 각각의 나누어진 영역 속에서 가장 큰 값을 선택합니다. 이렇게 하면 항상 고정된 크기의 Feature vector를 얻을 수 있습니다!

실제로 이를 이용하여 Classification과 Regression을 진행합니다. 다만 이러한 Fast R-CNN은 여전히 CPU에서 Region proposal을 진행하기 때문에 여전히 속도가 느리다는 bottleneck이 존재합니다.

<br/>

## Faster R-CNN (NIPS 2015)

Faster R-CNN은 병목(bottleneck)에 해당하던 Region proposal 작업을 RPN을 적용하여 GPU 장치에서 수행하도록 합니다.
R-CNN에서는 SVM, Regressor 모듈이 CNN과 분리되어 있어서 전체 아키텍처를 end-to-end로 학습하지 못한다는 단점이 있었는데, Faster R-CNN에서는 end-to-end의 학습 방식이 가능합니다.

- RPN 네트워크는 이미지의 특징을 추출하여 얻은 Feature map으로 물체가 있을 법한 곳의 위치를 찾습니다.
- 그러면 Classifier(detector network)는 기존의 Fast R-CNN의 구조를 따르면서 RPN 네트워크가 알려준 위치를 중심으로 분류와 회귀를 수행합니다.

이렇게 하면 물체가 있을 법한 위치를 구하는 과정도 GPU 상에서 수행할 수 있기 때문에 속도가 빨라질 뿐만 아니라, Feature map을 공유한다는 점에서 성능도 좋아지고, end-to-end 방식으로 학습이 가능합니다.

실제로 학습을 진행할 때 본 논문의 저자들은 RPN 네트워크와 Classifier를 번갈아가며(alternative) 학습을 진행하는데, 기본적으로 출력부터 입력까지 Back propagation 방식을 통해 Gradient를 계산할 수 있다는 장점이 있습니다.

따라서 성능과 시간 측면에서 모두 좋은 성능을 보이는 모델이라 할 수 있습니다.

### Region Proposal Networks (RPN)

![](https://velog.velcdn.com/images/corinthionia/post/844811e1-0610-4470-8ab2-9750ed5638b0/image.png)
RPN 네트워크는 Feature map이 주어졌을 때, k개의 앵커 박스(anchor box)를 이용하여 물체가 있을 법한 위치를 예측합니다. 또한 Sliding window를 거쳐 각 위치에 대해 Classification과 Regression을 수행합니다.

---

# UI detection 선행 연구

UI 컴포넌트를 인식하고 그 종류를 분류하는 연구는 객체 탐지 분야에서 전형적인 주제라고 합니다. 검색해 보니 참고할 만한 자료 몇 가지가 있어 아래 링크로 첨부하겠습니다.

- [How Do You Use Deep Learning to Identify UI Components?](https://www.alibabacloud.com/blog/how-do-you-use-deep-learning-to-identify-ui-components_597859)
- [Understanding User Interfaces with Screen Parsing](https://blog.ml.cmu.edu/2021/12/10/understanding-user-interfaces-with-screen-parsing/)

위 두 자료들이 프로젝트 방향성을 잡는 데에 많은 도움이 되었습니다. 이외에도 관련 연구를 많이 찾아봤는데, 모두 공통적으로 [Rico dataset](https://www.kaggle.com/datasets/onurgunes1993/rico-dataset) 이라고 불리는 오픈 데이터셋과 **R-CNN 계열**을 사용하여 모델을 구축했다는 것을 확인할 수 있었습니다.

따라서 졸업 프로젝트 딥러닝 모델 구축을 위해 [Rico dataset](https://www.kaggle.com/datasets/onurgunes1993/rico-dataset)과 Faster R-CNN을 사용하기로 결정했습니다.

### 구체적인 모델 선택 과정

처음에는 Faster R-CNN 대신 YOLO를 사용하려고 했습니다. 위에서도 잠깐 언급했는데 YOLO는 1-Stage detector로, 비교적 구현이 쉽고 속도가 빠르다는 장점이 있기 때문입니다. 실제로 YOLO는 속도가 빨라서 실시간 객체 인식에 사용된다고 하네요!

다만 YOLO와 Faster R-CNN의 차이점은, Bounding box의 위치를 표현하는 label 형식이 다르다는 것입니다. YOLO의 경우 Bounding box의 가운데 점을 (x, y) 점으로 잡는 반면, Faster R-CNN은 왼쪽 위 상단을 (x, y) 점으로 잡기 때문입니다.

우선 Bounding box의 좌표를 표시하는 방법에 대해 알아야 합니다.
![](https://velog.velcdn.com/images/corinthionia/post/6bb9e50e-cd1a-45d9-838f-eead88269955/image.jpeg)
위 그림처럼 보통 2가지 방식을 사용합니다. Corner coordinates 방식은 좌측상단, 우측하단의 좌표를 이용하여 Bbox를 표현하고, Center coordinates 방식은 Bbox의 중심 좌표와 너비, 높이 값을 사용합니다. 정확히 기억은 안 나지만 (ㅠㅠ) R-CNN은 Corner coordinates 방식이 적합하고, YOLO는 Center coordinates 방식이 적합하다고 합니다. 더 정확한 정보를 찾아보고 수정하겠습니다!

저희가 사용할 Rico dataset을 살펴보면, 좌측상단, 우측하단의 지점을 이용해 Bbox의 위치를 나타냅니다.

```json
{
  "bounds": [0, 0, 1440, 2560]
}
```

따라서 YOLO보다는 Faster R-CNN이 더 적합하다고 판단했습니다! 물론 상호간 변환하여 사용할 수도 있지만, 선행 연구들에서 Faster R-CNN을 사용했고, 변환하기에는 시간이 부족할 것이라 판단하여 Faster R-CNN을 사용하기로 결정했습니다 😄

---

## 데이터셋

위에서 말씀드렸듯이, 저희는 [Rico dataset](https://www.kaggle.com/datasets/onurgunes1993/rico-dataset)을 사용합니다. 이 데이터는 UI detection 연구에서 굉장히 많이 쓰이는 오픈 데이터셋입니다. 이 데이터셋은 10,000개 이상의 어플리케이션에서 70,000장의 스크린샷을 추출하여 제공하며 27개의 UI 컴포넌트로 분류할 수 있습니다.
![](https://velog.velcdn.com/images/corinthionia/post/915d83c8-63c2-45c0-ac95-f29c4f63dff1/image.png)

본격적으로 모델을 구축하기에 앞서, 구글 코랩(Colab)에서 쉽게 사용할 수 있도록 코랩과 구글 드라이브를 연동하여 데이터셋을 저장, 압축해제 하는 방법에 대해 알아봅시다!

### 코랩에서 Kaggle dataset 다운받고 압축 해제하기

1. 우선 캐글에 가입하여 프로필 탭의 `Your Profile > Account > API` 항목에서 `Create New API Token`을 누르면 API key가 포함된 `kaggle.json` 파일이 다운 받아집니다.
   ![](https://velog.velcdn.com/images/corinthionia/post/e1b123be-1d4c-48b3-93a3-1ad9fb8a20eb/image.png)

2. 코랩에서 새로운 노트북을 생성합니다.
3. 아래 명령어를 실행하여 kaggle을 설치합니다.
   ```ipynb
   ! pip install -q kaggle
   ```
4. 아래 코드를 실행하면 [파일 선택] 버튼이 나오는데, 버튼을 눌러 아까 다운받은 `kaggle.json` 파일을 업로드하면 됩니다.

   ```ipynb
   from google.colab import files

   files.upload()
   ```

5. `.kaggle` 이라는 이름의 새 폴더를 생성하고, `kaggle.json` 파일을 저장합니다.

   ```ipynb
   ! mkdir ~/.kaggle

   ! cp kaggle.json ~/.kaggle/
   ```

6. 파일의 권한을 변경합니다.
   ```ipynb
   ! chmod 600 ~/경로/.kaggle/kaggle.json
   ```
7. 코랩과 구글 드라이브를 연동(마운트)합니다.
   ```ipynb
   from google.colab import drive
    drive.mount('/content/drive')
   ```
8. 아까 생성한 `.kaggle` 폴더가 위치한 곳으로 이동합니다.
   ```ipynb
   cd /content/drive/MyDrive/경로/.kaggle
   ```
9. 데이터셋을 다운받습니다. 이때 저는 압축파일로 받아지더라구요!
   ```ipynb
   !kaggle datasets download -d onurgunes1993/rico-dataset --force
   ```
   저는 다른 사람과 공유된 드라이브에서 다운받으려 하다 보니 API key가 노출될 수 있다는 warning이 떠서 `--force` 옵션을 추가했습니다.
10. 다운받은 파일을 압축 해제합니다.
    ```ipynb
    !unzip rico-dataset.zip
    ```
    하... 이 과정에서 할 말이 좀 많습니다. 일단 압축 해제하는 데에 굉장히 오랜 시간이 걸립니다. 파일의 크기마다 다르겠지만 저는 약 4시간 정도 걸린 것 같습니다. 그 정도는 참을 만한데, 압축 해제 후 구글 드라이브에 업로드되는 데에도 굉~장~히 많은 시간이 걸립니다. 저는 다운부터 압축해제까지 약 11시간 가량 걸린 것 같아요... 🥲

아무튼 이렇게 인고의 시간을 거치시면 구글 드라이브에 압축해제된 파일을 확인하실 수 있습니다!

---

## Tencent Cloud GPU 사용하기

졸업 프로젝트 주제로 딥러닝을 많이 사용해서 그런지 학교에서 클라우드를 제공해 주었습니다. 검색해도 자료도 얼마 안 나오고 뭐가 뭔지 잘 모르겠어서 사용 방법을 정리해 보았습니다.

1. 클라우드 ID와 가상머신을 생성합니다.
   사실 교수님께서 제공해 주셔서 자세한 생성 방법은 저도 잘 모릅니다... ㅠ 저는 클라우드 ID, Password, Root account ID, 우분투 ID, 우분투 Password를 제공받았습니다.

2. Tencent Cloud에서 로그인을 진행합니다.
   순서대로 Root account ID, ID, Password를 입력하면 됩니다.
   ![](https://velog.velcdn.com/images/corinthionia/post/8fc44d78-3ae6-40e6-bb91-b44a01758f9b/image.png)

3. 메인화면 오른쪽 상단의 `Console` 로 이동하여 왼쪽 상단의 `Products > Cloud Virtual Machine`을 클릭합니다.
   ![](https://velog.velcdn.com/images/corinthionia/post/dc0c359a-07bd-4074-ac5a-c0a52f734223/image.png)

4. 그러면 가상머신들을 확인할 수 있는데, 켜고자 하는 가상머신의 `More > Instance Status > Start up` 을 선택하여 가상머신을 켜 줍니다.

---

## Reference

- [딥러닝 강의 2편 6시간 완성 - [카이스트 AI박사] - 컴퓨터 비전 인식모델 개발](https://www.youtube.com/watch?v=WZ0JyN7TQZM&list=PL7SDcmtbDTTzmNj_pygsOYUcB0gMmFUoE&index=5)
- [객체 검출(Object Detection) 딥러닝 기술: R-CNN, Fast R-CNN, Faster R-CNN 발전 과정 핵심 요약](https://youtu.be/jqNCdjOB15s)
- [Review of Deep Learning Algorithms for Object Detection](https://medium.com/zylapp/review-of-deep-learning-algorithms-for-object-detection-c1f3d437b852)
- [Easiest way to download kaggle data in Google Colab](https://www.kaggle.com/general/74235)
- [How Do You Use Deep Learning to Identify UI Components?](https://www.alibabacloud.com/blog/how-do-you-use-deep-learning-to-identify-ui-components_597859)
- [Understanding User Interfaces with Screen Parsing](https://blog.ml.cmu.edu/2021/12/10/understanding-user-interfaces-with-screen-parsing/)

---

### 이미지 출처

- https://www.arxiv-vanity.com/papers/1908.03673/
- https://youtu.be/jqNCdjOB15s
- https://medium.com/zylapp/review-of-deep-learning-algorithms-for-object-detection-c1f3d437b852
- https://towardsdatascience.com/non-maximum-suppression-nms-93ce178e177c
- https://towardsdatascience.com/region-of-interest-pooling-f7c637f409af

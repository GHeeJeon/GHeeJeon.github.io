---
layout: post
title:  "Python with Jupyter"
date:   2022-09-22 15:06:48 +0900
categories: python
---

<details>
<summary>개발환경(클릭)</summary>
<div markdown="1">

<br/>

![OS](https://img.shields.io/badge/OS-macOS%20Monterey-lightgrey)
![Language](https://img.shields.io/badge/Language-Python-%234B8BBE)
![Platform](https://img.shields.io/badge/Platform-Jupyter-%23EB7425)
![Library](https://img.shields.io/badge/Library-Matplotlib-%23306998)
</div>
</details>

<br/>

## 코드 및 부연설명

<br/>

```python
ModuleNotFoundError: No module named 'matplotlib'
```
> `matplotlib` 모듈이 설치되지 않았을 경우 발생합니다.  
> 명령어 **`!pip install matplotlib`** 로 설치하여 해결했습니다.

<br/>

```python
f = open('incheon_weather.csv', 'r', encoding ='CP949')
```
> **Windows** 는 한글을 `CP949` 방식으로 인코딩합니다.  
> **macOS** 는 한글을 `utf-8` 방식으로 인코딩합니다.  
> 따라서 **Windows** 에서 만든 `incheon_weather.csv` 를 **macOS** 에서 읽으면 **`UnicodeDecodeError`** 가 발생합니다.  
> **`'CP949'`** 로 인코딩 옵션을 지정하여 파일을 불러왔습니다.

<br/>

```python
if row[0].split('-')[1] == '01' and row[0].split('-')[2] == '07':
    high.append(float(row[-1]))
    low.append(float(row[-2]))
```
> `row[0]`, 즉  **`'YYYY-MM-DD'`** 로 이루어진 문자열의 `MM` 부분이 `01`이고, `DD` 부분이 `07` 일 경우,  
> 맨 뒤의 데이터인 **최고기온**을 `high` 에 추가하고,  
> 맨 뒤의 앞 데이터인 **최저기온**을 `low` 에 추가합니다.

<br/>

```python
print(len(high))
```
> 결과값은 117이 나오며, 이는 1904년부터 2022년, 총 117년간의 데이터를 의미합니다.  
> `high` 대신 `low` 로 변경해도 값은 117로 같습니다.

<br/>

```python
plt.rcParams['axes.unicode_minus'] = False
```
> 마이너스 부호가 깨질 경우 사용합니다.

<br/>

```python
plt.rc('font', family = 'NanumGothic')
```
> `맑은고딕` 에서 `나눔고딕`으로 변경하였습니다.  
> 해당 폰트가 설치되어있지 않다면 글씨가 깨집니다.

<br/>

```python
plt.suptitle('매년 1월 7일의 최고기온과 최저기온')
```
> 그래프의 제목을 나타내기 위해 사용합니다.

<br/>

```python
plt.xlabel('1904년을 기준으로 몇 년이 지났는가')
plt.ylabel('기온')
```
> 각각 x축과 y축의 이름을 지정하기 위해 사용합니다.

<br/>

```python
plt.plot(high, color='#ff91a4', label='최고기온', ls='-')
plt.plot(low, color='#ccccff', label='최저기온', ls='-')
plt.legend(loc=0)
```
> 좋아하는 색상인 페리윙클과 새먼핑크로 변경하였습니다.  
> `label` 과 `legend` 를 이용해 범례를 표기했습니다.  
> `ls` 에 지원되는 값은 다음과 같습니다.  
> '-', '--', '-.', ':', 'None', ' ',  '' , 'solid', 'dashed', 'dashdot', 'dotted'

<br/>

## 코드

<br/>

```python
import csv
from matplotlib import pyplot as plt

f = open('incheon_weather.csv', 'r', encoding ='CP949')
data = csv.reader(f)
next(data)
high = []
low = []

for row in data:
    if row[-1] != '' and row[-2] != '':
            if row[0].split('-')[1] == '01' and row[0].split('-')[2] == '07':
                high.append(float(row[-1]))
                low.append(float(row[-2]))

f.close()

# print(len(high))

plt.rcParams['axes.unicode_minus'] = False
plt.rc('font', family = 'NanumGothic')
plt.suptitle('매년 1월 7일의 최고기온과 최저기온')
plt.xlabel('1904년을 기준으로 몇 년이 지났는가')
plt.ylabel('기온')
plt.plot(high, color='#ff91a4', label='최고기온', ls='-')
plt.plot(low, color='#ccccff', label='최저기온', ls='-')
plt.legend(loc=0)
plt.show()

```
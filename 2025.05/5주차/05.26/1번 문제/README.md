# algorithm_js

# 📝 알고리즘 문제 풀이 - 2025-05-26

## 문제 📖

- **문제 링크:** [백준 - 단어 정렬](https://www.acmicpc.net/problem/1181)

- **문제 유형:** `문자열`,`정렬`

- **난이도:** 실버 5

- **풀이 시간:** ⏳ 10분 - 실제 걸렸던 시간

## ✍ 접근 방식

1. input에 담겨있는 문자열의 중복을 제거하기 위해 set을 이용하여 중복을 제거해주고 다시 배열로 만든다.
2. 정렬을 하면서 단어의 길이를 먼저 확인해주고 길이가 같은 경우 사전의 앞에 있는 단어가 앞에 나오게 해준다.
3. sortArr를 한 줄씩 출력한다.

`localeCompare`란? 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환합니다.
[localeCompare mdn문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

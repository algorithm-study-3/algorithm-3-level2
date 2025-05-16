import sys
from io import StringIO


sys.stdin = StringIO("""10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10
""")

input = sys.stdin.readline

여기서찾기_list_count = int(input())

여기서찾기 = (list(map(int, input().split(" "))))


def binary_search(arr, target):
  left, right = 0, len(arr) - 1
  while left <= right:
    mid = (left + right)// 2
    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      left = mid + 1
    else: 
      right = mid - 1
  return -1


후보들수=int(input())
후보들 = (list(map(int, input().split(" "))))

여기서찾기.sort()
# print(여기서찾기)

for element in 후보들:
    찾기 = 여기서찾기
    result = binary_search(찾기, element)
    
    if result == -1:
        print(0)
        continue
    
    # 이진탐색으로 찾은 위치에서 좌우로 몇 개인지 확인
    count = 1
    # 왼쪽 확장
    left_idx = result - 1
    while left_idx >= 0 and 찾기[left_idx] == element:
        count += 1
        left_idx -= 1

    # 오른쪽 확장
    right_idx = result + 1
    while right_idx < len(찾기) and 찾기[right_idx] == element:
        count += 1
        right_idx += 1

    print(count)


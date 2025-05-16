import sys
from io import StringIO


sys.stdin = StringIO("""5
4 1 5 2 3
5
1 3 7 9 5
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
for element in 후보들:
  if binary_search(여기서찾기, element) == -1:
    print(0)
  else:
    print(1)


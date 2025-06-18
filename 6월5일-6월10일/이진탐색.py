import sys
from io import StringIO
import bisect

sys.stdin = StringIO(
    """10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10"""
)


def is_existing_target_number_binary(target, array):
    left = 0
    right = len(array) - 1

    while left <= right:
        mid = (left + right) // 2
        if array[mid] == target:
            return mid
        if array[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1


input = sys.stdin.readline
배열길이 = int(input())
배열 = sorted(list(map(int, input().split(" "))))

찾는애들길이 = int(input())
찾는배열 = list(map(int, input().split(" ")))


for element in 찾는배열:

    print(bisect.bisect_right(배열, element) - bisect.bisect_left(배열, element))

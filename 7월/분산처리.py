import sys
from io import StringIO
import math

# 테스트용 입력
sys.stdin = StringIO(
    """123 100
"""
)


input = sys.stdin.readline

개수 = int(input())

for i in range(개수):
    a, b = list(map(int, input().strip().split(" ")))
    a %= 10

    pattern = []
    x = a

    while x not in pattern:
        pattern.append(x)
        x = (x * a) % 10  # 다음 숫자의 1의 자리 계산
    index = (b - 1) % len(pattern)
    print("마지막 자릿수는:", pattern[index])

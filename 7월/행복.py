import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """2
4
3 4.3
2 2.0
4 0.0
2 4.0
3
4 0.0
4 0.0
3 0.0
"""
)


input = sys.stdin.readline

개수 = int(input())

리스트 = list(map(int, input().strip().split(" ")))
print(max(리스트) - min(리스트))

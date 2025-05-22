import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO(
    """7 3
"""
)

input = sys.stdin.readline

n, k = list(map(int, input().split(" ")))

i = 0
리스트 = list(range(1, n))
result = []
while 리스트:
    i = (i + k - 1) % len(리스트)
    result.append(리스트.pop(i))
print(result)

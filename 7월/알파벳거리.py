import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """5
AAAA ABCD
ABCD AAAA
DARK LOKI
STRONG THANOS
DEADLY ULTIMO"""
)


input = sys.stdin.readline
n = int(input())

for i in range(n):
    print(f"Case #{i+1}: " + " ".join(list(reversed(input().strip().split(" ")))))

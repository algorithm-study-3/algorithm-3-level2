import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """3
this is a test
foobar
all your base"""
)


input = sys.stdin.readline
n = int(input())

for i in range(n):
    print(f"Case #{i+1}: " + " ".join(list(reversed(input().strip().split(" ")))))

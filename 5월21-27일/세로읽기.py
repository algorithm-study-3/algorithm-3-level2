import sys

from io import StringIO

# 테스트용 입력
sys.stdin = StringIO(
    """AABCDD
afzz
09121
a8EWg6
P5h3kx"""
)


input = sys.stdin.readline

배열리스트 = []
for element in range(5):
    배열리스트.append(list(input().strip()))

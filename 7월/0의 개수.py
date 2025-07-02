import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """3
0 10
33 1005
1 4"""
)

input = sys.stdin.readline

개수 = int(input())


for i in range(개수):
    count = 0
    n, m = map(int, input().strip().split(" "))
    for j in range(n, m + 1):
        count += str(j).count("0")
    print(count)

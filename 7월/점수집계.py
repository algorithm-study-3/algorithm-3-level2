import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """4
10 8 5 7 9
10 9 10 9 5
10 3 5 9 10
1 2 3 6 9"""
)


input = sys.stdin.readline

배열 = []
for i in range(int(input())):
    배열 = sorted(map(int, input().strip().split(" ")))

    if 배열[4] - 배열[1] >= 4:
        print("kin")
        continue
    배열.remove(배열[0])
    배열.remove(배열[-1])
    print(sum(배열))

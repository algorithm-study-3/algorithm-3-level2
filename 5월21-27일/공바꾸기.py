import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO(
    """5 4
1 2
3 4
1 4
2 2"""
)

input = sys.stdin.readline

n, m = map(int, input().split(" "))

바구니 = [i for i in range(1, n + 1)]

for element in range(m):
    시작, 끝 = list(map(int, input().strip().split(" ")))
    temp = 바구니[시작 - 1]
    바구니[시작 - 1] = 바구니[끝 - 1]
    바구니[끝 - 1] = temp

print(" ".join(map(str, 바구니)))

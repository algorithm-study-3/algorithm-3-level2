import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO("""7 3
""")

input = sys.stdin.readline

n, k = list(map(int, input().split(" ")))

idx = 0  # 시작 인덱스

배열 = list(range(1, n+1))
순열 = []
while 배열:
  idx = (idx + k -1) % len(배열)
  순열.append(배열.pop(idx))

print(순열)
  
# del 배열[2]
# print(배열)
# del 배열[2+2]
# print(배열)
# del 배열[(2+2+2)%len(배열)]
# print(배열)
# del 배열[(2+2+2+2)%len(배열)]
# print(배열)
# del 배열[(2+2+2+2+2)%len(배열)]
# print(배열)
# del 배열[(2+2+2+2+2+2)%len(배열)]
# print(배열)

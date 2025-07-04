import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO("""1 2 3""")


input = sys.stdin.readline

a, b, c = map(int, input().split(" "))


if a + b + c >= 100:
    print("OK")
else:
    최소값 = min(a, b, c)
    if 최소값 == a:
        print("Soongsil")
    if 최소값 == b:
        print("Korea")
    if 최소값 == c:
        print("Hanyang")

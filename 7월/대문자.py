import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO("""3 3""")


input = sys.stdin.readline
n, m = map(int, input().split(" "))

if m == 1 or m == 2:
    print("NEWBIE!")
elif n >= m:
    print("OLDBIE!")
else:
    print("TLE!")

import sys

from io import StringIO
import math

# 테스트용 입력
sys.stdin = StringIO(
    """60
70
50"""
)


input = sys.stdin.readline

result = []
for i in range(3):
    result.append(int(input().strip()))
a, b, c = result


if a == b and b == c and a == 60:
    print("Equilateral")
elif a + b + c == 180 and (a == c or b == c):
    print("Isosceles")
elif a + b + c == 180 and a != c and b != c:
    print("Scalene")
elif a + b + c != 180:
    print("Error")

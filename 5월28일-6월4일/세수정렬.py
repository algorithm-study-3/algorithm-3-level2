import sys

from io import StringIO
import math

# 테스트용 입력
sys.stdin = StringIO("""3 1 2""")


input = sys.stdin.readline


answer = list(map(int, input().strip().split(" ")))

print(" ".join(map(str, sorted(answer))))

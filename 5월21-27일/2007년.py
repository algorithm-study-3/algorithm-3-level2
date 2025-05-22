import sys

from io import StringIO


def 계산하기(month, day):
    count = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    이전달까지의합 = sum(count[: month - 1])
    return 이전달까지의합 + day


days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

# 테스트용 입력
sys.stdin = StringIO("""9 2""")

input = sys.stdin.readline

month, day = map(int, input().split(" "))

print(days[(계산하기(month, day) - 1) % 7])

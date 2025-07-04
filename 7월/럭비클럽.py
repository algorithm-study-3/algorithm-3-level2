import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """Joe 16 34
Bill 18 65
Billy 17 65
Sam 17 85
# 0 0"""
)


input = sys.stdin.readline


while True:
    이름, 나이, 몸무게 = input().strip().split(" ")
    if 이름 == "#":
        break
    if int(나이) > 17 or int(몸무게) >= 80:
        print(이름, "Senior")
    else:
        print(이름, "Junior")

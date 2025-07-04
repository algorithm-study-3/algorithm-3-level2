import sys

from io import StringIO


# 테스트용 입력
sys.stdin = StringIO(
    """5
powdered Toast Man
skeletor
Electra Woman and Dyna Girl
she-Ra Princess of Power
darth Vader"""
)


input = sys.stdin.readline
n = int(input())
for i in range(n):
    문장 = input().strip()
    print(문장[0].upper() + 문장[1:])

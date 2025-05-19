import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO("""7 3
""")

input = sys.stdin.readline

n, k = list(map(int, input().split(" ")))


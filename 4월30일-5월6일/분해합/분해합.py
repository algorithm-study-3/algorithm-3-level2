import sys
from io import StringIO


# 테스트용 입력
sys.stdin = StringIO("""500""")


input = sys.stdin.readline

count = int(input())
시작 = 665

while True:
  시작 += 1
  if "666" in str(시작): 
    count -= 1
    
  if count == 0:
    break
print(시작)

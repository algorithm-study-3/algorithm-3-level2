import sys
from io import StringIO


# 18,4 6,2  4,-1 9,3 11,3

# 18 = 5 5 5 3
# 6 = 3 3
# 4 = 안됨
# 9 = 3 3 3 => 5로 나누면 나머지 4 => 4를 3으로 나누면 나머지 1 => 1은 남아버려 .
# 11 = 5 3 3 -> 5로 나누면 나머지 1 , 나머지 나오면 3부터 보기? 일단? 


# 테스트용 입력
sys.stdin = StringIO("""11""")


input = sys.stdin.readline

count = int(input())
answer = 0 


# 1차: 5kg 중심
몫 = count // 5
나머지 = count % 5
if 나머지 % 3 == 0:
    answer = 몫 + 나머지 // 3
    print(answer)
    exit()

# 2차: 3kg 중심
몫 = count // 3
나머지 = count % 3
if 나머지 % 5 == 0:
    answer = 몫 + 나머지 // 5
    print(answer)
    exit()

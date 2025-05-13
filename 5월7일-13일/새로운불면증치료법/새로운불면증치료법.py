import sys
from io import StringIO


# 테스트용 입력
sys.stdin = StringIO("""5
1
2
11
1295
1692
""")

input = sys.stdin.readline

개수 = int(input())


for i in range(1, 개수+1):
    열개 = [1,2,3,4,5,6,7,8,9,0]
    숫자 = input().strip()
    
    count = 1
    초기값 = int(숫자)
    while True:
        for 요소 in 숫자:
            숫자요소 = int(요소)
            if 숫자요소 in 열개:
                열개.remove(숫자요소)
        if len(열개) == 0:
            print(f"#{i} {숫자}")
            break
        
        숫자 = str(초기값 * count)
        count += 1 
       

# 다른 풀이 
import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO("""5
1
2
11
1295
1692
""")

input = sys.stdin.readline

T = int(input())

for i in range(1, T + 1):
    N = int(input())
    seen = set()
    count = 1

    while True:
        current = N * count
        seen.update(str(current))  # 문자열로 바꾼 뒤 set에 추가 (중복 자동 제거)
        if len(seen) == 10:  # 0~9 모두 봤으면
            print(f"#{i} {current}")
            break
        count += 1

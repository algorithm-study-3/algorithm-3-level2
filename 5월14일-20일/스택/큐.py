import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO("""15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front
""")


# push X: 정수 X를 큐에 넣는 연산이다.
# pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
# size: 큐에 들어있는 정수의 개수를 출력한다.
# empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
# front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
# back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

# 1
# 2
# 2
# 0
# 1
# 2
# -1
# 0
# 1
# -1
# 0
# 3

input = sys.stdin.readline

count = int(input())

큐= []
for i in range(count):
  명령어 =  input().strip().split(" ")
  if len(명령어) == 2:
    큐.append(int(명령어[1]))
  else:
    if 명령어[0] == "front":
      print(큐[0] if 큐 else -1)
    elif 명령어[0] == "back":
       print(큐[-1] if 큐 else -1)
    elif 명령어[0] == "size":
      print(len(큐))
    elif 명령어[0] == "empty":
      print(0 if 큐  else 1)
    elif 명령어[0] == "pop":
      if 큐:
        print(큐[0])
        del 큐[0]
      else: 
        print(-1)

    
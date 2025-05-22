import sys

from io import StringIO

# 테스트용 입력
sys.stdin = StringIO(
    """30 20
10 10
10 20"""
)


input = sys.stdin.readline

lista = []
listb = []
for i in range(3):
    a, b = list(map(int, input().strip().split(" ")))
    lista.append(a)
    listb.append(b)

for element in lista:
    if lista.count(element) == 1:
        print(element, end=" ")
for element in listb:
    if listb.count(element) == 1:
        print(element)

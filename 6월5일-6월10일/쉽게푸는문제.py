import sys

from io import StringIO

sys.stdin = StringIO("""3 7""")
input = sys.stdin.readline
sequence = []
num = 1

while len(sequence) < 10:  # 일단 10개만 만들어보자!
    sequence.extend([num] * num)
    num += 1

print(sequence)

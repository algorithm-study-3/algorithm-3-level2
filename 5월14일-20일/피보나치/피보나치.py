# import sys
# from io import StringIO

# # 테스트용 입력
# sys.stdin = StringIO(
#     """2
# 6
# 22
# """
# )

# input = sys.stdin.readline

# count = int(input())

# 숫자배열 = [int(input()) for i in range(count)]

# count0 = 0
# count1 = 0


# def solution(n):
#     dp = [0] * 401
#     dp[0] = 0
#     dp[1] = 1

#     if n == 0:
#         return (1, 0)
#     if n == 1:
#         return (0, 1)
#     for i in range(2, n + 1):
#         if i - 1 == 0 or i - 2 == 0:
#             count0 += 1
#         if i - 1 == 1 or i - 2 == 1:
#             count1 += 1
#         dp[i] = dp[i - 1] + dp[i - 2]
#     return (count0, count1)


# for 숫자 in 숫자배열:
#     print(solution(숫자))

# int fibonacci(int n) {
#     if (n == 0) {
#         printf("0");
#         return 0;
#     } else if (n == 1) {
#         printf("1");
#         return 1;
#     } else {
#         return fibonacci(n‐1) + fibonacci(n‐2);
#     }
# }


import sys
from io import StringIO

# 테스트용 입력
sys.stdin = StringIO(
    """8 1 7 2 6 3 5 4
"""
)

input = sys.stdin.readline

input_list = list(map(int, input().split(" ")))


if sorted(input_list) == input_list:
    print("ascending")
elif sorted(input_list, reverse=True) == input_list:
    print("descending")
else:
    print("mixed")

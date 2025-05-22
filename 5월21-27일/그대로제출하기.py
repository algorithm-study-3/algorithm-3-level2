import sys
from io import StringIO
import math
from collections import Counter

sys.stdin = StringIO(
    """1
4000"""
)
input = sys.stdin.readline

n = int(input())
nums = sorted([int(input()) for _ in range(n)])

# 산술 평균
print(round(sum(nums) / n))

# 중앙값
print(nums[n // 2])

# 최빈값
counter = Counter(nums)

freq_list = counter.most_common()  # [(값, 빈도), ...] ← 빈도 내림차순 자동 정렬됨
max_freq = freq_list[0][1]

print(counter, freq_list)

# 최빈값들만 따로 추려서 정렬
most_common_vals = [num for num, freq in freq_list if freq == max_freq]
most_common_vals.sort()

# 두 번째로 작은 값 출력
if len(most_common_vals) >= 2:
    print(most_common_vals[1])
else:
    print(most_common_vals[0])

# 범위
print(nums[-1] - nums[0])

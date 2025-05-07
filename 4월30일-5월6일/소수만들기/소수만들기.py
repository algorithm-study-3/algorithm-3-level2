from itertools import combinations
def 소수(num):
    if num == 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def solution(nums):
    count = 0
    for i in combinations(nums, 3):
        if 소수(sum(i)):
            print(sum((i)))
            count += 1 
    return count
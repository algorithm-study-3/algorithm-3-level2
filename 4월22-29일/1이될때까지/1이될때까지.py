def solution(n,k):
  count = 0
  num = n
  while num > 1:
    if num % k == 0:
      num = num // k
      count += 1
    else : 
      num = num - 1
      count += 1

  return count

print(solution(25, 5))



n, k = map(int, input().split())
result = 0

while True:
  target = (n // k) * k
  result += (n - target)
  n = target

  if n < k:
    break
  result += 1
  n //= k

  result += n - 1
  print(result)
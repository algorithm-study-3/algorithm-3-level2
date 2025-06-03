input = 20


def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False
    return True


def find_prime_list_under_number(number):
    answer = []
    for i in range(1, number):
        if is_prime(i):
            answer.append(i)
    print(answer)


result = find_prime_list_under_number(input)
print(result)

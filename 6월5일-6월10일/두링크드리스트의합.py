class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        cur = self.head
        while cur.next is not None:
            cur = cur.next
        cur.next = Node(value)


def get_sum(linked_list):
    숫자 = ""
    current_node = linked_list.head
    while current_node is not None:
        숫자 += str(current_node.data)
        current_node = current_node.next
    return int(숫자)


def get_linked_list_sum(linked_list_1, linked_list_2):
    return get_sum(linked_list_1) + get_sum(linked_list_2)


linked_list = LinkedList(6)
linked_list.append(7)
linked_list.append(8)

linked_list_2 = LinkedList(3)
linked_list_2.append(5)
linked_list_2.append(4)

print(get_linked_list_sum(linked_list, linked_list_2))

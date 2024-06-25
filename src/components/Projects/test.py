def foo(arr):
    for i in range(0,len(arr)//2):
        tmp = arr[i] 
        arr[i] = arr[len(arr) - i - 1] 
        arr[len(arr) - i - 1] = tmp 
        return arr

arr = [1, 2, 3, 4, 5]

arr = foo(arr)

for i in range(0, len(arr)): 
    print(arr[i], end=", ")
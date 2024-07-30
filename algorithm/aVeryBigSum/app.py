def a_very_big_sum(ar):
    result = 0
    for i in ar:
        result += i
        
    return result

ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
print(a_very_big_sum(ar))
    
    
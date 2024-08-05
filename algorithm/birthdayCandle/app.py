#
# Complete the 'birthdayCakeCandles' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY candles as parameter.
#

def birthdayCakeCandles(candles):
    # Write your code here
    max_count = 0
    max_candle = 0
    
    for i in candles:
        if(i > max_candle):
            max_candle = i
            
    for i in candles:
        if(i == max_candle):
           max_count +=1
           
    return max_count

my_arr =  [3, 2, 1, 3]
print(birthdayCakeCandles(my_arr))
        
             
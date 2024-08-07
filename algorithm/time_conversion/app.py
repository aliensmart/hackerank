#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Write your code here
    [hours, minutes, secondPeriod] = s.split(":")
    
    
    period =  secondPeriod[-2:]
    seconds = secondPeriod[0:-2]
    
    if(period == "AM"):
        hours = "00" if hours == "12" else hours
    else:
        hours = hours if hours == "12" else str(int(hours) + 12)
        

    return f"{hours}:{minutes}:{seconds}"
    
    
    
    
theTime = "07:05:45AM"
timeConversion(theTime)
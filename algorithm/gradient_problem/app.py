
def gradingStudents(grades):
    # Write your code here
    roundVals = []
    
    for grade in grades:
        if(grade < 38 or grade % 5 == 0):
            print('in modulus')
            roundVals.append(grade)
        else:
            print('multiple')
            next_multiple = ((grade + 4) // 5) * 5 # 4 because it is 5 -1
            newVal = grade if next_multiple - grade >= 3 else next_multiple
            roundVals.append(newVal)
            
    return roundVals


grades = [73, 67, 38, 33]

print(gradingStudents(grades))
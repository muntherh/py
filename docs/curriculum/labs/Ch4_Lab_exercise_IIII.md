### Cell 1 [code] In [ ]:
```python
A university wants to decide whether to conduct physical classes after three consecutive days of rain.

Write a Python program that asks the user to enter the rainfall recorded on each day (in mm)
and then calculates the average rainfall and total rainfall.

    The program should make a decision based on the following rules:

1. If the average rainfall is 30 mm or more, physical classes are canceled.

2. Otherwise, if the average rainfall is 20 mm or more, or the rainfall on any single day is 40 mm or more, 
display "Weather conditions require further assessment."
3. Otherwise, if the total rainfall over the three days is less than 15 mm, 
display "Rainfall has been low over the three days."     
4. Otherwise, display "Physical classes can proceed."
```

### Cell 2 [code] In [22]:
```python
day1 = float(input('Enter the rainfall for day1 (in mm): '))
day2 = float(input('Enter the rainfall for day2 (in mm): '))

day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = day1+day2+day3

avg = total/3

print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')
```
OUTPUT:
```
Total =  13.0
Average =  4.333333333333333
Rainfall has been low over the three days.
```

### Cell 3 [code] In [ ]:
```python
# Uses a while loop to input rainfall for three days.
```

### Cell 4 [code] In [2]:
```python
#day1 = float(input('Enter the rainfall for day1 (in mm): '))
#day2 = float(input('Enter the rainfall for day2 (in mm): '))

#day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = 0
count = 0
while count<3:
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total+days
    avg = total/days   

    count+=1
print('Total = ', total)
print('Average = ', avg)      

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or days>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')

 
```
OUTPUT:
```
Total =  120.0
Average =  3.0
Weather conditions require further assessment.
```

### Cell 5 [code] In [29]:
```python
#day1 = float(input('Enter the rainfall for day1 (in mm): '))
#day2 = float(input('Enter the rainfall for day2 (in mm): '))

#day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = 0
#count = 0
for i in range(3):
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total+days
    avg = total/days   

    #count+=1
print('Total = ', total)
print('Average = ', avg)      

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')

 
```
OUTPUT:
```
Total =  15.0
Average =  3.0
physical classes can proceed
```

### Cell 6 [code] In [ ]:
```python
# if rainfall reaches 50 mm or more on any day, display "Heavy rainfall detected. Stop data collection." and exit the loop using break.
```

### Cell 7 [code] In [35]:
```python
# day1 = float(input('Enter the rainfall for day1 (in mm): '))
#day2 = float(input('Enter the rainfall for day2 (in mm): '))

#day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = 0
#count = 0
for i in range(3):
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total+days
    avg = total/days  
    if total>=50:
        print('Heavy rainfall detected. Stop data collection')
        break

    #count+=1
print('Total = ', total)
print('Average = ', avg)  



if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')

 
```
OUTPUT:
```
Total =  15.0
Average =  3.0
physical classes can proceed
```

### Cell 8 [code] In [ ]:
```python
# You can use continue to skip processing for a day when the rainfall is negative or invalid and move to the next iteration of the while loop.
# For example, the program below asks the user to re-enter rainfall if a negative value is entered.
```

### Cell 9 [code] In [36]:
```python
# day1 = float(input('Enter the rainfall for day1 (in mm): '))
#day2 = float(input('Enter the rainfall for day2 (in mm): '))

#day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = 0
#count = 0
for i in range(3):
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total+days
    avg = total/days  
    if total<0:
        print('Invalid rainfall. Please enter a non-negative value.')
        continue
    if total>0:
        print('Heavy rainfall detected. Stop data collection.')
        break

    #count+=1
print('Total = ', total)
print('Average = ', avg)  



if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')

 
```
OUTPUT:
```
Invalid rainfall. Please enter a non-negative value.


Heavy rainfall detected. Stop data collection.
Total =  49.0
Average =  0.98
physical classes can proceed
```

### Cell 10 [code] In [ ]:
```python
 
```

### Cell 11 [code] In [ ]:
```python
 
```

### Cell 12 [code] In [ ]:
```python
Write a Python program using a while loop to help students track their Python practice hours over seven days.

     - Accept the number of hours a student practices Python each day.
     - Calculate the total practice hours.
     - Display the total practice hours.
     - If the total hours are 10 or more, display "Good practice!"; otherwise, display "Need more practice!".

    
Then convert the program to use a for loop.     
```

### Cell 13 [code] In [7]:
```python
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    count+=1

if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
```
OUTPUT:
```
Good Practice!
Total hours =  14.0
```

### Cell 14 [code] In [ ]:
```python
 
```

### Cell 15 [code] In [ ]:
```python
 
```

### Cell 16 [code] In [8]:
```python
total_hours = 0
count = 0
for count in range(7):
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    
if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
```
OUTPUT:
```
Good Practice!
Total hours =  14.0
```

### Cell 17 [code] In [ ]:
```python
 
```

### Cell 18 [code] In [ ]:
```python
 
```

### Cell 19 [code] In [ ]:
```python
# break statement
```

### Cell 20 [code] In [2]:
```python
while True:
    line = input('Type done ')
    if line == 'true':
        break
    print(line)

print('Done')
```
OUTPUT:
```
a


Done
```

### Cell 21 [code] In [ ]:
```python
 
```

### Cell 22 [code] In [ ]:
```python
Write a Python program using a while loop to help students track their Python practice hours over seven days.

     - Accept the number of hours a student practices Python each day.
     - Continue entering hours until the user enters -1.
     - Calculate the total practice hours.
     - Display the total practice hours.
     - If the total hours are 10 or more, display "Good practice!"; otherwise, display "Need more practice!".

    
Then convert the program to use a for loop.     
```

### Cell 23 [code] In [13]:
```python
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
        
    if num_hours==-1:
        break
        print('Stop entering practice hours!')
    total_hours = total_hours + num_hours
    count+=1
print('Total hours = ', total_hours)

if total_hours>=10:
    print('Good Practice!')
else:    
    print('Need more Practice!')
    
```
OUTPUT:
```
Total hours =  0
Need more Practice!
```

### Cell 24 [code] In [6]:
```python
i = 0
while i < 3:
    user = input('Enter Values ')

    if user == 'Ali':
        print('Yes')
        break

    print(i)
    i += 1
```
OUTPUT:
```
0


1


Yes
```


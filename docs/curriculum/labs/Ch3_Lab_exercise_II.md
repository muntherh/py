### Cell 1 [code] In [1]:
```python
x = int(input('Number 1 = '))

result = "Correct Answer" if x>100 else "Wrong Answer"

print('The Result is ', result)
```
OUTPUT:
```
Number 1 = 200
The Result is  Correct Answer
```

### Cell 2 [code] In [ ]:
```python
 
```

### Cell 3 [code] In [ ]:
```python
 
```

### Cell 4 [code] In [ ]:
```python
What is the output of:

x=1
print(x)
print(int(x),'a')
```

### Cell 5 [markdown] 
Question:
Write a program to read the total number of students in a class and the number of students attending online.

Calculate how many students are attending offline (on campus).

Calculate the percentage of online students.

Print both results.
Sample output:
IMAGES: ['data:image/png;base64,iVBORw0KGgoAAAANSU... len=26126']

### Cell 6 [code] In [ ]:
```python
 
```

### Cell 7 [code] In [ ]:
```python
 
```

### Cell 8 [code] In [7]:
```python
# Read the total number of students and online attendees
total_students = int(input("Enter the total number of students in the class: "))
online_students = int(input("Enter the number of students attending online: "))

# Calculate the number of students attending offline
offline_students = total_students - online_students

# Calculate the percentage of online students
# (Multiplied by 100 to get the percentage value)
online_percentage = (online_students / total_students) * 100

# Print both results
print(f"\nNumber of students attending offline: {offline_students}")
print(f"Percentage of online students: {online_percentage:.1f}%")
```
OUTPUT:
```
Number of students attending offline: 23
Percentage of online students: 11.5%
```

### Cell 9 [code] In [ ]:
```python
 
```

### Cell 10 [code] In [ ]:
```python
# E.g. 1:
Ask the user to enter 'yes' or 'no'. 
If it is raining or there is no transport,
then attend the online class.
Otherwise, attend an offline class on campus.
```

### Cell 11 [code] In [3]:
```python
user = input('Enter Yes or No:\t')
case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
```
OUTPUT:
```
Enter Yes or No:	Yes
Stay on Campus
Check your status!!
```

### Cell 12 [code] In [5]:
```python
#user = input('Enter Yes or No:\t')
case1 = input('Case is raining or not raining:\t')
case2 = input('no transport / transport:\t')
if case1 == 'raining' and case2 == 'no transport':
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
```
OUTPUT:
```
Case is raining or not raining:	raining
no transport / transport:	transport
Stay on Campus
Check your status!!
```

### Cell 13 [code] In [ ]:
```python
# Alternative Execution
# Single Line if statement(conditional expression):
```

### Cell 14 [code] In [ ]:
```python
Question:
Write a single-line Python statement that:
reads two integers from the user, finds the larger number, and prints it to the screen.
```

### Cell 15 [code] In [ ]:
```python
 
```

### Cell 16 [code] In [ ]:
```python
 
```

### Cell 17 [code] In [ ]:
```python
 
```

### Cell 18 [code] In [21]:
```python
n = int(input('enter number 1'))
n2 = int(input('enter number 2'))
result = n if n>n2 else n2
print('The larger no. is ', result)
```
OUTPUT:
```
The larger no. is  12
```

### Cell 19 [code] In [ ]:
```python
Question:

Write a single-line statement that reads a student's final score (out of 100)
and prints "Pass" if the score is 50 or higher, or "Fail" if it is lower.
```

### Cell 20 [code] In [22]:
```python
n = int(input('enter number 1'))

result = 'Pass' if n>=50 else 'Fail'
print(result)
```
OUTPUT:
```
Pass
```

### Cell 21 [code] In [ ]:
```python
# Chained conditions 
```

### Cell 22 [code] In [ ]:
```python
# Example
Number type check: ask the user to enter a number.
If the number is greater than zero, 
then display a positive number
If the number is less than zero, 
then display a negative number
Otherwise, display zero
```

### Cell 23 [code] In [7]:
```python
number = int(input('Enter a number = '))
if number>0:
    print('a positive number')
elif number<0:
    print('a negative number')
else:
    print('Display zero!')
    
```
OUTPUT:
```
Enter a number = 0
Display zero!
```

### Cell 24 [markdown] 
Write a Python program:

Ask the student to enter their daily study hours.

Calculate total weekly study hours.

Display total weekly study hours.

Sample Output:
IMAGES: ['data:image/png;base64,iVBORw0KGgoAAAANSU... len=12726', 'data:image/png;base64,iVBORw0KGgoAAAANSU... len=12098']

### Cell 25 [code] In [8]:
```python
daily_hours = float(input('Enter Your Daily Hours:\t'))
total_weekly = daily_hours*7
if daily_hours >= 35:
    print('Very Hardworking')
elif daily_hours >= 20:
    print('Good')
else:
    print('Needs Improvement')

print('Total Weekly Hours = ', total_weekly)    
    
```
OUTPUT:
```
Enter Your Daily Hours:	5.5
Needs Improvement
Total Weekly Hours =  38.5
```

### Cell 26 [code] In [ ]:
```python
 
```

### Cell 27 [code] In [5]:
```python
daily_hours = float(input('Enter Your Daily Hours:\t'))
weekly_hours = daily_hours*7
# Display total weekly study hours
print(f"\nTotal weekly study hours: {weekly_hours:.1f}")

if weekly_hours >=35:
    print('Very Hardworking.')
elif weekly_hours >=20:
    print('Good.')
else:
    print('Needs Improvement')

print('Total weekly Hours = ', weekly_hours)    
```
OUTPUT:
```
Total weekly study hours: 38.5
Very Hardworking.
Total weekly Hours =  38.5
```

### Cell 28 [code] In [ ]:
```python
 
```

### Cell 29 [code] In [ ]:
```python
# E.g. 2:
A student has a test score.
Read/ accept the test marks and the number of hours, and display the final marks.
    
If the student studies more hours, they get bonus marks.

If study hours are greater than or equal to 5, add 10 bonus marks

If study hours are greater than or equal to 3, add 5 bonus marks

Otherwise, no bonus
```

### Cell 30 [code] In [ ]:
```python
 
```

### Cell 31 [code] In [ ]:
```python
# Step 1: Read and accept the inputs from the user
marks = float(input("Enter the test marks: "))
hours = float(input("Enter the number of study hours: "))

# Step 2: Determine the bonus based on study hours
if hours >= 5:
    bonus = 10
elif hours >= 3:
    bonus = 5
else:
    bonus = 0


final_marks = marks + bonus

print("The final marks are:", final_marks)
```

### Cell 32 [code] In [ ]:
```python
 
```

### Cell 33 [code] In [ ]:
```python
 
```


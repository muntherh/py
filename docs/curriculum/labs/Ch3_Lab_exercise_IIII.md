### Cell 1 [code] In [ ]:
```python
Identify the datatypes: 
1.	456738 
2.	10.3
3.	2.1
4.	1.0
5.	3J
6.	4 + 5j
7.	true 
8.	False 
9.	“Hello”
10.	 “10.12”
```

### Cell 2 [code] In [ ]:
```python
Identify the correct declaration of a variable 
1.	A -value
2.	a- value
3.	xyz- value
4.	name-value
5.	hello -value
6.	true-value
7.	false- value
8.	False-key word
9.	@123
10. _value-1
11. _1 
```

### Cell 3 [code] In [ ]:
```python
Find the output 
A= “Hi”
B=3
C=A*B
Print(C)
```

### Cell 4 [code] In [ ]:
```python
A= “Hi”
B=3
C=A+B
Print(C)
```

### Cell 5 [code] In [ ]:
```python
a=20  
b=4
c=100
d=2
e=a+(b*c)/d
e
```

### Cell 6 [code] In [ ]:
```python
a=2  
b=4
c="UTAS"
d=2
e=(d*c)
f=(a+d)

print(e)
print (f)
```

### Cell 7 [code] In [6]:
```python
a=2  
b=4
c="UTAS"
d=2
e=(d*c)
f=(a+d)

print(e)
print (f)
```
OUTPUT:
```
UTASUTAS
4
```

### Cell 8 [code] In [ ]:
```python
Write a program to read the marks from the user: Mark1, Mark2. Calculate the total marks and the average. Print the average and total marks. 
```

### Cell 9 [code] In [ ]:
```python
Q3:
```

### Cell 10 [code] In [ ]:
```python
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

if num1 >= num2 and num1 >= num3:
    largest = num1

elif num2 >= num1 and num2 >= num3:
    largest = num2

else:
    largest = num3

print("Largest number:", largest)
```

### Cell 11 [code] In [ ]:
```python
Q4
```

### Cell 12 [code] In [7]:
```python
name = input('Enter name ')
id = input('Enter ID ')
quiz = float(input('Quiz marks '))
mid = float(input('MID marks '))
final = float(input('Final marks '))

total = quiz + mid + final

if total >= 90:
    Grade = 'A'
elif total >= 80 and total <=89:
    Grade = 'B'
elif total >=70 and total <=79:
    Grade = 'C'
elif total >= 60 and total <= 69:
    Grade = 'D'
elif total<60:
    Grade = 'F'

print('Total marks = ', total)
print('Your grade = ', Grade)
    
    
```
OUTPUT:
```
Total marks =  63.0
Your grade =  D
```

### Cell 13 [code] In [ ]:
```python
Q5
```

### Cell 14 [code] In [11]:
```python
num1 = float(input('Num 1:\t '))
num2 = float(input('Num 2:\t '))
Choice = int(input('Enter your choice:\t '))

if Choice == 1:
    result = num1 + num2
    print('Result ', result)

elif Choice == 2:
    result = num1 - num2
    print('Result ', result) 

elif Choice == 3:
    result = num1 * num2
    print('Result ', result)

elif Choice == 4:
    result = num1 % num2
    print('Result ', result)

elif Choice == 5:
    result = num1 / num2
    print('Result ', result)

else:
    print('Error')
```
OUTPUT:
```
Result  1.0
```

### Cell 15 [code] In [ ]:
```python
# Nested Conditions
```

### Cell 16 [code] In [ ]:
```python
Example
Write a Python program to read a student’s attendance percentage and mark.

If attendance is 75% or above, check the mark.
If the mark is 50 or above, print “Passed”.
If attendance is below 75%, print “Not Eligible”.
```

### Cell 17 [code] In [ ]:
```python
attendance = float(input("Enter attendance: "))
mark = float(input("Enter mark: "))

if attendance >= 75:
    if mark >= 50:
        print("Passed")
else:
    print("Not Eligible")
```

### Cell 18 [code] In [ ]:
```python
 
```

### Cell 19 [code] In [ ]:
```python
Example

Write a Python program to read the purchase amount and membership status.

If the purchase amount is more than 50 OMR, check whether the customer is a member.
If the customer is a member, calculate a 2% discount.
If the customer is not a member, print “No discount”.
If the purchase is 50 OMR or less, print “Minimum purchase not reached”.
```

### Cell 20 [code] In [ ]:
```python
amount = float(input("Enter purchase amount: "))
member = input("Are you a member? ")

if amount > 50:
    if member == "yes":
        discount = amount * 0.02
        print("Discount:", discount)
    else:
        print("No discount")
else:
    print("Minimum purchase not reached")
```

### Cell 21 [code] In [ ]:
```python
 
```

### Cell 22 [code] In [ ]:
```python
Example
Write a Python program to read the number of pizzas ordered.

If the customer orders 3 or more pizzas, check whether they ordered 6 or more.
If they ordered 6 or more, print “Large Order”.
Otherwise, print “Regular Order”.
If they order fewer than 3 pizzas, print “Small Order”.
```

### Cell 23 [code] In [ ]:
```python
pizzas = int(input("Enter number of pizzas: "))

if pizzas >= 3:
    if pizzas >= 6:
        print("Large Order")
    else:
        print("Regular Order")
else:
    print("Small Order")
```

### Cell 24 [code] In [ ]:
```python
 
```

### Cell 25 [code] In [ ]:
```python
Example
Write a Python program to read a student’s attendance and completed assignments.

If attendance is 75% or above, check the number of completed assignments.
If the student completed 8 or more assignments, print “Eligible for Exam”.
Otherwise, print “Complete More Assignments”.
If attendance is below 75%, print “Attendance Requirement Not Met”.
```

### Cell 26 [code] In [ ]:
```python
attendance = float(input("Enter attendance: "))
assignments = int(input("Enter completed assignments: "))

if attendance >= 75:
    if assignments >= 8:
        print("Eligible for Exam")
    else:
        print("Complete More Assignments")
else:
    print("Attendance Requirement Not Met")
```

### Cell 27 [code] In [ ]:
```python
A company needs a tax calculator. 
The user will enter the following: Employee Name, rate Per Day and Number of days worked. 
Calculate and display the salary and tax for the employee.
Salary = rate per day * the number of days. 
The tax is computed based on the salary. See Tax computation based on salary range as indicated on the table below:

Salary	                   Tax
1-500	                    5%
500-1000	                10%
more than1000	            15%
```

### Cell 28 [code] In [3]:
```python
name = input("Enter employee name: ")
rate = float(input("Enter rate per day: "))
days = int(input("Enter number of days worked: "))

salary = rate * days

if salary <= 500:
    tax = salary * 0.05
else:
    if salary <= 1000:
        tax = salary * 0.10
    else:
        tax = salary * 0.15

print("Employee name:", name)
print("Salary:", salary)
print("Tax:", tax)
```
OUTPUT:
```
Employee name: Ali
Salary: 4000.0
Tax: 600.0
```


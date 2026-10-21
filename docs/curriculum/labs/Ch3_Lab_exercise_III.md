### Cell 1 [code] In [ ]:
```python
Question

Write a Python program for a pizza shop.

The shop has a special offer:

Offer: Buy 2 pizzas and get 1 free.

Ask the customer to enter:

The number of pizzas they want
Price of one pizza

The program should calculate the number of free pizzas and then calculate the total amount to pay.
    
Formula
Free pizzas = Number of pizzas ÷ 3
Total Cost = (Number of Pizzas − Number of Free Pizzas) × Price
    
```

### Cell 2 [markdown] 

IMAGES: ['data:image/png;base64,iVBORw0KGgoAAAANSU... len=10662']

### Cell 3 [code] In [4]:
```python
pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas // 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
```
OUTPUT:
```
Total cost: 15.0 OMR
```

### Cell 4 [code] In [6]:
```python
pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas / 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
```
OUTPUT:
```
Total cost: 4.0 OMR
```

### Cell 5 [code] In [ ]:
```python
Question

Write a Python program to calculate the total cost of stationery items.

Ask the user to enter the quantity and price of each item:

Pencil
Pen
Calculator
Extra paper

Then calculate and display the total cost.

Total Cost = Pencil Cost + Pen Cost + Calculator Cost + Paper Cost

Where:

Pencil Cost = pencil quantity × pencil price
Pen Cost = pen quantity × pen price
Calculator Cost = calculator quantity × calculator price
Paper Cost = paper quantity × paper price
```

### Cell 6 [markdown] 

IMAGES: ['data:image/png;base64,iVBORw0KGgoAAAANSU... len=43670']

### Cell 7 [code] In [1]:
```python
pencil_qty = int(input("Enter pencil quantity: "))
pencil_price = float(input("Enter pencil price: "))

pen_qty = int(input("Enter pen quantity: "))
pen_price = float(input("Enter pen price: "))

calculator_qty = int(input("Enter calculator quantity: "))
calculator_price = float(input("Enter calculator price: "))

paper_qty = int(input("Enter paper quantity: "))
paper_price = float(input("Enter paper price: "))

pencil_cost = pencil_qty * pencil_price
pen_cost = pen_qty * pen_price
calculator_cost = calculator_qty * calculator_price
paper_cost = paper_qty * paper_price

total = pencil_cost + pen_cost + calculator_cost + paper_cost

print("Pencil cost:", pencil_cost, "OMR")
print("Pen cost:", pen_cost, "OMR")
print("Calculator cost:", calculator_cost, "OMR")
print("Paper cost:", paper_cost, "OMR")
print("Total cost:", total, "OMR")
```
OUTPUT:
```
Pencil cost: 1.0 OMR
Pen cost: 1.5 OMR
Calculator cost: 5.0 OMR
Paper cost: 1.0 OMR
Total cost: 8.5 OMR
```

### Cell 8 [code] In [ ]:
```python
 
```

### Cell 9 [code] In [ ]:
```python
Class Exercise: Fruit Shop

Question

Write a Python program for a fruit shop. The program should ask the customer to enter:

The fruit name
The quantity in kilograms

The shop sells mango, banana, and watermelon.

The shop has three fruits with different prices:

Mango - 2.000 OMR per kg
Banana - 1.000 OMR per kg
Watermelon - 0.500 OMR per kg    

Condition	                                 Output
If the fruit is mango	                Total cost: 6.0 OMR
If the fruit is banana	                Total cost: 3.0 OMR
If the fruit is watermelon	            Total cost: 1.5 OMR
If the fruit is none of these	        Fruit not available


The program should calculate and display the total cost. Formula to calculate total = total = quantity * fruite price
If the customer enters another fruit, display "Fruit not available".
```

### Cell 10 [code] In [7]:
```python
fruit = input("Enter fruit: ")
quantity = float(input("Enter quantity in kg: "))

if fruit == "mango":
    total = quantity * 2.000
    print("Total cost:", total, "OMR")

elif fruit == "banana":
    total = quantity * 1.000
    print("Total cost:", total, "OMR")

elif fruit == "watermelon":
    total = quantity * 0.500
    print("Total cost:", total, "OMR")

else:
    print("Fruit not available")
```
OUTPUT:
```
Total cost: 3.0 OMR
```

### Cell 11 [code] In [ ]:
```python
Class Exercise: Shopping Discount
Question

Write a Python program for a supermarket that asks the customer to enter:

1. The customer's name
2. The total purchase amount in OMR
3. Whether the customer has a membership (yes or no)


The supermarket gives a 2% discount when:

The purchase amount is more than 50 OMR, AND the customer is a member.    

If both conditions are satisfied, calculate the 2% discount and the final amount.

Otherwise, display the original purchase amount.

Condition	                                                                   Output
Purchase is more than 50 OMR AND customer is a member	          Calculate the discount and display the customer name, the total amount, and the discount.
Purchase is 50 OMR or less OR customer is not a member	          Display the customer name, the total amount, and no discount
Purchase is more than 50 OMR, but the customer is not a member	      Display the customer name, the total amount, and no discount

    
formula:
    
discount = amount * 2%  
```

### Cell 12 [code] In [ ]:
```python
name = input("Enter customer name: ")
amount = float(input("Enter purchase amount: "))
member = input("Are you a member? (yes/no): ")

if amount > 50 and member == "yes":
    discount = amount * 0.02
    final_amount = amount - discount

    print("Customer:", name)
    print("Discount:", discount, "OMR")
    print("Final amount:", final_amount, "OMR")

else:
    print("Customer:", name)
    print("No discount")
    print("Final amount:", amount, "OMR")
```

### Cell 13 [code] In [ ]:
```python
 
```

### Cell 14 [code] In [ ]:
```python
 
```

### Cell 15 [code] In [ ]:
```python
# Nested: if inside another if
# Use this when the second condition should be checked only if the first condition is True.
```

### Cell 16 [code] In [1]:
```python
x = 1
y = 2

if x<y:
    print(x)
    if y>x:
        print(y)
```
OUTPUT:
```
1
2
```

### Cell 17 [code] In [3]:
```python
x = 1
y = 2

if x>y:
    print(x)
    if y>x:
        print(y)
```

### Cell 18 [code] In [ ]:
```python
Question 1:

Write a Python program to read a student's attendance percentage and mark.

First, check whether the student's attendance is 75% or above.

Only if the attendance is 75% or above, check whether the student's mark is 60 or above.

If both conditions are satisfied, display "Student Passed".

***Important: If attendance is below 75%, do not check the mark.
```

### Cell 19 [code] In [5]:
```python
attendance = float(input('Enter Attendance Percentage:\t'))
marks = float(input('Enter Marks:\t'))

if attendance >= 75:
    if marks>=60:
        print('Student Passed')
```

### Cell 20 [code] In [ ]:
```python
Question 2:

Write a Python program to read a student's year of study and GPA.

First, check whether the student is in Year 3.
Only if the student is in Year 3, check whether the GPA is 3.0 or above.
If both conditions are satisfied, display "Eligible for Graduation Review".
```

### Cell 21 [code] In [8]:
```python
study = float(input('Enter Study Year:\t'))
gpa = float(input('Enter GPA:\t'))
if study == 3:
    if gpa >=3:
        print('Eligible for Graduation Review')
```

### Cell 22 [code] In [ ]:
```python
Question 3:

Write a Python program to read the number of times a student was late and the number of classes they missed.

If the student was late 3 or more times, check whether they missed any class.
If they missed a class, display "Attendance Warning".
If the student was late fewer than 3 times, no message is required.
```

### Cell 23 [code] In [12]:
```python
late = int(input('Enter Number of Late: \t'))
missed_classes = int(input('Missed Classes:\t'))

if late >= 3:
    if missed_classes > 0:
        print('Attendance Warning')
        
```

### Cell 24 [code] In [ ]:
```python
 
```

### Cell 25 [code] In [ ]:
```python
 
```

### Cell 26 [code] In [ ]:
```python
 
```

### Cell 27 [code] In [ ]:
```python
 
```

### Cell 28 [code] In [ ]:
```python
# Nested if–else
# Need different actions for all possible outcomes

if condition1:
    if condition2:
        statements1
    else:
        statements2
else:
    statements3
```

### Cell 29 [code] In [ ]:
```python
Question 1:

Write a Python program to read a student's mark.

If the mark is 60 or above, check whether it is 80 or above.
If it is 80 or above, display "Excellent".
Otherwise, display "Passed".
If the mark is below 50, display "Failed".
```

### Cell 30 [code] In [11]:
```python
marks = float(input('Enter Marks:\t'))

if marks >= 60:
    if marks >= 80:
        print('Excellent')
    else:
        print('Passed')
        
else:
    print('Failed')
```
OUTPUT:
```
Failed
```

### Cell 31 [code] In [ ]:
```python
Question 2:

Write a Python program to read a student's number of late arrivals, number of absences, and whether the student missed the first class.

Use the following rules:

If the student was late 3 or more times:
If the student also has an absence, display "Serious Attendance Issue".
Otherwise, display "Frequent Late Arrival".
If the student was late fewer than 3 times, display "Attendance is Acceptable".
```

### Cell 32 [code] In [14]:
```python
late = int(input('Enter Number of Late: \t'))
missed_classes = int(input('Missed Classes:\t'))

if late >= 3:
    if missed_classes > 0:
        print('Serious Attendance Issue')
    else:
        print('Frequent Late Arrival')
else:
    print('Attendance is Acceptable')
        
```
OUTPUT:
```
Attendance is Acceptable
```


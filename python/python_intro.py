print("hello world!")

# this is a comment
'''
triple quotes around text will also comment out text
'''

#Variable
'''
Let's remember how to declare an integer in Java
int x = 10;
Must delcare the data type.
Python does not require this. We can assign any value to a variable in Python.
'''

x=100
x='hello'
x="hello"
x='he said, "go wildcats"'
print(x)

x = 100
y=10
r=x/y
print(r)
# floor division converts float result to integer
r=x//y
print(r)

# could also cast to int
r = int(x/y)
print(r)

# math module and python built in functions
min_val = min(10,1)
raised = pow(2,4)
raised = 2**4
print(min_val)
print(raised)

x=-1
y=1
if x < 0:
    print("x is negative")

if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is 0")

# or and and statments || and &&
if x < 0 and y > 0:
    print("values within range")

if x < 0 or y < 0:
    print("x or y less than 0") 

# loops

# while loop
counter = 0
while counter < 10:
    print(counter)
    counter += 1
    
a=[10,20,30,40,50]

# loop through values only 
for value in a:
    print(value)

# if you need index place and value
for i, val in enumerate(a):
    print("index place is ", i)
    print("value is ", val)

# if you need to iterate a fixed number of times use range
# this is like Java's for loop
for i in range(3):
    print("i is",i, "and value at i is",a[i])

# add adjacent values in array
for i in range(len(a)-1):
    sum_adj=a[i] + a [i+1]
    print("sum of adjacent values", sum_adj)

# functions
def say_hello(name="friend"):
    print("Hello",name)

def add_numbers(x,y):
    print(x+y)

say_hello("Bob")
say_hello()
add_numbers(2,2)

# Strings
fname = "kathleen"
lname = "malone"
full_name=fname+ " " + lname
first_initial=fname[0]
last_char=full_name[-3]
print(last_char)

# Slicing
course="Platform Computing"
platform=course[0:8]
print(platform)
# do computing
computing=course[9:18]
print(computing)




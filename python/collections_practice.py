a = [10,20,30,40,50]
a.append(5)
a.append(6)
a.append(7)

print (a)

a.remove(50)
print(a)
a.pop()
print(a)
a.pop(2) # pop element at index place 2
print(a)

a.reverse()
print(a)
a.sort()
print(a)

empty=[]
for val in a:
    if val < 100:
        empty.append(val)
print(empty)
# empty[5] = 10

empty = [0] * 100
print(empty)

dog='dog'
dogs=dog*3
print(dogs)

#comprehensions
squares=[]
for i in range(100):
    squares.append(i**2)
print(squares)

squares_copy=[val for val in squares]
print(squares_copy)

squares_comp=[i**2 for i in range(100)]
print(squares_comp)

#create a list with numbers in squares divisble by 3
# do dog example in class then have them do this
div_3=[div3 for div3 in squares if div3 % 3 == 0]
print(div_3)

# sets
aset={1,2,3}
print(aset)
#print(aset[1])

# sets don't allow duplicates
dups=[1,1,2,2,3,3,4,4]
no_dups = set(dups)
print(no_dups)

# dictionaries
fav_foods = {"kathleen" : "pizza", "john": "burgers", "michelle": "gummy nerds", "patrick": "nutella"}
jff=fav_foods["john"]

for key in fav_foods:
    print(key,"fav food is",fav_foods[key])

for key, value in fav_foods.items():
    print(key, "fav food is", value)

if "Bob" in fav_foods:
    print("Bob's fav food is",fav_foods["Bob"])
else:
    fav_foods["Bob"] = "sushi"


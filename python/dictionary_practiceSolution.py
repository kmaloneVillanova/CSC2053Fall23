def most_popular_foods(fav_foods):

    foods={}
    for key,value in fav_foods.items():
        if value in foods:
            foods[value].append(key)
        else:
            people=[]
            people.append(key)
            foods[value]=people
    return foods

assert most_popular_foods(fav_foods={'Kathleen': 'pizza', 'Steve': 'burger', 'John': 'steak', 'Michelle': 'pasta', 'Patrick': 'pizza'}) == {'pizza': ['Kathleen', 'Patrick'], 'burger': ['Steve'], 'steak': ['John'], 'pasta': ['Michelle']}, "expected {'pizza': ['Kathleen', 'Patrick'], 'burger': ['Steve'], 'steak': ['John'], 'pasta': ['Michelle']}"
print("correct")
assert most_popular_foods({"Kathleen": "pizza", "Yin": "pizza", "Kearicia":"Italian","Owen": "burgers"}) == {'pizza': ['Kathleen', 'Yin'], 'Italian': ['Kearicia'], 'burgers': ['Owen']}, "expected {'pizza': ['Kathleen', 'Yin'], 'Italian': ['Kearicia'], 'burgers': ['Owen']}"
print("correct")
assert most_popular_foods({'Kathleen': 'pizza', 'Max':'burgers', 'Matt':'burgers', 'Andy':'pizza','Christina':'burgers'}) == {'pizza': ['Kathleen', 'Andy'], 'burgers': ['Max','Matt','Christina']}, "expected {'pizza': ['Kathleen', 'Andy'], 'burgers': ['Matt','Max','Christina']}"
print("correct")


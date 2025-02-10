import random
response = {
      "mambo": ["powa", "fresh", "gooder"],
      
      "vip": ["safi", "fresh"],
}
def chart(query):
    model = model.object.all()
    query = query.lower().strip()
    for key in response:
        if key in query:
            return random.choice(response[key])
        return "sijaelewa"
    
while True:
        user_input = input("user ").lower()
        if user_input in ["mwisho", "bye", "exit"]:
            print("Sawa kwaheri ")
            break
        print(f"chart {chart(user_input)}")            
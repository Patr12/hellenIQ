import random
# response = {
#       "mambo": ["powa", "fresh", "gooder"],
      
#       "vip": ["safi", "fresh"],
# }
# def chart(query):
#     model = model.object.all()
#     query = query.lower().strip()
#     for key in response:
#         if key in query:
#             return random.choice(response[key])
#         return "sijaelewa"
    
# while True:
#         user_input = input("user ").lower()
#         if user_input in ["mwisho", "bye", "exit"]:
#             print("Sawa kwaheri ")
#             break
#         print(f"chart {chart(user_input)}")  
def shortest_path(grid, x, y, memo={}):
    if (x,y) in memo:
        return memo[(x, y)]
    if x < 0 or y < 0:
        return float('inf') # njia isiyo wezekana 
    if x == 0 and y == 0:
        return grid[0][0]
    memo[(x,y)] = grid[x][y] + min(shortest_path(grid, x-1, y, memo)), shortest_path(grid, x,y-1, memo)
    return memo[(x,y)]
maze = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
print("Njia fupi zaidi:", shortest_path(maze, 2, 2))
        
def fibonacci_dp(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_dp(n-1, memo) + fibonacci_dp(n-2, memo)
    return memo[n]
print(fibonacci_dp(50))                  
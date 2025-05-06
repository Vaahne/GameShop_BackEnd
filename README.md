# Game Shop Backend

# Description
 Server built to serve data from mongodb to frontend. 
# Schemas
+ Users
    name | email | password
+ Games
    name    |   category   | desc | qty   | noOfPlayers
+ Cart
    items | total price | userId

## Routes
- Users
    post |  read    | edit  | delete
- Game
    get all |   get one game by ID  |   admin update    | admin delete
- Cart
    add to cart |   remove from cart    | checkout
## Technologies
    Mongoose    |   express | dotenv    |   logger/morgan   | cors for connecteing to frontend
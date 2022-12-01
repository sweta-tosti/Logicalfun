

# weather = "sunny"
# temperature = "cold"
#
# if weather == "sunny" and temperature == "warm" :
#     print("Take t-shirt and sunglass.")



#Guess if ur number is greater tha or les  than 10
a = int(input("<Enter a number: "))
b = int(input("<Enter another number: "))


if (a > 10 and b > 10 ):
     print("both are greater than 10.")
else:
     print("atlest one of the number is less than 10.")


# weather = input("What is weather now : ")
# temperature = input("What is temperature now: ")

# if weather == "raining" and temperature == "cold" :
#     print("take an umbrella and a warm jacket.")

# elif weather == "raining" and temperature == "warm" :
#     print("take an umbrella and a t-shirt.")

# elif weather == "sunny" and temperature == "cold" :
#     print("take sunglasses and a warm jacket.")

# elif weather == "sunny" and temperature == "warm" :
#     print("take sunglasses and a t-shirt.")

# else:
#     print("stay home!")


# a = int(input("enter first input: "))
# b = int(input("enter second input: "))

# if a > 10 or b > 10 :
#     print("one of the two numbers is greater than 10.")

# else:
#     print(" two numbers are not greater than 10.")

# 30. Exercise: Your own AND and OR


# course1 = input("Type your own course1: ")
# course2 = input("Type your own course2: ")

# if course1 == "Python" and course2 == "JavaScript":
#     print("this is the Thinking and Creating with Code course.")

# elif course1 == "Python" or course2 == "JavaScript":
#     print("it is a good course.")


# number = int(input("Type the number; "))
# color = (input("Type the color; "))


# if number > 10 or color == "blue":
#     print("The test is true.")

# elif number < 10 and color != "blue":
#     print("The test is true.")

# user_number = int(input("type number between 1 and 20 : "))
# user_color = (input("Pease type your color: "))


# if user_color == "red" and user_number == 20 :
#     print("You've found both the secret number and the secret color!")

# elif user_color == "red" or user_number == 20 :
#     print("You found at least one of the secrets!")

# else:
#     print("You didn't find any of the secrets! and Better luck next time!")

# print("Try again!")



# def user_input(num,color):
#     if color == "red" and num == 20 :
#         print("You've found both the secret number and the secret color!")

#     elif user_color == "red" or user_number == 20 :
#         print("You found at least one of the secrets!")

#     else:
#         print("You didn't find any of the secrets! and Better luck next time!")

#     print("Try again!")

# user_number = int(input("type number between 1 and 20 : "))
# user_color = (input("Pease type your color: "))

# user_input(user_number,user_color)


def greet(name, age):
       message = "Your name is " + name + " and you are " + str(age) + " years old."
       return message

name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(greet(name, age))


# def add(a, b):
#     return a + b

# def subtract(a, b):
#     return a - b

# num_one = int(input("Enter a number: "))
# num_two = int(input("Enter another number: "))

# message = "The result of " + str(num_one) + " + " + str(num_two) + " is " + str(add(num_one, num_two))
# print(message)

# message = "The result of " + str(num_one) + " - " + str(num_two) + " is " + str(subtract(num_one, num_two))
# print(message)

# def get_result(answer):
#     if answer == "a":
#         return True
#     else:
#         return False

# print("Do you like programing?")
# print("a. Yes")
# print("b. No")
# result = input("Enter a or b: ")

# if get_result(result):
#     print("Awesome! Programming is really fun!")
# else:
#     print("Hang in there! It's an acquired taste!")

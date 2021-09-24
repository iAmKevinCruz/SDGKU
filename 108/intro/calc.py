# description
"""
author: Kevin Cruz
System: Simple python calc
"""

# imports
# no need to use the .py ext for the py file
from display import print_menu, print_header

# global vars


# functions


# direct instructions
print_header()
print_menu()

option = input("Select an option: ")


if option != "5":
    num1 = float(input("What's your first number? "))
    num2 = float(input("What's your second number? "))

    if(option == "1"):
        res = num1 + num2
    elif(option == "2"):
        res = num1 - num2
    elif(option == "3"):
        res = num1 * num2
    elif(option == "4"):
        if(num2 == 0.0):
            print("--------------------------------------------------------")
            print("Divide by 0? I do not suffer fools lightly. Try again.")
            print("--------------------------------------------------------")
        else:
            res = num1 / num2
    if(num2 != 0.0):
        print("---------------------------")
        print(f"The Result Is: {res}")
        print("---------------------------")
elif(option == "5"):
    message = input("What is your message? - ")
    n = int(input("How many times you need to see this? - "))
    for line in range(n):
        print(message)

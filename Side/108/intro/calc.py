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

option = input("Select: ")

if option != "5":
    num1 = float(input("Num 1? "))
    num2 = float(input("Num 2? "))

    if(option == "1"):
        res = num1 + num2
    elif(option == "2"):
        res = num1 - num2
    elif(option == "3"):
        res = num1 * num2
    elif(option == "4"):
        if(num2 == 0.0):
            print("--------------------------------------------------------")
            print("Can't Divide By Zero")
            print("--------------------------------------------------------")
        else:
            res = num1 / num2
    if(num2 != 0.0):
        print("---------------------------")
        print(f"Result: {res}")
        print("---------------------------")
elif(option == "5"):
    message = input("Message? - ")
    n = int(input("How many repeats? - "))
    for line in range(n):
        print(message)

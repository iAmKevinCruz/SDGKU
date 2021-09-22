
print("Hello World!!")


# variables
name = 'Kenny'
age = 25
total = 56.78
found = False
names = []

print(age * 5)
print(total / 100)

if(age < 100):
    print('Dont worry, you are still young')
    print('Next Line')
elif (age == 100):
    print("You're on the border line")
else:
    print("ouch you are getting old :(")


def hello():
    print("Hello there!")
    print("This is my first function!")


def play(num):
    print("Your number: ")
    print(num)

    if (num < 5):
        print("Num too low!")


hello()
hello()

play(4)

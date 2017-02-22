import sys
import pronouncing

def homophones(word):
    phoneList = pronouncing.phones_for_word(word)
    results = []
    for phone in phoneList:
        results.extend(pronouncing.search("^" + phone + "$"))
    return results

def main():
    print("BEAR:")
    for i in homophones("bear"):
        print(i)
    print("TWO:")
    for i in homophones("two"):
        print(i)
    print("PEAR")
    for i in homophones("pear"):
        print(i)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        for arg in sys.argv[1:]:
            print("{" + arg + ":")
            print(homophones(arg))
            print(",")
        print("}")
    else:
        main()

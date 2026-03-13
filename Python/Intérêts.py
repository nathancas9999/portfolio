dp = int(input("Combien d'argent il dépose en € : "))
bou = int(input("Combien d'années ? "))


rr = 0

for i in range(bou):
    r = dp * 3 / 100
    rr += r
    dp += r  
    print(f"après {i+1} années : {dp} ")

print(f"Intérêts totaux après {bou} années : {rr} €")
print(f"Montant total après {bou} années : {dp} €")

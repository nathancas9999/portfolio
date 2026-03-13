# Demander à l'utilisateur de saisir deux nombres séparés par un espace
nombres = input("Saisissez deux nombres séparés par un espace : ").split()

# Convertir les entrées en nombres flottants
a = float(nombres[0])
b = float(nombres[1])


# Comparer les deux nombres et afficher le plus grand
if a > b:
    print(f"Le plus grand nombre est: {a}")


elif b > a:
    print(f"Le plus grand nombre est: {b}")
else:
    print("Les deux nombres sont égaux.")


print({a})
print({b})



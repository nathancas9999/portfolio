def est_palindrome(mot):
    # On convertit le mot en minuscules pour éviter les erreurs de casse
    mot = mot.lower()
    # On compare le mot original avec sa version inversée
    return mot == mot[::-1]

# Demander à l'utilisateur de saisir un mot
mot = input("Entrez un mot : ")

# Vérifier si le mot est un palindrome
if est_palindrome(mot):
    print(f"Le mot '{mot}' est un palindrome.")
else:
    print(f"Le mot '{mot}' n'est pas un palindrome.")

import random

nommys = random.randint(0, 100)  
com = 0 

while com < 5:  
    nomjeu = int(input('Entrez un nombre : ')) 
    
    if nomjeu > nommys:
        print('Le nombre mystère est plus petit.')
    elif nomjeu < nommys:
        print('Le nombre mystère est plus grand.')
    else:
        print('BRAVO !!!')
        break  
    
    com += 1  

if com == 5 and nomjeu != nommys:
    print('Dommage, vous avez épuisé vos 5 tentatives. Le nombre mystère était', nommys)



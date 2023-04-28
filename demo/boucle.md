# Boucle

## Introduction

Le concept de boucles en programmation est très important car il permet de répéter une instruction ou un bloc d'instructions un certain nombre de fois ou jusqu'à ce qu'une condition soit remplie.

Il existe deux types de boucles en Python : la boucle "for" et la boucle "while".

La boucle "for" est utilisée pour parcourir des séquences comme des listes, des tuples ou des chaînes de caractères. Elle permet d'exécuter une instruction ou un bloc d'instructions pour chaque élément de la séquence.

Exemple :

```python

nombres = [1, 2, 3, 4, 5]
for nombre in nombres:
    print(nombre)
```

Résultat :

```md
1
2
3
4
5
```

La boucle "while" est utilisée pour exécuter une instruction ou un bloc d'instructions tant qu'une condition est vraie.

Exemple :

```python

i = 0
while i < 5:
    print(i)
    i += 1
```

Résultat :

```md
0
1
2
3
4
```

Dans cet exemple, la boucle "while" est utilisée pour afficher les nombres de 0 à 4 car la condition "i < 5" est vraie tant que i est inférieur à 5.

Les boucles sont très utiles en programmation pour répéter une instruction ou un bloc d'instructions de manière efficace et rapide.

On peut aussi créer une boucle infinie en utilisant la boucle "while" avec une condition toujours vraie.

Exemple :

```python
while True:
    print("Hello World!")
```

Résultat :

```md
Hello World!
Hello World!
Hello World!
Hello World!
...
```

## Exercice : Répéter une séquence d'instructions

Objectif : Demandez à ChatGPT d'écrire un programme pour allumer et éteindre les lumières du Pi-Stop sans s'arrêter.

## Tâches

- Écrire un programme en Python qui allume et éteint les lumières en boucle selon la séquence suivante : rouge, orange, vert, vert, orange, rouge (et répètez cette séquence à l'infini) avec un écart de 1 seconde entre chaque étape.
- Enregistrer le programme
- Exécuter le programme pour voir les lumières s'allumer et s'éteindre en répétant la séquence

## Indications

- Vous avez toujours accès aux fonctions suivantes :

  - `tous_on(myPiStop)` pour allumer toutes les lumières
  - `tous_off(myPiStop)` pour éteindre toutes les lumières
  - `rouge_on(myPiStop)` pour allumer la lumière rouge
  - `rouge_off(myPiStop)` pour éteindre la lumière rouge
  - `orange_on(myPiStop)` pour allumer la lumière orange
  - `orange_off(myPiStop)` pour éteindre la lumière orange
  - `vert_on(myPiStop)` pour allumer la lumière verte
  - `vert_off(myPiStop)` pour éteindre la lumière verte

- Utiliser la fonction sleep() de la bibliothèque time pour créer un écart de temps de 1 seconde entre chaque étape de la boucle
  - `import time` en haut de votre programme pour importer la bibliothèque time
  - `time.sleep(1)` pour créer un écart de temps de 1 seconde

## Début du programme

Créez un nouveau fichier Python et enregistrez-le sous le nom de `boucle.py`. Copiez le code ci-dessous dans votre fichier.

```python
import pistop.pistop as PS
import time

def tous_on(pistop):
	pistop.output(PS.all,PS.ON)

def tous_off(pistop):
	pistop.output(PS.all,PS.OFF)

def rouge_on(pistop):
	pistop.output((PS.R),PS.ON)

def rouge_off(pistop):
	pistop.output((PS.R),PS.OFF)

def orange_on(pistop):
	pistop.output((PS.Y),PS.ON)

def orange_off(pistop):
	pistop.output((PS.Y),PS.OFF)

def vert_on(pistop):
	pistop.output((PS.G),PS.ON)

def vert_off(pistop):
	pistop.output((PS.G),PS.OFF)

def run(pistop):
	# Écrire vos instructions ici

if __name__ == '__main__':
	with PS.PiStop("A") as pistop:
		run(pistop)
```

Vous devez maintenant compléter le programme en écrivant vos instructions dans la fonction `run()`.

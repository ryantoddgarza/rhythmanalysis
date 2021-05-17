# Lesson 2: Metric Events

## Objectives

- Define a metric event
- Distinguish the utility of mutable and immutable events

## Defining metric events

What is a beat? A pulse? A subdivision? It's easy to focus on the differences and get nowhere. What one person calls a beat, another might call a pulse, another might call the rhythm, and another might call the taal. The coarse generalization typically inherited is that a pulse—the most abstract of the three—is any repetitive variation of definable quantity, a beat is a pulse on the mensural level, and a subdivision is the segmentation of time between beats.

These are what we'll call *immutable metric events*. They are key/value pairs of names—functional in a context, culture, etc.—given to some quantity of time.

In the proposed system, there is no utility in such generalization; the coupling of static relationships impose serious limitations. I would prefer, rather, to begin from the Henri Lefebvre's definition of rhythm: "[any]where there is an interaction between a place, a time and an expenditure of energy..."[^1]

Decoupling terms from mere degree of scale—at least initially—will make the recursive thinking required as the system takes shape more natural. Henceforth, any reference to a measurable point in time will be called a metric event. A metric event consists of a duration value and a set of methods from which to derive new metric events. These methods and their inheritance that are the subject of this system.

Moreover, abandoning the nature of immutable events requires elucidation of *mutable metric events*.

## Mutability

[eventMutability.js](examples/eventMutability.js)

###### Footnotes

[^1]: Lefebvre, Henri. Rhythmanalysis: Space, Time and Everyday Life. 1992. Bloomsbury Academic, an imprint of Bloomsbury Publishing Plc. 2020. p. 25

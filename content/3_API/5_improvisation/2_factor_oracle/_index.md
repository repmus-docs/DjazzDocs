+++
title = "Factor Oracle and Player"
weight = 20
+++


### The factor oracle
The factor oracle data structure is described in detail in the following references:
[reference 1]()
[reference 2]()
[reference 3]()

### The factor oracle player

The factor oracle player creates the improvisation. As its name suggests, it contains and makes use of the "factor_oracle" Max abstraction. 

The algorithm for choosing beats from the factor oracle is described in [this paper]().

When the maximum continuity is reached, it takes a suffix link and searches for a matching label. If no matching label is found, it chooses a random state.


The analyzer uses the same set of symbols as the factor oracle. It is used both offline, to create a file of labeled beats for a song, and online, to convert the data at the beginning of each beat into a symbol to be passed to the factor oracle player. 
This symbol is then used as the query to the factor oracle to produce the next beat.

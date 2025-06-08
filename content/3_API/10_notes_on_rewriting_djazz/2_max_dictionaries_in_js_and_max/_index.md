+++
title = "Dicts in Max and javascript"
weight = 10
+++

Djazz 2.0 was written in Max 8.6, just before arrays were introduced in Max. Because much of the data loaded into Max is in the form of a numbered list of beats, arrays would have been very useful in the implementation. Instead, arrays are simulated using Max dicts, with integer keys. These are efficient enough for the size of the data used (on the order of tens or possibly hundreds of beats), even though algorithmically its a little funny to use a hash table to locate an entry at an index, rather than just the index itself.

To facilitate the usage of dicts as arrays, there is a small library of Max abstractions included with Djazz. These are located in the djazz/patchers/util/dict folder, and they're prefaced with either "du." for _d_ict _u_tility, or "darr." for _d_ict _arr_ay. Their names are pretty self-explanatory; they let you access entries with integers instead of symbols (i.e. 1 instead of "1"), accessing nested dictionaries, etc. A lot of these will be unneccessary now that Max has array objects. More information on them can be found in their .maxref files and under "abstraction references" here in the API.

In terms of style: dicts, like colls, are persistent and global, so use them only as read-only. 
Don't use them as variables to pass around or for keeping track of state. Pattrs basically do this anyway so just use them to keep track of state snapshots.

You can't put max objects in a dictionary. But you can put them in a javascript array.
Max patchers basically are dictionaries, though, for objects in them with scripting names (varnames). They must both use hash tables to access their contents. 


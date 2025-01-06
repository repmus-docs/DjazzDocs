+++
title = "General Approach"
weight = 10
+++


Synchronous data is passed using patch lines. Sends and receives are avoided in order to allow event probes, protect encapsulation, and generally keep patchers readable.  

Asynchronous data is stored in pattrs, and updated with pattrhubs and pattrstorages.  


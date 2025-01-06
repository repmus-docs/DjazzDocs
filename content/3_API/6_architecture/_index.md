+++
title = "System Architecture"
weight = 60
+++

##### Synchronous and Asynchoronous Input

Input is passed to patchers two ways: synchronously and asynchronously, depending on the type of input data. 
Synchoronous data;  
- beat number (_int_),
- current tempo (_float_)
- beat label (_symbol_)
- loop section beats (_list: int int_) the start and end beat of the section being looped. This is used to calculate the length of repetitions for live MIDI and audio input.  It can change when the current beat advances to the next chapter, so this data is triggered and sent out by the master control instead of asynchronously.
- dict names (_symbol_), such as those for beat lists and factor oracles . This is because data must be loaded before other control variables can be set.

This data is passed serially through patch cords. Send and receive Max objects are not used, to ensure synchrony, as well as to aid debugging and avoid complicating the control flow.

Asynchronous data is anything changed by the user using the GUI. A lot of this data is well known to audio interface users: track volume, MIDI and audio effects like pitch transposition, for instance. 


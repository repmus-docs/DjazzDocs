+++
title = "Handling Data"
weight = 70
+++

With a few small exceptions where colls are used, all data loaded into memory is contained in a Max dict. Subsequently, files saved from and loaded to these dicts are in JSON format.

Max dicts exist in the global namespace. Djazz handles dicts carefully, in order to avoid a dict being created, referenced, or destroyed outside of the scope in which this is meant to happen.

Abstraction that access dicts, like djazz.midi.beat_reader.maxpat, and djazz.audio.beat_reader.maxpat, must have the dict names passed to them. The method of passing dict names in Djazz is to not use the prefix "dictionary," but to simply pass the symbol representing the name.

Abstractions that construct dicts, like djazz.score_loader.maxpat and the audio_in subpatcher, declare their own dict names, and send these name out to whatever needs to access them.  The exception to this is factor_oracle.maxpat, which is used to load, construct, and access a dict. In this case, the name of the dict that is being used to hold the data structure must be declared outside the abstraction and passed in to it before using the abstraction.

See {{< apipage "10_notes_on_rewriting_djazz/2_max_dictionaries_in_js_and_max" >}}Dicts in JS and Max{{< /apipage >}} for more details on how dicts are used and manipulated in Djazz 2.0.
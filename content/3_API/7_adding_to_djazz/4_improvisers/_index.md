+++
title = "Improvisers"
weight = 40
+++

The factor oracle player, which Djazz uses to improvise, can be modified or replaced by another algorithm.  There are several levels of depth to which you can modify the improvisation functionality; read the {{< apipage "5_improvisation" >}}API section on improvisation{{< /apipage >}}.  Here is just an explanation for where to put a new improviser Max object or abstraction.

Replace the _improviser.maxpat_ abstraction in _djazz.beat_generator_.  Your new improviser object should conform to the same input and output messages as the _improviser.maxpat_ (see the {{< abstref "djazz.improviser" >}}reference page{{< /abstref >}}).


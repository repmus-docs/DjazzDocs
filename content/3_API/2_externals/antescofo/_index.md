+++

title = "Antescofo"
weight = 10
+++


[Antescofo]() is used in two places: 
1. The {{< abstref "master_control" >}}master control{{< /abstref >}}, in its subpatcher {{< abstref "djazz.antescofo_get_tempo" >}}djazz.antescofo_get_tempo{{< /abstref >}} to calculate the tempo. Uses the score "djazz_antescofo.txt" in the _djazz_data/scores_ folder.

2. The {{< abstref "djazz.midi_beat_reader" >}}MIDI beat reader{{< /abstref >}}, to sequence and send out midi notes in the proper tempo and rhythm. Uses the score "antescofo_play_beat.txt" in the _djazz_data/scores_ folder.

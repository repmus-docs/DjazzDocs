+++
title = "Synchronous Data in the Model"
weight = 30
+++

Because Djazz is beat-based, most objects are built to receive and process information at recurring instances.  Djazz is played by inputting a tap, either manually, or from a built-in metronome, or from another application. The tap triggers a beat, which triggers notes to be output from the factor oracle or the score, which triggers note data to be output from antescofo, which triggers sound to be output by the audio or midi outputs.  

Upon receiving a tap, Djazz plays music by selecting sections from scores in one of two ways: playing it back "straight," or by calculating an improvisation using the factor oracle algorithm.  This results in a reshuffling of the beats, which lines up with the harmonic content of the song.  The factor oracle algorithm can be modified with pattern-matching methods. The input to the factor oracle come from scores and real-time input, either audio or MIDI, and is output as audio or MIDI. It uses Antescofo to generate notes both from scores and generated as improvisations in tempo.

###### TOP LEVEL

{{<mermaid align="left">}}
graph TB;
    A[Master Clock] 
	B[Audio]
	C[MIDI]
	A-->|tempo, beat number, label| B
	A-->|tempo, beat number, label| C
{{< /mermaid >}}

In a nutshell, Djazz is made up of the following:  
- several players which function independently. 
- master control for synchronising timing and for broadcasting global commands.

The master control sends out the following data synchronously to all the players:
1. tempo,
2. beat,
3. beat label.  

It sends this data immediately in succession and in this order to midi and audio generators. This order is important, so that the generators can calculate the correct information to play at the beginning of each beat.  It determinmes this data in the following ways:  

- It contains a _beat clock_ abstraction which acts as a master clock; it outputs a beat number when it receives a bang.  It increments its beat number with each output, but also keeps track of position in a song form and adjusts the beat in accordance if looped.
- It keeps track of tempo if tempo is manually input and fluctuates. This uses antescofo.
- It reads from the song dict to get label.

##### GENERATORS

The abstractions that do most of the work in Djazz are the _generators_.  They accept the data passed by the master control and convert them into appropriate musical output.  There are two types of generators: MIDI and audio.  Their construction is very similar; the difference is a result of the way audio data is played differently from MIDI data. See the section on {{< apipage "5_improvisation/1_generator_components" >}}Improvisation/Generator Components{{< /apipage >}} for details.

##### MIDI GENERATORS

{{<mermaid align="left">}}
flowchart TB;
gIn(( ))
g1[Generator 1]
g2[Generator 2]
g3[Generator 3]
g4[Generator 4]
g5[Generator 5]

mbPlayer[MIDI Beat Player]

t1[MIDI\nTrack 1]
t2[MIDI\nTrack 2]
t3[MIDI\nTrack 3]
t4[MIDI\nTrack 4]
t5[MIDI\nTrack 5]

gOut((( )))

gIn --> g1 --> mbPlayer
gIn --> g2 --> mbPlayer
gIn --> g3 --> mbPlayer
gIn --> g4 --> mbPlayer
gIn --> g5 --> mbPlayer

mbPlayer --> t1 --> gOut
mbPlayer --> t2 --> gOut
mbPlayer --> t3 --> gOut
mbPlayer --> t4 --> gOut
mbPlayer --> t5 --> gOut

{{< /mermaid >}}

##### AUDIO GENERATORS


{{<mermaid align="left">}}
flowchart TB;
gIn(( ))
g1[Generator 1]
g2[Generator 2]
g3[Generator 3]

subgraph abPlayer1[Audio Beat Player 1];
direction TB
	ab1in(( ))
	ab1out(( ))
	svp1[supersvp]
	ab1in --> svp1 --> ab1out
end

subgraph abPlayer2[Audio Beat Player 2];
direction TB
	ab2in(( ))
	ab2out(( ))
	svp2[supersvp]
	ab2in --> svp2 --> ab2out
end

subgraph abPlayer3[Audio Beat Player 3];
direction TB
	ab3in(( ))
	ab3out(( ))
	svp3[supersvp]
	ab3in --> svp3 --> ab3out
end

t1[Audio\nTrack 1]
t2[Audio\nTrack 2]
t3[Audio\nTrack 3]

gOut((( )))

gIn --> g1 --> ab1in 
ab1out --> t1 --> gOut
gIn --> g2 --> ab2in
ab2out --> t2 --> gOut
gIn --> g3 --> ab3in 
ab3out --> t3 --> gOut

{{< /mermaid >}}

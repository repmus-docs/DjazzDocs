+++
title = "Generator Components"
weight = 10
+++


### Generator components and data flow:

{{<mermaid align="left">}}
flowchart TB;

in(( ))
out(( ))

subgraph BNG[Beat Generator];
direction TB
    in1(( ))
    scoreplayer[Score Player]
    improviser[Improviser]
    out1(( ))
    in1 -->|bang| scoreplayer -->|beat number| out1
    in1 -->|beat label| improviser -->|beat number| out1
end

bdnl[Beat Dict Name Lookup]
loop[Looper]
br[Beat Reader]
in -->in1
out1 -->bdnl -->|beat number| loop -->|beat number| br -->|playback data| out

{{< /mermaid >}}



The audio and MIDI generators ({{< abstref "djazz.midi.generator" >}}djazz.midi.generator{{< /abstref >}} and {{< abstref "djazz.audio.generator" >}}djazz.audio.generator{{< /abstref >}}, respectively), are the workhorses of the Djazz 2.0 system. Their makeup is similar 




The generator uses the beat number when improvise mode is not on; it uses this to play the next beat or a different beat if one has been selected by the user.  In improvise mode, the beat number is not considered. The label produced by the analyzer is used, as described above.



# Beat generator components and data flow:
{{<mermaid align="left">}}
flowchart TB;

in(( ))
out(( ))

subgraph SP[Score Player];
direction TB
    in1(( ))
    speed1[Speed Control]
    bc[Beat Clock]
    out1(( ))
    in1 -->|bang| speed1 -->|bang| bc -->|beat number| out1
end


subgraph I[Improviser];
direction TB
    in2(( ))
    speed2[Speed Control]
    label[hold label]

    subgraph FOP[Factor Oracle Player];
        in3(( ))
        out3(( ))
        FO[Factor Oracle]
        in3 -->FO -->out3
    end

    out2(( ))
    in2 -->|label| label
    in2 -->|label| speed2 -->|bang| label -->|label| in3 
    out3 -->|beat number| out2
end

in-->in1
in-->in2
out1-->out
out2-->out


{{< /mermaid >}}

The beat generator can play in two modes: score player and improviser. Each of these also contain two modes: play at the tempo given by the tap,
or play at a different speed: double speed, quadruple speed, half speed, and one and a half speed.  This speed change is controlled 
by an object--the "Speed Control" that, when messages are passed to the generator, modifies the timing of their distribution to the generator's internal objects.
Even though both the score player and the improviser use the Speed Control, the musical result is different, because the Score Player receives
beat _number_ messages and the Improviser receives beat _label_ messages. The musical result is described in the {{< manualpage "12_improvising" >}}manual section on improvisation{{< /manualpage >}}.  Following is a description of the abstractions that control these processes.  

The Score Player contains two subpatchers, a "Master Clock Follower" and an "Internal Clock Follower." In Score Player mode,
if the Speed Control is active, beat numbers are sent to the Internal Clock Follower.  The Internal Clock Follower contains its own Beat Clock object. It is passed the same asynchronous messages as the Master Beat Clock,
concerning the song beat data like the end beat, the current section beats, and whether the current chapter is being looped.
If the Speed Control is inactive, the beat number messages given by the Master Beat Clock are simply passed through. If Speed Control is active, beat numbers are output at a different tempo than the input tap. 


In the Improviser, it is the beat label messages are passed. Beat labels are passed in at the master tempo. When a label is received, it is saved in
a message object and a bang is sent to the Speed Control. If active, the speed control at its modified tempo, which trigger the saved 
label to be passed to the factor oracle player. The result is that the factor oracle player outputs beats that conform to 
the harmony of the given beat, even though they are at a different tempo.
+++
title = "MIDI Live Input View"
weight = 10
+++

![pic](images/live_input.png)  


You can record MIDI input into Djazz, and then inmprovise on the recorded input using all the effects and the improviser. 
Live MIDI input, like live audio input, is recorded only when a chapter or a song is {{< manualpage "2_main_window/4_song_grid" "5-loop-button" >}}looped{{< /manualpage >}}.  Each time a chapter (or the song) is looped, a new oval representing this repeition will light up in the bar next to the record button. From the two tracks below the record track, you can choose any oval beneath an illuminated oval to play.  This will play the corresponding recorded repetition.

When clicked and illuminated, the record button arms the buffer for recording. It does not start recording until the first beat that advances the grid.



### 1. Save/Load/Clear Live Input Session
Save the current a MIDI live session. These sessions are saved as folders (see [saving and loading files]({{ .Page.Dir }})) containing
    - a MIDI file
    - a JSON file containing beat, note, label, and repetition metadata, so that this can be reloaded into a Live Input session. This is not the same format as [score files](), and will not load into the [score file loader]. 

### 2. Input Track Repetitions
Each oval in the track represents a repetition of the current looped section. When recording, each time the end of the section is reached, a new oval will illuminate.

### 3. Maximum Number of Repetitions 
This selects the maximum number of repetitions that can be recorded. The default is 16.

### 4. Output track repetitions
There are two MIDI live input tracks. They use MIDI outs are 1 and 2.  Ovals can be selected to be played if the corresponding input oval is illuminated.


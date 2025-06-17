+++
title = "djazz.audio"
weight = 140
+++

Handles all the audio portion of djazz.  
  
{{<mermaid align="left">}}
flowchart TB;

TapInput ----->|"tempo,
beat number, 
beat label"| mGens
TapInput -->|"tempo,
beat number, 
beat label"| mRecordBeatList

AudioInput--->|audio data|mRecordAudioBuffer
DataInput---->|score dictionaries| mData
mOuts--->|audio data| Output

mRecordBeatList --> |dictionary| mData
mBuildFactorOracle -->|dictionary| mData

TapInput(("from 
Master Control"))
AudioInput(("Audio
Input"))
DataInput((from 
data loaders))
Output(((Audio 
Output)))

%% Audio IN -----------------------------------
subgraph AudioIn["<div style="width:40em; 
    height:10em; 
    display:flex; 
    justify-content: flex-start; 
    ">Audio In</div>"]
direction TB

    mRecordBeatList --> |dictionary| mBuildFactorOracle

    mRecordAudioBuffer[record audio buffer]
    mRecordBeatList[record beat data]
    mBuildFactorOracle[build factor oracle]

end

%% Audio OUT -----------------------------------
subgraph AudioOut["<div style="width:50em; 
    height:10em; 
    display:flex; 
    justify-content: flex-start; 
    ">Audio Out</div>"]
direction TB

    mData[Data Loader]
    mGens[Generators]
    mPlayer[Audio Beat Player];
    mOuts[Audio Outs]

    mData  -->|dictionaries| mGens

    mGens -->|beat data dictionaries| mPlayer -->|Audio data| mOuts
end

{{< /mermaid >}}


##### OUTLETS  
  
###### 0 &emsp;  signal  
audio out 1 left  
  
###### 1 &emsp;  signal  
audio out 1 right  
  
###### 2 &emsp;  signal  
audio out 2 left  
  
###### 3 &emsp;  signal  
audio out 2 right  
  
###### 4 &emsp;  signal  
audio out 3 left  
  
###### 5 &emsp;  signal  
audio out 3 right  
  
##### MESSAGES  
  
**signal**  
left inlet: audio in 1  
  
**signal**  
in1: audio in 2  
**-**  
  
**audio_buffer_name**  
in2: (+ _symbol_) name of audio buffer to record to and play from  
  
**record_active**  
in2: (+ 0/1) 1 arms the audio buffer to record; will not start recording until a beat number is received. 0 turns off record state.  
  
**initial_tempo**  
in2: (+ _float_) bpm by which to calculate next beat and note durations  
  
**loop_section_beats**  
in2: (+ _list_: _int_ _int_) start beat, end beat  
will begin a new repetition whenever end beat is reached, restarting at start beat   
  
**max_repetitions**  
in2: (+ _int_) will stop recording when this number is reached  
  
**in**  
right inlet: (+ _symbol_) folder name audio data to load for audio in subpatcher  
  
**out**  
right inlet: (+ _symbol_) folder name audio data to load for audio out subpatcher  
  
##### SEE ALSO  
djazz.audio.record  
djazz.audio.supervp_player  
+++

title = "djazz.midi"
weight = 12
+++


{{<mermaid align="left">}}

flowchart TB;

TapInput ------->|"tempo,
beat number, 
beat label"| mGens
MidiInput-->mInIn
DataInput------>|score dictionaries| mData
mInOut -->|dictionaries| mData
mOuts-->|MIDI data| Output

TapInput(("from 
Master Control"))
MidiInput(("MIDI
Input"))
DataInput((from 
data loaders))
Output(((MIDI 
Output)))

%% MIDI IN -----------------------------------
subgraph MidiIn[MIDI In]
direction TB

    mInIn -->|MIDI data| mRecordBeatList
    mRecordBeatList --> |dictionary| mBuildFactorOracle
    mRecordBeatList --> |dictionary| mInOut
    mBuildFactorOracle -->|dictionary| mInOut

    mInIn(( ))
    mRecordBeatList[record beat data]
    mBuildFactorOracle[build factor oracle]
    mInOut(( ))

end

%% MIDI OUT -----------------------------------
subgraph MidiOut[MIDI\nOut]
direction TB

    mData[Data Loader]
    mGens[Generators]
    mPlayer[MIDI Beat Player];
    mOuts[MIDI Outs]

    mData  -->|dictionaries| mGens

    mGens -->|beat data dictionaries| mPlayer -->|MIDI data| mOuts
end


{{< /mermaid >}}

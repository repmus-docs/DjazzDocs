+++

title = "djazz"
weight = 10
+++


{{<mermaid align="left">}}
flowchart TB;

TapIn((Tap\nIn))
PattrIn((Pattr\nIn))

AudioIn((Audio\nIn))
MidiIn((MIDI In))

DataIn((File\nData\nIn))
PresetIn((Presets In))

PattrBroadcast[Asynchronous\nInput\nBroadcaster]
Master[Master Control]
Audio[Djazz Audio]
Midi[Djazz MIDI]
PattrStorage[PattrStorage]

click Master "./../components/master_control.html" "Master Control"
click Audio "audio.html" "Master Control"
click Midi "midi.html" "Master Control"

AudioOut(((Audio\nOut)))
MidiOut(((MIDI\nOut)))
PattrOut(((Pattr\nOut)))

TapIn-->Master

PattrIn-->PattrBroadcast
AudioIn--->Audio
MidiIn--->Midi
DataIn-->Master
DataIn-->Audio
DataIn-->Midi
Master-->Audio
Master-->Midi

Audio-->AudioOut

Midi-->MidiOut

PresetIn-->PattrStorage
PattrStorage-->PattrOut

{{< /mermaid >}}
















{{<mermaid align="left">}}
flowchart TB;

TapIn((Tap\nIn))
PattrIn((Pattr\nIn))

AudioIn((Audio\nIn L/R))
MidiIn((MIDI In))

DataIn((File\nData\nIn))
PresetIn((Presets In))

PattrBroadcast[Asynchronous\nInput\nBroadcaster]
Master[Master Control]



subgraph Midi[Djazz MIDI];
direction TB

  subgraph MidiIn[MIDI\nIn]
  direction TB
    mInIn(( ))
    mRecord[MIDI\nRecord]
    mInOut(())
  end

  subgraph MidiOut[MIDI\nOut]
  direction TB
    mgOutIn(( ))
    mgData[Data\nLoader]
    mg1[Generator 1]
    mg2[Generator 2]
    mg3[Generators 3-15]

    mbPlayer[MIDI Beat Player]

    mt1[MIDI\nTrack 1]
    mt2[MIDI\nTrack 2]
    mt3[MIDI\nTracks 3-15]

    mgOutOut((( )))

    mgOutIn --> mg1 --> mgData
    mgOutIn --> mg2 --> mgData
    mgOutIn --> mg3 --> mgData

    mgData  --> mg1
    mgData  --> mg2
    mgData  --> mg3

    mbPlayer --> mt1 --> mgOutOut
    mbPlayer --> mt2 --> mgOutOut
    mbPlayer --> mt3 --> mgOutOut
  end

  mgInOut --> mgData
end

MidiIn--->mgInIn
DataIn-->Midi
Master-->|beat number, beat label, tempo| Midi




subgraph Audio[Djazz Audio];
direction TB
  agIn(( ))
  ag1[Generator 1]
  ag2[Generator 2]
  ag3[Generator 3]

  subgraph abPlayer1[Audio Beat Player 1];
  direction TB
    svp1[supersvp]
  end

  subgraph abPlayer2[Audio Beat Player 2];
  direction TB
    svp2[supersvp]
  end

  subgraph abPlayer3[Audio Beat Player 3];
  direction TB
    svp3[supersvp]
  end

  at1[Audio\nTrack 1]
  at2[Audio\nTrack 2]
  at3[Audio\nTrack 3]

  agOut((( )))

  agIn      --> ag1 --> abPlayer1 
  abPlayer1 --> at1 --> agOut
  agIn      --> ag2 --> abPlayer2
  abPlayer2 --> at2 --> agOut
  agIn      --> ag3 --> abPlayer3 
  abPlayer3 --> at3 --> agOut
end

PattrStorage[PattrStorage]


click Master "./../components/master_control.html" "Master Control"
click Audio "audio.html" "Master Control"
click Midi "midi.html" "Master Control"


AudioOut(((Audio\nOut\n1-3 L/R)))
MidiOut(((MIDI Out)))
PattrOut(((Pattr Out)))

TapIn-->Master

PattrIn-->PattrBroadcast
AudioIn--->agIn


DataIn-->Master
DataIn-->Audio
Master-->|beat number, beat label, tempo| Audio


agOut-->AudioOut

mgOut-->MidiOut

PresetIn-->PattrStorage
PattrStorage-->PattrOut

{{< /mermaid >}}

# INLETS

### 1 &emsp; _signal_
###### Audio In 1 
_signal_ Audio signal is sent to djazz_audio_in

### 2 &emsp; _signal_
###### Audio In 2
_signal_ Audio signal is sent to djazz_audio_in

### 3 &emsp; _list_
###### Midi In
_list_ (int pitch, int velocity, int channel) sent to djazz_midi_in

### 4 &emsp; _bang_
###### Triggers next beat
_bang_ All active tracks MIDI and audio tracks will play their data located at the current beat in tempo when a bang is received. Any armed recording tracks will record any input during this beat in tempo. 

### 5 &emsp; _list_
###### Asynchronous input (such as that sent from pattr objects)
_list_ (symbol argument-name anything argument-value) See the section on [pattrs]()

### 6 &emsp; _symbol_
###### Loads records needed for playback
_symbol_ The name of a Max dict that has been loaded with a JSON file. These are either song files or score files.

### 7 &emsp; _anything_
###### Messages to the pattrstorage objects
_anything_ This is only used to send the "clientwindow" message to the pattrstorage object, which is useful for debugging. Any preset-related messages could be sent, but they should actually be sent to djazz_control.

# OUTLETS

### 0 &emsp;  _signal_
###### Audio Track 1 Out 1
Audio signal

### 1 &emsp;  _signal_
###### Audio Track 1 Out 2
Audio signal

### 2 &emsp;  _signal_
###### Audio Track 2 Out 1
Audio signal

### 3 &emsp;  _signal_
###### Audio Track 2 Out 2
Audio signal

### 4 &emsp;  _signal_
###### Audio Track 3 Out 1
Audio signal

### 5 &emsp;  _signal_
###### Audio Track 3 Out 2
Audio signal

### 6 &emsp;  _list_
###### MIDI output
A MIDI note is sent out as a list (int pitch, int velocity, int channel)

### 7 &emsp;  _list_
###### View control data

### ATTRIBUTES  
None  

### MESSAGES  
[###]() MESSAGES    
-See [asynchronous messages]().  
-See {{< link-to-page path="/3_api/1_abstraction_references/components/master_control" >}}Master Control{{< /link-to-page >}} for details about the following:  

/master_control  

{{< link-to-page path="/3_api/1_abstraction_references/components/master_control#loop-section-active" >}}
master::loop_section_active
{{< /link-to-page >}}
0/1
{{< link-to-page path="/3_api/1_abstraction_references/components/master_control" >}}
master::loop_section_beats
{{< /link-to-page >}}
list (int int) start-beat end-beat
[master::start_beat]()  int  
[master::end_beat]()    int  
[master::initial_tempo]()   float  
-See [Audio In]() for details about the following:  
/audio_in  
[audio::audio_in::record_active]() 0/1  
[audio::audio_in::max_repetitions]() int  
[audio::audio_in::save::folder_path]()  symbol  
-See [Audio Out]() for details about the following:  
/audio_out  
(for n from 1-3):  
[audio::audio_out::beat_players::beat_player_n::crossfade_time_in_ms]()     int  
[audio::audio_out::beat_players::beat_player_n::audio_buffer_offset_in_ms]()    int  
(for n from 1-3):  
[audio::audio_out::listeners::listener_n]()     0/1  
[audio::audio_out::listeners::include_master]() 0/1  
(for n from 1-3):  
[audio::audio_out::audio_out_bank::track_n::volume]() int 0-127  
[audio::audio_out::audio_out_bank::track_n::mute]() 0/1  
[audio::audio_out::audio_out_bank::track_n::solo]() 0/1  
[audio::audio_out::audio_out_bank::track_n::active]() 0/1  
(for n from 1-3):  
[audio::audio_out::generators::audio_beat_generator_n::loop_length]() int  
[audio::audio_out::generators::audio_beat_generator_n::speed_numerator]() int  
[audio::audio_out::generators::audio_beat_generator_n::end_beat]() int  
[audio::audio_out::generators::audio_beat_generator_n::next_beat]() int  
[audio::audio_out::generators::audio_beat_generator_n::loop_section_active]() 0/1  
[audio::audio_out::generators::audio_beat_generator_n::speed_denominator]() int  
[audio::audio_out::generators::audio_beat_generator_n::speed_active]() 0/1  
[audio::audio_out::generators::audio_beat_generator_n::loop_section_beats]() int  
[audio::audio_out::generators::audio_beat_generator_n::pitch_range]() int  
[audio::audio_out::generators::audio_beat_generator_n::max_continuity]() int  
[audio::audio_out::generators::audio_beat_generator_n::improvise]() 0/1  
[audio::audio_out::generators::audio_beat_generator_n::transpose_octave]() int  
[audio::audio_out::generators::audio_beat_generator_n::transpose_pitch]() int  
(for n from 1-3):  
[audio::audio_out::data_loaders::track_loader_n::repetition]() int  
(for n from 1-15):  
[midi::midi_out::midi_out_bank::track_n::mute]()    0/1  
[midi::midi_out::midi_out_bank::track_n::active]()  0/1  
[midi::midi_out::midi_out_bank::track_n::solo]()    0/1  
[midi::midi_out::midi_out_bank::track_n::volume]()  int 0-127  
[midi::midi_out::midi_out_bank::track_n::port]()    symbol  
[midi::midi_out::midi_out_bank::track_n::channel_out]() int 1-16  
[midi::midi_out::midi_out_bank::track_n::ctrl_msg]()    int  
[midi::midi_out::midi_out_bank::track_n::effect_list::transpose_octave::octaves]() int -255-+255  
[midi::midi_out::midi_out_bank::track_n::effect_list::transpose_pitch::semitones]() int -255-+255  
[midi::midi_out::data_loaders::scores::score_file_1::file_path]()   symbol  
[midi::midi_out::data_loaders::scores::score_file_2::file_path]()   symbol  
[midi::midi_out::data_loaders::track_loader_1::repetition]() int 0-255  
[midi::midi_out::data_loaders::track_loader_2::repetition]() int 0-255  
(for n from 1-15):  
[midi::midi_out::listeners::listener_n]()  
[midi::midi_out::listeners::include_master]()  
(for n from 1-15):  
[midi::midi_out::generators::midi_beat_generator_n::loop_length]() int   
[midi::midi_out::generators::midi_beat_generator_n::speed_numerator]() int  
[midi::midi_out::generators::midi_beat_generator_n::end_beat]() int   
[midi::midi_out::generators::midi_beat_generator_n::start_beat]() int   
[midi::midi_out::generators::midi_beat_generator_n::loop_section_active]() 0/1   
[midi::midi_out::generators::midi_beat_generator_n::speed_denominator]() int   
[midi::midi_out::generators::midi_beat_generator_n::speed_active]() 0/1   
[midi::midi_out::generators::midi_beat_generator_n::loop_section_beats]() list (int int)   
[midi::midi_out::generators::midi_beat_generator_n::pitch_range]() 0-255   
[midi::midi_out::generators::midi_beat_generator_n::max_continuity]() 0-255   
[midi::midi_out::generators::midi_beat_generator_n::improvise]() 0/1   
[midi::midi_in::folder_path]()  symbol  
[midi::midi_in::record_active]() 0/1  
[midi::midi_in::save::folder_path]() symbol  
[SEE]() ALSO  
# SEE ALSO
[djazz_data]() 
[djazz_control]()
[djazz_view_control]()

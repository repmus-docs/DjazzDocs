var relearn_search_index = [
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Manual",
    "uri": "/Djazz_2.0_documentation/1_manual.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "API",
    "uri": "/Djazz_2.0_documentation/3_api.html"
  },
  {
    "breadcrumb": "API",
    "content": "Hmmmm…",
    "description": "Hmmmm…",
    "tags": [],
    "title": "Abstraction Reference",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references.html"
  },
  {
    "breadcrumb": "API \u003e Adding to Djazz",
    "content": "To add functionality to Djazz, use the following method:\nIN MODEL: Create your patcher. Use pattr objects for asynchronous input. You can include a pattrhub object to broadcast pattr messages for reusability’s sake, but this is not needed if the patcher is inside the model patcher (djazz.maxpat). Connect your patcher in the appropriate place inside djazz.maxpat. See the specific descriptions for examples. IN CONTROL: Inside djazz.control, place a subpatcher, possibly containing other subpatchers, with pattr objects, so that the patcher/pattr hierarchy reflects the way in which you want your new functionality to be called. Create a translator subpatcher and connect the output of the control subpatcher to it. This translator subpatcher should convert the message passed into djazz.control (\u003ccontrol variable name\u003e \u003ccontrol variable value\u003e) to the message needed by the model (\u003cmodel variable name\u003e \u003cmodel variable value\u003e). The Max regexp and __ objects are good for this. You can use the Debug View button to open the lists of pattrs in the model and control to make sure things are being named properly. Parameter-enable the pattrs if you want to trigger them with external devices via Djazz’s parameter handler patcher. Alternatively, you could pattern-enable the pattrs in the view (following section). Only parameter-enable one set of pattrs: those in the control or those in the view. Connect the translator to the control output that goes to the model. IN A VIEW: Create a bpatcher containing the graphic controls and views for your patcher. Attach pattr objects to the controls. Create a translator subpatcher and connect the output of the control subpatcher to it. This translator subpatcher should convert the message passed out of your bpatcher (\u003cview variable name\u003e \u003cview variable value\u003e) to the message needed by the control (\u003ccontrol variable name\u003e \u003ccontrol variable value\u003e). The Max regexp and __ objects are good for this. When placed in djazz.view, the pattrstorage system will handle the messaging; you don’t have to connect your bpatcher to an output. IN A VIEW CONTROL: If necessary, add a subpatcher with pattrs, and a corresponding trnaslator, to djazz.view_control if you want to pass data from the model back into your view subpatcher. Be sure to give all your pattrs initial values, and that these initial values are the same in the view, control, model, and possibly view control.",
    "description": "To add functionality to Djazz, use the following method:\nIN MODEL: Create your patcher.",
    "tags": [],
    "title": "Adding to Djazz",
    "uri": "/Djazz_2.0_documentation/3_api/7_adding_to_djazz/1_general_principles_and_method.html"
  },
  {
    "breadcrumb": "API \u003e Externals",
    "content": "Antescofo is used in two places:\nThe master control , in its subpatcher djazz.antescofo_get_tempo to calculate the tempo. Uses the score “djazz_antescofo.txt” in the djazz_data/scores folder.\nThe MIDI beat reader , to sequence and send out midi notes in the proper tempo and rhythm. Uses the score “antescofo_play_beat.txt” in the djazz_data/scores folder.",
    "description": "Antescofo is used in two places:\nThe master control , in its subpatcher djazz.",
    "tags": [],
    "title": "Antescofo",
    "uri": "/Djazz_2.0_documentation/3_api/2_externals/antescofo.html"
  },
  {
    "breadcrumb": "API \u003e Going further",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Changing the analysis in the factor oracle",
    "uri": "/Djazz_2.0_documentation/3_api/8_going_further/1_changing_the_analysis_in_the_factor_oracle.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Returns the number of keys in a dict\nWhen using a dict to mimic an array, use this to retrieve the length of the array.\nOUTLETS 0 int number of keys in dict\nMESSAGES symbol\ndict name\nSEE ALSO ",
    "description": "Returns the number of keys in a dict\nWhen using a dict to mimic an array, use this to retrieve the length of the array.",
    "tags": [],
    "title": "darr.get_size",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/darr.get_size.html"
  },
  {
    "breadcrumb": "API \u003e Notes on Rewriting Djazz",
    "content": "Dicts, like colls, are persistent and global, so use them only as read-only. Don’t use them as variables to pass around or for keeping track of state. Pattrs basically do this anyway so just use them to keep track of state snapshots.\nYou can’t put max objects in a dictionary. But you can put them in a javascript array. Max patchers basically are dictionaries, though, for objects in them with scripting names (varnames). They must both use hash tables to access their contents.",
    "description": "Dicts, like colls, are persistent and global, so use them only as read-only.",
    "tags": [],
    "title": "Dicts in Max and javascript",
    "uri": "/Djazz_2.0_documentation/3_api/9_notes_on_rewriting_djazz/2_max_dictionaris_in_js_and_max.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": " flowchart TB; AudioIn1((Audio\\nIn L)) AudioIn2((Audio\\nIn R)) MidiIn((MIDI In)) TapIn((Tap\\nIn)) PattrIn((Pattr\\nIn)) DataIn((File\\nData\\nIn)) PresetIn((Presets In)) Master[Master Control] Audio[Djazz Audio] Midi[Djazz MIDI] PattrStorage[PattrStorage] click Master \"./../components/master_control.html\" \"Master Control\" click Audio \"audio.html\" \"Master Control\" click Midi \"midi.html\" \"Master Control\" AudioOut1(((Audio\\nOut 1L))) AudioOut2(((Audio\\nOut 1R))) AudioOut3(((Audio\\nOut 2L))) AudioOut4(((Audio\\nOut 2R))) AudioOut5(((Audio\\nOut 3L))) AudioOut6(((Audio\\nOut 3R))) MidiOut(((MIDI Out))) PattrOut(((Pattr Out))) AudioIn1---\u003eAudio AudioIn2---\u003eAudio TapIn--\u003eMaster PattrIn--\u003eMaster PattrIn--\u003eAudio PattrIn--\u003eMidi DataIn--\u003eAudio DataIn--\u003eMidi DataIn--\u003eMaster Master--\u003eAudio Master--\u003eMidi MidiIn--\u003eMidi Audio--\u003eAudioOut1 Audio--\u003eAudioOut2 Audio--\u003eAudioOut3 Audio--\u003eAudioOut4 Audio--\u003eAudioOut5 Audio--\u003eAudioOut6 Midi--\u003eMidiOut PresetIn--\u003ePattrStorage PattrStorage--\u003ePattrOut INLETS 1 signal Audio In 1 signal Audio signal is sent to djazz_audio_in\n2 signal Audio In 2 signal Audio signal is sent to djazz_audio_in\n3 list Midi In list (int pitch, int velocity, int channel) sent to djazz_midi_in\n4 bang Triggers next beat bang All active tracks MIDI and audio tracks will play their data located at the current beat in tempo when a bang is received. Any armed recording tracks will record any input during this beat in tempo.\n5 list Asynchronous input (such as that sent from pattr objects) list (symbol argument-name anything argument-value) See the section on pattrs\n6 symbol Loads records needed for playback symbol The name of a Max dict that has been loaded with a JSON file. These are either song files or score files.\n7 anything Messages to the pattrstorage objects anything This is only used to send the “clientwindow” message to the pattrstorage object, which is useful for debugging. Any preset-related messages could be sent, but they should actually be sent to djazz_control.\nOUTLETS 0 signal Audio Track 1 Out 1 Audio signal\n1 signal Audio Track 1 Out 2 Audio signal\n2 signal Audio Track 2 Out 1 Audio signal\n3 signal Audio Track 2 Out 2 Audio signal\n4 signal Audio Track 3 Out 1 Audio signal\n5 signal Audio Track 3 Out 2 Audio signal\n6 list MIDI output A MIDI note is sent out as a list (int pitch, int velocity, int channel)\n7 list View control data ATTRIBUTES None\nMESSAGES ### MESSAGES -See asynchronous messages.\n-See Page not found: /3_api/1_abstraction_references/components/master_control\nfor details about the following:\n/master_control\nPage not found: /3_api/1_abstraction_references/components/master_control#loop-section-active\n0/1 Page not found: /3_api/1_abstraction_references/components/master_control\nlist (int int) start-beat end-beat master::start_beat int\nmaster::end_beat int\nmaster::initial_tempo float\n-See Audio In for details about the following:\n/audio_in\naudio::audio_in::record_active 0/1\naudio::audio_in::max_repetitions int\naudio::audio_in::save::folder_path symbol\n-See Audio Out for details about the following:\n/audio_out\n(for n from 1-3):\naudio::audio_out::beat_players::beat_player_n::crossfade_time_in_ms int\naudio::audio_out::beat_players::beat_player_n::audio_buffer_offset_in_ms int\n(for n from 1-3):\naudio::audio_out::listeners::listener_n 0/1\naudio::audio_out::listeners::include_master 0/1\n(for n from 1-3):\naudio::audio_out::audio_out_bank::track_n::volume int 0-127\naudio::audio_out::audio_out_bank::track_n::mute 0/1\naudio::audio_out::audio_out_bank::track_n::solo 0/1\naudio::audio_out::audio_out_bank::track_n::active 0/1\n(for n from 1-3):\naudio::audio_out::generators::audio_beat_generator_n::loop_length int\naudio::audio_out::generators::audio_beat_generator_n::speed_numerator int\naudio::audio_out::generators::audio_beat_generator_n::end_beat int\naudio::audio_out::generators::audio_beat_generator_n::next_beat int\naudio::audio_out::generators::audio_beat_generator_n::loop_section_active 0/1\naudio::audio_out::generators::audio_beat_generator_n::speed_denominator int\naudio::audio_out::generators::audio_beat_generator_n::speed_active 0/1\naudio::audio_out::generators::audio_beat_generator_n::loop_section_beats int\naudio::audio_out::generators::audio_beat_generator_n::pitch_range int\naudio::audio_out::generators::audio_beat_generator_n::max_continuity int\naudio::audio_out::generators::audio_beat_generator_n::improvise 0/1\naudio::audio_out::generators::audio_beat_generator_n::transpose_octave int\naudio::audio_out::generators::audio_beat_generator_n::transpose_pitch int\n(for n from 1-3):\naudio::audio_out::data_loaders::track_loader_n::repetition int\n(for n from 1-15):\nmidi::midi_out::midi_out_bank::track_n::mute 0/1\nmidi::midi_out::midi_out_bank::track_n::active 0/1\nmidi::midi_out::midi_out_bank::track_n::solo 0/1\nmidi::midi_out::midi_out_bank::track_n::volume int 0-127\nmidi::midi_out::midi_out_bank::track_n::port symbol\nmidi::midi_out::midi_out_bank::track_n::channel_out int 1-16\nmidi::midi_out::midi_out_bank::track_n::ctrl_msg int\nmidi::midi_out::midi_out_bank::track_n::effect_list::transpose_octave::octaves int -255-+255\nmidi::midi_out::midi_out_bank::track_n::effect_list::transpose_pitch::semitones int -255-+255\nmidi::midi_out::data_loaders::scores::score_file_1::file_path symbol\nmidi::midi_out::data_loaders::scores::score_file_2::file_path symbol\nmidi::midi_out::data_loaders::track_loader_1::repetition int 0-255\nmidi::midi_out::data_loaders::track_loader_2::repetition int 0-255\n(for n from 1-15):\nmidi::midi_out::listeners::listener_n\nmidi::midi_out::listeners::include_master\n(for n from 1-15):\nmidi::midi_out::generators::midi_beat_generator_n::loop_length int\nmidi::midi_out::generators::midi_beat_generator_n::speed_numerator int\nmidi::midi_out::generators::midi_beat_generator_n::end_beat int\nmidi::midi_out::generators::midi_beat_generator_n::start_beat int\nmidi::midi_out::generators::midi_beat_generator_n::loop_section_active 0/1\nmidi::midi_out::generators::midi_beat_generator_n::speed_denominator int\nmidi::midi_out::generators::midi_beat_generator_n::speed_active 0/1\nmidi::midi_out::generators::midi_beat_generator_n::loop_section_beats list (int int)\nmidi::midi_out::generators::midi_beat_generator_n::pitch_range 0-255\nmidi::midi_out::generators::midi_beat_generator_n::max_continuity 0-255\nmidi::midi_out::generators::midi_beat_generator_n::improvise 0/1\nmidi::midi_in::folder_path symbol\nmidi::midi_in::record_active 0/1\nmidi::midi_in::save::folder_path symbol\nSEE ALSO\nSEE ALSO djazz_data djazz_control djazz_view_control",
    "description": "flowchart TB; AudioIn1((Audio\\nIn L)) AudioIn2((Audio\\nIn R)) MidiIn((MIDI In)) TapIn((Tap\\nIn)) PattrIn((Pattr\\nIn)) DataIn((File\\nData\\nIn)) PresetIn((Presets In)) Master[Master Control] Audio[Djazz Audio] Midi[Djazz MIDI] PattrStorage[PattrStorage] click Master \".",
    "tags": [],
    "title": "djazz",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.html"
  },
  {
    "breadcrumb": "API \u003e System Architecture",
    "content": "Synchronous data is passed using patch lines. Sends and receives are avoided in order to allow event probes, protect encapsulation, and generally keep patchers readable.\nAsynchronous data is stored in pattrs, and updated with pattrhubs and pattrstorages.",
    "description": "Synchronous data is passed using patch lines. Sends and receives are avoided in order to allow event probes, protect encapsulation, and generally keep patchers readable.",
    "tags": [],
    "title": "General Approach",
    "uri": "/Djazz_2.0_documentation/3_api/6_architecture/1_general_methods.html"
  },
  {
    "breadcrumb": "API \u003e Improvisation",
    "content": " flowchart TB; in(( )) out(( )) subgraph SP[Score Player]; direction TB in1(( )) speed1[Speed Control] bc[Beat Clock] out1(( )) in1 --\u003e|bang| speed1 --\u003e|bang| bc --\u003e|beat number| out1 end subgraph I[Improviser]; direction TB in2(( )) speed2[Speed Control] label[hold label] FOP[Factor Oracle Player] out2(( )) in2 --\u003e |label |label in2 --\u003e|label| speed2 --\u003e|bang| label --\u003e|label| FOP --\u003e|beat number| out2 end in--\u003ein1 in--\u003ein2 out1--\u003eout out2--\u003eout The generator uses the beat number when improvise mode is not on; it uses this to play the next beat or a different beat if one has been selected by the user. In improvise mode, the beat number is not considered. The label produced by the analyzer is used, as described above.\nThe beat generator can play in two modes: score player and improviser. Each of these also contain two modes: play at the tempo given by the tap, or play at a different speed: double speed, quadruple speed, half speed, and one and a half speed. This speed change is controlled by an object–the “Speed Control” that, when messages are passed to the generator, modifies the timing of their distribution to the generator’s internal objects. Even though both the score player and the improviser use the Speed Control, the musical result is different, because the Score Player receives beat number messages and the Improviser receives beat label messages. The musical result is described in the manual section on improvisation . Following is a description of the abstractions that control these processes.\nThe Score Player contains two subpatchers, a “Master Clock Follower” and an “Internal Clock Follower.” In Score Player mode, if the Speed Control is active, beat numbers are sent to the Internal Clock Follower. The Internal Clock Follower contains its own Beat Clock object. It is passed the same asynchronous messages as the Master Beat Clock, concerning the song beat data like the end beat, the current section beats, and whether the current chapter is being looped. If the Speed Control is inactive, the beat number messages given by the Master Beat Clock are simply passed through. If Speed Control is active, beat numbers are output at a different tempo than the input tap.\nIn the Improviser, it is the beat label messages are passed. Beat labels are passed in at the master tempo. When a label is received, it is saved in a message object and a bang is sent to the Speed Control. If active, the speed control at its modified tempo, which trigger the saved label to be passed to the factor oracle player. The result is that the factor oracle player outputs beats that conform to the harmony of the given beat, even though they are at a different tempo.",
    "description": "flowchart TB; in(( )) out(( )) subgraph SP[Score Player]; direction TB in1(( )) speed1[Speed Control] bc[Beat Clock] out1(( )) in1 --\u003e|bang| speed1 --\u003e|bang| bc --\u003e|beat number| out1 end subgraph I[Improviser]; direction TB in2(( )) speed2[Speed Control] label[hold label] FOP[Factor Oracle Player] out2(( )) in2 --\u003e |label |label in2 --\u003e|label| speed2 --\u003e|bang| label --\u003e|label| FOP --\u003e|beat number| out2 end in--\u003ein1 in--\u003ein2 out1--\u003eout out2--\u003eout The generator uses the beat number when improvise mode is not on; it uses this to play the next beat or a different beat if one has been selected by the user.",
    "tags": [],
    "title": "Generator Components",
    "uri": "/Djazz_2.0_documentation/3_api/5_improvisation/1_generator_components.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "Djazz needs no special installation. Download the djazz folder here\nOr, if you have git installed, via Terminal:\ngit clone https://github.com/DYCI2/Djazz_2.0Open Max.\nSelect Options from the menu bar at the top of the screen.\nSelect File Preferences from the dropdown menu that appears.\nIn the File Preferences window that appears, select “choose path.”\nIn the file browser menu that appears, select the “djazz” folder you have just downloaded. Djazz uses externals that are included in the Djazz folder. They do not require extra installation, although your operating system may ask if you want to allow them to run.",
    "description": "Djazz needs no special installation. Download the djazz folder here",
    "tags": [],
    "title": "Installation",
    "uri": "/Djazz_2.0_documentation/1_manual/1_installation.html"
  },
  {
    "breadcrumb": "Manual \u003e Audio Window",
    "content": " These controls are similar to the MIDI live input controls.\nWhen clicked and illuminated, the record button arms the buffer for recording. It does not start recording until the first beat that advances the grid.\n1. Save/Load/Clear Live Input Session Save the current a audio live session. These sessions are saved as folders (see saving and loading files ) containing two (2) files:\nan audio file in WAV format a JSON file containing beat, note, label, and repetition metadata, so that this can be reloaded into a Live Input session. Note: to save and load an audio file, you actually save and load a folder. Just name the folder in the dialog window, and the folder will be created and appropriately named files (.wav and .json) will be saved in the folder. For loading, choose the folder from the dialog.\n2. Input Track Repetitions Each oval in the track represents a repetition of the current looped section. When recording, each time the end of the section is reached, a new oval will illuminate.\n3. Maximum Number of Repetitions This selects the maximum number of repetitions that can be recorded. The default is 16.\n4. Recorded repetitions There are two audio live input tracks. They use audio outs are 1 and 2. Ovals can be selected to be played if the corresponding input oval is illuminated.\nAudio output repetitions are selected and played the same way as MIDI output repetitions .",
    "description": "These controls are similar to the MIDI live input controls.",
    "tags": [],
    "title": "Live Input",
    "uri": "/Djazz_2.0_documentation/1_manual/4_audio_window/1_live_input.html"
  },
  {
    "breadcrumb": "Manual \u003e Tools",
    "content": "Djazz uses a song file to play a song, whether you are plaing back scores or using live MIDI or audio. A song file is not a score file. It does not contain any notes to play. Where a score file contains the notes in each beat of the song, a song file contains all the metadata for each beat: its label, its position in the song, and what chapter of the song it is in, in order to make the grid and send the master clock and factor oracle the appropriate data. Djazz uses labels that represent chords. In this way, a song file is like a chord chart.\nTo create a song file for a new song you want to play with Djazz, the make_song_file Max patcher is provided for you in the tools folder.\nSONG NAME Enter the name of the given song; this will be displayed when the song file is loaded, and will also appear in the song dropdown menu if it is placed in the djazz_user/scores/ folder\nBEATS Enter here the total number of beats in the song.\nTEMPO Enter the song tempo. This tempo will be loaded into Djazz’s metronome when the song is loaded, and is also the tempo that will be expected if manual tap entry is performed\nTIME SIGNATURE Enter the number of beats per measure, i.e. the top number in the time signature. The duration of the beats, i.e. the bottom number in the time signature (4 for quarter note, 8 for eighth note, etc.) does not matter; do not include it.\nCHAPTER START BARS If the song is divided into chapters, enter here the bar (i.e. measure) numbers at which the chapters begin. For instance, if a song contains four chapters of 16, 16, 32, and 64 bars, in that order, the chapter start bars will be 1, 17, 33, and 65. Enter these numbers without commas\nPutting all this together, here’s what you would enter for a song in 4/4 time, with chapters of duration as above: 16, 16, 32, and 32 bars. The number of beats is the total number of bars multiplied by the time signature; in this case (16 + 16 + 32 + 64) * 4 = 128 * 4 = 516\nBEAT LABELS Beat labels are input in a text-based format. They can be entered directly into the tool’s window, or cut and pasted from a text editor.\nA chord label has two parts, the root and the quality. The way of entering labels is as follows:\n(\u003c chord root \u003e \u003c chord quality \u003e \u003c number of consecutive beats \u003e)\n\u003c chord root \u003e can be the symbol C, C#, Db, D, D#, Eb, E, F, F#, Gb, G, G#, Ab, A, A#, Bb, or B.\n\u003c chord quality \u003e can be any symbol that does not contain an underscore (\"_\") or a semicolon(\";\").\nThe improvisation algorithm functions in part by matching these symbols with the symbols on the beats in score files, so if you want it to work correctly, keep the format of these symbols the same. For instance, the preloaded songs in Djazz use the following symbols:\nmaj7, min7, 7, dim7, maj6, min6\nBut you can define any symbols you want:\ndom7#9b9#11, maj6add9, min6withanextraweirdnoteatthetop, etc.\n\u003c number of consecutive beats \u003e is how many beats this particular label is repeated.\nSo for instance, the chord sequence\nAmaj7 Amaj7 Dmin7 Amaj7\nAmaj7 Dmin7 E7 Amaj7\nwould be entered as\nIt could also be entered as\nif this is easier to read.\nIndentation and carriage returns are ignored by the tool.\nMAKING A SONG FILE In summary, to make a new song file, follow the seven steps listed below.\nOpen the patcher “djazz.make_song_file.maxpat” from the folder “patchers/data_conversion_tools” in the current djazz folder.\nIn the appropriate fields, put in the song name, beat count, tempo, time signature, and the starting bars for each chapter.\nFill in the “Beat Labels” box.\nPress the “save” button.\nSave the song file in the folder of the same song name that contains the subfolders “new” and “new2.” The file name and the song folder name should be exactly the same.\nThat’s all. If you put the song file in a folder with scores in “new” and “new2” subfolders , this song can now be played as usual by Djazz.\nPress the “clear” button to clear the data.",
    "description": "Djazz uses a song file to play a song, whether you are plaing back scores or using live MIDI or audio.",
    "tags": [],
    "title": "Making a Song File",
    "uri": "/Djazz_2.0_documentation/1_manual/7_tools/make_song_file.html"
  },
  {
    "breadcrumb": "Manual \u003e MIDI Window",
    "content": " You can record MIDI input into Djazz, and then inmprovise on the recorded input using all the effects and the improviser. Live MIDI input, like live audio input, is recorded only when a chapter or a song is looped . Each time a chapter (or the song) is looped, a new oval representing this repeition will light up in the bar next to the record button. From the two tracks below the record track, you can choose any oval beneath an illuminated oval to play. This will play the corresponding recorded repetition.\nWhen clicked and illuminated, the record button arms the buffer for recording. It does not start recording until the first beat that advances the grid.\n1. Save/Load/Clear Live Input Session Save the current a MIDI live session. These sessions are saved as folders (see [saving and loading files]({{ .Page.Dir }})) containing - a MIDI file - a JSON file containing beat, note, label, and repetition metadata, so that this can be reloaded into a Live Input session. This is not the same format as score files, and will not load into the [score file loader].\n2. Input Track Repetitions Each oval in the track represents a repetition of the current looped section. When recording, each time the end of the section is reached, a new oval will illuminate.\n3. Maximum Number of Repetitions This selects the maximum number of repetitions that can be recorded. The default is 16.\n4. Output track repetitions There are two MIDI live input tracks. They use MIDI outs are 1 and 2. Ovals can be selected to be played if the corresponding input oval is illuminated.",
    "description": "You can record MIDI input into Djazz, and then inmprovise on the recorded input using all the effects and the improviser.",
    "tags": [],
    "title": "MIDI Live Input View",
    "uri": "/Djazz_2.0_documentation/1_manual/3_midi_window/1_live_input.html"
  },
  {
    "breadcrumb": "API \u003e External controls and views",
    "content": "Parameters\nDjazz uses Max parameters to attach a device, ewither a controller or a view, to the system. The Max parameter system is similar to its pattr system: when a message is received in the form \u003cparameter name \u003e \u003cparameter value \u003e, the parameter with the called name is updated with the given value. Unlike pattrs, though, whose scope is contained within an object or abstraction, parameters have global scope.\nAll pattrs in djazz.view are parameter enabled.\nThe object _djazz.parameter_handler.js_ß maintains an array of parameter listeners, one for each parameter, and outputs parameter names and values upon when values are changed. Device interfaces can be connected to the inlet or outlet of this object to modify or display parameter values.\nTo create a Max patcher that serves as an interface for an external device: Control devices should output messages in the form \u003cparameter name\u003e \u003cparameter value\u003e. View devices should output messages in the form \u003cparameter name\u003e \u003cparameter value\u003e. See the djazz.launchpad_interface patcher as an example of an abstraction that does both. A list of all parameters and their current values can be accessed by opening “Parameters” in the Max menu.\nNOTE to developers interested in JS Max listeners: The JS Max objects Parameterlistener and maxobjlisteners are actually hard to deal with because you can’t delete them. So they continue to live, inaccessible but possibly still affecting output, until garbage collection comes their way.",
    "description": "Parameters\nDjazz uses Max parameters to attach a device, ewither a controller or a view, to the system.",
    "tags": [],
    "title": "Parameters",
    "uri": "/Djazz_2.0_documentation/3_api/4_external_controls_and_views/1_parameters.html"
  },
  {
    "breadcrumb": "API \u003e System Architecture",
    "content": "ARCHITECTURE Djazz uses the familiar Model-View-Control-View Control (MVCVC) design pattern. Each of these components will be discussed below. This particular interpretation of MVCVC was influenced by the design specifications for audio plugin development for the WWISE audio engine distributed by Audiokinetic.\nflowchart TB; V[View]; C[Control]; M[Model]; VC[View Control]; V --\u003e C C --\u003e M M --\u003e VC VC --\u003e V This design is primarily to maintain an organised control flow of asynchronous data–data that is input by the user. This is done using Max’s pattr system; any user-controlled variable is stored as a separate pattr in the view, control, the model, and possibly the view control. Their values are passed through each of these components in a directed path, possibly undergoing name translation or value conversion along the way:\nflowchart TB; subgraph V[View]; end subgraph C[Control]; direction TB tvc[translate view to control] ctrlpattrs[control pattrs] tcm[translate control to model] tvc --\u003e ctrlpattrs--\u003e tcm end subgraph M[Model]; end subgraph VC[View Control]; direction TB tmv[translate model to view] end V --\u003e tvc tcm --\u003e M tmv --\u003e V M --\u003e tmv While the path resembles a loop, output restriction in the view in fact keep messages from being passed on, thus avoiding circularity.\nMODEL The model (djazz.maxpat) is the actual Djazz patcher, in the sense that all the functionality occurs in this patcher: MIDI and audio input and output processing, timing synchronization, improvisation calculation, etc.\nAbstractions in the model contain pattrs which are set by sending messages in the form \u003cpattr name\u003e \u003cpattr value\u003e. The pattrhub Max object distributes these messages to the appropriate pattr objects.\nCONTR0L The control acts as the interface to pass messages to the model. It is similar to a shell in an operating system, or a parameter bank in an audio plugin. Its input represents the set of all possible asynchronous messages that can be sent to Djazz. Its job is to translate these messages to their appropriate messages that the model understands, and to handle any value initialization and message dependencies.\nThere are many pattrs in the model.\nNot all pattrs may be desired to be used, or exposed to the user. The organization of the pattr hierarchy in the model may not reflect the user’s conception it may be wished to call pattrs in the model via other variables that need some processing to determine their value. The control, then, acts a shell which exposes the messages that can be sent to Djazz. By replacing the control, you can change the commands it responds to without changing the model itself.\nTo make modularity easier, pattrs in the control are grouped in encapsulations. This means that calling nested pattrs demands the “::” syntax (see example below).\nVIEW CONTROL The model outputs pattrs to any view that wants to receive them. It does this the same way as the control: a pattrstorage object is at the top level of the model patcher, and when a pattr value is updated, it outputs the pattr name and value.\nThere are two types of pattrs that the model outputs: those that are specifically for a view, and the parameters that were sent from the control. Values in abstractions in the model that are to be sent to the view control are stored as pattrs inside subpatchers named “view,” so that they can be extracted from the other pattrs passed out of hte model.\nVIEW The view is a collection of bpatchers containing graphical controls and data fields. It triggers messages to be sent to the control. Different views could be used, and even several views at the same time. The Launchpad interfaces are also views.\nNote: with this method, the interior pattrhub objects end up not being used at all, but it’s still good to leave them in so that these objects can be reused and are not dependent on being called this way.\nFinally, unused variables simply aren’t called. But to be absolutely sure that uncalled variables don’t give us trouble, by storing state that have forgotten about, or by accidentally being called, due to sharing names accidentally with a control variable, we can turn off their visibility to the pattrstorage system, which means they can never be called.\nTo avoid an infinite loop, we make use the pattrstorage object’s outputmode attribute. In the control and model, the pattrstorage outputmode is set to 2: any changed values are sent out. But in the view, the output mode is 6: values that are changed by objects in the pattr system are not sent out from the pattrstorage object. That is, only values that are changed by user interaction are sent out. Thus the values received by pattrhub are set, but not sent to the control. This way, pattr values can be sent back from the model into the view (via the view control object which filters them and translates their names if necessary), without these pattr values being again passed out to the control (which would create an infinite loop).\nEXAMPLE As an example, we follow the message sent when the pitch on MIDI track 13 is changed, using either the up, down, or reset-pitch button:\nThe corresponding pattr in the view is named transpose_pitch, and takes an integer value. The up, down, and reset buttons are proper to the usage conceived for this particular graphical interface, so their logic is contained within the view; they modify the transpose_pitch pattr and do not send any messages directly to the control.\nIn the view, the triggered pattr is located in the bpatcher named track_13, which itself is inside the bpatcher named midi. When triggered, the pattrstorage object inside the view updates its value and sends out the message midi::track_13::transpose_pitch 0. This message is sent out the second view outlet and into djazz.control.\nIn djazz_control, the pattrhub object distributes the message to the corresponding subpatcher named midi, which contains a djazz.control.track abstraction named__track_13_, which contains a pattr object named transpose_pitch. This pattr now sends its updated value 0 directly (not via the pattrstorage object in djazz.control) through the djazz.control.midi.translate_track abstraction in order to rename it for the correct pattr object in the model:\nThe message sent to the model is midi::midi_out::midi_out_bank::track_13::effect_list::transpose_pitch::semitones 0. It is received by the pattrhub object in the model and sent to the corresponding patcher:\nWhen the pattr in the model is updated, the model’s pattrstorage sends its name and value to the view control, which translates it and sends it back to the view.\nThe state of the variable can be seen in each of the four debug windows (view, control, model, and view control).\nPattr Visibility For more complex abstractions that use several pattrs, as well as abstractions that lend themselves to reuse, such as the beat-generators which are nested in midi- and audio-beat-generators, Djazz uses the second method of pattr passing:\nflowchart LR; in(( )) subgraph A[A]; subgraph B[B]; subgraph C[C]; direction TB p[pattr my_pattr] end end end in --\u003e|A::B::C::my_pattr|p flowchart LR; in(( )) subgraph A[A]; direction TB pA[pattr my_pattr_A] subgraph B[B]; direction TB pB[pattr my_pattr_B] subgraph C[C]; direction TB pC[pattr my_pattr_C] end end end in --\u003e|my_pattr_A|pA pA --\u003e|my_pattr_B|pB pB --\u003e|my_pattr_C|pC Pattrs within nested abstractions are “hidden” from calls to the exterior abstraction. They are updated by calling a pattr in the exterior abstraction, which translates them to the appropriate pattr call to the interior abstraction; sometimes this sequence of calls to nested pattrs has several levels. In Max, a pattr is never actually hidden, as it can always be called using the double-colon syntax corresponding to the object in which it is located. But a pattr can be hidden to the pattrstorage object that references it by setting the pattr’s visibility attribute to zero. The small object pattrvis.js was written to turn on and off the visibility of all the pattrs in an abstraction; it can act hierarchically as well, turning on or off all the visibility of pattrs in subpatchers.\nThe pattrvis.js object is used in the appropriate abstractions, and does not have an effect on the functionnality of the program. It can be used to keep the debugging windows more readable, when nested pattrs have their visibility off. To inspect pattr messages passed to nested abstractions, turn their visibilities on by passing 1 to the pattrvis.js object in the corresponding abstraction.",
    "description": "ARCHITECTURE Djazz uses the familiar Model-View-Control-View Control (MVCVC) design pattern. Each of these components will be discussed below.",
    "tags": [],
    "title": "Asynchronous Data and the MVCVC Design",
    "uri": "/Djazz_2.0_documentation/3_api/6_architecture/2_asynchronous_data_mvcvc.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Sets the entry at the given index\nWhen using a dict to mimic an array, use this as the assignment operator [] or set.\nMESSAGES list\nleft inlet: (int anything) index, entry\nsymbol\nright inlet: dict name\nSEE ALSO ",
    "description": "Sets the entry at the given index\nWhen using a dict to mimic an array, use this as the assignment operator [] or set.",
    "tags": [],
    "title": "darr.set_at",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/darr.set_at.html"
  },
  {
    "breadcrumb": "API \u003e External controls and views",
    "content": "Dictionaries are used in Djazz in different ways, for representing songs, architecture, and as another example for the launchpad, to keep track of how buttons are mapped to parameters and how parameters are mapped to lights. For this, several different types of dictionaries were required:\nTwo device-specific dicts One mapping dict Two runtime parameter dicts The format for each of these dicts can be done in different ways. Some criteria exist:\nUser-created files should be easy to create, either by editing the text or with a max object; prefereably both. Data access in the dicts at runtime must be efficient. These two criteria ask for different formats. Also, we might need to change them in the future, to accomodate new devices.\nTo address these issues, database accessor files exist to translate between the formats of the various dicts. Each one exports a set of methods that access data or modify data. the implementation of the methods are hidden to the user. Each one is specific to the context it acts in. The exported methods have the same names, but the implementation is different depending on the structure of the dict it reads or writes to. thus, we can use a single javascript object to read the desired dictionaries and then translate them into the format the system needs. Each accessor is imported into the module using a require statement. The module names passed to these require statements are given as jsarguments to the object. If we change or add a new dict format, we write a new reader, which only involves rewriting the implementation of the exported methods—and replace it in the appropriate require field.\nDevice-specific dicts The two device-specific dicts are imported from JSON files; thus are two device-specific files:\nthe device file the grid file These must be written in order to connect a new device with view and control capabilities, like a Launchpad, to Djazz.\nDevice dict the device file contains device-specific data:\nthe device name (used for routing messages in Djazz) any metadata about the device itself the number of midi controls the number of cc controls the MIDI/CC codes for each color. Colors are represented by two variables, their hue (the name of the color itself) and their value (bright or dim). the MIDI/CC codes for each button’s illumination behavior. For the Launchpad Pro MK3, buttons can glow statically, they can flash, or they can pulse. For the Launchpad Pro MK3, the data file is this:\n{ \"device\" : \"Launchpad Mini\" , \"manual\" : \"https://leemans.ch/latex/doc_launchpad-programmers-reference.pdf\" , \"midi_count\" : 120 , \"cc_count\" : 0 , \"colors\" : { \"none\" : { \"bright\" : 0 , \"dim\" : 0 } , \"red\" : { \"dim\" : 1 , \"bright\" : 3 } , \"orange\" : { \"dim\" : 17 , \"bright\" : 51 } , \"yellow\" : { \"dim\" : 41 , \"bright\" : 51 } , \"green\" : { \"dim\" : 16 , \"bright\" : 48 } , \"brown\" : { \"dim\" : 38 , \"bright\" : 35 } } , \"behaviors\" : { \"static\" : 12 , \"flashing\" : 8 } }Grid dict the grid file describes the way a song grid can be represented on the Launchpad. It contains the following information:\nthe device name\nthe cell numbers that represent song chapters. these are listed in order of the chapters they represent. In the following code example, then, “cc 89” represents chapter 1, “cc 79” represents chapter 2, etc.\nthe colors that represent the state of a chapter in the grid. A grid cell (chapter or bar) is in one of the following states:\nplaying: the cell is currently being played waiting: the cell has been selected to be played, and will start playing as soon as the next beat occurs off: neither waiting or playing unused: the song does not contain the chapter or bar associated with this cell the cell numbers that represent song bars (listed in order like chapter numbers)\nthe colors that represent the state of a bar in the grid (same as chapter states).\noptional metadata about the device, such as the links to manufacturer’s information\nFor the Launchpad Pro MK3, the grid file is this:\n{ \"device\" : \"Launchpad Pro MK3\" , \"manual\" : \"https://fael-downloads-prod.focusrite.com/customer/prod/s3fs-public/downloads/LPP3_prog_ref_guide_200415.pdf\" , \"grid\" : { \"chapter\" : { \"cells\" : [ \"cc 89\", \"cc 79\", \"cc 69\", \"cc 59\", \"cc 49\", \"cc 39\", \"cc 29\", \"cc 19\" ] , \"colors\" : { \"unused\" : \"none\", \"off\" : \"green dim static\", \"waiting\" : \"green dim static\", \"playing\" : \"green bright static\" } } , \"bar\" : { \"cells\" : [ \"midi 81\", \"midi 82\", \"midi 83\", \"midi 84\", \"midi 85\", \"midi 86\", \"midi 87\", \"midi 88\", \"midi 71\", \"midi 72\", \"midi 73\", \"midi 74\", \"midi 75\", \"midi 76\", \"midi 77\", \"midi 78\", \"midi 61\", \"midi 62\", \"midi 63\", \"midi 64\", \"midi 65\", \"midi 66\", \"midi 67\", \"midi 68\", \"midi 51\", \"midi 52\", \"midi 53\", \"midi 54\", \"midi 55\", \"midi 56\", \"midi 57\", \"midi 58\" ] , \"colors\" : { \"unused\" : \"none\", \"off\" : \"brown dim static\", \"waiting\" : \"red dim static\", \"playing\" : \"red bright static\" } } } }Mapping dict A mapping file is a file that the user creates, using the editing tool in Djazz, that contains the mappings between the Launchpad cells and the parameters she wants to control. It also imports into it the grid.\nRuntime parameter dicts Launchpads have both view and control capabilities; that is, they can send input to Djazz (control) as well as show output (view).",
    "description": "Dictionaries are used in Djazz in different ways, for representing songs, architecture, and as another example for the launchpad, to keep track of how buttons are mapped to parameters and how parameters are mapped to lights.",
    "tags": [],
    "title": "Dicts",
    "uri": "/Djazz_2.0_documentation/3_api/4_external_controls_and_views/2_dicts.html"
  },
  {
    "breadcrumb": "API \u003e Going further",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Enabling listeners and Real-Time Analysis",
    "uri": "/Djazz_2.0_documentation/3_api/8_going_further/2_enabling_listeners_and_real_time_analysis.html"
  },
  {
    "breadcrumb": "API",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Externals",
    "uri": "/Djazz_2.0_documentation/3_api/2_externals.html"
  },
  {
    "breadcrumb": "API \u003e Improvisation",
    "content": "The factor oracle The factor oracle data structure is described in detail in the following references: reference 1 reference 2 reference 3\nThe factor oracle player The factor oracle player creates the improvisation. As its name suggests, it contains and makes use of the “factor_oracle” Max abstraction.\nThe algorithm for choosing beats from the factor oracle is described in this paper.\nWhen the maximum continuity is reached, it takes a suffix link and searches for a matching label. If no matching label is found, it chooses a random state.\nThe analyzer uses the same set of symbols as the factor oracle. It is used both offline, to create a file of labeled beats for a song, and online, to convert the data at the beginning of each beat into a symbol to be passed to the factor oracle player. This symbol is then used as the query to the factor oracle to produce the next beat.",
    "description": "The factor oracle The factor oracle data structure is described in detail in the following references: reference 1 reference 2 reference 3",
    "tags": [],
    "title": "Factor Oracle and Player",
    "uri": "/Djazz_2.0_documentation/3_api/5_improvisation/2_factor_oracle.html"
  },
  {
    "breadcrumb": "Manual",
    "content": " 1. MIDI/audio window selectors Clicking on the button labeled “MIDI” or “Audio” will open and close the MIDI or audio interface window, respectively.\nYou can also use the key commands “m” (lowercase) to open/close the MIDI window or “a” (lowercase) to open/close the audio window.\n2. Beat input window 3. Song selector To load a song grid, select a song using one of these controls. Songs are loaded by selecting folders, not individual files. Each folder contains various files pertaining to the song like scores and JSON metadata files.\nDrag and drop a song folder here. Browse for a song folder. To select a song, click on its folder. Clear the current song. Select a preloaded song from the dropdown menu. 4. Song Grid 5. Data View BEATS: total number of beats in the song SECTION: whether section is looped, and number of beats in current section TEMPO: current tempo. Note: if the [beat input] comes from Djazz’s metronome or a remote metronome, this will not change. If the beat input is manual, or if the remote source is a manual tap, this may fluctuate. BEAT Number of current beat playing LABEL Label of current beat playing, according to the loaded song file 6. Global Effects These effects are the same as the ones used in MIDI scores, MIDI tracks, and audio tracks. Changing a control in the global effects bar will change the corresponding effect in every one of these other effects bars.\n7. GLOBAL AUDIO INPUT/OUTPUT Audio On Clicking on either the microphone icon or the loudspeaker icon will turn the audio on.\nAudio Monitor Level (Microphone) Controls the monitor level of the audio input. The button labeled “M” below the microphone-icon button mutes audio input.\nAudio Record Level Controls the recorded volume level of the audio input. The button labeled “M” below the microphone-icon button mutes audio input.\nAudio Out (Speakers) Controls the level of the global audio output. The button labeled “M” below the loudspeaker-icon button mutes audio output.\n8. MIDI Input Selector 9. External Controllers Selection Menu When an external controller such as a Launchpad is plugged in, its name will appear in the dropdown menu. If Djazz supports it, selecting its name from the dropdown menu will open its interface window.\n10. UDP Send Port Select Select the host and port to send view messages from Djazz.\n11. Settings Window Open/Close Button ",
    "description": "1. MIDI/audio window selectors Clicking on the button labeled “MIDI” or “Audio” will open and close the MIDI or audio interface window, respectively.",
    "tags": [],
    "title": "Main Window",
    "uri": "/Djazz_2.0_documentation/1_manual/2_main_window.html"
  },
  {
    "breadcrumb": "Manual \u003e Tools",
    "content": " Score files contain preloaded notes, formatted so that Djazz can play them and use them to improvise. Djazz comes preloaded with many score files of jazz standards and songs from Madagascar. You can also convert your own MIDI files into Djazz scores with the make_score_file Max patcher, located in the tools folder.\n1. Load a song file If you haven’t yet made a song file for this song, make one using the make_song_file tool. Import the song file by pressing the LOAD button. If the file is loaded properly, the light on the left side will illuminate.\n2. Load a click track A click track is needed to divide the notes in the MIDI tracks into the proper beats. A click track must be imported from a MIDI file in which eat beat is designated by a single MIDI event at pitch C1 and non-zero velocity The click track be exported at the same tempo as the notes.\nImport the MIDI file by pressing the “IMPORT MIDI” button and selecting the file from the dialog that opens. Once imported, you can save this file to a JSON format using the “SAVE JSON” button. If the click track file is loaded properly, the light on the left side will illuminate.\n3. Load a single or multiple tracks If both the song file and click track have loaded successfully, the regions for loading MIDI tracks will be activated. You can load either a single MIDI track, or multiple tracks at once. If you import multiple tracks, the resulting JSON file will represent a Djazz score, which you will need to put into a folder in order to play it in Djazz (see below).\nNOTE: Tracks available for Djazz are 3 through 15, because tracks 1 and 2 are used for Live MIDI. Make sure the MIDI tracks are exported from your DAW with appropriate track numbers.\nOnce you have imported, either in the single or multiple MIDI track format, save your import by pressing the “Save” button. The resulting file will be a JSON file.\nTo play a single MIDI track, see these instructions.\nTo play multiple MIDI tracks, you need to put your saved file in an appropriately named folder.\nMAKING A SCORE FOLDER Multiple MIDI tracks saved together are called a score in Djazz. Score files and their corresponding song files need to be organized into a certain folder structure–a song folder–for Djazz to read them.\nThe format for a song folder is this:\nMySongFolder ├── MySongFolder.json ├── new │ ├── score_1.json │ ├── another_score.json │ ├── another-score_1.json │ └── ... ├── new2 │ ├── some_score.json │ └── may_song_score.json │ └── ...The song folder must have the same name as the JSON song file. The top level of the song folder contains three things: - the JSON song file - two directories for score files. These directories must be labeled “new” and “new2.”\nA song folder placed into the djazz_user/scores folder inside the Djazz directory will appear in the song dropdown menu .\nThe contents of the two score directories will be loaded when a song folder is loaded and their contents displayed in the respective dropdown menus .",
    "description": "Score files contain preloaded notes, formatted so that Djazz can play them and use them to improvise.",
    "tags": [],
    "title": "Making a Score File",
    "uri": "/Djazz_2.0_documentation/1_manual/7_tools/make_score_file.html"
  },
  {
    "breadcrumb": "API \u003e Adding to Djazz",
    "content": "Effects that modify MIDI output should be placed inside the djazz.midi_out_effect_list abstraction inside the djazz.midi_out_track abstraction:",
    "description": "Effects that modify MIDI output should be placed inside the djazz.",
    "tags": [],
    "title": "MIDI Effects",
    "uri": "/Djazz_2.0_documentation/3_api/7_adding_to_djazz/2_midi_effects.html"
  },
  {
    "breadcrumb": "Manual \u003e MIDI Window",
    "content": " Score Player/Loader Window MIDI scores are made up of multiple MIDI tracks. They are saved in a special format. When a score is loaded, the corresponding MIDI tracks will load.\nDjazz uses two scores. They correspond to the following tracks:\nScore 1: Tracks 8-15 Score 2: Tracks 3-7 Effect controls in each score bar will change all the effects in the tracks belonging to the score.\nScore Loader Scores can be loaded by dragging a score onto the button with an icon of a folder. If a song folder is loaded that contains scores in its new and new2 subdirectories, these scores will be available in the dropdown menus. Choosing a score from the menu will load it.",
    "description": "Score Player/Loader Window MIDI scores are made up of multiple MIDI tracks.",
    "tags": [],
    "title": "MIDI Scores View",
    "uri": "/Djazz_2.0_documentation/1_manual/3_midi_window/2_scores_view.html"
  },
  {
    "breadcrumb": "API \u003e Externals",
    "content": "This is a small C application that is called from the shell in the make-score-file tool. It converts MIDI data to a .txt file, which is then converted by the tool into JSON.",
    "description": "This is a small C application that is called from the shell in the make-score-file tool.",
    "tags": [],
    "title": "Midifile",
    "uri": "/Djazz_2.0_documentation/3_api/2_externals/midifile.html"
  },
  {
    "breadcrumb": "Manual \u003e Main Window",
    "content": "2. BEAT INPUT Input Selector Djazz plays a beat each time it receives a message (a “tap,” or “click”), if it is engaged (how to engage Djazz will be explained below). When not engaged, it will not play when a beat message is received. When this is the case, you can click on bars or chapters (“cells” of the grid) in the song grid without triggering playback. Once engaged, djazz will begin playing on the next beat after a cell has been clicked on.\nThe cells of the grid change color depending on whether Djazz is engaged and whether a cell is currently playing or not. The colors represent the following:\nLight gray: not the current measure/chapter of the song Dark gray: the current measure measure/chapter of the song, but Djazz is not engaged Blue: the current measure measure/chapter of the song, but not playing Orange: the current measure measure/chapter of the song, and playing There are three ways to send Djazz a beat message; you select one from the dropdown menu: manual, metronome, or remote. Selecting from the dropdown menu will change the controls on the left side of this box. When one option is selected, the other two are not responsive.\nThe right-hand side of the window lets you change the sound and output port of the click.\n1. INPUT SELECTOR: Select if the input beat will come from one of the following:\nDjazz’s metronome a manual tap from the user a remote source, such as another DAW. 2. OUTPUT CLICK MIDI PITCH: Changes the pitch of the click. The number indicates the MIDI value of the pitch.\n3. OUTPUT CLICK MIDI CHANNEL: The MIDI channel of the click (1-16). 4. SELECTED INPUT VIEW: metronome, manual, or remote.\n5. OUTPUT CLICK VOLUME CONTROL: The volume of the click. When muted, this will be gray.\n6. OUTPUT CLICK MUTE BUTTON: Mutes/unmutes the click\n7. OUTPUT CLICK MIDI PORT: The output port of the click.\nBEAT INPUT VIEWS Metronome The button marked with a triangle turns the metronome on and off. When you turn this button on and then select a grid cell, the metronome will trigger a new beat each time it clicks, beginning with the beat represented by the grid cell. No beat will be triggered until a grid cell has been selected. The number selector sets the metronome tempo. This is automatically set when a new song is loaded, but you can change it. This flashes each time the metronome sends a beat. Manual The triangle button engages Djazz. Clicking on the circle button sends Djazz a beat message. You can also press the space bar to send a manual click. Djazz expects the starting tempo given in the song file!\nRemote This will send a beat message to Djazz every time a MIDI note on message is received (i.e., with a non-zero velocity) on any channel.\nThe dropdown menu selects the MIDI input port for the click. The triangle button engages Djazz. This flashes each time a beat is received. ",
    "description": "2. BEAT INPUT Input Selector Djazz plays a beat each time it receives a message (a “tap,” or “click”), if it is engaged (how to engage Djazz will be explained below).",
    "tags": [],
    "title": "Beat Input",
    "uri": "/Djazz_2.0_documentation/1_manual/2_main_window/2_beat_window_selector.html"
  },
  {
    "breadcrumb": "API \u003e Adding to Djazz",
    "content": "Effects that modify audio output should be placed in one of two places, depending how they function. There are two places where audio can be modified:\nIf the object does not process audio data itself, but determines parameters to pass to the supervp player, so that it plays audio data back differently, it should be placed in the djazz.audio_beat_generator abstraction. This is how Djazz’s audio_transpose_pitch and audio_transpose_octave effects work:\nIf the object processes audio itself, it should be placed between an djazz.beat_player object and an audio.out object:",
    "description": "Effects that modify audio output should be placed in one of two places, depending how they function.",
    "tags": [],
    "title": "Audio Effects",
    "uri": "/Djazz_2.0_documentation/3_api/7_adding_to_djazz/3_audio_effects.html"
  },
  {
    "breadcrumb": "Manual \u003e Audio Window",
    "content": " The audio out bank contains three (3) audio output controls. These are similar to MIDI output controls.\nVolume Dial Changes the volume of the MIDI track. If you click just above the dial, the dial will reset to its default value of 80.\nActive Button If not illuminated, the MIDI track will not be audible, and its volume in the volume meter will be gray. When illuminated, the MIDI track will be audible.\nSolo Button When illuminated, this will “solo” the MIDI track. If a single track is soloed, it is the only track that you will hear. If several MIDI tracks are soloed, only these tracks will be audible. If no tracks are soloed, all the tracks will be audible.\nVolume Meter Shows the level of the MIDI output. When a track is inactive, this will be grey. When active, the output will be green, orange, and red, depending on the volume level.",
    "description": "The audio out bank contains three (3) audio output controls.",
    "tags": [],
    "title": "Audio Out Bank",
    "uri": "/Djazz_2.0_documentation/1_manual/4_audio_window/2_audio_out_bank.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "",
    "description": "",
    "tags": [],
    "title": "djazz view",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz_view.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Takes a label representing the current musical state, and returns another label to be used by the improvisation algorithm.\nThe input label can be passed to it by anything–the master control, other generators, or the same generator in which this analyzer resides.\nCurrently only passes the chord label for the next beat, passed by the master control, directly through without modification.\nSo for now this object exists more as a placeholder. This is where real-time music analysis code should go.\nOUTLETS 0 list: symbol symbol label + new symbol\nMESSAGES symbol\na label representing the current musical state to be used by the improvisation algorithm.\nSEE ALSO djazz.listener_control\ndjazz.listeners_router\ndjazz.beat_generator\ndjazz.midi.midi_beat_generator\ndjazz.audio.beat_generator",
    "description": "Takes a label representing the current musical state, and returns another label to be used by the improvisation algorithm.",
    "tags": [],
    "title": "djazz.analyzer",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.analyzer.html"
  },
  {
    "breadcrumb": "API \u003e Going further",
    "content": "This section describes an untested method for simplifying dynamic object creation and destruction in Max, using the MVC design described in another section. It was originally intended to be used with Djazz. It was coded using Javascript arrays and dictionaries of Max object instances, which ran into threading issues when these instances were created and destroyed before the Javascript thread was updated. Since then, Max has introduced Array objects (non-Javascript), which hopefully will obviate this problem; all code could be done in pure Max.\nDynamic creation and destruction of objects: arrays and dicts Hierarchies Saving and reloading architecture Objects in Djazz should be created and destroyed, so you can set up variable numbers of different types of players, and different midi and audio outputs. The resulting configurations can then be saved and reloaded.\nThere are two data structures for saving objects: dictionaries and arrays, because some objects occur as ordered sets [midi tracks, effects], while others don’t (players, although they could).\nOrdered sets are placed in arrays using javascript. This way they can be addressed using their indices in the array, and array operations can be used to keep track and change them.\nIn javascript you can make arrays of objects. To delete them, you have to both remove them from the patcher and remove them from the array or you will get undefined stuff.\nThe midi out bank is an example of a hierarchy of objects containing arrays. The bank contains tracks, and the tracks contain (among other things) midi effects. Tracks can be created and deleted, and so can effects. [SLIDE: tree]\nIn addition, there are effects that apply to groups of tracks:\nBANK TRACK GROUP TRACK EFFECT_LIST EFFECT To make this structure:\nEach object in the hierarchy contains a javascript object with the variable name “components,” which is responsible for creating, deleting, and dispatching messages to, and gathering data from the hierarchy objects it contains.\nEach « component » object contains an array of objects.\nWhen objects are created, they are also placed in the array.\nThe code in each of these component objects is similar, and they could be abstracted into classes (prototypes) that components are derived from, if this method seems important enough to do that.\nThe bank can be saved as a dictionary.\nDictionary entries can be dictionaries and arrays, and array entries can be dictionaries and arrays.\nThe midi bank dictionary contains arrays which contain dictionaries which contain arrays. Arbitrary nesting of dictionaries and arrays is possible. Access and modification becomes complicated, which I’ll talk about in section 4.\nTo save a midi bank layout:\nJavascript objects can declare attributes: values that can be accessed like normal max objects. Attributes can be dictionaries. Attribute values can also have custom getters and setters, which means that the attribute value does not have be something actually stored. A getter can dynamically construct it when it is invoked, and a setter can do something other than save the given value.\nThe midi bank thus has an attribute « bank_dict » that, when queried, builds a dictionary from its components’ data. It writes an array of its tracks, calling each of its tracks to give it the required data for its given array index. It calls each track by requesting a dict attribute from the track representing its components. The track builds a dict in the same way, calling its effect components. This process continues until a recursively-built dictionary is completed, then the midi bank passes it to the caller which writes it as a json file.\nTo reload the midi bank, the opposite occurs: the attribute value setter builds the track list by creating each track and then sending it the corresponding track dict so that it can build itself.\nThe actual dict values are at no time saved.\n[EXAMPLE]\nThis can be applied to the entire architecture of a session, including all the players. It will be once we’ve worked out what all the players will be and how they will be arranged.\nBecause of the hierarchical arrangement of dictionaries, the midi bank can have its own set of presets that can be loaded and saved inside the preset of an entire session.\nTo load an entire session including the pattr presets, the architecture dictionary has to be loaded first, and then the preset file.\nBoth the model and the view contain these component objects.\nCommunication between the view and model is in the rightmost wire.\nBuilding from these dicts in the model and the view treat the dict like a model, and the model and view become its views.\nCommunication between the control and model during construction must be handled carefully and I’m interested in how to do it better. Originally I thought it would be great to include the dict attributes in the pattr system. Then they could be controlled in the same way that the rest of the parameters are controlled.\nThe problem is this. [SLIDE] Javascript operates on a different (low-priority) thread than Max objects. When it calls Max to creat an object (new default), it passes control to this thread and continues to the next javascript command—we don’t know when the max command will finish in relation to the javascript.\nAs components in the view hierarchy are built, we can’t assume that their analogs in the model are built at the same time. Thus messages cannot be passed from one to the other.\nThus we cannot count on the pattr system working when the hierarchies are constructed. It has to use a different system.\nCreating effects: to create a midi effect, several easy standards must be met:\nMIDI notes follow a given value (list of numbers) MIDI comes in the left inlet and out the left inlet A control/view and a model patch Communication btw control and model occur via pattr, so pattrs with the same name (possibly hierarchic) must exist in both patches Control and model patchers must be put in appropriately named subfolders of a folder titled by the effect name. If you do this, the effect will show up in the effect list.\nThis gives an easy, max-less way for developers to add their own effects.",
    "description": "This section describes an untested method for simplifying dynamic object creation and destruction in Max, using the MVC design described in another section.",
    "tags": [],
    "title": "Dynamic Object Creation and Destruction",
    "uri": "/Djazz_2.0_documentation/3_api/8_going_further/3_dynamic_object_creation_and_destruction.html"
  },
  {
    "breadcrumb": "API",
    "content": "Audio data is saved in WAV form. Besides this, all Djazz data is saved to and loaded from JSON in order to be imported into Max dictionaries. This includes MIDI data.\nThe antescofo .txt files included with song folders is converted to JSON when loaded.",
    "description": "Audio data is saved in WAV form. Besides this, all Djazz data is saved to and loaded from JSON in order to be imported into Max dictionaries.",
    "tags": [],
    "title": "File formats used",
    "uri": "/Djazz_2.0_documentation/3_api/3_file_formats_used.html"
  },
  {
    "breadcrumb": "API",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Improvisation",
    "uri": "/Djazz_2.0_documentation/3_api/5_improvisation.html"
  },
  {
    "breadcrumb": "API \u003e Improvisation",
    "content": "Definition:\nA beat is a collection of notes that occurs between two timepoints. These timepoints are considered to occur at regular intervals. Thus a piece of music that has a pulse can be considered a sequence of beats.\nAt each new beat, calculate a new beat’s worth of music to play. The calculation consists of finding a beat in the database that is the “best match” (or at least a “good match”) based on the data that exists at the beginning of the new beat.\nThis data can be based on any of the following:\nThe location in the song/musical piece. For example, “the A minor 7 chord that occurs at the beginning of measure 13.” A good match is a beat from the database that occurs over the same chord. This could be the same beat as in the original piece, or it could be a different beat that has the same chord, which is more interesting. This creates correct adherence to musical form, if such form exists in the piece.\nWhat we just played in the last beat. For example, an ascending scale in the previous beat could look for a melody that starts on the next note in the scale in the next beat. This creates continuity.\nWhat other listeners have played. This creates responsiveness.\nIn the current usage of Djazz, this match is based only on option 1: the chord symbol that occurs on the given beat.\nLabel matching Matching is done by comparing labels. Each beat has a label which reflects the data described above. It is a string of symbols. The nature of this string is determined by the user. In the current usage of Djazz, this string represents the chord symbol, which consists of the chord root and its quality, separated by an underline. Chord roots are numbered from zero to eleven, with zero representing C; thus, C# (or Db) is 1, D is 2, etc. For example, “0_maj7” represents a C major seventh chord.\nA match can be made by exact comparison, or by “fuzzy” methods. In the current usage of Djazz, a chord represents a match if the quality is the same, but the root can be a small distance away from the desired one. The melody is then transposed to match the correct root.\nOffline analysis currently consists of adding the chord labels to each beat. The user inputs this using a graphical tool that takes chord information and stores it in a list of beats; that is, no analysis is done save for copying the “chord chart” into a data file. This data file, which also contains other data like the song tempo, time signature, section starting and ending beats, and song title, is loaded into Djazz when a song is played.\nOnline analysis, as a result, is just a case of reading the chord label from the dictionary when a beat number is generated. This is in fact done by the master clock: it sends out the tempo, chord label, beat number, in immediate succession each time a tap is input.\nThe methods here are general, and the current usage of Djazz can be changed to admit other types of music. This would involve using an extant system, devising a new one, or modifying an extant one to label beats. Optionally defining the definition of a match, if it is not defined as exact.\nThe following criteria must be met: The online analyzer uses the same set of labels as the offline analyzer, if an offline analyzer is used.\nAlso, the architecture is modular, which means that other methods of improvisation are possible. That means that another object can replace the factor oracle player within “improviser” as long as it adheres to the following criteria:\nIt receives a label at the beginning of each beat It produces a beat number, in response to the label, that represents the next beat to play. Example: Song with the same chord for all beats. In the case where all the beat labels are the same, the factor oracle player algorithm will ground out to simply choosing a measure aleatorically.\nIn some cases this could be desired. It is perhaps more interesting, though, to take advantage of the label-matching behavior to create one’s own labels, and thus direct the improvisation.\nFollowing the description of the matching criteria, the first half of the label must be a chord root symbol, but the second half can be anything: it will be matched by exact string matching.\nA song with beats labeled thus:\nE m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 E m7 courld be written as\nE 1 E 2 E 3 E 4 E 1 E 2 E 3 E 4 E 1 E 2 E 3 E 4 E 1 E 2 E 3 E 4 which would always select a measure labelled with a 2 to follow a measure labelled with a 1, a 3 to follow a 2, etc. Like this, formal positions in sections could be preserved.\nE a E f E d E c E a E b E a E b E d E f E c E 4 E 1 E 2 E 3 E 4 Djazz supplies a software framework for empirical inquiry into the suitability of a particular data encoding for music: ascertaining the “correctness” of an analysis via listening to the resulting synthesis.",
    "description": "Definition:\nA beat is a collection of notes that occurs between two timepoints.",
    "tags": [],
    "title": "Labels",
    "uri": "/Djazz_2.0_documentation/3_api/5_improvisation/3_labels.html"
  },
  {
    "breadcrumb": "Manual \u003e MIDI Window",
    "content": " The MIDI out bank contains 15 tracks output controls.\n1-2: Live Output\n3-15: Tracks/Score output\nVolume Dial Changes the volume of the MIDI track. If you click just above the dial, the dial will reset to its default value of 80.\nActive Button If not illuminated, the MIDI track will not be audible, and its volume in the volume meter will be gray. When illuminated, the MIDI track will be audible.\nSolo Button When illuminated, this will “solo” the MIDI track. If a single track is soloed, it is the only track that you will hear. If several MIDI tracks are soloed, only these tracks will be audible. If no tracks are soloed, all the tracks will be audible.\nVolume Meter Shows the level of the MIDI output. When a track is inactive, this will be grey. When active, the output will be green, orange, and red, depending on the volume level.\nChannel Select Allows the user to change the MIDI channel of track. Options are 1 through 16.\nPort Select Allows the user to select the output port of the MIDI track. These are usually Max’s internal MIDI playback (which will be called something like “DAC synth”), and outputs to other applications (called “from Max 1” and “from Max 2”).\nGlobal Port Select This changes the output port of all the MIDI channels.",
    "description": "The MIDI out bank contains 15 tracks output controls.",
    "tags": [],
    "title": "MIDI Out Bank",
    "uri": "/Djazz_2.0_documentation/1_manual/3_midi_window/3_midi_out.html"
  },
  {
    "breadcrumb": "Manual",
    "content": " Live Input View Scores View MIDI Out Bank Tracks View ",
    "description": " Live Input View Scores View MIDI Out Bank Tracks View ",
    "tags": [],
    "title": "MIDI Window",
    "uri": "/Djazz_2.0_documentation/1_manual/3_midi_window.html"
  },
  {
    "breadcrumb": "API \u003e Externals",
    "content": "SuperVP is used in the djazz.audio_beat_player abstraction. It is called via the djazz.audio.supervp_player wrapper abstraction.",
    "description": "SuperVP is used in the djazz.audio_beat_player abstraction. It is called via the djazz.",
    "tags": [],
    "title": "supervp",
    "uri": "/Djazz_2.0_documentation/3_api/2_externals/supervp.html"
  },
  {
    "breadcrumb": "API \u003e System Architecture",
    "content": "Because Djazz is beat-based, most objects are built to receive and process information at recurring instances. Djazz is played by inputting a tap, either manually, or from a built-in metronome, or from another application. The tap triggers a beat, which triggers notes to be output from the factor oracle or the score, which triggers note data to be output from antescofo, which triggers sound to be output by the audio or midi outputs.\nUpon receiving a tap, Djazz plays music by selecting sections from scores in one of two ways: playing it back “straight,” or by calculating an improvisation using the factor oracle algorithm. This results in a reshuffling of the beats, which lines up with the harmonic content of the song. The factor oracle algorithm can be modified with pattern-matching methods. The input to the factor oracle come from scores and real-time input, either audio or MIDI, and is output as audio or MIDI. It uses Antescofo to generate notes both from scores and generated as improvisations in tempo.\nTOP LEVEL graph TB; A[Master Clock] B[Audio] C[MIDI] A--\u003e|tempo, beat number, label| B A--\u003e|tempo, beat number, label| C In a nutshell, Djazz is made up of the following:\nseveral players which function independently. master control for synchronising timing and for broadcasting global commands. The master control sends out the following data synchronously to all the players:\ntempo, beat, beat label. It sends this data immediately in succession and in this order to midi and audio generators. This order is important, so that the generators can calculate the correct information to play at the beginning of each beat. It determinmes this data in the following ways:\nIt contains a beat clock abstraction which acts as a master clock; it outputs a beat number when it receives a bang. It increments its beat number with each output, but also keeps track of position in a song form and adjusts the beat in accordance if looped. It keeps track of tempo if tempo is manually input and fluctuates. This uses antescofo. It reads from the song dict to get label. GENERATORS The abstractions that do most of the work in Djazz are the generators. They accept the data passed by the master control and convert them into appropriate musical output. There are two types of generators: MIDI and audio. Their construction is very similar; the difference is a result of the way audio data is played differently from MIDI data.\nMIDI GENERATORS flowchart TB; gIn(( )) g1[Generator 1] g2[Generator 2] g3[Generator 3] g4[Generator 4] g5[Generator 5] mbPlayer[MIDI Beat Player] t1[MIDI\\nTrack 1] t2[MIDI\\nTrack 2] t3[MIDI\\nTrack 3] t4[MIDI\\nTrack 4] t5[MIDI\\nTrack 5] gOut((( ))) gIn --\u003e g1 --\u003e mbPlayer gIn --\u003e g2 --\u003e mbPlayer gIn --\u003e g3 --\u003e mbPlayer gIn --\u003e g4 --\u003e mbPlayer gIn --\u003e g5 --\u003e mbPlayer mbPlayer --\u003e t1 --\u003e gOut mbPlayer --\u003e t2 --\u003e gOut mbPlayer --\u003e t3 --\u003e gOut mbPlayer --\u003e t4 --\u003e gOut mbPlayer --\u003e t5 --\u003e gOut AUDIO GENERATORS To write",
    "description": "Because Djazz is beat-based, most objects are built to receive and process information at recurring instances.",
    "tags": [],
    "title": "Synchronous Data in the Model",
    "uri": "/Djazz_2.0_documentation/3_api/6_architecture/3_synchronous_data_model.html"
  },
  {
    "breadcrumb": "API \u003e Adding to Djazz",
    "content": "The factor oracle player, which Djazz uses to improvise, can be modified or replaced by another algorithm. There are several levels of depth to which you can modify the improvisation functionality; read the API section on improvisation . Here is just an explanation for where to put a new improviser Max object or abstraction.\nReplace the improviser.maxpat abstraction in djazz.beat_generator. Your new improviser object should conform to the same input and output messages as the improviser.maxpat (see the reference page ).",
    "description": "The factor oracle player, which Djazz uses to improvise, can be modified or replaced by another algorithm.",
    "tags": [],
    "title": "Audio Effects",
    "uri": "/Djazz_2.0_documentation/3_api/7_adding_to_djazz/4_improvisers.html"
  },
  {
    "breadcrumb": "Manual",
    "content": " Audio Live Input Audio Out Bank ",
    "description": " Audio Live Input Audio Out Bank ",
    "tags": [],
    "title": "Audio Window",
    "uri": "/Djazz_2.0_documentation/1_manual/4_audio_window.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "",
    "description": "",
    "tags": [],
    "title": "djazz view control",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz_view_control.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Converts an antescofo file into a Max dict (which can then be saved as a JSON file).\nDict format:\ntracks\nint\nbeat int notes int: note data int: note data\nint\n…\nOUTLETS 0 symbol tracks dict name\nMESSAGES symbol\nfull path to antescofo file\nclear\nclears the Max dict\nSEE ALSO ",
    "description": "Converts an antescofo file into a Max dict (which can then be saved as a JSON file).",
    "tags": [],
    "title": "djazz.antescofo_file_to_tracks_dict",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.antescofo_file_to_tracks_dict.html"
  },
  {
    "breadcrumb": "API",
    "content": "To use a new kind of Launchpad, a Launchpad device file must be created and added to the djazz_data/presets folder, and a corresponding Max objects added in the external_controllers subpatcher at the top level of the.",
    "description": "To use a new kind of Launchpad, a Launchpad device file must be created and added to the djazz_data/presets folder, and a corresponding Max objects added in the external_controllers subpatcher at the top level of the.",
    "tags": [],
    "title": "External controls and views",
    "uri": "/Djazz_2.0_documentation/3_api/4_external_controls_and_views.html"
  },
  {
    "breadcrumb": "Manual \u003e MIDI Window",
    "content": " Track effects See effects .\nFile/track info select Selecting either the folder button or the information (i) button will open the view to either load a track, or see the current playback data of the track.\nLoad MIDI track You can load a track that does not follow the chord progression in the song file. If the track contains chords that are used in the song file, though, the improviser will use this chord information to create a harmonically correct solo!\nTrack info view This displays the current beat, the current tempo, and the current transposition that the improviser has found , if this setting is on.",
    "description": "Track effects See effects .\nFile/track info select Selecting either the folder button or the information (i) button will open the view to either load a track, or see the current playback data of the track.",
    "tags": [],
    "title": "MIDI Tracks View",
    "uri": "/Djazz_2.0_documentation/1_manual/3_midi_window/4_tracks_view.html"
  },
  {
    "breadcrumb": "Manual \u003e Main Window",
    "content": "When a song is loaded, its grid will appear. The cells of the grid change color depending on whether Djazz is engaged and whether a cell is currently playing or not. The colors represent the following:\nLight gray: not the current measure/chapter of the song Dark gray: the current measure measure/chapter of the song, but Djazz is not engaged Blue: the current measure measure/chapter of the song, but not playing Orange: the current measure measure/chapter of the song, and playing 1. Chapter Select At the top are listed the “chapters” of the song–different sections like verses, choruses, and bridges. Clicking on a chapter will take you to the first measure of the chapter. If Djazz is engaged, it will start playing from here when the next beat is received.\n2. Bar Select When a chapter is selected, the bars in the chapter are shown below it. Each bar contains the number of beats given by the song’s time signature. Clicking on a bar will take you to the first beat in the bar. If Djazz is engaged, it will start playing from here when the next beat is received.\n3. Rewind-to-beginning Button Click to go to the beginning (first bar of first chapter) of the song.\n4. Lock button When the lock button next to the rewind button is on, Djazz will rewind to the beginning of the song every time it is disengaged (i.e., when the metronome is turned off, or when the engage button is unselected in manual or remote beat input.)\n5. Loop Button When selected, Djazz will loop the current chapter or the whole song, depending on the choice selected to the right of the button. That is, it will start from the beginning immediately when the end of the current chapter or song is reached\n5. Loop-Chapter/Song Select Selects whether to loop the current chapter or the whole song when the loop-chapter button is on.",
    "description": "When a song is loaded, its grid will appear. The cells of the grid change color depending on whether Djazz is engaged and whether a cell is currently playing or not.",
    "tags": [],
    "title": "Song Grid",
    "uri": "/Djazz_2.0_documentation/1_manual/2_main_window/4_song_grid.html"
  },
  {
    "breadcrumb": "Manual \u003e Main Window",
    "content": " 1. MIDI Flush This will clear any sounding MIDI output.\n2. MIDI input port selection menu This menu will update to list all possible MIDI input ports, from other applications like Logic or Ableton, for instance. Default is “none:” no MIDI input will come through.\n3. Computer keyboard window open/close When selected, the computer keyboard window will open.\n4. MIDI input monitor on/off When illuminated, MIDI in will be heard. This does not affect nor is not affected by the recording status in the Live MIDI Input window .\n5. MIDI monitor output port selection menu This menu will update to list all possible MIDI output ports to send MIDI monitor output. Default is “none:” no MIDI output will be sent.\n6. MIDI volume meter When the monitor button is on, this will show the MIDI input volume level in green, orange, and red. When the monitor is off, it will be grey.\nComputer Keyboard Window 1. Output Port 2. MIDI Channel select 3. Number keys enable When enabled, the computer keys 0-9 will play the MIDI values C3-D4.\n4. Mode selection menu Select between monophonic and polyphonic mode\n5. Keyboard Click a key with the mouse to play it. If the mode selected is polyphonic, you must click the key again to stop it playing.",
    "description": "1. MIDI Flush This will clear any sounding MIDI output.",
    "tags": [],
    "title": "MIDI Input Selector",
    "uri": "/Djazz_2.0_documentation/1_manual/2_main_window/8_midi_input_selector.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Uses antescofo to infer the current tempo based on time between input messages.\nLoads the file antescofo_djazz.txt, which must be in the Max search path (currently in data/antescofo_scores).\nOUTLETS 0 float tempo inferred from time between inputs\nMESSAGES bang\nleft inlet: bangs will cause inferred tempo to be output. Initial tempo must be set and bangs must not deviate far from current tempo. Two bangs must occur before tempo is inferred.\ninitial_tempo\nleft inlet: ( + float) tempo to set antescofo’s tempo inference mechanism. Initial input tempo must be close to this.\nSEE ALSO ",
    "description": "Uses antescofo to infer the current tempo based on time between input messages.",
    "tags": [],
    "title": "djazz.antescofo_get_tempo",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.antescofo_get_tempo.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "Effects Pitch Transposition Changes the pitch of the MIDI output\nOctave Transposition Changes the octave of the MIDI output\nSpeed Changes the speed of the MIDI output\nLoop Loops the previous n beats of the MIDI output\n“Jam” (Improvise) Section “Jam” Button Turns the improviser on. When this is on, the MIDI track(s) is/are not played back straight, but beats are chosen based on the harmony and the next two controls, continuity and potch range:\nContinuity This determines the length in beats that sections of the score will be played back in sequence. Once this many beats has been played in sequence, the improviser will jump to a new section of the score.\nThe maximum coninuity is 255 beats. When the “MAX” button is on, this will be the continuity–i.e., the score will be played back without improvising, i.e. jumping around through it (given that the score is \u003c 255 beats long. If you’re using this with a score that’s longer than 255 beats and you just want to play the score straight, there’s no reason to be even using the improviser.)\nTransposition Window The improviser tries to match beats that have the same harmony as the current beat. By adjusting the pitch range, it will look for beats with a similar chord type but with roots above or below the current chord root. A pitch range of n will look for chords between (and including) n semitones below and n semitones above the current chord root. Set to zero, it will match the chord root exactly. Beats with different roots will be transposed to the proper harmony.",
    "description": "Effects Pitch Transposition Changes the pitch of the MIDI output",
    "tags": [],
    "title": "Effects Bar",
    "uri": "/Djazz_2.0_documentation/1_manual/5_effects.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "External controllers such as Launchpads or MIDI keyboards can be used to trigger controls in Djazz.\nDjazz has been tested with the Novation Launchpad Mini and the Launchpad Pro MK3.\nTo use a new kind of Launchpad, an interface must be added to the Djazz patch Connect/disconnect a device When a device is connected to the computer, Djazz will automatically recognize it and its name will be added to the external controllers menu, and a popup window will also open. This popup window can be reopened at any time by selecting the interface name from the menu.\nTo disconnect all devices, click the “X” button above and to the left of the menu.\nDevice interface window Connect/Disconnect button Click to connect or disconnect a device. By default, devices are disconnected.\nMapping Buttons Load a saved mapping, save the current mapping, clear the current mapping, or open the editor widow to edit the current mapping.\nMapping file name window Displays the current loaded mapping, if any.\nRemember most recent mapping If you want Djazz to remember the mapping it was using the last time the program was closed, do the following:\nWith the device interface window in focus, select Modify Read-Only from the Max File Menu, or press ⌥⌘M. From the Max File menu, select Save, or press ⌘S. Grid View The top four rows of each launchpad are reserved for the bars of the song grid. The CC controls along the right side of a Launchpad change the chapters.\nParameter controls The bottom four rows are available as parameter controls, which can be set by the user using the preset editor window.\nThe mapping editor window Create/edit a mapping To create a new mapping from a launchpad cell to a Djazz control, click the Edit button in the device interface window to open the mapping editor window. Follow the instructions to set the mapping. To save the mapping, click “Save” in the interface device window.\nExample mappings included with Djazz There are three (3) Launchpad mappings included with Djazz, for the Novation Launchpad Mini and the Launchpad Pro MK3. They can be found in the djazz_user/mappings folder. The mappings are as follows:\nMAPPING EXAMPLE 1 LAUNCHPAD PRO MK3 AUDIO 1 LOOP 1 AUDIO 1 LOOP 2 AUDIO 1 LOOP 3 AUDIO 1 LOOP 4 AUDIO 2 LOOP 1 AUDIO 2 LOOP 2 AUDIO 2 LOOP 3 AUDIO 2 LOOP 4 AUDIO 1 SPEED 2 AUDIO 1 PITCH UP AUDIO 1 OCTAVE UP AUDIO 1 UNMUTE AUDIO 2 SPEED 2 AUDIO 2 PITCH UP AUDIO 2 OCTAVE UP AUDIO 2 UNMUTE AUDIO 1 SPEED 3/2 AUDIO 1 RESET PITCH AUDIO 1 RESET OCTAVE AUDIO 1 TRACK ON AUDIO 2 SPEED 3/2 AUDIO 2 RESET PITCH AUDIO 2 RESET OCTAVE AUDIO 2 TRACK ON AUDIO 1 SPEED 1/2 AUDIO 1 PITCH DOWN AUDIO 1 OCTAVE DOWN AUDIO 1 IMPROVISE AUDIO 1 SPEED 1/2 AUDIO 1 PITCH DOWN AUDIO 1 OCTAVE DOWN AUDIO 2 IMPROVISE LAUNCHPAD MINI AUDIO 1 LOOP 1 AUDIO 1 LOOP 2 AUDIO 1 LOOP 3 AUDIO 1 LOOP 4 AUDIO 2 LOOP 1 AUDIO 2 LOOP 2 AUDIO 2 LOOP 3 AUDIO 2 LOOP 4 AUDIO 1 SPEED 2 AUDIO 1 PITCH UP AUDIO 1 OCTAVE UP AUDIO 1 UNMUTE AUDIO 2 SPEED 2 AUDIO 2 PITCH UP AUDIO 2 OCTAVE UP AUDIO 2 UNMUTE AUDIO 1 SPEED 3/2 AUDIO 1 RESET PITCH AUDIO 1 RESET OCTAVE AUDIO 1 TRACK ON AUDIO 2 SPEED 3/2 AUDIO 2 RESET PITCH AUDIO 2 RESET OCTAVE AUDIO 2 TRACK ON AUDIO 1 SPEED 1/2 AUDIO 1 PITCH DOWN AUDIO 1 OCTAVE DOWN AUDIO 1 IMPROVISE AUDIO 1 SPEED 1/2 AUDIO 1 PITCH DOWN AUDIO 1 OCTAVE DOWN AUDIO 2 IMPROVISE MAPPING EXAMPLE 2 LAUNCHPAD PRO MK3 \u0026 LAUNCHPAD PRO MK3 MIDI OUT 1 UNMUTE MIDI OUT 2 UNMUTE MIDI OUT 3 UNMUTE MIDI OUT 4 UNMUTE MIDI OUT 5 UNMUTE MIDI OUT 6 UNMUTE MIDI OUT 7 UNMUTE MIDI OUT 8 UNMUTE MIDI TRACK 1 IMPROVISE MIDI TRACK 2 IMPROVISE MIDI TRACK 3 IMPROVISE MIDI TRACK 4 IMPROVISE MIDI TRACK 5 IMPROVISE MIDI TRACK 6 IMPROVISE MIDI TRACK 7 IMPROVISE MIDI TRACK 8 IMPROVISE MIDI OUT 9 UNMUTE MIDI OUT 10 UNMUTE MIDI OUT 11 UNMUTE MIDI OUT 12 UNMUTE MIDI OUT 13 UNMUTE MIDI OUT 14 UNMUTE MIDI OUT 15 UNMUTE MIDI TRACK 9 IMPROVISE MIDI TRACK 10 IMPROVISE MIDI TRACK 11 IMPROVISE MIDI TRACK 12 IMPROVISE MIDI TRACK 13 IMPROVISE MIDI TRACK 14 IMPROVISE MIDI TRACK 15 IMPROVISE MAPPING EXAMPLE 3 (Marc Chemillier’s original) LAUNCHPAD MINI \u0026 PRO MK3 GLOBAL SPEED 1/2 MIDI OUT 8 UNMUTE MIDI OUT 9 UNMUTE MIDI OUT 10 UNMUTE MIDI OUT 11 UNMUTE MIDI OUT 12 UNMUTE GLOBAL LOOP 5 GLOBAL LOOP 1 GLOBAL SPEED 3/2 MIDI OUT 13 UNMUTE MIDI OUT 14 UNMUTE GLOBAL RESET OCTAVE GLOBAL OCTAVE DOWN GLOBAL OCTAVE UP GLOBAL LOOP 6 GLOBAL LOOP 2 GLOBAL SPEED 2 MIDI OUT 3 UNMUTE MIDI OUT 4 UNMUTE MIDI OUT 5 UNMUTE MIDI OUT 6 UNMUTE MIDI OUT 7 UNMUTE GLOBAL LOOP 7 GLOBAL LOOP 3 GLOBAL SPEED 4 AUDIO OUT 1 UNMUTE AUDIO OUT 2 UNMUTE AUDIO OUT 3 UNMUTE GLOBAL LOOP 8 GLOBAL LOOP 4 ",
    "description": "External controllers such as Launchpads or MIDI keyboards can be used to trigger controls in Djazz.",
    "tags": [],
    "title": "External Controllers",
    "uri": "/Djazz_2.0_documentation/1_manual/6_external_controllers.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Upon receipt of a beat number, label, and tempo, sends data about the next beat to read to the beat reader.\nPattr messages (must be passed via an external pattrhub/pattrstorage):\ntranspose_pitch (int) -255 - +255\ntranspose_octave (int) -255 - +255\nnext_beat (int) 0-255\nend_beat (int) 0-255\nspeed_active (int) 0/1\nspeed_numerator (int) 1-255\nspeed_denominator (int) 1-255\nloop_length (int) 1-8\nloop_section_active (int) 0/1\nloop_section_beats (list: int int)\nimprovise (int) 0/1\npitch_range (int) 0-11\nmax_continuity (int) 0-255\nOUTLETS 0 list (int int int int) 1. beat generator number, 2. track number, 3. start time in ms, 4. end time in ms\nMESSAGES symbol\nright inlet: label for analyzer\nbeat\nleft inlet: (+ int) incoming beat number\nlabel\nleft inlet: (+ symbol) incoming beat label\ntempo\nleft inlet: (+ float) current tempo\nfactor_oracle\nleft inlet: (+ symbol) dict name\nbeat_dict_name\nleft inlet: (+ symbol) dict name\nSEE ALSO djazz.beat_generator\ndjazz.audio.audio_out",
    "description": "Upon receipt of a beat number, label, and tempo, sends data about the next beat to read to the beat reader.",
    "tags": [],
    "title": "djazz.audio.beat_generator",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.beat_generator.html"
  },
  {
    "breadcrumb": "API",
    "content": "Synchronous and Asynchoronous Input Input is passed to patchers two ways: synchronously and asynchronously, depending on the type of input data. Synchoronous data;\nbeat number (int), current tempo (float) beat label (symbol) loop section beats (list: int int) the start and end beat of the section being looped. This is used to calculate the length of repetitions for live MIDI and audio input. It can change when the current beat advances to the next chapter, so this data is triggered and sent out by the master control instead of asynchronously. dict names (symbol), such as those for beat lists and factor oracles . This is because data must be loaded before other control variables can be set. This data is passed serially through patch cords. Send and receive Max objects are not used, to ensure synchrony, as well as to aid debugging and avoid complicating the control flow.\nAsynchronous data is anything changed by the user using the GUI. A lot of this data is well known to audio interface users: track volume, MIDI and audio effects like pitch transposition, for instance.",
    "description": "Synchronous and Asynchoronous Input Input is passed to patchers two ways: synchronously and asynchronously, depending on the type of input data.",
    "tags": [],
    "title": "System Architecture",
    "uri": "/Djazz_2.0_documentation/3_api/6_architecture.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "Djazz comes with many preloaded songs, but you can also load your own songs to play and improvise on. To do this, you need to make two files: a song file and a score file. This section contains instructions on the two included tools that let you create these files.",
    "description": "Djazz comes with many preloaded songs, but you can also load your own songs to play and improvise on.",
    "tags": [],
    "title": "Tools",
    "uri": "/Djazz_2.0_documentation/1_manual/7_tools.html"
  },
  {
    "breadcrumb": "API",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Adding to Djazz",
    "uri": "/Djazz_2.0_documentation/3_api/7_adding_to_djazz.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Plays back a beat of audio at a time from a buffer, where beats are passed in in a dict.\nUses supervp to playback in tempo and with pitch transposition.\nOUTLETS 0 signal audio out 1\n1 signal audio out 2\nMESSAGES list\nleft inlet: (int float int int) 1. pitch transposition, 2. tempo, 3. start time, 4. end time\naudio_buffer_offset_in_ms\nmiddle inlet: (+ int) adjusts the latency of the audio output. Default is 170 ms.\ncrossfade_time_in_ms\nmiddle inlet: (+ int) adjusts the crossfade time between beats.\naudio_buffer_name\nright inlet: (+ symbol) audio buffer to play from\nSEE ALSO djazz.audio.beat_generator\ndjazz.audio.supervp_player",
    "description": "Plays back a beat of audio at a time from a buffer, where beats are passed in in a dict.",
    "tags": [],
    "title": "djazz.audio.beat_player",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.beat_player.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "AllINeed, 64 164 4 \" 1\";\nAllOfMe, 160 135 4 \" 1 33\";\nAllthethingsyouare, 144 180 4 \" 1 33\";\nAutumnleavesDoMin, 192 182 4 \" 1 33\";\nBandeOrgueZay, 40 140 4 \" 1\";\nBesameMucho, 160 110 4 \" 1 33\";\nBluesFamaj, 48 120 4 \" 1\";\nBoomerang, 236 58 4 \" 1 4 36 44\";\nCamelBluesTernaire8, 32 103 4 \" 1\";\nCamelSahelien, 96 103 4 \" 1\";\nCapharnaum, 128 131 4 \" 1\";\nCaravan, 256 220 4 \" 1 33\";\nCarlos, 32 80 4 \" 1\";\nCerebral, 608 125 4 \" 1 9 33 49 73 105 121\";\nCheektoCheek, 532 184 4 \" 1 6 38 62 78 102\";\nCheektoCheekDjin, 224 184 4 \" 1 33\";\nCheerleader, 208 118 4 \" 1 9 13 21\";\nChegadeSaudade, 300 135 4 \" 1 9 41 71\";\nDang, 64 105 4 \" 1\";\nEmbona, 532 150 4 \" 1 24 56 86 118\";\nEquilibrium, 56 118 4 \" 1 3\";\nEspion, 752 129 4 \" 1 17 49 61 93 125 157\";\nEtrangeJournee, 144 125 4 \" 1 13\";\nEveryBreath, 400 103 4 \" 1 11 35 45 69\";\nFahatsia, 128 149 4 \" 1\";\nFormidable, 324 135 4 \" 1 5 37 39 71\";\nFree1, 4 100 4 \" 1\";\nFree4, 16 100 4 \" 1\";\nFree8, 32 100 4 \" 1\";\nFree16, 64 200 4 \" 1\";\nFree24, 96 200 4 \" 1\";\nFree32, 128 200 4 \" 1\";\nFreedomJazzDance, 32 105 4 \" 1\";\nGuerre, 240 119 2 \" 1 27 48 65 97\";\nHandfulofkeys, 344 240 4 \" 1 9 41 50\";\nHandfulofkeysTheme1, 160 240 4 \" 1 9 41\";\nHappy, 192 160 4 \" 1 17 33\";\nHelmut, 128 130 4 \" 1\";\nHoany, 190 133 1 \" 1 22 40 66 96 119 151 159\";\nIfarakely, 444 102 4 \" 1 33 65 81 88\";\nJabeau, 48 120 3;\nJakeFine, 32 83 4 \" 1\";\nJustAGigolo, 272 124 4 \" 1 5 37\";\nJustTheWay, 64 130 4 \" 1 11\";\nKillerJoe, 128 135 4 \" 1\";\nKissamile, 32 170 4 \" 1\";\nL-O-V-E, 504 157 4 \" 1 5 37 69 101\";\nLaJavanaise, 72 110 3 \" 1\";\nLasa, 672 120 4 \" 1 33 53 78 95 103 112 144\";\nLiana, 748 120 4 \" 1 27 56 67 92 124 156\";\nLianaIntro16, 64 270 4 \" 1\";\nLoveYourself, 160 100 4 \" 1 33\";\nLullaby, 536 129 4 \" 1 11 43 75 79 95\";\nMakingFlippy, 64 130 4 \" 1\";\nMalaky, 346 145 2 \" 1 19 43 75 99 119 144\";\nMezerg, 128 132 4 \" 1\";\nMieuxQue, 608 126 4 \" 1 9 33 57 81 97 121\";\nNightintunisia, 320 170 4 \" 1 17 49 65\";\nPadam, 618 181 3 \" 1 24 46 76 95 117 149 175\";\nPasAVendre, 616 134 4 \" 1 9 25 43 75 91 123\";\nPasJalouse, 608 139 4 \" 1 17 33 49 65 81 89 121\";\nPasPeur, 592 120 4 \" 1 5 33 61 89 117\";\nPerfect, 190 46 2 \" 1 5 32 58 64\";\nPerhaps, 304 103 4 \" 1 5 37 53\";\nRasputin, 148 123 4 \" 1 29\";\nRasputincourt, 116 123 4 \" 1\";\nSatinDoll, 144 125 4 \" 1 5\";\nSave, 406 144 2 \" 1 5 37 69 101 120 148 180\";\nSoWhat, 128 135 4 \" 1\";\nSpain, 220 240 4 \" 1 11 19 32\";\nStarWazzz, 32 135 4 \" 1\";\nSummertime, 64 180 4 \" 1\";\nTakeFive, 200 170 5 \" 1 33\";\nTheseBoots, 624 164 4 \" 1 32 63 94 102 125\";\nTsofyrano, 672 178 4 \" 1 17 45 61 93 105 137\";\nWalk, 504 102 4 \" 1 9 23 45 59 73 97 111\";\nWilliason, 56 140 4 \" 1\";\nWizKhalifa, 32 194 4 \" 1\";\nZay, 420 140 4 \" 1 21 34 66 80\";",
    "description": "AllINeed, 64 164 4 \" 1\";\nAllOfMe, 160 135 4 \" 1 33\";",
    "tags": [],
    "title": "Preloaded Songs",
    "uri": "/Djazz_2.0_documentation/1_manual/8_preloaded_resources.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Reads the note data at the given beat data and sends it out to the beat player.\nOUTLETS 0 list (int int int) 1. track number, 2. start time in ms 3. end time in ms\n1 int beat count\nMESSAGES list\nleft inlet: (symbol int float) 1. beat dict name, 2. pitch transposition, 3. tempo\nsymbol\nright inlet: beat list dict name\nSEE ALSO ",
    "description": "Reads the note data at the given beat data and sends it out to the beat player.",
    "tags": [],
    "title": "djazz.audio.beat_reader",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.beat_reader.html"
  },
  {
    "breadcrumb": "API",
    "content": "The sections in this chapter refer to functionality that is not in Djazz, but where the architecture is organized to offer a development environment that encourages musical exploration as well as design issues in music programming.",
    "description": "The sections in this chapter refer to functionality that is not in Djazz, but where the architecture is organized to offer a development environment that encourages musical exploration as well as design issues in music programming.",
    "tags": [],
    "title": "Going further",
    "uri": "/Djazz_2.0_documentation/3_api/8_going_further.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Controls which other audio generator(s) a generator will listen to\nPattr messages (must be passed via an external pattrhub/pattrstorage):\ninclude_master (int) 0/1\nlistener_1 (int 1-3) which player listener 1 is listening to\nlistener_2 (int 1-3) which player listener 2 is listening to\nlistener_3 (int 1-3) which player listener 3 is listening to\nOUTLETS 0 symbol label received from player being listened to\nMESSAGES list\nright inlet: (int symbol) listener number and label passed from listener\nlabel\nleft inlet: (symbol) the label passed from the master control. Will be passed through if include_master is set to 1\nSEE ALSO djazz.analyzer",
    "description": "Controls which other audio generator(s) a generator will listen to",
    "tags": [],
    "title": "djazz.audio.listeners_router",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.listeners_router.html"
  },
  {
    "breadcrumb": "API",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Notes on Rewriting Djazz",
    "uri": "/Djazz_2.0_documentation/3_api/9_notes_on_rewriting_djazz.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "In several cases, instead of saving individual files, Djazz saves groups of files together in folders. This means that interacting with Max’s save and load dialogs is slightly different than it would be for individual files.\nThe following cases uses folders when saving and loading:\nsong files live MIDI recordings live audio recordings The following cases use individual files:\nscore files track files device mappings In one of the first three cases, when you click the pertinent “Save” button, a dialog will appear. To save to a folder, perform the following steps in the dialog:\nClick “New Folder.” Enter a name for the folder in the popup window that appears Click “Save” in the dialog. To load a folder, when you click the pertinent “Load” button, a dialog will appear. Choose the folder you want; don’t choose a file inside it. When you click on “Open,” the folder and all its files will load.",
    "description": "In several cases, instead of saving individual files, Djazz saves groups of files together in folders.",
    "tags": [],
    "title": "Saving and Loading Files",
    "uri": "/Djazz_2.0_documentation/1_manual/9_saving_and_loading_files.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Records an audio buffer and a beat list, given the appropriate input.\nOUTLETS 0 repetitions + int sends every time a new repetition is added to beat list\n1 setsize + int, crop 0 + int sets the size of the buffer when recording is started/stopped, with/without clearing it, respectively\nMESSAGES signal\nleft inlet: audio in 1\nsignal\nin1: audio in 2\naudio_buffer_name\nright inlet: (+ symbol) name of audio buffer to record to\naudio_score_dict_name\nright inlet: (+ symbol) name of audio score (+ beat list) to write to\nbeat\nright inlet: (+ int) starts writing a new beat when received\ninitial_tempo\nright inlet: (+ float) bpm by which to calculate next beat and note durations\nloop_section_beats\nright inlet: (+ list: int int) start beat, end beat\nwill begin a new repetition whenever end beat is reached, restarting at start beat\nSEE ALSO djazz.audio",
    "description": "Records an audio buffer and a beat list, given the appropriate input.",
    "tags": [],
    "title": "djazz.audio.record",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.record.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "The following messages are sent out of Djazz via its UDP send port:\npulse sent whenever a new beat occurs\nbpm float - the current tempo\nloop_length int - the current loop length of score “new2”\noctave int - the current octave transposition of score “new2”\nspeed float - the current speed of score “new2”\nbar int - the current bar of score “new2”\nchapter int - the current chapter of score “new2”",
    "description": "The following messages are sent out of Djazz via its UDP send port:",
    "tags": [],
    "title": "View Messages",
    "uri": "/Djazz_2.0_documentation/1_manual/10_view_messages.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Wraps the supervp player for audio playback\nOUTLETS 0 signal audio out 1\n1 signal audio out 2\n2 signal position in audio file\nMESSAGES list\nleft inlet: float float float int:1. start time in ms, 2. end time in ms, 3. duration in ms, 4. transposition (in semitones)\nint\nin1: crossfade time between beats in ms\nsymbol\nright inlet: buffer name to play from\nSEE ALSO ",
    "description": "Wraps the supervp player for audio playback\nOUTLETS 0 signal audio out 1",
    "tags": [],
    "title": "djazz.audio.supervp_player",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.supervp_player.html"
  },
  {
    "breadcrumb": "Manual",
    "content": " Pressing the settings button opens the settings window. The two settings you can change relate to the live audio playback.\nAUDIO OFFSET (ms) Sets the latency of the audio playback in milliseconds. Max has a natural latency between recording and playing; this setting offsets the latency. Default is 170.\nXFADE TIME (ms) Sets the crossfade time between live audio playback beats. Default is 203 milliseconds.",
    "description": "Pressing the settings button opens the settings window. The two settings you can change relate to the live audio playback.",
    "tags": [],
    "title": "Settings",
    "uri": "/Djazz_2.0_documentation/1_manual/11_settings.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "",
    "description": "",
    "tags": [],
    "title": "djazz control",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz_control.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Adjusts message being sent to djaz.audio.beat_player so that the audio will be transposed up the desired number of octaves.\nPattr messages (must be passed via an external pattrhub/pattrstorage):\noctaves (int) -255 to 255\nOUTLETS 0 list (symbol int float) 1. beat dict name, 2. pitch transposition, 3. tempo\nMESSAGES list\nleft inlet: (+ list: symbol int float) 1. beat dict name, 2. pitch transposition 3. tempo\nSEE ALSO ",
    "description": "Adjusts message being sent to djaz.audio.beat_player so that the audio will be transposed up the desired number of octaves.",
    "tags": [],
    "title": "djazz.audio.transpose_octaves",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.transpose_octaves.html"
  },
  {
    "breadcrumb": "Manual",
    "content": "Each track or score can be played in improvise mode or not, by selecting or deselecting the “jam” button.\nWhen not in improvise mode–we’ll call this play mode–the beats will be played one after the other as they were written/recorded in the loaded tracks. In improvise mode, at each new beat, Djazz calculates a new beat’s worth of music to play. The calculation consists of finding a beat in the database that is the “best match” (or at least a “good match”) based on the data that exists at the beginning of the new beat. The selection is made using a data structure called a factor oracle.\nIn play mode, Djazz uses the beat number to calculate the next beat. In improvise mode, the beat number is not considered; the chord label from the song file is used.In each of these two modes changing the speed control will make play at the tempo given by the tap or play at a different speed: double speed, quadruple speed, half speed, and one and a half speed. The result is different, because play mode uses beat number messages and improvise mode uses beat label messages.\nIn play mode, if the Speed Control is active, beat numbers are output at a different tempo than the input tap. The musical result is an interesting version of “playing out:” beats are played at a different rate, meaning their internal harmony, given by each beat’s chord label, no longer aligns with that of the other tracks:\nMaster Clock Input: Am7 D7 Gmaj7 Cmaj7 Internal Clock Follower Output: Am7 D7 Gmaj7 Cmaj7 Am7 D7 Gmaj7 Cmaj7 In improvise mode, with the speed control on, labels are still passed in at the original tempo. The result is that the improviser outputs beats that conform to the harmony of the given beat, even though they are at a different tempo:\nMaster Clock Input: Am7 D7 Gmaj7 Cmaj7 Improviser Output: Am7 Am7 D7 D7 Gmaj7 Gmaj7 Cmaj7 Cmaj7 ",
    "description": "Each track or score can be played in improvise mode or not, by selecting or deselecting the “jam” button.",
    "tags": [],
    "title": "Improvising with Djazz",
    "uri": "/Djazz_2.0_documentation/1_manual/12_improvising.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Adjusts message being sent to djaz.audio.beat_player so that the audio will be transposed up the desired number of semitones.\nPattr messages (must be passed via an external pattrhub/pattrstorage):\nsemitones (int) -255 to 255\nOUTLETS 0 list symbol int float; 1. beat dict name, 2. pitchtransposition, 3. tempo\nMESSAGES list\nleft inlet: (+ list: symbol int float) 1. beat dict name, 2. pitch transposition, 3. tempo\nSEE ALSO ",
    "description": "Adjusts message being sent to djaz.audio.beat_player so that the audio will be transposed up the desired number of semitones.",
    "tags": [],
    "title": "djazz.audio.transpose_pitch",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.transpose_pitch.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Handles all the audio portion of djazz.\nOUTLETS 0 signal audio out 1 left\n1 signal audio out 1 right\n2 signal audio out 2 left\n3 signal audio out 2 right\n4 signal audio out 3 left\n5 signal audio out 3 right\nMESSAGES signal\nleft inlet: audio in 1\nsignal\nin1: audio in 2\n-\naudio_buffer_name\nin2: (+ symbol) name of audio buffer to record to and play from\nrecord_active\nin2: (+ 0/1) 1 arms the audio buffer to record; will not start recording until a beat number is received. 0 turns off record state.\ninitial_tempo\nin2: (+ float) bpm by which to calculate next beat and note durations\nloop_section_beats\nin2: (+ list: int int) start beat, end beat\nwill begin a new repetition whenever end beat is reached, restarting at start beat\nmax_repetitions\nin2: (+ int) will stop recording when this number is reached\nin\nright inlet: (+ symbol) folder name audio data to load for audio in subpatcher\nout\nright inlet: (+ symbol) folder name audio data to load for audio out subpatcher\nSEE ALSO djazz.audio.record\ndjazz.audio.supervp_player",
    "description": "Handles all the audio portion of djazz.\nOUTLETS 0 signal audio out 1 left",
    "tags": [],
    "title": "djazz.audio",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Passes audio signal through. Control with djazz.view.audio_track.\nPattr messages (must be passed via an external pattrhub/pattrstorage):\nvolume (int) 0-127\nactive (int) 0/1\nsolo (int) 0/1\nmute (int) 0/1\nOUTLETS 0 signal audio signal 1/L\n1 signal audio signal 2/R\nMESSAGES signal\nleft inlet: audio signal 1/L\nright inlet: audio signal 2/R\nSEE ALSO djazz.view.audio_out_track\ndjazz.solo_bank",
    "description": "Passes audio signal through. Control with djazz.view.audio_track.\nPattr messages (must be passed via an external pattrhub/pattrstorage):",
    "tags": [],
    "title": "djazz.audio_out_track",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.audio_out_track.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "When active, will output beats in the polyrhythm given by numerator/denominator. Incoming beats will not be output, except for those that fall in phase with the output beats.\nOUTLETS 0 bang -bangs over time in the polyrhythm determined by numerator and denominator 1 float -tempo using output bangs as beat MESSAGES bang\ndepends on polyrhythm state\nleft inlet: When effect off (active = 0), passed directly through. When effect on (active = 1), triggers a new polyrhythm, or is ignored if a polyrhythm is in course.\nactive\nleft inlet: (+ 0/1) turns effect off or on\nnumerator\nleft inlet: (+ int) number of evenly spaced bangs to output in the space of denominator beats at the given tempo\ndenominator\nleft inlet: (+ int) number of beats to output numerator evenly spaced bangs over\nSEE ALSO ",
    "description": "When active, will output beats in the polyrhythm given by numerator/denominator.",
    "tags": [],
    "title": "djazz.bang_speed",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.bang_speed.html"
  },
  {
    "breadcrumb": "API \u003e Abstraction Reference",
    "content": "Inputs bangs and outputs a beat number, based on loop, step, start, and end parameters.\nWill not output when end beat is reached or after.\nOUTLETS 0 int next beat\n1 bang bang when loop occurs\n2 bang bang when end is reached\nMESSAGES bang\nleft inlet: bang for next beat\nnext_beat\nright inlet: (+ int) sets the next beat to play when next bang is received\nend\nright inlet: (+ int) sets the end beat; when reached, no more output will occur\nstep\nright inlet: (+ int) how many beats to advance upon receiving a bang; default is 1\nSEE ALSO ",
    "description": "Inputs bangs and outputs a beat number, based on loop, step, start, and end parameters.",
    "tags": [],
    "title": "djazz.beat_clock",
    "uri": "/Djazz_2.0_documentation/3_api/1_abstraction_references/djazz.beat_clock.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/Djazz_2.0_documentation/categories.html"
  },
  {
    "breadcrumb": "",
    "content": " Djazz is a generative music program that improvises using material from pre-recorded scores or live human contributions. Born of jazz improvisation, it has been extended to world music and electro, and uses a data structure known as the factor oracle to improvise beat by beat.\nInstallation \u0026 Usage Djazz needs no special installation. Download the Djazz folder here.\nDocumentation License Djazz is licensed under the GNU GPLv3 license.\nCredits Marc Chemillier in collaboration with Gérard Assayag, Jérôme Nika, Mikhail Malt, Jean-Louis Giavitto, Georges Bloch IRCAM REACH Project IRCAM Musical Representations Team\nDjazz v2 coded by Daniel Brown",
    "description": "Software for musical co-creativity.",
    "tags": [],
    "title": "Djazz",
    "uri": "/Djazz_2.0_documentation/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/Djazz_2.0_documentation/tags.html"
  }
]

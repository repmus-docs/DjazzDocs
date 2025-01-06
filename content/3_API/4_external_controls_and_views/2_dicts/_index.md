+++
title = "Dicts"
weight = 20
+++


Dictionaries are used in Djazz in different ways, for representing songs, architecture, and as another example for the launchpad, to keep track of how buttons are mapped to parameters and how parameters are mapped to lights. For this, several different types of dictionaries were required: 

- Two [**device-specific**](#device-specific-dicts) dicts  
- One [**mapping**](#mapping-dict) dict  
- Two [**runtime parameter**](#runtime-parameter-dicts) dicts  


The format for each of these dicts can be done in different ways. Some criteria exist:

- User-created files should be easy to create, either by editing the text or with a max object; prefereably both.
- Data access in the dicts at runtime must be efficient.

These two criteria ask for different formats. Also, we might need to change them in the future, to accomodate new devices.

To address these issues, **database accessor** files exist to translate between the formats of the various dicts.  Each one exports a set of methods that access data or modify data. the implementation of the methods are hidden to the user.
Each one is specific to the context it acts in. The exported methods have the same names, but the implementation is different depending on the structure of the dict it reads or writes to.
thus, we can use a single javascript object to read the desired dictionaries and then translate them into the format the system needs.
Each accessor is imported into the module using a require statement.  The module names passed to these require statements are given as jsarguments to the object.  If we change or add a new dict format, we write a new reader, which only involves rewriting the implementation of the exported methods—and replace it in the appropriate require field.


##### Device-specific dicts

The two **device-specific** dicts are imported from JSON files; thus are two **device-specific** files:

- the **device** file
- the **grid** file

These must be written in order to connect a new device with view and control capabilities, like a Launchpad, to Djazz.

###### Device dict

the **device** file contains device-specific data:
- the device name (used for routing messages in Djazz)
- any metadata about the device itself
- the number of midi controls
- the number of cc controls
- the MIDI/CC codes for each color. Colors are represented by two variables, their _hue_ (the name of the color itself) and their _value_ (bright or dim).
- the MIDI/CC codes for each button's illumination behavior. For the Launchpad Pro MK3, buttons can glow statically, they can flash, or they can pulse. 

For the Launchpad Pro MK3, the data file is this:
```json
{
    "device" : "Launchpad Mini"
    ,
    "manual" : "https://leemans.ch/latex/doc_launchpad-programmers-reference.pdf"
    ,
    "midi_count" : 120 
    ,
    "cc_count" : 0
    ,
	"colors" : 	    {
        "none" : {
            "bright"    : 0
            ,
            "dim"       : 0
        }
        ,
		"red" : {
            "dim"       : 1
            ,
            "bright"    : 3
        }
        ,
        "orange" : {
            "dim"       : 17
            ,
            "bright"    : 51
        }
        ,
        "yellow" : {
            "dim"       : 41
            , 
            "bright"    : 51
        }
        ,
        "green" : {
            "dim"       : 16
            ,
            "bright"    : 48
        }
        ,
        "brown" : {
            "dim"       : 38
            ,
            "bright"    : 35
        }

    }
    ,
    "behaviors" : {
        "static"        : 12
        ,
        "flashing"      : 8
    }
}
```

###### Grid dict

the **grid** file describes the way a song grid can be represented on the Launchpad. It contains the following information:
- the device name 
- the cell numbers that represent song chapters. these are listed in order of the chapters they represent. In the following code example, then, "cc 89" represents chapter 1, "cc 79" represents chapter 2, etc.
- the colors that represent the state of a chapter in the grid. A grid cell (chapter or bar)
is in one of the following states:
	- __playing__: the cell is currently being played
	- __waiting__: the cell has been selected to be played, and will start playing as soon as the next beat occurs
	- __off__: neither waiting or playing
	- __unused__: the song does not contain the chapter or bar associated with this cell
- the cell numbers that represent song bars (listed in order like chapter numbers)
- the colors that represent the state of a bar in the grid (same as chapter states).

- optional metadata about the device, such as the links to manufacturer's information 

For the Launchpad Pro MK3, the grid file is this:
```json
{
    "device" : "Launchpad Pro MK3"
    ,
    "manual" : "https://fael-downloads-prod.focusrite.com/customer/prod/s3fs-public/downloads/LPP3_prog_ref_guide_200415.pdf"
    ,
    "grid" : {
        "chapter" :     {
            "cells" : [
                "cc 89", "cc 79", "cc 69", "cc 59", 
                "cc 49", "cc 39", "cc 29", "cc 19"
            ]
                ,
                "colors" : {
                    "unused"    : "none",
                    "off"       : "green dim static",  
                    "waiting"   : "green dim static",
                    "playing"   : "green bright static"
                }
        }
        ,
        "bar" :         {
            "cells" : [
                "midi 81", "midi 82", "midi 83", "midi 84", "midi 85", "midi 86", "midi 87", "midi 88", 
                "midi 71", "midi 72", "midi 73", "midi 74", "midi 75", "midi 76", "midi 77", "midi 78", 
                "midi 61", "midi 62", "midi 63", "midi 64", "midi 65", "midi 66", "midi 67", "midi 68", 
                "midi 51", "midi 52", "midi 53", "midi 54", "midi 55", "midi 56", "midi 57", "midi 58"
            ]
            ,
            "colors" :  {
                "unused"    : "none",
                "off"       : "brown dim static",  
                "waiting"   : "red dim static",
                "playing"   : "red bright static"
            }
        }
    }
}
```

##### Mapping dict

A **mapping** file is a file that the user creates, using the editing tool in Djazz, that contains the mappings between the Launchpad cells and the parameters she wants to control. It also imports into it the grid.


##### Runtime parameter dicts

Launchpads have both view and control capabilities; that is, they can send input to Djazz (_control_) as well as show output (_view_).


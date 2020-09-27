# QuaxTrip

Max patch encapsulating Miller Puckette's [QuackTrip](http://msp.ucsd.edu/tools/quacktrip/), a Pd implementation of [JackTrip](https://ccrma.stanford.edu/software/jacktrip/).

# Installation

1. If you don’t already have Max, [download](https://cycling74.com/downloads) and install it. Note that you do not need to purchase Max to use QuaxTrip, it will run in the unregistered version.
2. [Download](http://msp.ucsd.edu/software.html) and install Pure Data (version 0.51 or greater).
3. If running, quit Max.
4. [Download](http://msp.ucsd.edu/software.html) PdMax, unzip, and place in the ~/Documents/Max 8/library folder.
5. Clone or download this repository, unzip, and place in the ~/Documents/Max 8/library folder.

# Quick Start

There are two versions of QuaxTrip: **QuaxTrip Duet.maxpat** and **QuaxTrip Quintet.maxpat**. The only difference between these two, as the names imply, is that **Duet** allows only one remote partner while **Quintet** allows up to four. If you are only playing with one partner, Duet frees up some screen space and uses somewhat less CPU.

How to play with one partner:

1. Both you and your partner launch QuaxTrip Duet.maxpat.
2. If this is the first time you’ve launched QuaxTrip, you will be presented with a dialog box instructing you to locate the Pd app on your computer. You will only need to do this the first time, after that QuaxTrip remembers.
	1. macOS: locate and select the Pd app itself (presumably in the /Applications folder).
	2. Windows: *Not currently working. Windows support coming soon*.
3. In the Local channel (top left corner of the patch):
	1. The Input Starting Channel to reflect the first channel (or only channel, if mono) of incoming audio from your audio interface.
	2. Set volume as appropriate.
	3. If mono, check the Mono checkbox.
4. Turn the Output channel volume to make it audible. You should now hear yourself.
5. In the Remote 1 channel:
	1. QuaxTrip uses the Server foo.ucsd.edu by default, you can leave this setting as is. This public “conniption” server helps make the connection but once connected the audio runs straight between the two computers.
	2. Set the Call Name to something likely to be unique (e.g. jack-and-jill), no white space allowed. This is the same for you and your partner.
6. Set the On/Off toggle to on.

More Documentation coming soon.

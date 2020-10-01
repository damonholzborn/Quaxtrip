# QuaxTrip

Max patch encapsulating Miller Puckette's [QuackTrip](http://msp.ucsd.edu/tools/quacktrip/), a Pd implementation of [JackTrip](https://ccrma.stanford.edu/software/jacktrip/).

# Installation

1. If you don’t already have Max, [download](https://cycling74.com/downloads) and install it. Note that you do not need to purchase Max to use QuaxTrip, it will run in the unregistered version.
2. [Download](http://msp.ucsd.edu/software.html) and install Pure Data (version 0.51-2 or greater).
3. If Max is running, quit Max.
4. [Download](http://msp.ucsd.edu/software.html) PdMax, unzip, and place in the ~/Documents/Max 8/library directory.
5. [Download](https://github.com/damonholzborn/QuaxTrip/releases/tag/quaxtrip-2020-1001) the latest release of QuaxTrip, unzip, and place in the ~/Documents/Max 8/library directory.

# Quick Start

There are two versions of QuaxTrip: **QuaxTrip Duet.maxpat** and **QuaxTrip Quintet.maxpat**. The only difference between these two, as the names imply, is that **Duet** allows only one remote partner while **Quintet** allows up to four. If you are playing with only one partner, **Duet** frees up some screen space and uses somewhat less CPU.

*Note: It is **highly** recommended that you are connected to the internet via Ethernet rather than WiFi. In a pinch, WiFi might work, but you are much more likely to get dropouts.*

How to play with a remote partner:

1. Both you and your partner launch **QuaxTrip Duet.maxpat**.
2. If this is the first time you’ve launched QuaxTrip, you will be presented with a dialog box instructing you to locate and select the Pd app (binary) on your computer. You will only need to do this the first time you run the patch.
	1. macOS: The PD app is typically in the /Applications directory.
	2 Windows: The PD app is typically in the /Program Files/Pd/bin  directory.
3. In the **Local** channel (top left corner of the patch):
	1. The **Input Starting Channel** to reflect the first channel (or only channel, if mono) of incoming audio from your audio interface.
	2. Set volume as appropriate.
	3. If using only one channel of input, check the Mono checkbox.
4. Adjust the **Output** channel volume to make it audible. You should now hear yourself. If using live mics, watch out for feedback.
5. In the **Remote 1** channel:
	1. QuaxTrip uses the **Server** foo.ucsd.edu by default. This public “conniption” server helps make the connection but once connected the audio runs straight between the two computers.
	2. Set the **Call Name** to something likely to be unique (e.g. jack-and-jill), no white space allowed. The **Call Name** is the same for you and your partner.
6. Set the On/Off toggle to on.

Once you and your partner have completed these steps, the connected checkbox should be checked and you should now be able to hear each other!

If you want to play with more than one partner, use **QuaxTrip Quintet.maxpat** instead and repeat steps 5 & 6 for each partner, making sure to select a unique **Call Name** for each set of partners.

More Documentation included in Manual.pdf in the QuaxTrip distribution.

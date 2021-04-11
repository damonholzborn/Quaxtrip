# Quaxtrip

Quaxtrip is a set of Max patches that makes low-latency uncompressed audio and messaging interconnections over the internet, intended for musicians wishing to play together remotely.

# Installation

1. If you don’t already have Max 8, [download](https://cycling74.com/downloads) and install it. Note that you do not need to purchase Max to use Quaxtrip, it will run in the unregistered version.
2. [Download](http://msp.ucsd.edu/software.html) and install Pure Data (version 0.51-2 or later — listed on the download page under **Current Stable Release**).
3. If Max is running, quit Max.
4. [Download](http://msp.ucsd.edu/software.html) PdMax (version 0.54 or greater — listed on the download page under Experimental: pd~ ported to Max/MSP 6,7, and 8 by Puckette & Apel), unzip, and place in the ~/Documents/Max 8/library directory. PdMax contains the Max object (pd~) that allows you to run Pd patches in Max.

5. [Download](https://github.com/damonholzborn/Quaxtrip/archive/main.zip) the latest release of Quaxtrip, unzip, and place in the ~/Documents/Max 8/library directory.

# Quick Start

There are two versions of Quaxtrip: **Quaxtrip Duet.maxpat** and **Quaxtrip Quintet.maxpat**. The only difference between these two, as the names imply, is that **Duet** allows only one remote partner while **Quintet** allows up to four. If you are playing with only one partner, **Duet** frees up some screen space and uses somewhat less CPU.

*Note: It is **highly** recommended that you are connected to the internet via Ethernet rather than WiFi. In a pinch, WiFi might work, but you are much more likely to get dropouts.*

How to play with a remote partner:

1. Both you and your partner launch **Quaxtrip Duet.maxpat**.
2. If this is the first time you’ve launched Quaxtrip, you will be presented with a dialog box instructing you to locate and select the Pd app (binary) on your computer. You will only need to do this the first time you run the patch.
	1. macOS: The Pd app is typically in the /Applications directory.
	2. Windows: The Pd app is typically in the /Program Files/Pd/bin  directory.
3. In the **Local Input** channel (top left corner of the patch):
	1. Set the **Input Channels** to reflect the channel(s) you are receiving incoming audio from your audio interface. If you are only using 1 channel, check the **Mono** checkbox.
	2. Set volume as appropriate.
4. Adjust the **Output** channel volume to make it audible. You should now hear yourself. If using live mics, watch out for feedback.
5. In the **Remote 1** channel:
	1. Quaxtrip uses the **Server** foo.ucsd.edu by default. This public “conniption” server helps make the connection but once connected the audio runs directly between the two computers.
	2. Set the **Call Name** to something likely to be unique (e.g. jack-and-jill), no spaces allowed. The **Call Name** is the same for you and your partner.
6. Set the **On/Off** toggle to on.

Once you and your partner have completed these steps, the connected checkbox should be checked and you should now be able to hear each other!

If you want to play with more than one partner, use **Quaxtrip Quintet.maxpat** instead and repeat steps 5 & 6 for each partner, making sure to select a unique **Call Name** for each set of partners.

More Documentation included in Manual.pdf in the Quaxtrip distribution.

# Background

Quaxtrip runs Miller Puckette’s [Quacktrip](http://msp.ucsd.edu/tools/quacktrip/) Pure Data patch within Cycling ‘74’s Max. Quacktrip, in turn, is an implementation, in Pure Data, of Chris Chafe’s [JackTrip](https://ccrma.stanford.edu/software/jacktrip/) network protocol, based on jacktrip.pd by Roman Haefeli and Johannes Schuett. It establishes a low-latency, point-to-point connection between two sites, with no audio compression.

*version 2021-0411*

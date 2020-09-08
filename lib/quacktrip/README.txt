QUACKTRIP -- PEER-TO-PEER HIGH-QUALITY LOW-LATENCY AUDIO
NETTY MCNETFACE -- MULTI-SITE ENSEMBLE AUDIO USING A CENTRAL PACKET REPEATER

Copyright 2020 Miller Puckette.  This is open source software. free to use and
modify under the Standard Improved BSD License (lib/LICENSE.txt in this
distribution).

Quacktrip is an implementation, in Pure Data, of Chris Chafe's Jacktrip network
protocol, based on jacktrip.pd by Roman Haefeli and Johannes Schuett.  It
establishes a low-latency, point-to-point connection between two sites, with
no audio compression.

Netty McNetface connects up to eight musicians, with the help of a central
server, set up on a machine with a public IP address, that repeats audio from
each to all the others.  Each musician can make her own mix of all the signals.

If you have Pd 0.51 installed you only need the patches, about 30 kbytes. There
are also shrink-wrapped apps for Macintosh or PC (a few megabytes each).

-------------------------------- QUICK START --------------------------

Download the app for MacOS or Windows, or just grab the patches and run them in
Pure Data 0.51-0 or later.  (You can get Pd from msp.ucsd.edu/Software/).  In
any case, once either one is running you should see two windows, a "Pd" window
and the patch.  You will probably also have to open Pd's audio settings dialog
to select an audio device and sample rate.  The patch will show you further
directions for setting the call name and buffer size and for starting and ending
the call.  

To run the patch from your own copy of Pd, unzip and open the "quack-and-netty"
directory (called a "folder" in MACOS).  You should see files named
"quacktrip.pd" and "netty-mcnetface.pd" (possibly with the ".pd" hidden), and a
sub-directory named "lib". Open quacktrip or netty-mcnetface using Pure Data,
either by dragging the file over to the App (on MACOS) or by starting Pure Data
and opening the file from within it.  

-------------------------------- HICCUPS --------------------------

1.  On installation, and probably the first time you run quacktrip or netty
mcnetface, your OS will complain about untrusted third-party software trying to
open network connections. You should allow them; but this process might disrupt
the first call you try to make.

2.  Call names are case sensitive and can't have white space in them.
"me-and-you" will work but not "me and you".

3.  It's easy to run under an older version of Pd and not know it.  If things
aren't working check the version of Pd ("about Pd" in the help menu).

4.  If two copies of quacktrip are behind the same router, peer-to-peer calling
won't work unless you use client/server mode (described below).  This shouldn't
be a problem for most people since the whole point is to make connections
between people in different places.  (Netty McNetface uses a public-IP hub so it
doesn't have this problem.)

5. Don't rearrange the "quacktrip" or "lib" directories (except to move or
remove the Pd application if you want).  "quacktrip" uses auxiliary files in
"lib" and won't find them if they aren't adjacent to quacktrip.

6.  Not every router seems to support quacktrip's connection mechanism.  If
either caller is behind such a router, quacktrip will repeatedly say "connected"
but then loop back to trying to make a new call.

---------------  MORE DETAILS ABOUT QUACKTRIP --------------------------

You don't need to read this part unless you want to do something more than a
single peer-to-peer call at a time, between two machines behind different
routers.

The "main patch", quacktrip.pd, uses a graph-on-parent abstraction called
quacktrip-panel.pd, which in turn uses the quacktrip~ object that does the real
work.  These are in the lib directory.  Also there are the conniption server
and client.  The conniption client is used by quacktrip~ to set up calls by
communicating with the conniption server.  There is a copy of the conniption
server running on the machine foo.ucsd.edu, so you don't need to do anything
about this unless you want to run your own.

quacktrip can be run in client/server mode; in this configuration one caller
acts as the server and needs to have an IP address that is visible to the
other.  In client-server mode quacktrip is compatible with jacktrip; i.e., one
party can use a jacktrip server and the other can use a quacktrip client or
vice versa.

If you want to make 2 or more calls simultaneously, you can: (1) run two copies
of the patch in two copies of Pd; (2; better) run them in the same copy of Pd;
or (3; best of all) copy and paste the objects in the main patch, quacktrip.pd
as many times as desired.

There are comments in the quacktrip patch that go into more detail about this.

----------------- MORE DETAILS ABOUT NETTY MCNETFACE ------------------

This is for ensembles of up to 8 players, each of whom runs one copy of the
patch.  The patch calls a server, which should be running the server patch,
netty-mcserver, found in the lib sibdirectory, on a machine with a public IP
address.   This server machine will need plenty of bandwidth since it repeats
every player's signal to all the players (including the originator).  For 4
players, even if each is only sending mono, this means 16 channels, totalling
about 12 megabits per second.  If there are 8 players this goes up by a factor
of 4.

Each player makes a separate call to the hub, specifying the hub's IP adress
and base port number, and the player's own mixer channel from 1 to 8.  (Sort
that out first, so that no two players are trying to send to the same channel).
Each player can separately mix and pan all the channels.

There's no auto-gain or feedback control - everyone should wear headphones.



QUACKTRIP -- PEER-TO-PEER HIGH-QUALITY LOW-LATENCY AUDIO
NETTY MCNETFACE -- SMALL-ENSEMBLE AUDIO USING A CENTRAL PACKET REPEATER
(experimental:) MUSIC101 -- SOLUTION FOR LARGER ENSEMBLES

Copyright 2020 Miller Puckette.  This is open source software. free to use and
modify under the Standard Improved BSD License (lib/LICENSE.txt in this
distribution).

Quacktrip is an implementation, in Pure Data, of Chris Chafe's Jacktrip network
protocol, based on jacktrip.pd by Roman Haefeli and Johannes Schuett.  It
establishes a low-latency, point-to-point connection between two sites, with
no audio compression.  Quacktrip is available as Mac and PC apps, as patches
you can load yourself into Pure Data, and as VST plug-ins (VST2 and VST3 for
Mac, VST3 only for PC.)

Netty McNetface connects up to 12 musicians, with the help of a central
server, set up on a machine with a public IP address, that repeats audio from
each to all the others.  Each musician can make her own mix of all the signals.

Music101 is designed for larger ensembles, in which one musician takes the
role of "chef" and runs a mixer for the group.  There is one centrally
computed mix which all members hear.

These are distributed on http://msp.ucsd.edu/tools/quacktrip/ and documentation
is on http://msp.ucsd.edu/tools/quacktrip/doc.htm .


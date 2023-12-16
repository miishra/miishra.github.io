---
layout: post
title: Near-perfect emulation of WiFi with record-and-replay
---

[NemFi](https://dl.acm.org/doi/abs/10.1145/3477482.3477484) is a record-and-replay emulator that captures traces representing real WiFi conditions, and later replay these traces 
to reproduce the same conditions. 

In this [paper](https://dl.acm.org/doi/abs/10.1145/3477482.3477484), we demonstrate that the state-of-the-art emulator that was developed for cellular links cannot emulate WiFi 
conditions. We identify the three key differences that must be addressed to enable accurate WiFi record-and-replay: WiFi packet losses, 
medium-access control, and frame aggregation. We then extend the existing cellular network emulator to support WiFi record-and-replay. 

We evaluate the performance of NemFi via repeated experimentation across different WiFi conditions and for three different types of 
applications: speed-test, file download, and video streaming. Our experimental results demonstrate that average application performance 
over NemFi and real WiFi links is similar (with less than 3 percent difference).

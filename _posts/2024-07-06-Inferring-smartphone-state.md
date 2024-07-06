---
layout: post
title: Third eye - Inferring the State of Your Smartphone Through Wi-Fi!
---

Wi-Fi is one of the most notable and prevalent wireless technologies today. Smartphones and other Wi-Fi-enabled devices find nearby networks using management frames known as probe-requests. In this paper, we infer the state of smartphones by passively monitoring their transmitted probe-requests. 

We leverage the differential behaviour of probe-request bursts and their content, based on their device states such as active/static screen and Wi-Fi/power-saving mode ON/OFF. We use a Random Forest based approach that can successfully predict smartphone states just leveraging individual bursts. Based on an evaluation using a real-world dataset of more than 200 smartphones (having a variety of operating systems), with ground truth data available, we show that our model reliably predicts states with accuracy >=98%. 

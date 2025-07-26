---
layout: post  
title: Drafting DNS Security and Privacy Guidelines
---

How should DNS work for billions of IoT devices—and how do we ensure it does so securely and privately?

Our latest Internet-Draft tackles exactly this question. Co-authored with colleagues from Inria, UCL, and Infoblox, the draft outlines **best current practices** for IoT device manufacturers and network operators to mitigate DNS-related security and privacy risks at scale.

Despite being small and often unattended, IoT devices make frequent DNS queries—typically in predictable ways. This behavior exposes them (and the networks they live on) to fingerprinting, data leakage, and operational inefficiencies. Our document, titled *"IoT DNS Security and Privacy Guidelines"*, provides concrete, actionable recommendations:

- Compliance with encrypted DNS standards (DoH/DoT)  
- Source port and transaction ID randomization  
- Proper handling of TTLs  
- Resilience in failure conditions  
- DNSSEC adoption when feasible  

This is a **call for discussion and feedback** from the community. The draft is currently under review in the IETF IoT Operations (iotops) working group, and we welcome your thoughts, use cases, or operational insights.

You can find the live draft here:  
📄 [IETF Draft: draft-mishra-iotops-iot-dns-guidelines](https://datatracker.ietf.org/doc/draft-mishra-iotops-iot-dns-guidelines/) 

Let’s work together to shape a more secure and private DNS future for IoT.

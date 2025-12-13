---
layout: post
title: k-Anonymizing Millions of Trajectories
---

Trajectory datasets collected by network operators and service providers contain incredibly rich signals about individual mobility. This richness powers research and commercial services, but it also makes trajectories highly identifying: even short movement traces can be unique, and simple countermeasures such as pseudonymization do little to mitigate re-identification risks.

In "k-scale: k-Anonymizing Millions of Trajectories" we address a major open problem in privacy-preserving data publishing (PPDP) for mobility data: how to apply k-anonymity at scale to datasets containing millions of user trajectories while preserving record-level accuracy and truthfulness.

## The challenge

Applying k-anonymity to trajectory datasets is hard for two main reasons:

- Trajectories are high-dimensional and sparse; small differences across records make many traces unique.
- Large datasets (millions of trajectories) are computationally demanding, and existing methods either don't scale or severely degrade data utility in the anonymization process.

## The k-scale contribution

k-scale is a practical framework that brings k-anonymity to massive mobility datasets. The key takeaways are:

- Scalability: k-scale can k-anonymize datasets with on the order of one million trajectories — a two-order-of-magnitude improvement over many previous approaches.
- Utility preservation: it removes record-level uniqueness while better preserving data quality for downstream tasks than state-of-the-art trajectory-publishing methods.
- Empirical validation: the framework is evaluated on real-world large country-scale datasets and in realistic application scenarios, showing its ability to balance privacy and utility effectively.

k-scale achieves these outcomes through a careful combination of trajectory abstraction, efficient grouping, and anonymization steps that are tailored to mobility data.

## Why this matters

Operators and service providers hold vast mobility datasets and are under increasing pressure to share insights while protecting user privacy. k-scale provides a practical, empirically validated path for publishing large-scale mobility traces with provable privacy guarantees (k-anonymity) and competitive utility for analytics.

## Read the paper

- Paper to appear in IEEE INFOCOM 2026, Link: https://hal.science/hal-05407897


---
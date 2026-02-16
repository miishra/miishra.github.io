---
layout: post
title: "Language of LLMs Itself Shapes Privacy Leakage"
---

Large language models (LLMs) are increasingly deployed in multilingual and sensitive settings, from healthcare and legal assistance to customer support and education. While much of the privacy literature focuses on model size, training data, or attack design, a fundamental question has remained largely unexplored: **does the language itself influence privacy leakage in LLMs?**

In *“The Model’s Language Matters: A Comparative Privacy Analysis of LLMs”*, accepted to **EACL 2026**, we provide the first quantitative evidence that **linguistic structure plays a decisive role in shaping privacy risks**.

## The challenge

Privacy risks in LLMs—such as training data extraction or memorization—are often studied in a language-agnostic way. However, languages differ substantially in their morphology, syntax, redundancy, and tokenization behavior. This raises two key challenges:

- It is unclear whether privacy vulnerabilities observed in English-centric studies generalize to other languages.
- Existing privacy defenses implicitly assume that a single mechanism will work uniformly well across languages.

Without understanding the role of language, multilingual deployments risk uneven and poorly understood privacy guarantees.

## Our contribution

We conduct a systematic, cross-lingual privacy analysis of LLMs across **four languages**—English, Italian, French, and Spanish—using **three major attack families**:

- **Extraction attacks**
- **Counterfactual memorization attacks**
- **Membership inference attacks**

Our main findings show a striking and consistent pattern:

- **English and Italian exhibit higher privacy leakage**, driven by greater redundancy, longer lexical units, and more predictable syntactic structures.
- **French and Spanish are more privacy-resilient**, where higher morphological complexity and structural diversity naturally dampen memorization and inference.
- **Linguistic properties**—including redundancy, tokenization granularity, and syntactic regularity—consistently explain vulnerability patterns *across all attack types*.

In short, **privacy risks closely track linguistic structure**, not just model architecture or training scale.

## Why this matters

These results have important implications for the design and deployment of multilingual LLMs:

- Privacy evaluations must move beyond English-only benchmarks.
- Language-aware privacy-preserving mechanisms are necessary, especially in **high-stakes domains like healthcare**.
- A one-size-fits-all approach to LLM privacy can lead to systematically weaker protection for speakers of certain languages.

Our work highlights language as a **first-class dimension** in LLM privacy analysis and mitigation.

## Read the paper

- 📄 [Preprint](https://hal.science/hal-05475921v1/file/252_The_Model_s_Language_Matter_Camera_Ready.pdf)
- 📍 To appear at **EACL 2026 (European Chapter of the Association for Computational Linguistics)**

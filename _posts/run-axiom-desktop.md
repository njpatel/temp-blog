---
title: 'Run Axiom on your Desktop: A Guide'
coverImage: '/assets/blog/run-axiom-desktop/axiom-demo.gif' 
date: '2020-06-08'
author:
  name: Tola Ore-Aruwaji
  picture: '/assets/blog/authors/tola.jpeg'
ogImage:
  url: '/assets/blog/working-better/ams1.jpg'
---



We’re excited to announce the latest release of [Axiom Demo](https://github.com/axiomhq/axiom-demo) – a complete Axiom experience that runs entirely on your desktop using Docker.

With Axiom Demo, you’ll be able to see live data stream into Axiom, play with queries, streams, dashboards, and more. You’ll also be able to send your own data and interact with Axiom via Axiom CLI.

In this post, I’ll walk you through on how to set up and run **Axiom** on your local machine.

## What is Axiom?

Axiom is log management and analytics solution that reduces the cost and management overhead of logging as much data as you want

With Axiom, organizations no longer need to choose between their data and their costs. Axiom has been built from the ground-up to allow for highly efficient data ingestion and storage, and then a zero-to-infinite query scaling that allows you to query all your data, all the time.

Organizations use Axiom for continuous monitoring & observability, as well as an event store for running analytics and deriving insights from all their event data.

![Axiom desktop]()

Axiom runs [directly inside your infrastructure](https://www.axiom.co/download/) with minimal costs and management. If, however, you would like us to run Axiom for you, [Axiom Cloud](https://www.axiom.co/cloud/) will be available very soon and you can register for early access.

Okay, with the introductions over, let’s get started!

## Prerequisites

A local machine with [Docker](https://docs.docker.com/engine/install/) & [Docker Compose](https://docs.docker.com/compose/install/) installed.

## Launch the Axiom Demo

1. Clone the [axiom-demo](https://github.com/axiomhq/axiom-demo) repository from GitHub

```bash
$ git clone https://github.com/axiomhq/axiom-demo.git
$ cd axiom-demo

```

2. Start and run the demo using a single command:
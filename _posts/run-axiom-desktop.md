---
title: 'Run Axiom on your Desktop: A Guide'
coverImage: '/assets/blog/run-axiom-desktop/axiom-demo.gif' 
date: '2020-03-11'
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

```shell
docker-compose up -d

```

![Start the demo](/assets/blog/run-axiom-desktop/axiom-demo_1.gif)

**You now have an entire Axiom deployment, including dependencies, data generators, data-shippers, etc running right on your desktop!**

**Bonus:** explore the repo to see just how simple Axiom can be deployed!

3. Open your browser, visit [localhost:8080](http://localhost:8080/), and log in to Axiom with the following credentials:

Email: `demo@axiom.co`
Password: `axiom-d3m0`

![Axiom demo 2](/assets/blog/run-axiom-desktop/axiom-demo_2.gif)

**Congratulations** 🎉 – you’ve successfully logged into Axiom on your local machine! Now it’s time to explore the UI and play with all the features!

When you are finished exploring Axiom, run `docker-compose stop` to stop the stack, and `docker-compose start` to start it again.

If you want to clean up, run `docker-compose down -v` to remove all containers and volumes.

## Use Axiom CLI to Interact With The Demo

You can also install and test the [Axiom CLI](https://github.com/axiomhq/cli) to ingest data to, and stream data from, your Axiom demo:

- Install the cli on your machine using the [instructions here](https://github.com/axiomhq/cli#installation). Linux, macOS, and Windows are all supported.

- Login into your axiom-demo deployment by pasting this command in your terminal:

```bash
echo 274dc2a2-5db4-4f8c-92a3-92e33bee92a8 | axiom auth login --url="http://localhost:8080" --alias="axiom-demo" --token-stdin --token-type personal -f
```


- Create a new dataset and ingest some data from a JSON file. You can then view this new dataset and your data in Axiom’s UI:

`axiom dataset create`

![Create dataset](/assets/blog/run-axiom-desktop/axiom-demo_4.gif)

- Stream data from the `http-logs` dataset & view it as it’s being ingested live:

`axiom stream http-logs`

![Stream dataset](/assets/blog/run-axiom-desktop/axiom-demo_6.gif)

For more instructions on how to use Axiom CLI kindly check out our [documentation!](https://docs.axiom.co/reference/CLI)

## Conclusion

I hope this guide has helped you get a taste of Axiom right on your desktop. You’ve seen how easy it is to set up Axiom using Docker, and also performed a few tasks inside Axiom and with its awesome CLI.

For more information on Axiom, visit our [website](https://www.axiom.co/) and [documentation.](https://docs.axiom.co/)

If you’re ready to trial Axiom in your organization, [get in touch!](https://www.axiom.co/support/)


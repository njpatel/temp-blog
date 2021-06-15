---
title: 'Introducing the Axiom CLI'
coverImage: '/assets/blog/cli/manage_datasetss.gif' 
date: '2020-03-18'
author:
  name: Tola Ore-Aruwaji
  picture: '/assets/blog/authors/tola.jpeg'
ogImage:
  url: '/assets/blog/working-better/ams1.jpg'
---

**We’re excited to announce the release of Axiom CLI, and we want to highlight some of its awesome features in this post!**

![cli](/assets/blog/cli/cli1.gif)

The Axiom team have been working really hard on the first version of the [Axiom CLI](https://github.com/axiomhq/cli), a powerful way to use Axiom directly from the comfort of your terminal.

Here are some of the CLI’s key features:

- Easily ingest data in multiple formats from your local machine into your Axiom instance


- Stream data live, allowing you to monitor your services without leaving the comfort of your terminal


- Work with different Axiom deployments, easily switching between them


- Easy to install, simple to get started with


- Cross-platform; works on Linux, macOS, and Windows

- Open Source; we’d love your [contributions and ideas](https://github.com/axiomhq/cli/issues)

Let’s dive into some of our favourite features:

## Ingest Data

Using the Axiom CLI you can ingest the contents of a JSON logfile into any dataset name. The structured data follows the JSON specification for which field types are supported, an event could look like this:

```json
{
  "service": "api-http",
  "severity": "error",
  "duration": 231,
  "customer_id": "ghj34g32poiu4",
  "tags": ["aws-east-1", "zone-b"],
  "metadata": {
    "version": "3.1.2",
  }
}
```

Before ingesting data, create the dataset using your Ingest API Token or personal token, this can be generated from the settings → tokens page in Axiom. Once you have generated the Token, you can format and upload your dataset in any of the supported input formats: JSON, NDJSON, and CSV.

![cli](/assets/blog/cli/ingest-new-1.gif)







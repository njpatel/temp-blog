---
title: 'Working with Aggregations'
coverImage: '/assets/blog/aggregation/count.gif' 
date: '2021-04-8'
author:
  name: Tola Ore-Aruwaji
  picture: '/assets/blog/authors/tola.jpeg'
ogImage:
  url: '/assets/blog/working-better/ams1.jpg'
---

In this article, I will show you how to use Aggregations with queries on [Axiom.](https://www.axiom.co/)

## What are Aggregations?

Aggregations a way of grouping and extracting statistics/insights from your data. They run on data you have ingested into Axiom, such as events from log files, events, metrics, or any other form of JSON, ND-JSON, and CSV data.

An Aggregation is essentially a function that is run across all the matching data after filtering. That means some aggregations can require arguments to correctly function, such as `max($fieldName).` 

All queries with aggregations produce a visualization as well as a table of results. Visualizations help to understand the data more easily.

### Let’s dive into some of the aggregations Axiom supports:

## count()

The count aggregation will count all matching events in a dataset, bucketed by a time duration. A line chart is then rendered with the returned data that shows the number of events in each time bucket. This aggregation does not require any arguments.

![count](/assets/blog/aggregation/count.gif)


## sum()

The Sum aggregation calculates the total value for a field across the query time range. A chart is rendered that shows the sum in each bucket of time, and the overall total is available in the table beneath the chart. The example below calculates the total value for the specified field given.

## 
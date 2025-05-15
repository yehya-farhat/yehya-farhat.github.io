---
layout: page
title: Optimal Stopping Problem with unknown variable
description: 
img: assets/img/optimalStopping.png
importance: 3
category: Machine Learning
giscus_comments: false
---

I analyzed a specific form of the optimal stopping problem, known as the secretary problem, which has a closed form solution. This solution traditionally assumes that the number of candidates is known beforehand. Alongside a team member, we sought an efficient solution to this problem without prior knowledge of the candidate count, reflecting more realistic scenarios where such information may not always be available.

The optimal stopping problem is a decision-making dilemma that involves determining the most opportune moment to take a particular action to maximize reward or minimize cost. The most famous or mainstream form of this problem is the secretary problem, the goal is to choose the best candidate (or secretary) from a pool of applicants. The classic solution to this problem relies on a strategy where a certain number of candidates are observed but not chosen, establishing a benchmark. Subsequent candidates are then selected if they exceed this benchmark. This approach, however, presupposes knowledge of the total number of candidates to calculate the optimal point of stopping and making a choice. In real-life scenarios, such exact foreknowledge is often impractical or impossible, necessitating the development of more flexible strategies that can adapt to unknown or variable total numbers.

In this project, we model the number of candidates as a random variable and then sample data points (candidates) with scores ranging from 0 to 100. We use Time Series models to try and predict the incoming number of candidates before attempting to predict the best choice candidate.


`GitHub:` <a href="https://github.com/yehya-farhat/cis667-secretary-problem">Code</a>
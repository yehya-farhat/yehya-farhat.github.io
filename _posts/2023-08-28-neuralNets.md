---
layout: post
title: What is Machine Learning and what are the machines learning exactly?
date: 2023-08-28 15:09:00
description: What does a machine learning model do really? how and what is it learning?
tags: formatting code
categories: MachineLearning
featured: false
---
<p> With the recent surge of AI models, from Chatgpt to Googles latest search embedded generative AI, This technology is here stay. Looking ahead, AI systems will be insdustry staples. A standard tool used by every company, home, and individual. Akin to the ubiquity of computers today. AI promting skills will probably be the next Microsoft office skills you see required in every day job postings. 
With speed this technology is moving its essential to take a step back and look at what these models actaully are !
 </p>

## The domain of AI
 <p> The first step before diving into the realm of AI is clarifying our terminology. The terms Machine learning (ML), AI, and deep learning are very fuzzy words and are used interchanegably. Essentially AI a nice word for garnering funding and is a broadest term you can use, its like saying "Biology". The field of AI rests on the bedrock domain known as Machine Learning, which in its own right encompasses a diverse array of techniques, the most famous and powerful being deep learning a.k.a neural networks. 

 <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/AIdomain.jpg" class="img-fluid rounded z-depth-1" %} </div>
 
 Here's a nice image to visualize this hierarchy, machine learning encompasses a multitude of techniques: Decision Trees, Linear regression, Support Vector Machine (SVM), and deep learning (just to name a few). deep learning is a field of its own as its one of the most succesful ML algorithms, you will find a lot of variation there, from Convolutional neural networks (Imaging) to Transformers (Language). But essentially everything i just named here falls under the same umberalla, ML. 
</p> <br>

## What does Linear regression and Neural Networks have in common?
So what does linear regression, something you might have studied in high school have to do with the algorithm behind Chatgpt, neural networks? 
Essentially these two algorithms are trying to do exactly the same thing, just in very different ways. 

The goal behind both these techniques, and every other ML technique you will come across is that they're all trying to estimate ("Learn") a mapping of the given dataset. More formaly, given the input data $$x$$ and the ouput data $$y$$ find me an $$f(x)$$ that best describes that mapping. The more data points you provide, the better your estimate. 

Thats it! that is literally all these models are doing. Well okay, theres a lot more that goes into it, but on a high level that is all you need to know. Its essence is a statistical technique, give me a bunch of points and ill find you the best fuction that describes/maps the data points. 

Lets have a quick refresher of what mathematical functions are so we can look at what linear regression and neural network are both doing. I will not be diving into how linear regression or neural networks work. those are very long topics that deserve their own posts, and frankly you will find endless resources about them online. We will simply look into what they do without diving into all the technical details of "how" they do it. 

<h4>Functions</h4>
Here's the defintions of a function i shamelessly stole from wikipedia. <br>
In mathematics, a function from a set $$X$$ to a set $$Y$$ assigns to each element of $$X$$ one element of $$Y$$. The set of $$X$$ is called the domain of the function and the set $$Y$$ is called the codomain or range of the function.

So in layman terms, you can think of a function as a sort of machine. You give it a certain input, $$x$$ it does some manipulation to the given input and spits out an output $$y$$. Its also nice to note that almost all of scientific theories are built upon functions. From quantum mechanical descriptions to tumor growth rates.

Heres an example of a simple function: $$f(x) = x^2$$ <br>
Whatever number you give this function it will multiply it by itself and give you the corresponding answer
$$2 \rightarrow f(2) \rightarrow 4$$ <br>

Functions are usually derived via empirical observations or mathematically from some set of rules. 
Enstien for example, derived his famous $$E=mc^2$$ equation by stabilizing the speed of light and voilà! You now have a function to describe the relation between mass and energy. You plug in a value for the mass and you will in turn get a value of the energy or if you want to go the opposite way, you plug in energy and you will get the mass.  

But as we said you can also derive equations purely based on empirical observation (and some initution of course). 
Modelling population growth for example, you look at your data and come up with an equation that best describes the population data you have at hand. This technique is usally a bit harder, because it involves a lot more of trial and error and is prone to biased estimation of the sample data you have at hand (foreshadowing much?) 
That is not to say that deriving equations is easier, theres a lot of trial and error there too and those theories are also biased is their own way. We dont need to look too far, take Newtons work on gravity. His equations could not describe plutos orbit or the bending of light due to gravitational affect. Newton simply did not have that data available to him and had to make due with an apple and a moon.

Here, lets try to do a similar task ourselves. I will give you a bunch if points, find the Function (Pattern)!

| $$X$$   |    $$Y$$  | 
| ------- |:---------:| 
|    1    |      1    |     
|    2    |      8    |     
|    3    |      27   |     
|    4    |      64   |
| $$\vdots$$| $$\vdots$$| <br>

You probably guessed it, the function is $$f(x) = x^3$$, you simply multiply the number by itself three times.

Good, lets complicate the example a bit more now. now are function takes in two inputs instead of one. Hint: you probably saw this function in highschool physics. We will set the second input as constant just to make it easy. 

| $$X;Z$$   |    $$Y$$  | 
| ------- |:---------:| 
|    1 ; 9.8 |      9.8    |     
|    10 ; 9.8    |      98    |     
|    4 ; 9.8   |    39.2    |     
|     7 ; 9.8   |      68.6   |
| $$\vdots$$| $$\vdots$$|

This was also a straight giveaway from the first input. You multiply the two numners by themselves. looks a bit like Newtons second law, no? $$F=ma$$. Just set "a" to 9.8 (Earths gravity)

But what 

<h4>Linear Regression</h4>
















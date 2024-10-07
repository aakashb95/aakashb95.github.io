---
layout: page
title: IRCTC cancellation calculator
description: Calculate IRCTC cancellation charges
img: assets/img/irctc.png
importance: 1
category: fun
related_publications: false
---

## Website

Visit the website [here](https://irctc.aakashb.xyz/)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/irctc.png" title="IRCTC cancellation calculator" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Why

IRCTC website is a pain to use. Cancellation is a different pain altogether. You need to click cancel and only then do you see the charges.
They do have a link that explains the charges but it is a pdf with conditions based on classes, time of departure and cancellation, etc.
So I made this to calculate the charges for me.

## How

Frontend is NextJS, written with the help of Claude 3.5 Sonnet.
Backend is a simple Node JS server that speaks to one of the RapidAPI IRCTC endpoints.

## Support

If it is not working, please gmail me at aakashbakhle, or x.com/aakashb_95

---
status: live
featured: true
live_url: https://irctc-cancellation.vercel.app/
title: IRCTC cancellation calculator
description: Calculate IRCTC cancellation charges
img: /img/irctc.png
importance: 1
category: fun
---

## Website

Visit the website [here](https://irctc-cancellation.vercel.app/)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <img class="content-image" src="/img/irctc.png" alt="IRCTC cancellation calculator" loading="lazy" />
    </div>
</div>

## Why

IRCTC website is a pain to use. Cancellation is a different pain altogether. You need to click cancel and only then do you see the charges.
They do have a [link](https://contents.irctc.co.in/en/eticketCancel.html) that explains the charges but it is a pdf with conditions based on classes, time of departure and cancellation, etc. They have a [manual entry calculator](https://st2.indiarailinfo.com/kjfdsuiemjvcya0/0/3/3/5/1704335/2/refundcalculator5254.htm) as well, but it is a lot of effort.
So I made this to calculate the charges for me.

## How

Frontend is NextJS, written with the help of Claude 3.5 Sonnet.
Backend is a simple Node JS server that speaks to one of the RapidAPI IRCTC endpoints.

## Support

If it is not working, please gmail me at aakashbakhle, or x.com/aakashb_95

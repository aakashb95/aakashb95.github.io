---
layout: page
title: interests
permalink: /interests/
description: A showcase of my interests and things I enjoy.
nav: true
nav_order: 3
display_categories: [hobbies, tech]
horizontal: false
---

<!-- pages/interests.md -->
<div class="interests">
{% if site.enable_interest_categories and page.display_categories %}
  <!-- Display categorized interests -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_interests = site.interests | where: "category", category %}
  {% assign sorted_interests = categorized_interests | sort: "importance" %}
  <!-- Generate cards for each interest -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for interest in sorted_interests %}
      {% include interests_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for interest in sorted_interests %}
      {% include interests.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display interests without categories -->

{% assign sorted_interests = site.interests | sort: "importance" %}

  <!-- Generate cards for each interest -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for interest in sorted_interests %}
      {% include interests_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for interest in sorted_interests %}
      {% include interests.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
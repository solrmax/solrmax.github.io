---
layout: blog
title: Categories
permalink: /blog/categories
---

<h1>Categories</h1>

<div class="blog-groups">
  {% if site.categories %}
    {% assign sorted_categories = site.categories | sort %}
    {% for cat in sorted_categories %}
      {% assign cat_name = cat[0] %}
      {% assign posts_in_cat = cat[1] | sort: 'date' | reverse %}
      <section class="blog-group" id="category-{{ cat_name | slugify }}">
        <h2 class="blog-group-title">{{ cat_name }}</h2>
        <ul class="blog-group-list">
          {% for post in posts_in_cat %}
            {% assign cats = post.categories | join: ', ' %}
            {% if cats == '' %}
              {% assign cats = '—' %}
            {% endif %}
            {% assign tags = post.tags | join: ', ' %}
            {% if tags == '' %}
              {% assign tags = '—' %}
            {% endif %}
            <li class="blog-group-item">
              <div class="blog-group-line1">
                <span class="blog-group-date">
                  {{ post.date | date: "%B %-d, %Y" }}
                </span>:
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </div>
              <div class="blog-group-line2">
                Categories: {{ cats }} &middot; Tags: {{ tags }}
              </div>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endfor %}
  {% else %}
    <p>No categories yet.</p>
  {% endif %}
</div>

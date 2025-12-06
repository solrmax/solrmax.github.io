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
            <li class="blog-group-item">
              <div class="blog-group-line1">
                <span class="blog-group-date">
                  <a
                    href="{{ '/blog/archive' | relative_url }}#archive-{{ post.date | date: '%Y-%m' }}"
                    class="post-meta-link"
                  >
                    {{ post.date | date: "%B %-d, %Y" }}
                  </a>
                </span>:
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
              </div>
              <div class="blog-group-line2">
                Categories:
                {% if post.categories and post.categories != empty %}
                  {% for category in post.categories %}
                    <a
                      href="{{ '/blog/categories' | relative_url }}#category-{{ category | slugify }}"
                      class="post-meta-link"
                    >
                      {{ category }}
                    </a>{% unless forloop.last %}, {% endunless %}
                  {% endfor %}
                {% else %}
                  —
                {% endif %}
                &middot;
                Tags:
                {% if post.tags and post.tags != empty %}
                  {% for tag in post.tags %}
                    <a
                      href="{{ '/blog/tags' | relative_url }}#tag-{{ tag | slugify }}"
                      class="post-meta-link"
                    >
                      {{ tag }}
                    </a>{% unless forloop.last %}, {% endunless %}
                  {% endfor %}
                {% else %}
                  —
                {% endif %}
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

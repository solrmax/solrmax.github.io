---
layout: blog
title: Blog
permalink: /blog
---

<h1>Blog</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-list-item">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-list-date">
        {{ post.date | date: "%b %d, %Y" }}
      </span>
      {% if post.excerpt %}
        <p class="post-list-excerpt">
          {{ post.excerpt | strip_html | truncate: 160 }}
        </p>
      {% endif %}
    </li>
  {% endfor %}
</ul>

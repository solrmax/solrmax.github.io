---
layout: blog
title: Archive
permalink: /blog/archive
---

<h1>Archive</h1>

<div class="blog-groups">
  {% if site.posts and site.posts != empty %}
    {% assign posts_by_month = site.posts
      | group_by_exp: 'post', 'post.date | date: "%Y-%m"'
      | sort: 'name'
      | reverse %}
    {% for month in posts_by_month %}
      {% assign first_post = month.items | first %}
      <section class="blog-group" id="archive-{{ month.name }}">
        <h2 class="blog-group-title">
          {{ first_post.date | date: "%B %Y" }}
        </h2>
        <ul class="blog-group-list">
          {% assign posts_in_month = month.items | sort: 'date' | reverse %}
          {% for post in posts_in_month %}
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
    <p>No posts yet.</p>
  {% endif %}
</div>

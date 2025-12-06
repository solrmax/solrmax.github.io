---
layout: blog
title: Tags
permalink: /blog/tags
---

<h1>Tags</h1>

<div class="blog-groups">
  {% if site.tags %}
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
      {% assign tag_name = tag[0] %}
      {% assign posts_for_tag = tag[1] | sort: 'date' | reverse %}
      <section class="blog-group" id="tag-{{ tag_name | slugify }}">
        <h2 class="blog-group-title">{{ tag_name }}</h2>
        <ul class="blog-group-list">
          {% for post in posts_for_tag %}
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
                  {% for tag_item in post.tags %}
                    <a
                      href="{{ '/blog/tags' | relative_url }}#tag-{{ tag_item | slugify }}"
                      class="post-meta-link"
                    >
                      {{ tag_item }}
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
    <p>No tags yet.</p>
  {% endif %}
</div>

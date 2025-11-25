---
layout: default
title: Home
pageType: projects
---

# Published Games

{% for p in site.data.projects %}
{% assign indexMod = forloop.index0 | modulo: 2 %}
<div class="project-row {% if indexMod == 1 %}reverse{% endif %}">
  <div class="project-inner">
    <a class="project-image-link" href="{{ p.url }}" target="_blank">
      <img src="{{ p.image }}" alt="{{ p.title }}">
    </a>
    <div class="project-text">
      <div class="project-title-row">
        <h2>{{ p.title }}</h2>
        {% if p.release %}
          <span class="project-title-release">{{ p.release }}</span>
        {% endif %}
      </div>
      <div class="project-tags">
        {% if p.tags %}
          {% for tag in p.tags %}
            <span class="project-tag">{{ tag }}</span>
          {% endfor %}
        {% endif %}
      </div>
      {% if p.game_description %}
        <p class="project-game-description">{{ p.game_description }}</p>
      {% endif %}
      {% if p.description %}
        <p class="project-description">{{ p.description }}</p>
      {% endif %}
      <div class="project-badges">
        {% if p.platforms %}
          <div class="platform-badges">
            {% for plat in p.platforms %}
              <a class="platform-badge" href="{{ plat.url }}" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/platforms/{{ plat.id }}.svg" alt="{{ plat.id }} icon">
                {{ site.data.platforms[plat.id].name }}
              </a>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
  </div>
</div>
{% endfor %}
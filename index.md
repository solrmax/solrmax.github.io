---
layout: default
title: Home
---

<link rel="stylesheet" href="/assets/css/projects.css">
<script src="/assets/js/projects.js"></script>

## Published Games

{% for p in site.data.projects %}
<div class="project-row {% if p.reverse %}reverse{% endif %}">
	  <div class="project-inner">
	  		<a href="{{ p.url }}" target="_blank">
			 	<img src="{{ p.image }}" alt="{{ p.title }}">
			</a>
			<div class="project-text">
			 	<div class="project-title-row">
				  <h3>{{ p.title }}</h3>
				  {% if p.release %}
				    <span class="project-title-release">{{ p.release }}</span>
				  {% endif %}
				</div>
			 	<div class="project-meta">
				  {% if p.tags %}
				    {% for tag in p.tags %}
				      <span class="project-tag">{{ tag }}</span>
				    {% endfor %}
				  {% endif %}
				</div>
			 	<p>{{ p.description }}</p>
			 	<div class="project-meta">
				    {% if p.platforms %}
					  <div class="platform-badges">
					    {% for plat in p.platforms %}
					      <div class="platform-badge">
					        <img src="assets/icons/platforms/{{ plat }}.svg" alt="{{ plat }} icon">
					        {{ plat | capitalize }}
					      </div>
					    {% endfor %}
					  </div>
					{% endif %}
				</div>
			</div>
	  </div>
</div>
{% endfor %}
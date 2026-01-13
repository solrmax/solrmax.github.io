---
layout: default
title: About
permalink: /about
---

<style>
  .about-layout {
    display: flex;
    gap: 32px;
    align-items: flex-start;
    margin-top: 20px;
  }

  .about-text {
    flex: 2;
  }

  .about-photo {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .about-photo img {
    display: block;
    max-width: 220px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--green);
    box-shadow: 0 0 10px rgba(181, 232, 83, 0.25);
  }

  @media (max-width: 800px) {
    .about-layout {
      flex-direction: column;
      align-items: stretch;
    }

    .about-photo {
      margin-top: 16px;
      justify-content: center;
      width: 100%;
    }

    .about-photo img {
      max-width: 180px;
      width: 100%;
      margin: 0 auto;
    }
  }

  .closing-links {
    margin-top: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .closing-links a {
    display: inline-flex;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid var(--green);
    color: var(--green);
    text-decoration: none;
    font-size: 0.85rem;
    transition:
      box-shadow 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  .closing-links a:hover {
    border-color: var(--green);
    box-shadow:
      0 0 4px var(--green-alpha-45),
      0 0 8px var(--green-alpha-30),
      0 0 12px var(--green-alpha-12);
    transform: translateY(-1px);
    opacity: 0.9;
  }
</style>

<section>
  <h1>About Me</h1>

  <div class="about-layout">
    <div class="about-text">
        <p>
          After <strong>10 years working with Unity</strong>, I can honestly say the spark is still there.<br/> 
          My journey started by <strong>shipping a mobile game solo</strong>, followed by <strong>eight years at an indie studio</strong> where I became the technical backbone. I handled the full spectrum of development: <strong>Core gameplay architecture, custom editor tools, shaders, and CI/CD pipelines</strong>.
        </p>
        <p>
          I love the craft of engineering, finding elegant solutions to complex problems, but what drives me most is the <strong>impact on the team</strong>. Whether it's <strong>optimizing a rendering pipeline</strong> or building a tool that makes an artist's eyes light up, I find satisfaction in seeing my code empower others and run in a live game.
        </p>
        <p>
          I thrive in environments that value <strong>knowledge sharing and mentorship</strong>. I’m looking for that specific energy: a place with <strong>high code standards</strong>, a collaborative culture, and a project we can all be proud of.
        </p>
      <div class="closing-links">
        <a href="/resume">Resume</a>
        {% assign linkedin = site.socials | where: "name", "linkedin" | first %}
        <a href="{{ linkedin.url }}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/contact">Contact me</a>
      </div>
      <p style="margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--green-alpha-30); font-size: 0.85rem; opacity: 0.7;">
        <em>Site developed by <a href="https://theby.github.io/" target="_blank">Tebi</a> & Myself</em>
      </p>
    </div>
    <div class="about-photo">
      <img
        src="/assets/images/default-preview-image.png"
        alt="Portrait of Maxime Solaire"
        loading="lazy"
      >
    </div>
  </div>
</section>

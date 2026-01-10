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
I've been making games with Unity for about 10 years now. I started as a solo dev, shipped a small mobile game, then joined what was essentially a two-person studio. Over the years, I helped build it into a proper team — writing core systems, setting up infrastructure, and learning the craft through iteration and a lot of trial and error. I've shipped four games, and each one taught me something different about what it actually takes to get a project across the finish line.
      </p>
      <p>
Along the way, I also got involved in the business side — pitching to publishers, negotiating contracts, and eventually taking on production responsibilities. Our studio was a worker cooperative (SCOP), which meant decisions were made collectively and everyone had a voice in how we worked. That experience shaped how I think about teams: I believe the best work happens when people feel ownership over what they're building, not just executing tasks handed down from above.
      </p>
      <p>
  I'm now looking for a place where I can stay hands-on technically while contributing to the bigger picture. I enjoy mentoring, I care about clean architecture, and I value teams where collaboration isn't just a buzzword. I want to work with people who respect each other's expertise and build things together.
      </p>
      <p>
        If you’re interested in my work and would like to hire me, explore a collaboration,
        discuss consulting, or just nerd out about Unity and game dev, feel free to reach out.
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

---
layout: default
title: Resume
permalink: /resume
---

<style>
.page-content h1 {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 5px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.page-content h1::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: currentColor;
  transform: translateX(-50%);
  transition: width 0.4s ease;
}

.page-content h1.in-view::after {
  width: 120%;
}

.page-content h1:not(:first-of-type) {
  margin-top: 60px;
}

.pdf-wrapper object {
  width: 100%;
}

.btn-download .icon {
  opacity: 0.6;
  background: url("{{ site.url }}{{ site.baseurl }}/assets/images/btn-download.png") no-repeat 0 0;
}

</style>

# Resume

<a href="{{ site.url }}{{ site.baseurl }}/assets/pdfs/Esteban%20Gaete%20Flores%20-%20Senior%20Unity%20Developer.pdf" class="btn btn-download" download><span class="icon"></span>Download PDF</a>

<div class="pdf-wrapper">
	<object
	  data="{{ site.url }}{{ site.baseurl }}/assets/pdfs/Esteban%20Gaete%20Flores%20-%20Senior%20Unity%20Developer.pdf"
	  width="1000"
	  height="1000"
	  type="application/pdf">
	</object>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".page-content h1").forEach(h1 => {
    observer.observe(h1);
  });
});
</script>
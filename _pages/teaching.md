---
layout: page
title: Teaching
permalink: /teaching/
description: Classes, workshops, and teaching material. 
nav: true
nav_order: 5
display_categories: [Syracuse University] 
horizontal: false
---

<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized courses -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_courses = site.teaching | where: "category", category -%}
  
  {%- assign sorted_courses = categorized_courses | sort: "importance" %}
  <!-- Generate cards for each project -->
 
  <div class="content">
    {%- for course in sorted_courses -%}
      
<div class="card mt-3">
  <div class="p-3">
    <div class="row">
      <div class="col-sm-10">
        <h5 class="font-weight-bold">{{course.title}}</h5>
      </div>
      <div class="col-sm-2 text-left text-sm-right">
        <span class="badge font-weight-bold {{course.color}} darken-1 text-uppercase align-middle" target="_blank">
            {{course.coursenumber}}
        </span>     
      </div>
    </div>
    <h6 class="font-italic mt-2 mt-sm-0">{{course.semester}}</h6>
    <ul class="card-text font-weight-light list-group list-group-flush">
      <li class="list-group-item">○ {{course.courseDescription}} Taught by <a href="{{course.instructorURL}}">{{course.instructor}}</a> </li>
      <li class="list-group-item">○ {{course.personalRes}} </li>
    </ul>
  </div>
</div>

{%- endfor %}
  </div>

  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

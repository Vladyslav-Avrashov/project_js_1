// function creating the projects section template
export const projectsTemplate = projects => {
  return projects
    .map(project => {
      const { title, url1, url2, technologies } = project;
      return `
      <li class="project-card">
        <picture>
          <source
            srcset="${url1} 1x, ${url2} 2x"
          />
          <img
            class="my-project-picture"
            src="${url2} 2x"
            alt="${title}"
            loading="lazy"
          />
        </picture>
        <p class="technologies-list">${technologies}</p>
        <h3 class="project-description">${title}</h3>
        <div class="link-container">
          <a class="visit-link" href="#">
            visit
            <svg class="visit-arrow" width="14" height="14">
              <use href="/src/img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `;
    })
    .join('');
};

import projects from '../json/projects.json';
// searching for the elements
const refs = {
  projectsList: document.querySelector('.js-project-cards-list'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
};

// function creating the projects section template
const projectsTemplate = projects => {
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
              <use href="../img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </li>
    `;
    })
    .join('');
};

let startIndex = 0;
let endIndex = 3;

// loading the initial state(3 first projects)
const loadInitialProjects = () => {
  const projectsCopy = projects.slice(startIndex, endIndex);
  const projectTemplate = projectsTemplate(projectsCopy);
  refs.projectsList.innerHTML = projectTemplate;
};
loadInitialProjects();

// event listener function for the button

const onLoadMoreBtn = () => {
  startIndex += 3;
  endIndex += 3;
  const projectsCopy = projects.slice(startIndex, endIndex);
  const projectTemplate = projectsTemplate(projectsCopy);
  refs.projectsList.insertAdjacentHTML('beforeend', projectTemplate);
  if (endIndex >= projects.length) {
    refs.loadMoreBtn.classList.add('visually-hidden');
  }
  setTimeout(() => {
    const height = refs.projectsList.getBoundingClientRect().height;

    window.scrollBy({
      top: height,
      behavior: 'smooth',
    });
  }, 0);
};
// attaching the event listener to the loadMore button
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);

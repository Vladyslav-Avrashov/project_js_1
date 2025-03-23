import projects from '../json/projects.json';
import { projectsTemplate } from './render-functions';
// searching for the elements
const refs = {
  projectsList: document.querySelector('.js-project-cards-list'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
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

  setTimeout(() => {
    const height = refs.projectsList
      .querySelector('.project-card')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: height * 10,
      behavior: 'smooth',
    });
  }, 0);
  if (endIndex >= projects.length) {
    refs.loadMoreBtn.classList.add('visually-hidden');
    refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtn);
    return;
  }
};
// attaching the event listener to the loadMore button
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);

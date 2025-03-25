import Accordion from 'accordion-js';

new Accordion('.accordion-container', {
  duration: 1000,
  showMultiple: false,
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-text',
  activeClass: 'is-open',
  openOnInit: [0],
});

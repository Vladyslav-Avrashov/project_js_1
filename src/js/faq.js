import accordion from 'accordion-js';

const faqAccordion = new accordion('.faq-accordion', {
  openOnInit: [0],
  showMultiple: false,
  elementClass: 'ac',
  triggerClass: 'ac-trigger',
  panelClass: 'ac-text',
  activeClass: 'is-open',
});

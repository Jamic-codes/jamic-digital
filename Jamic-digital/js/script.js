const templateData = {
  engineer: {
    category: '01 / PROFESSIONAL',
    title: 'Engineer Portfolio',
    description: 'For engineers, students, technicians, and technical professionals.',
    image: 'assets/images/engineer-template.png',
    features: ['Technical case studies', 'Project-focused layout', 'Professional CV section']
  },
  business: {
    category: '02 / BUSINESS',
    title: 'Business Portfolio',
    description: 'For entrepreneurs, businesses, consultants, and professionals.',
    image: 'assets/images/business-template%202.jpg',
    features: ['Brand-focused sections', 'Service highlights', 'Client-ready presentation']
  },
  student: {
    category: '03 / STUDENT',
    title: 'Student Portfolio',
    description: 'For students showcasing education, achievements, projects, and skills.',
    image: 'assets/images/student-template.png',
    features: ['Education timeline', 'Skills showcase', 'Academic portfolio layout']
  }
};

const modal = document.getElementById('templateModal');
const modalImage = document.getElementById('modalTemplateImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalFeatures = document.getElementById('modalFeatures');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

function openTemplateModal(templateKey) {
  const template = templateData[templateKey];

  if (!template || !modal) return;

  modalImage.src = template.image;
  modalImage.alt = `${template.title} preview`;
  modalCategory.textContent = template.category;
  modalTitle.textContent = template.title;
  modalDescription.textContent = template.description;
  modalFeatures.innerHTML = template.features.map((feature) => `<span>${feature}</span>`).join('');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeTemplateModal() {
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.template-btn').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openTemplateModal(button.dataset.template);
  });
});

modalClose?.addEventListener('click', closeTemplateModal);
modalOverlay?.addEventListener('click', closeTemplateModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('active')) {
    closeTemplateModal();
  }
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const assistantToggle = document.querySelector('.portfolio-assistant-toggle');
const assistantPanel = document.querySelector('.portfolio-assistant');
const assistantClose = document.querySelector('.assistant-close');
const assistantAnswer = document.querySelector('.assistant-answer');
const assistantAnswerText = document.querySelector('.assistant-answer-text');
const assistantAnswerLink = document.querySelector('.assistant-answer-link');

const portfolioAnswers = {
  research: {
    text: 'Amit’s research focuses on industrial robotics, CAD/CAM and robot programming, sensor fusion and SLAM, and manufacturing automation. His work connects mechanical design, simulation, perception, and real-world robot deployment.',
    label: 'Explore research', target: '#research',
  },
  experience: {
    text: 'Amit has more than seven years across academic and industrial R&D. His experience includes Head of Design at Sensable, Lead Scientist and Marie Skłodowska-Curie Fellow at Chordata Motion, Consultant (R&D Lead) at CENZ Automation, and Postdoctoral Researcher at NTUST.',
    label: 'View experience', target: '#experience',
  },
  projects: {
    text: 'Featured work includes CAD-based robotic welding, RGB-D and CAD inspection, CAD-based propeller inspection, and glue dispensing with industrial robots. Each project combines practical engineering with robot programming and automation.',
    label: 'View selected projects', target: '#projects',
  },
  publications: {
    text: 'The Publications section includes journal and conference work in robotics, computer vision, manufacturing, and biomechanics, including work on robot path planning, RGB-D inspection, and CAD-based industrial automation.',
    label: 'View publications', target: '#publications',
  },
  contact: {
    text: 'For research, industrial-automation, collaboration, or speaking enquiries, you can contact Amit directly by email or phone through the Contact section.',
    label: 'Contact Amit', target: '#contact',
  },
};

const setAssistantOpen = (isOpen) => {
  assistantPanel.hidden = !isOpen;
  assistantToggle.setAttribute('aria-expanded', String(isOpen));
  if (isOpen) assistantClose.focus();
  else assistantToggle.focus();
};

assistantToggle.addEventListener('click', () => setAssistantOpen(assistantPanel.hidden));
assistantClose.addEventListener('click', () => setAssistantOpen(false));

document.querySelectorAll('.assistant-prompts button').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = portfolioAnswers[button.dataset.answer];
    assistantAnswerText.textContent = answer.text;
    assistantAnswerLink.textContent = `${answer.label} ↗`;
    assistantAnswerLink.href = answer.target;
    assistantAnswer.hidden = false;
  });
});

assistantAnswerLink.addEventListener('click', () => setAssistantOpen(false));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !assistantPanel.hidden) setAssistantOpen(false);
});

'use strict';

const skillsData = [
  {
    name: 'Linux',
    experience: '2 years of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'Docker',
    experience: '1 year of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'GitLab',
    experience: '6 months of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
  },
  {
    name: 'Ansible',
    experience: '1 year of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
  },
  {
    name: 'Grafana',
    experience: '6 months of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg',
  },
  {
    name: 'Prometheus',
    experience: '6 months of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg',
  },
  {
    name: 'Kubernetes',
    experience: '1 year of experience',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  },
];

const skillsTrack = document.querySelector('[data-skills-track]');
const prevBtn = document.querySelector('[data-skills-prev]');
const nextBtn = document.querySelector('[data-skills-next]');

const getScrollStep = () => {
  if (!skillsTrack) {
    return 0;
  }

  const firstCard = skillsTrack.querySelector('.skill-card');
  if (!firstCard) {
    return 0;
  }

  const cardStyles = window.getComputedStyle(skillsTrack);
  const gap = Number.parseFloat(cardStyles.columnGap || cardStyles.gap || '0') || 0;
  return Math.ceil(firstCard.getBoundingClientRect().width + gap);
};

const scrollSkills = (direction) => {
  const step = getScrollStep();
  if (!step) {
    return;
  }

  skillsTrack.scrollBy({
    left: direction * step,
    behavior: 'smooth',
  });
};

if (skillsTrack) {
  skillsData.forEach((skill) => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    const icon = document.createElement('div');
    icon.className = 'skill-icon';

    const img = document.createElement('img');
    img.src = skill.logo;
    img.alt = `${skill.name} logo`;
    img.loading = 'lazy';
    img.decoding = 'async';

    icon.appendChild(img);

    const content = document.createElement('div');
    content.className = 'skill-content';

    const name = document.createElement('h4');
    name.className = 'skill-name';
    name.textContent = skill.name;

    const meta = document.createElement('p');
    meta.className = 'skill-meta';
    meta.textContent = skill.experience;

    content.appendChild(name);
    content.appendChild(meta);

    card.appendChild(icon);
    card.appendChild(content);

    skillsTrack.appendChild(card);
  });
}

if (prevBtn && nextBtn && skillsTrack) {
  prevBtn.addEventListener('click', () => scrollSkills(-1));
  nextBtn.addEventListener('click', () => scrollSkills(1));
}

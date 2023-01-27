window.addEventListener('load', () => {
  app();
});

const app = () => {
  nabBarSettings();
  tabSettings();
  agentPopup();
  sidebarAccordion();
};

const nabBarSettings = () => {
  const hamburger = document.querySelector('#hamburger');
  const sidebar = document.querySelector('.sidebar');
  const sidebar__text = document.querySelectorAll('.sidebar__text-inner');

  const logo = document.querySelector('.logo');
  const frameLogo = document.querySelector('.frame-logo');

  // accordion...
  const sidebarAccordionDetails = document.querySelectorAll(
    '.sidebar__accordion-details'
  );

  const sidebarAccordionOption = document.querySelectorAll(
    '#sidebar__accordion-option'
  );

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active');

    if (sidebar.classList.contains('sidebar--active')) {
      logo.style.display = 'none';
      frameLogo.style.display = 'block';

      sidebarAccordionDetails.forEach((tc) => {
        tc.classList.remove('sidebar__accordion--active');
      });

      sidebarAccordionOption.forEach((aop) => {
        aop.classList.add('fadeIn');
      });
    } else {
      logo.style.display = 'block';
      frameLogo.style.display = 'none';
      sidebarAccordionOption.forEach((aop) => {
        aop.classList.remove('fadeIn');
      });
    }

    sidebar__text.forEach((d) => {
      d.classList.toggle('sidebar__text--active');
    });
  });
};

const tabSettings = () => {
  const tabOptions = document.querySelectorAll('.tfm__tab-option');
  const tabContent = document.querySelectorAll('.tab__content');

  tabOptions.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabOptions.forEach((t) => {
        t.classList.remove('tfm__option--active');
      });

      tabContent.forEach((tc) => {
        tc.classList.remove('tab__content--active');
      });

      tabOptions[i].classList.add('tfm__option--active');
      tabContent[i].classList.add('tab__content--active');
    });
  });
};

const sidebarAccordion = () => {
  const sidebarAccordionOption = document.querySelectorAll(
    '#sidebar__accordion-option'
  );

  const sidebarAccordionDetails = document.querySelectorAll(
    '.sidebar__accordion-details'
  );

  const sidebar__menu = document.querySelectorAll('.sidebar__menu-link');

  sidebarAccordionOption.forEach((option, i) => {
    option.addEventListener('click', (e) => {
      sidebarAccordionDetails.forEach((tc, ie) => {
        tc.classList.remove('sidebar__accordion--active');
      });

      sidebar__menu.forEach((sm) => {
        sm.classList.remove('link--active');
      });

      sidebar__menu[i].classList.add('link--active');
      sidebarAccordionDetails[i].classList.add('sidebar__accordion--active');
    });
  });
};

const agentPopup = () => {
  const add__agent = document.querySelector('.add__agent-btn');
  const add__agentPopup = document.querySelector('.add__agent-popup');
  const popup__cancel = document.querySelector('.popup__cancel-btn');

  add__agent?.addEventListener('click', () => {
    add__agentPopup.style.display = 'flex';
  });

  popup__cancel?.addEventListener('click', () => {
    add__agentPopup.style.display = 'none';
  });
};

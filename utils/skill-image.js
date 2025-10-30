import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import react from '../app/assets/svg/skills/react.svg';
import nodejs from '../app/assets/svg/skills/nodejs.svg';
import expressjs from '../app/assets/svg/skills/expressjs.svg';
import mongodb from '../app/assets/svg/skills/mongoDB.svg';
import git from '../app/assets/svg/skills/git.svg';
import angular from '../app/assets/svg/skills/angular.svg';
import microsoftOffice from '../app/assets/svg/skills/microsoftOffice.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html': return html;
    case 'css': return css;
    case 'bootstrap': return bootstrap;
    case 'tailwind': return tailwind;
    case 'themes': return themes;
    case 'javascript': return javascript;
    case 'typescript': return typescript;
    case 'react': return react;
    case 'nodejs': return nodejs;
    case 'express': return expressjs;
    case 'mongodb': return mongodb;
    case 'mongoose': return mongoose;
    case 'git': return git;
    case 'ci/cd': return cicd;
    case 'ui/ux': return uiux;
    case 'stripe': return stripe;
    case 'angular': return angular;
    case 'microsoftoffice': return microsoftOffice;
    case 'canva': return canva;
    case 'figma': return figma;
    case 'firebase': return firebase;
    default: break;
  }
};

// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const aide = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Voici la liste des commandes disponibles:
\n${c}\n
[tab]: auto-completion.
[ctrl+l]/clear: nettoyage du terminal.\n
Taper 'contact' pour voir les liens utiles.
`;
};

// Redirection
export const stats = async (args: string[]): Promise<string> => {
  window.open(`${config.stats}`);
  return 'Ouverture de la page des stats...';
};

export const tuto = async (args: string[]): Promise<string> => {
  window.open(`${config.tuto_url}`);
  return 'Ouverture des stats...(accepter la fenêtre pop-up!)';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Ouverture du client mail vers:${config.email}...`;
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Recherche google de: ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Recherche sur duckduckgo de: ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Recherche sur reddit de: ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Data Mining
Indicators
Machine Learning
SSH Keys
Trading E-Books`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `Malheureusement vous n'avez pas les droits pour utiliser cette commande.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, tu utilises encore 'vi'? Essaye plutôt 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' est tellement vieux! Pourquoi pas 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? trop fantaisiste. Pourquoi pas 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `Tu sais quoi? Utilise VS Code!`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission refusée : avec peu de pouvoir ... peu de responsabilité ? `;
};

// Banner
export const banniere = (args?: string[]): string => {
  return `
  ██╗   ██╗██╗ ██████╗███████╗    ██████╗ ███████╗███╗   ███╗██╗██╗  ██╗
  ██║   ██║██║██╔════╝██╔════╝    ██╔══██╗██╔════╝████╗ ████║██║╚██╗██╔╝
  ██║   ██║██║██║     █████╗      ██████╔╝█████╗  ██╔████╔██║██║ ╚███╔╝ 
  ╚██╗ ██╔╝██║██║     ██╔══╝      ██╔══██╗██╔══╝  ██║╚██╔╝██║██║ ██╔██╗ 
   ╚████╔╝ ██║╚██████╗███████╗    ██║  ██║███████╗██║ ╚═╝ ██║██║██╔╝ ██╗
    ╚═══╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝

Bienvenue à toi jeune explorateur de l'Internet!   
Tapez 'aide' pour voir la liste des commandes disponibles.
Tapez 'stats' ou cliquez <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.stats}" target="_blank">ici</a></u> pour accéder aux stats de Trading.
Tapez 'tuto' pour savoir comment suivre les signaux de Trading.
Tapez 'contact' pour voir les liens utiles.
`;
};

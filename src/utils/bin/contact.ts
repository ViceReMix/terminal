import config from '../../../config.json';

const contact = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
Base Return for sumfetch.
`;
  } else {
    return `
    ────██──██─────                          Résumé
    ███████████▄───                         -----------
    ──███████████▄─                          A PROPOS
    ──███────▀████─                          ${config.name}
    ──███──────███─                          <u><a href="${config.tuto_url}" target="_blank">Tutoriel pour bien commencer.</a></u>
    ──███────▄███▀─                         爵 <u><a href="${config.stats}" target="_blank">Trading Stats</a></u>
    ──█████████▀───                         -----------
    ──███████████▄─                          CONTACT 
    ──███─────▀████                          <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    ──███───────███                          <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
    ──███─────▄████                          <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ──████████████─                         -----------
    ████████████▀──                          DONATE 
    ────██──██─────                          <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
                                             <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  }
};

export default contact;


import config from '../../../config.json';

const contact = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
Base Return for sumfetch.
`;
  } else {
    return `
    ────██──██─────                         
    ███████████▄───                          ${config.name}
    ──███████████▄─                         -----------
    ──███────▀████─                          Trading Algorithmique
    ──███──────███─                          <u><a href="${config.tuto_url}" target="_blank">Tutoriel pour bien commencer.</a></u>
    ──███────▄███▀─                         爵 <u><a href="${config.stats}" target="_blank">Trading Stats</a></u>
    ──█████████▀───                         -----------
    ──███████████▄─                          CONTACT 
    ──███─────▀████                          <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    ──███───────███                         -----------
    ──███─────▄████                         
    ──████████████─                        
    ████████████▀──                         
    ────██──██─────                        
                                            

`;
  }
};

export default contact;


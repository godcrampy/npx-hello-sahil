#!/usr/bin/env node

const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";
const BLUE = "\x1b[36m";
const YELLOW = "\x1b[33m";
const REVERSE = "\x1b[7m";
const UNDERSCORE = "\x1b[4m";

function timeStamp() {
  return `${new Date().toISOString()}`;
}

console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} Hi I'm Sahil, a Software Engineer based in the UK.`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} I am writing ${BLUE}Java${RESET} and ${YELLOW}JavaScript${RESET} these days.`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} ${BOLD}Linkedin:${RESET} ${UNDERSCORE}https://www.linkedin.com/in/sahil-bondre/${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} ${BOLD}Twitter:${RESET} ${UNDERSCORE}https://twitter.com/godcrampy/${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} ${BOLD}Github:${RESET} ${UNDERSCORE}https://github.com/godcrampy/${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${YELLOW}WARN${RESET} ${BOLD}See ya!${RESET}`
);

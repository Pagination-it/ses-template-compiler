#!/usr/bin/env node

const program = require('commander');
const compileTemplate = require('./lib/ses-template-compiler');
const fs = require('fs');

program
  .option('-b, --body [path]', 'File containing the body of the template')
  .option('-s, --subject [path]', 'File containing the subject of the template')
  .option('-o, --out [path]', 'Destination for the JSON file containing the compiled template')
  .option('-n, --template-name [name] ', 'Name of the compiled template', 'SES template')
  .parse(process.argv)

let Template = {
  HtmlPart: '', 
  SubjectPart: '', 
  TemplateName: compileTemplate(program.templateName)
}

if(program.body) {
  Template.HtmlPart = compileTemplate(fs.readFileSync(program.body, {encoding: 'utf-8'}));
} else {
  Template.HtmlPart = '';
}
if(program.subject) {
  Template.SubjectPart = compileTemplate(fs.readFileSync(program.subject, {encoding: 'utf-8'}));
} else {
  Template.SubjectPart = '';
}

if(program.out) {
  fs.writeFileSync(program.out, JSON.stringify({Template}, 0, 2));
} else {
  console.log(JSON.stringify({Template}, 0, 2));
}
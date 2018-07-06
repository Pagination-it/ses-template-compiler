# SES template compiler

This is  a simple program that can help merginng multiple input files into a single SES template,
taking care of removing new lines and indentation from the HTML code.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Open your terminal and run 

```shell
  npm install -g @pagination/ses-template-compiler
```

## Usage

From the the --help: 
```

  Usage: ses-template-compiler [options]

  Options:

    -b, --body [path]            File containing the body of the template
    -s, --subject [path]         File containing the subject of the template
    -o, --out [path]             Destination for the JSON file containing the compiled template
    -n, --template-name [name]   Name of the compiled template (default: SES template)
    -h, --help                   output usage information

```

## Support

Please [open an issue](https://github.com/fraction/readme-boilerplate/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and open a pull request.
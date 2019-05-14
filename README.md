# frontend-scaffolds

Different sets of pre-configured front-end projects to copy-paste and get started coding. Each branch is one project/configuration.

## Installation

This project requires:

- NodeJS 10+ ([installation instructions](https://nodejs.org/en/download/package-manager/))
- yarn (or npm) ([installation instructions](https://yarnpkg.com/en/docs/install))
- [saojs](https://saojs.org/guide/getting-started.html). All it does is copy an existing repo/branch into a fresh repo on your machine.
    - Install by running `yarn global add sao`
    - (or `npm i -g sao`)
    - (or [use this bash function instead of sao](./docs/alternative-bash-function.md))


## Usage

Run the following command with the {branch_name} that holds the project you want to clone:

```sh
sao nmrshll/frontend-scaffolds#{branch_name}
```


## Available scaffolds

Each branch of this project holds a different scaffold:

- for an ejected create-react-app 2.0 setup: `sao nmrshll/frontend-scaffolds#CRA2.0`
- react with tailwindCSS: `sao nmrshll/frontend-scaffolds#react-tailwind`
- react-static with tailwindCSS: `sao nmrshll/frontend-scaffolds#react-static-tailwind`
- react-static: `sao nmrshll/frontend-scaffolds#react-static`
- react-static, apollo-graphql: `sao nmrshll/frontend-scaffolds#react-static-graphql`
- for CRA3+jest+enzyme: `sao nmrshll/frontend-scaffolds#cra3-jest-enzyme`
- CRA3, tests, unstated3: `sao nmrshll/frontend-scaffolds#cra3-unstated`

Master has a create-react-app 2.0 setup: `sao nmrshll/frontend-scaffolds`

For mobile:

- CRNA + React-navigation: `sao nmrshll/frontend-scaffolds#crna-rnavigation`

## Adding your own scaffolds

For custom project scaffolds, fork the repo, then edit any existing branch or add new ones.

Notice how the sao command requires you to pass `username/repo` as the first argument ? 
To use your fork instead, replace that with `your_username/your_fork_repo_name` and you'll be good to go.

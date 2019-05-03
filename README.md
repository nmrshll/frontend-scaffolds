# frontend-scaffolds

Different sets of pre-configured front-end projects to copy-paste and get started coding. Each branch is one project/configuration.

## Installing

Install [saojs](https://saojs.org/guide/getting-started.html) by running 

`yarn global add sao` (or `npm i -g sao`)

([alternative bash function](./docs/alternative-bash-function.md))

Add these lines to your `~/.bashrc`/`~/bash_profile` to install the ghcp function.

```sh
export ghcp() {
  if [ ! -e ${2} ]; then echo "${2} set " && BRANCH=${2}; else BRANCH=master; fi
  curl "https://codeload.github.com/${1}/zip/${BRANCH}" | tar -xf - -C .
}
```

Then run the following command in the folder you want to deploy the scaffold into:

```sh
ghcp nmrshll/frontend-scaffolds <branchName>
```

## Usage

Run the following command with the {branch_name} that holds the project you want to clone:

```sh
sao nmrshll/frontend-scaffolds#{branch_name}
```


## Available scaffolds

Each branch of this project holds a different scaffold:

- for an ejected create-react-app 2.0 setup: `sao nmrshll/frontend-scaffolds#CRA2.0`
- for react with tailwindCSS: `sao nmrshll/frontend-scaffolds#react-tailwind`
- for react-static with tailwindCSS: `sao nmrshll/frontend-scaffolds#react-static-tailwind`
- for react-static: `sao nmrshll/frontend-scaffolds#react-static`
- for react-static with a graphql data source: `sao nmrshll/frontend-scaffolds#react-static-graphql`

Master has a create-react-app 2.0 setup: `sao nmrshll/frontend-scaffolds`

## Adding your own scaffolds

For custom project scaffolds, fork the repo, then edit any existing branch or add new ones.

Notice how the sao command requires you to pass `username/repo` as the first argument ? 
To use your fork instead, replace that with `your_username/your_fork_repo_name` and you'll be good to go.

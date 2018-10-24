# frontend-scaffolds

The simple man's yeoman. For those who find yeoman and others too complicated when all you want to do is copy-paste a set of files and get started coding.

Requires no installation. Just run two commands and get going.

## Quick start

Run this to declare a shell function

```sh
ghcp() {
  if [ ! -e ${2} ]; then echo "${2} set " && BRANCH=${2}; else BRANCH=master; fi
  curl "https://codeload.github.com/${1}/zip/${BRANCH}" | tar -xf - -C .
}
```

(alternatively you can add this function to your bashrc/bash_profile file to install it durably)

Then run the following command in the folder you want to deploy the scaffold into:

```sh
ghcp nmrshll/frontend-scaffolds <branch>
```

## Available scaffolds

Each branch of this project holds a different scaffold:

- for an ejected create-react-app 2.0 setup: `ghcp nmrshll/frontend-scaffolds cra2-0`
- for react with tailwindCSS: `ghcp nmrshll/frontend-scaffolds react-tailwind`
- for react-static with tailwindCSS: `ghcp nmrshll/frontend-scaffolds react-static-tailwind`
- for react-static: `ghcp nmrshll/frontend-scaffolds react-static`
- for react-static with a graphql data source: `ghcp nmrshll/frontend-scaffolds react-static-graphql`

Master has a create-react-app 2.0 setup: `ghcp nmrshll/frontend-scaffolds`

## Adding your own scaffolds

For custom project scaffolds, just fork it (on github still) and edit your own branches.

Notice how the command requires you to pass `username/repo` as the first argument ? Just replace that with `your_username/your_fork_repo_name` and you'll be good to go.
Add these lines to your `~/.bashrc`/`~/bash_profile` to install the ghcp function.

```sh
export ghcp() {
  if [ ! -e ${2} ]; then echo "${2} set " && BRANCH=${2}; else BRANCH=master; fi
  curl "https://codeload.github.com/${1}/zip/${BRANCH}" | tar -xf - -C .
}
```

Then run the following command in the folder you want to deploy the scaffold into:

```sh
ghcp nmrshll/frontend-scaffolds {branch_name}
```

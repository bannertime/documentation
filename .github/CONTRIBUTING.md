Contributing
------------

From adding an issue for a documentation suggestion to creating a pull request: every
contribution is appreciated and welcome. If you're planning to implement a new section or
page please create an issue first.


## Setup

Start by ensuring you have Node installed and forking the repository:

- Install [Node.js][1] if you have not already.
- Fork the **bannertime.github.io** repo from [the main repository][2].
- `git clone <your-clone-url> && cd bannertime.github.io`

Once you are in the project directory, run the following commands:

- `npm install` to pull all dependencies.
- `npm run build` to create a production version of the site.
- `npm start` to develop on a local webpack-dev-server: [localhost:3000][3].
- `npm run fetch` to retrieve external documentation/data.

See the `package.json` for the full list of `scripts`.

> Note that __Node 6.9.x__ or above is required for the build process to run properly.

> Note that a __Python version between v2.5.0 and 3.0.0__ is required for the [proselint][9] dependency.

> On Debian and Ubuntu operating systems you may have to use `node >= 7.0.0` to avoid build errors with `node-sass`. Please note that we don't officially support building on these systems.


## Editor Config

The [.editorconfig][4] in the root should ensure consistent formatting. Please make sure
you've [installed the plugin][5] if your text editor needs one.


## Branching Your Changes

Making a branch in your fork for your contribution is helpful in the following ways:

- It allows you to have multiple contributions in as PRs at once.
- It allows us to identify what your contribution is about from the branch name.


## Committing Your Changes

Please follow the [conventionalcommits][7] specification. For example, for documentation
changes, a short commit message may resemble the following:

``` md
docs(config): clarify `output.filename` usage
```

Note that you can add a body/footer if more details are necessary. Soon we will
start utilizing [`standard-version`][8] for releases/changelog generation. This
will also potentially tie in to having archived docs for each major version.


## Submitting Changes

After getting some feedback, push to your fork branch and submit a pull request. We may
suggest some changes or improvements or alternatives, but for small changes your pull
request should be accepted and merged fairly quick.

Issue the PR to the [master][8] branch.

> See [GitHub documentation][6] for more help.


## Recognition

You can choose to add your GitHub username for recognition at the top of any markdown
document you edit:

__example.md__

```markdown
---
title: Some Example Page
contributors:
  - pyramidium
  - joemidi
---

Some documentation...
```

This will add your name and GitHub profile photo to the document in production. It's a
great way to own the awesome work that you do and we encourage you to do this in your PRs.


## Thank You

Bannertime documentation is a huge time sink. We appreciate
any time spent fixing typos or clarifying sections in the documentation.


[1]: https://nodejs.org/
[2]: https://github.com/bannertime/bannertime.github.io
[3]: http://localhost:3000/
[4]: https://github.com/bannertime/bannertime.github.io/blob/master/.editorconfig
[5]: http://editorconfig.org/#download
[6]: https://help.github.com/articles/proposing-changes-to-your-work-with-pull-requests/
[7]: http://conventionalcommits.org/
[8]: https://github.com/conventional-changelog/standard-version
[9]: https://github.com/amperser/proselint

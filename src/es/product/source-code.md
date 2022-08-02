---
title: Source Code
category: Source Code
star: 9
sticky: 9
tag:
  - Demo
  - Product
  - Github
article: false
---

![Source Code](/assets/img/product/source-code.png)

## Adempiere Project Repository

The ADempiere main repository can be found in [GitHub](https://github.com/adempiere/adempiere).

::: tip Git

Before proceeding, please refer to the [Git SCM Documentation](http://git-scm.com/doc)

To collaborate with the ADempiere team, we use the Git Hub Fork and Pull model. From the [GitHub website](https://help.github.com/articles/using-pull-requests/#fork--pull)

:::

::: tip Collabotate

To collaborate with the ADempiere team, we use the Git Hub Fork and Pull model. From the [GitHub website](https://help.github.com/articles/using-pull-requests/#fork--pull)

:::

The fork & pull model lets anyone fork an existing repository and push changes to their personal fork without requiring access be granted to the source repository. The changes must then be pulled into the source repository by the project maintainer. This model reduces the amount of friction for new contributors and is popular with open source projects because it allows people to work independently without upfront coordination.

Refer to the GitHub article on [Pull Requests](https://help.github.com/articles/using-pull-requests) for more information and instructions on how to get started.

### Summary Instructions

The setup is easy. Follow these steps:

- Install the Git Software. You can work with the Git command line or any of a number of Git GUI tools. As the repository is on GitHub, it is recommended to follow the [GitHub setup procedures](https://help.github.com/articles/set-up-git/).
- Create a GitHub account
- Create your personal fork of the Adempiere project
- Create a local clone of your personal fork
- Start developing!
- Commit your work to your own fork. Follow the [Adempiere Software Development Procedure](http://wiki.adempiere.net/Software_Development_Procedure) for branch naming.
- Send a pull request to the Adempiere project.

### Cloning a Repository

Cloning a repository to your local computer is simple. Follow the instructions with the GitHub software or your GUI tool, many of which allow for cloning a GitHub repository to a local computer with a few mouse clicks. If you want to do it from the command line,

::: vue-demo Clone the project default

```Shell
# Navigate to the parent directory where the repository will be placed and type the following command
git clone https://github.com/adempiere/adempiere
```

:::

This will create a directory using the url project name, initialize a .git directory inside it, pull down all the data for that repository, and check out a working copy of the latest version. If you go into the new directory, you'll see the project files in there, ready to be worked on or used.

To change the name of clone directory use the following

::: vue-demo Clone the project with Optional Name

```Shell
# Navigate to the parent directory where the repository will be placed and type the following command
git clone https://github.com/adempiere/adempiere <Optional Name>
```

:::

### Cloning the Repository with a Slow Connection

To clone a repository over a slow or intermittent Internet connection, try using git fetch instead of clone as follows:

::: vue-demo For Linux

```Shell
  # Go to default folder
  cd /opt/Development/repos

  # Create a directory for the repo and change to it
  mkdir adempiere

  # Go to new folder
  cd adempiere

  # Initialize the repository
  git init
  Initialized empty Git repository in /opt/Development/repos/github/adempiere/.git/

  # The default reference to the source repository in a clone is "origin".  Clone your
  # personal fork from your account <account>.
  git remote add origin https://github.com/adempiere/adempiere.git

  # Fetch the contents.
  git fetch

  # Update to the current master branch - for example
  git reset --hard origin/master
```

:::

# Getting Started Instructors

This guide will help instructors set up the Discord Bot Template for HighTechU.

## Creating the Repository

The HighTechU Discord Bot Repository allows for GitHub users to create a new repository using this repository as a template. For more information, visit "[About repository templates](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template#about-repository-templates)".

You will need to name the new repository appropriately, for now you can name it following the convention below:

`discord-bot-team-X`

The HighTechU Students will rename the repository later when they have created their Discord Bot Branding.

> Note: You will create the new repository as `private`. The repository will become `public` after the program is finished.

## Repository Permissions

You will want to restrict the `main` branch. You will need to create a branch protection rule. For more information, visit "[Creating a branch protection rule](https://docs.github.com/en/github/administering-a-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule)".

You will want to set up "Require pull request reviews before merging", "Required approving reviews: 1", and "Require review from Code Owners". 

> Note: This means that developers cannot push to the `main` branch and that developers will need to develop on a separate branch and create a Pull Request. The information about Pull Request Workflow can be found in [CONTRIBUTING.md](./.github/CONTRIBUTING.md).

## Repository Access

You will need to add each HighTechU Student to the repository. You will initially give them read and write access.

> Note: You will need to give 1 HighTechU Student admin access so that they can set up automatic deploy with GitHub on Heroku.

For more information about repository access for individuals, visit "[Managing an individual's access to an organization repository](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository#managing-an-individuals-access-to-an-organization-repository)".

You will need to add the HighTechU Staff Team to the repository. You will give them admin access.

You will need to add the HighTechU Mentor Team to the repository. You will give them read and write access.

For more information about repository access for teams, visit "[Managing team access to an organization repository](https://docs.github.com/en/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".

## Conclusion

The repository should now be ready for HighTechU Students to start developing and exploring.

## Support

The HighTechU Core Staff is able to help with the set up, let us know if you need any help or assistance.

Feel free to update this document with any relevant or additional information.

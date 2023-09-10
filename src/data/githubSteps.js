import {
  VscSignIn,
  VscRepoForked,
  VscRepoClone,
  VscEdit,
  VscGitCommit,
  VscRepoPush,
  VscGitPullRequest,
  VscCheck,
} from "react-icons/vsc";

const githubSteps = [
  {
    id: 1,
    icon: VscSignIn,
    title: "1. Sign up for a GitHub account",
    text: "To contribute to the VUI Guide, you'll need a GitHub account.",
  },
  {
    id: 2,
    icon: VscRepoForked,
    title: "2. Fork the repository",
    text:
      'Find the repository for the VUI Guide on GitHub and click the "Fork" button. This creates a copy of the repository under your GitHub account.',
  },
  {
    id: 3,
    icon: VscRepoClone,
    title: "3. Clone the repository",
    text:
      "On your local machine, use Git to clone the repository you just forked. This creates a local copy of the repository that you can edit.",
  },
  {
    id: 4,
    icon: VscEdit,
    title: "4. Make changes",
    text:
      "Open the repository in your text/code editor and make the changes you would like to contribute.",
  },
  {
    id: 5,
    icon: VscGitCommit,
    title: "5. Commit changes",
    text:
      "Once you have made your changes, use Git to commit the changes to your local repository.",
  },
  {
    id: 6,
    icon: VscRepoPush,
    title: "6. Push changes",
    text: "Use Git to push your changes back up to your fork on GitHub.",
  },
  {
    id: 7,
    icon: VscGitPullRequest,
    title: "7. Submit a pull request",
    text:
      'On GitHub, navigate to your fork of the repository and click the "New pull request" button. This creates a pull request to submit your changes back to the original repository for review.',
  },
  {
    id: 8,
    icon: VscCheck,
    title: "8. Review",
    text:
      "The VUI Guide maintainers will review your pull request and may merge your changes into the main repository.",
  },
];

export default githubSteps;

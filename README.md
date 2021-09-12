# Hello there!

The goal of this exercise is to extend this "Github Repo Search" application. The application currently lists the projects of the Netflix Github organization by fetching from Github's REST API:

https://docs.github.com/en/rest/reference/repos

## Feature requests

Please implement the following features.

1. **Ability to view the repos of any Github Organization (eg. Netflix)** The user should be able to choose which organization is being listed.
1. **Include a subset of the returned repo data that you feel is meaningful to your user, and present it in a simple and usable way** Please document your choice at the end of this README
1. **Ability to view an individual repo's recent commits**
1. **Display results such that they are easy to read and parse**
1. **Create shareable urls for the results of listing the repos of an organization** ie. a url that can be shared so another user could view an organization's repos
1. **Any other enhancements you feel would make for a more compelling product** Please timebox this appropriately. See the "Time estimate" section below

We've purposefully left the details open to your own interpretation, so feel free to get creative with your solution.

## Developing locally

Run `yarn` and `yarn start` to start developing locally.

## Time estimate

Our expectation is that this exercise can be completed in about 2 hours. Please prioritize your efforts to be close to this constraint. If you have other enhancements and creative ideas you want to showcase and if they will take you over this time constraint, please use the "Your README" section at the end to describe your ideas rather than implementing them.

## Documentation

Please document your submission at the end (separate section is provided at the bottom). In your documentation, please provide the following:

- The approach you've taken with your solution, calling out any decisions / tradeoffs you made or interesting areas of code
- The next steps you would take to improve upon your solution
- The total time you spent on the exercise

## Submitting your solution

Please send us a zip file when you are ready as per the instructions in the associated email message.

## Your README

-- Enter your documentation here --

## 🎁 What

Currently the application lists Netflix's Github repo names. This project extends features and introduces design.

- Ability to view the repos of any Github Organization (eg. Netflix)
- Include meaningful repo data
- Ability to view an individual repo's recent commits
- Create shareable urls for the results of listing the repos of an organization

## ✨ Approach

I started by extending the functionality of the app and designed it at the end. I committed all changes on a new branch then merged it into `main` so you're able to look at individual commits, approach, and progress. The first batch of commits are setup and can largely be ignored (more info below).

### 1. `43053d2` Ability to view the repos of any Github Organization (eg. Netflix)

I moved `netflix` from the hard-coded URL into `org` state and added a form so people can enter any repo. For this project, only the happy path is supported and we assume all user input is a valid organization. The test captures a changing URL – the result of `org` getting updated – but with more time I'd also test the new repos were rendered.

### 2. `7a913d0` Include a subset of the returned repo data that you feel is meaningful to your user

Github's users are developers, and by extension, I assume the users of this project are developers familiar with Github. I included information I personally find meaningful in my day-to-day: repo name + description; open PRs; latest commit; open issues; language; and (when evaluating repos) star count.

The API response didn't include all the information I would ideally like to show, namely the open PR count and latest commit. With more time, I'd switch to [Github's GraphQL API](https://docs.github.com/en/graphql) to get the data in a single request.

I also considered archived and private status, but left both out for now because in testing the API response manually, that information was excluded. ie. many "archived" repos were not actually _archived_.

### 3. `b5e4f36` Ability to view an individual repo's recent commits

I've opted to make a repo's individual commits an action rather than automatic. Part of this is because the REST API requires individual requests per repo and I didn't want to send 30+ subsequent requests, but perhaps a bigger part is for the UX consideration. A user is probably looking for a specific repo, and likely willing to take some action on it. This keeps the UI more focused and scannable while still keep it easy to get more data.

If the project used the GraphQL API, I might request the latest commits along with the repos and hide/collapse them in the UI until the button is toggled. It would depend on the response time and performance.

### 4. `2b25843` Create shareable urls for the results of listing the repos of an organization

I went with the simplest version I could think of, using the browser's History API. I kept everything contained to `App.tsx` because passing `org` as a prop didn't feel necessary, though I'd be happy to change it if requested in a PR review. On successful repo request, the `org` params are added to the URL making the link shareable.

This approach doesn't match the _complete_ state of the app – recent commits for a repo aren't tracked in the shareable URL. This was excluded mostly for time, but also for similar reasons to why recent commits aren't immediately included. To match the complete state, I might add a `repos` URL param containing an array of repo IDs, then pass down a boolean prop to fetch the commits once the component rendered because that would be consistent with the current behaviour and API. There might be better ways to do this, but I would need to dig into it a bit!

### 5. `6b23333` Display results such that they are easy to read and parse

I designed the app using Tailwind and Github icons. I took a lot of inspiration from Github's UI because I felt that what developers would be used to and recognize. The app is responsive, from mobile to extra large screens and includes simple loading states. I haven't _really_ handled errors, focusing on the happy path, but with more time I would include it.

### Setup

I committed most of the project setup directly to `main` before branching to keep this "PR" cleaner. It's things like converting to TypeScript; adding Prettier; setting up tests and fixtures; setting up Tailwind with CRA. In a production project, I'd likely break these into independent PRs to keep work focused, following [Kent Beck's](https://twitter.com/kentbeck/status/250733358307500032?lang=en) "Make the change easy…then make the easy change" philosophy.

## 🗺 Where should a review start?

- Start in `App.tsx`. It's the main component and was originally the index file (changed for tests because `document.getElementById` was throwing an error).
- `App.tsx` renders `RepoListItem.tsx` when there are repos and `RepoListItemLoading.tsx` for a skeleton state.
- `RepoListItem.tsx` is the repo card component. It makes a request for commits and renders `CommitListItem.tsx`.
- There are some basic state and snapshot tests for the components. These would get further fleshed out with more time.

## ☑️ Manual Testing Checklist

- [x] Design is tested on mobile Safari
- [x] Design is tested on desktop Safari, Firefox, and Chrome at various break points
- [x] App header is fixed
- [x] User can see what organization is being shown
- [x] User can change the organization
- [x] Invalid repo doesn't crash the app
- [x] Form elements have loading states that return when the request completes
- [x] External links work
- [x] Pass Lighthouse Accessibility audit
- [x] User can get recent commits
- [x] Missing commit author information doesn't crash the app
- [x] User can share URL that triggers a request for the organization they see
- [x] Invalid organizations aren't saved in the URL

## 🖼 Screenshots

<img width="1280" alt="commits-desktop" src="/screenshots/commits-desktop.png">
<img width="323" alt="commits-mobile" src="/screenshots/commits-mobile.png">
<img width="1280" alt="loaded-desktop" src="/screenshots/loaded-desktop.png">
<img width="321" alt="loaded-mobile" src="/screenshots/loaded-mobile.png">
<img width="1280" alt="loading-desktop" src="/screenshots/loading-desktop.png">
<img width="316" alt="loading-mobile" src="/screenshots/loading-mobile.png">

### Next Steps

With more time I'd consider the following:

- [ ] Robust error states – invalid repos; missing commit data; request time outs; etc. I've caught a couple, but there are likely more. And there's no UI indication that something went wrong.
- [ ] Switch from the REST API to GraphQL to get better information, like open PR count and recent commits. I would still hide most of the commits in the UI until toggled, but I could show the first one.
- [ ] Pagination for repos and commits. The repos grab the first 30 and there's currently no way to get more, though it's pretty easy in the API (`?page=2`). Same goes for commits. For this project, I lean toward a "load more" button that continues to append as opposed to numbered pages.
- [ ] Capture entire app state in URL params. If the original shared state request 3 pages of repos and commits, that should be passed forward.
- [ ] Sorting + filtering the repo list. The sort param is simple (`?sort=full_name`). Even though sorting alphabetically is easier to scan, I left it out of the project because without pagination, it _felt_ like repos were missing and that there should be a way to get more. Unsorted, the repos appear more random, so that feeling of something missing isn't really there. Maybe dark UX 🙈?
- [ ] Update the recent commits design to match Github a little closer. Thinking of grouping commits by date.
- [ ] Might truncate some of the content, like repo names, descriptions, and commit messages.
- [ ] Fix "An update to App inside a test was not wrapped in act(...)" warning caused from `useEffect` calling `fetchRepos`. This appears to be an issue with any async state changes in tests with React Hooks/functional components. I spent a little time looking at it, but didn't get it solved and decided to move on.
- [ ] Increase tests. I captured the critical happy path, but could test more state changes, like ensuring form elements are disabled and re-enabled while a request is running.
- [ ] Autocomplete suggestions for the repo search box. This could be a nice way to avoid/hint at invalid organizations.

### Total time

Total time for the exercise itself was probably closer to 4 hours, with half of that spent on the design.

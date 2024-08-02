# Thunkworks Contributing Guide

## Tooling

- [PNPM]('https://pnpm.io/') to manage packages and dependencies
- [Testing Library]('https://testing-library.com/') for testing components and hooks

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention category(scope or module): message in your commit message.

```
feat(components): add new prop to the avatar component
```

**_Choose from one of the following categories:_**

| Category       | Usage                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------ |
| `feat/feature` | all changes that introduce completely new code or new features                                               |
| `fix`          | changes that fix a bug (ideally you will additionally reference an issue if present)                         |
| `refactor`     | any code related change that is not a fix nor a feature                                                      |
| `docs`         | changing existing or creating new documentation (i.e. README, docs for usage of a lib or cli usage)          |
| `build`        | all changes regarding the build of the software, changes to dependencies or the addition of new dependencies |
| `test`         | all changes regarding tests (adding new tests or changing existing ones)                                     |
| `ci`           | all changes regarding the configuration of continuous integration (i.e. github actions, ci system)           |
| `chore`        | all changes to the repository that do not fit into any of the above categories                               |

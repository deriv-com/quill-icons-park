# Quill Icons Park

A little park to explore [Quill Icons](https://github.com/deriv-com/quill-icons) intuitively.

## What does it look like?

It should look something like this; anyway, see the latest version here: https://quill-icons-park.pages.dev/

![quill_icons_park](https://github.com/deriv-com/quill-icons-park/assets/122449658/9bf5dfc7-93ab-4f26-a21d-6f52f128b1bd)

## How do I run it locally?

- **$> `git clone https://github.com/deriv-com/quill-icons-park.git`**: For cloning the repo to your local machine.

- **$> `npm install`**: For installing the required node modules for the project.

- **$> `npm run dev`**: For updating the quill-icons to the latest version, running a typescript check and then running the project locally using Vite.

## How can I contribute?

For adding new features, enhancements and bug fixes, you just have to go through the simple codebase. However, here are few important information you may need to know:

- The icons are displayed after importing it locally from the node_modules folder of @quill-icons. Therefore, to get the latest icons, `npm update @deriv/quill-icons` command is included in the `dev` and `build` commands of [package.json](package.json) file.

- If a new category is present in the @quill-icons package, the same needs to be added manually to @quill-icons-park. For that, the file [category_constants.ts](src/constants/category_constants.ts) alone needs to be modified. Add the new entry to the `CATEGORIES` object, and it's respective import statement in the `CATEGORY_PROMISES` object.

- Icons belonging to a Category supports certain features/behaviors like icon size and fill color. Check the behavior in [Storybook](https://quill-icons.pages.dev) and accordingly include the category entry to either `CATEGORIES_TYPE_A` and/or `CATEGORIES_TYPE_B` in the [category_constants.ts](src/constants/category_constants.ts) file (Please read the inline comments in the file for more details).

- If there are new icons added to the @quill-icons package, @quill-icons-park(this project) will have a new PR created by the GitHub action workflow of @quill-icons repo. To see every step of this automation, see the file [pr_to_inform_quill_icons_update.yaml](https://github.com/deriv-com/quill-icons/blob/main/.github/workflows/pr_to_inform_quill_icons_update.yaml) of @quill-icons repo. When a new PR is available in this repo, look for the test link generated in the PR, make sure everything is working fine in there, and then merge the PR. Merging of this PR will cause a rebuild and deployment of latest version of @quill-icons-park. You can now see all new quill icons in quill icons park.


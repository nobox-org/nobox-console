## Installation
- Run `yarn`

## Quirks
For nobox-console to work, you need to run all local services. For this reason, it is easier to just use the online api, `https://api.nobox.cloud`, you can do this by replacing the content of `.env.development` with this below

```bash
NEXT_PUBLIC_NOBOX_API_ROOT_URL=https://api.nobox.cloud
```

Another issue , that might arise here is that , the dashboard will be empty if your github login is not connected to any project. One other way to deal with this is to run [`nobox-react-example`](https://github.com/nobox-org/nobox-react-example) with your own token to populate your account with a project.

## Start
- Run `yarn dev`



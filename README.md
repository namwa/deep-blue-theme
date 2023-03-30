# Deep blue theme

This theme is created for Hugo SSG using Tailwind CSS. It's good for blogging.

## Installation

You need to install Hugo first before using this theme.
Please follow the official [installation guide](https://gohugo.io/getting-started/installing/).

## Check Hugo version.
```
hugo version
```

## Create a new Hugo Site

```
hugo new site myNewHugoSite
```

Hugo site will be created in `myNewHugoSite` folder.

## Install theme

Clone this repo inside your `themes` folder.

```
cd myNewHugoSite/themes
git clone https://github.com/namwa/deep-blue-theme.git

```

## Copy example content

Copy all the contents of the `myNewHugoSite/themes/deep-blue-theme/exampleSite` folder
to root folder of your Hugo site, ie `myNewHugoSite/`

To copy the files using terminal. Make sure that you're in the project root, i.e the `myNewHugoSite` folder.

```
cp -a themes/deep-blue-theme/exampleSite/. .
```

## Update config.yaml

Update your project root config.toml (you can use config.yaml format too).
You need to update `theme` and `themesDir` values in `myNewHugoSite/config.toml`

```
theme = 'deep-blue-theme'
themesDir = 'themes'
```

Set up the configurations in `config.toml`.
[reference](https://github.com/namwa/deep-blue-theme/blob/master/exampleSite/config.toml)

## Run Hugo

To generate the Hugo site, from the root folder ie `myNewHugoSite`
```
hugo
```

For local development, run Hugo's built in local server.
```
hugo server
```
Your local site will be served at `localhost:1313`.

## Data

You can change content of each section by using YAML files in `data` directory.

## Development

For editing the theme.

1. Go to `themes/deep-blue-theme` directory and run `npm run watch`

2. Run `hugo server` and see the site locally at `http://localhost:1313/`.

## Production

1. Go to `themes/deep-blue-theme` directory and run `npm run build` This will minify
the generated CSS.

2. Run `hugo` to build the whole site.

## Reactnativeurlviewer
Render image from URL attribute

## Features
Allows rendition of image from URL attribute

## Usage
Download one of the [releases](https://github.com/Entidad/mendix-react-url-imageviewer/releases) or build from source as follows

```
git clone https://github.com/Entidad/mendix-react-url-imageviewer.git
cd ./mendix-react-url-imageviewer
npm install
npm run build
```

Deploy `entidad.Reactnativeurlviewer.mpk` to `$PROJ/widgets`, execute `Synchronize App Directory` in Mendix IDE (`alt-f4` or invoke `Menu/App/Synchronize App Directory`. Set up widget some context passing component like a `DataView` and configure `width`, `height`, and `URI` attributes.

## Demo project
None at this time

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-react-url-imageviewer/issues)


## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions in terms of features, bugs, and improvements would be appreciated

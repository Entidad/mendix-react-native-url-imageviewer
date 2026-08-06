## Reactnativeurlviewer
Render image from URL attribute

## Features
Displays an image from a URL held in a String attribute, at a fixed width and height.

This is a deliberately minimal widget. If you need to show a Mendix `System.Image`, size an
image to its own dimensions, or style it from your theme, use
[mendix-react-native-imageviewer](https://github.com/Entidad/mendix-react-native-imageviewer)
instead — it covers static images, dynamic images and URLs, and supports native styling.

## Requirements
Studio Pro **11.12** or higher.

Version `2.0.0` is built against Mendix Pluggable Widgets Tools 11.12 (React 19, React
Native 0.84) and is **not backward compatible**. Stay on the `1.x` release for Studio Pro 10.

## Usage
Download one of the [releases](https://github.com/Entidad/mendix-react-url-imageviewer/releases) or build from source as follows

```
git clone https://github.com/Entidad/mendix-react-url-imageviewer.git
cd ./mendix-react-url-imageviewer
npm install
npm run build
```

Deploy `entidad.io.native.Reactnativeurlviewer.mpk` to `$PROJ/widgets`, then run
`Synchronize App Directory` in Studio Pro (`F4`, or `Menu / App / Synchronize App Directory`).

The widget needs an entity context, so place it inside a **Data view** or a **List view** row.

### Properties

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `uri` | String attribute | yes | Absolute URL of the image, for example `https://example.com/logo.png`. |
| `width` | Integer | yes (default `50`) | Width in density-independent pixels. |
| `height` | Integer | yes (default `50`) | Height in density-independent pixels. |

### Behaviour

**The size is fixed by `width` and `height`.** The image is drawn into exactly that box
regardless of its real dimensions. There is no intrinsic sizing and no maximum — the values
you set are the values used.

**The image is cropped to fill, not fitted.** React Native's default resize mode is `cover`,
so an image whose aspect ratio differs from your `width`/`height` is scaled to fill the box
and the overflow is cut off. Match the ratio to the images you expect, or the edges will be
trimmed.

**Nothing renders while `uri` is empty.** The widget draws an empty box rather than a
placeholder or an error, so a blank space usually means the attribute has not been filled yet
or the object is still loading.

**The URL must be absolute and reachable from the device.** A relative path will not resolve.
On iOS, plain `http` URLs are blocked by App Transport Security unless the app is configured
to allow them — use `https` unless you have arranged otherwise.

### Limitations

**The widget cannot be styled.** It does not read the `style` prop, so entering a class in
the widget's **Class** property has no effect. Size is controlled only by the `width` and
`height` properties. If you need styling, use the imageviewer widget linked above.

**Offline behaviour depends on caching.** The widget is marked offline capable, but a remote
URL still needs to have been fetched and cached by the platform before it will appear without
a connection.

## Demo project
None at this time

## Issues, suggestions and feature requests
[GitHub](https://github.com/Entidad/mendix-react-url-imageviewer/issues)


## Development and contribution

1. Install NPM package dependencies by using: `npm install`. Node 20.19.4 or higher is required.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions in terms of features, bugs, and improvements would be appreciated

## References

* [https://reactnative.dev/docs/image](https://reactnative.dev/docs/image)
* [https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/](https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets-property-types/)

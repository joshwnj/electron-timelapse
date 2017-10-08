# electron-timelapse

_Take a desktop screenshot every minute_

## Set up

- `npm install -g electron` (if you don't have it already)
- `npm install`
- `npm start`

## Warning

This will use up a lot of disk space :) So maybe be careful if you are running low.

## Make a gif

Here's an easy way to do it with [graphicsmagick](http://www.graphicsmagick.org/):

```
gm convert -scale '10%' -delay 1 *.png animation.gif
```

[source](https://unix.stackexchange.com/a/24019)

## License

MIT

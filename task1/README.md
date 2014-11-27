# UserAgent & Viewport

## Goal

Your goal is to change user agent and viewport size in CasperJS.

## Steps

1. Change User Agent in CasperJS to any name you can imagine
2. Visit http://httpbin.org/user-agent and capture a screenshot
3. Change Viewport size to 600x800
4. Visit http://html5up.net/uploads/demos/alpha/ and capture a screenshot
5. Change Viewport size to 1024x768
6. Visit http://html5up.net/uploads/demos/alpha/ and capture a screenshot
7. Change Viewport size to 1400x900
8. Visit http://html5up.net/uploads/demos/alpha/ and capture a screenshot

## Tips

* Look for `casper` module documentation in `API Documentation` section on [CasperJS website](http://docs.casperjs.org/en/latest/)
* `Casper.prototype` is the category you want to read

## Key Learnings

You'll learn how to change User Agent and Viewport size on the fly in CasperJS. Also, some websites rely on User Agent string instead of feature detection in order to serve different behaviour to different devices. This task might help you with testing responsive websites and spotting potential issues quickly.
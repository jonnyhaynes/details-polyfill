# HTML5.1 details cross browser support

Adds support for HTML5.1 [`<details>`/`<summary>`](http://dev.w3.org/html5/spec/Overview.html#the-details-element) using a polyfill, ready to use in most browsers.

## How to use

Add the  script to your page and initialise the script with [Modernizr](https://modernizr.com/).

```html
<script src="details.polyfill.min.js"></script>
<script>
  if(!Modernizr.details) {
    $('details').details();
  }
</script>
```

## Bower
*Needs adding*

## NPM
*Needs adding*

## Changelog

- **10.11/15:** 0.0.1 – Initial repo structure and README

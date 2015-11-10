# HTML5.1 details cross browser support

Adds support for HTML5.1 [`<details>`](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-details-element)/[`<summary>`](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-summary-element) using a polyfill, ready to use in most browsers.

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

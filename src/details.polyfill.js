/**
 * HTML5 <details> crossbrowser support
 *
 * Adds support for HTML5.1 `<details>`/`<summary>` using a polyfill,
 * ready to use in most browsers.
 *
 * @author Manuel Bieh & Jonny Haynes
 * @url http://www.manuel-bieh.de/ http://blog.colouringcode.com
 * @version 0.0.1
 * @license MIT
 *
 * Date 2015-11-10 10:32
 *
 */


jQuery(function($) {

	(function() {

		var me = this;

		this.hideDetailChildren = function(detail) {

			var	children = detail instanceof jQuery ? detail[0].childNodes : detail.childNodes,
				childrenLength = children.length;

			$(detail).attr('open', false);

			// Double iteration workaround because otherwise Safari leaves out certain text nodes arbitrarily(?)
			if($.browser.safari == true) {

				for(var i = 0; i < childrenLength; i++) {

					if(children[i].nodeType == 3 && children[i].textContent != "") {
						var	span = $('<span />');
							span.text(children[i].textContent).hide();

						$(children[i]).after(span);
						children[i].textContent = '';
						childrenLength++;

					}

				}

			}

			$.each(children, function(cKey, childElement) {

				if($(childElement)[0].nodeType == 1
					&& childElement == $(childElement).parent().find('> summary:first-of-type')[0]) {

					if($(childElement).data('processed') != true) {

						$(childElement).css({"display":"block", "cursor":"pointer"}).data('processed', true).addClass('detail--hidden').on('click', function() {
							me.toggleDetailChildren($(this));
						});

						$(detail).prepend($(childElement));

					}

				} else if($(childElement)[0].nodeType == 3
					&& !childElement.isElementContentWhitespace
					&& !!$.browser.safari == false) {

					var	span = $('<span />');
						span.text(childElement.textContent).hide();

					$(childElement).after(span);
					childElement.textContent = '';
/*
*/
				} else if ($(detail).find('> summary').length == 0) {

					var summary = $('<summary />').text('Details').css({"display":"block", "cursor":"pointer"}).data('processed', true).addClass('detail--hidden').on('click', function() {
						me.toggleDetailChildren($(this));
					});

					$(detail).prepend(summary);

				}

				$(detail).find('> :visible:not(summary:first-child)').hide();

			});

		}

		this.showDetailChildren = function(detail) {

			$(detail).attr('open', true);

			$.each($(detail).find('> *'), function(key, childNode) {
				$(childNode).show();
			});

		}

		this.toggleDetailChildren = function(summary) {

			if(summary.hasClass('detailHidden')) {
				summary.removeClass('detailHidden');
				me.showDetailChildren(summary.parents('details')[0]);
			} else {
				summary.addClass('detailHidden');
				me.hideDetailChildren(summary.parents('details')[0]);
			}

		}

		if ($("details").length !== 0){
			var style = $('<style />').text('summary {-webkit-text-size-adjust: none;}  details > summary:first-child:before {content: "▼"; font-size:.9em;padding-right:6px;font-family:"Courier New";} details > summary.detailHidden:first-child:before {content: "►";font-size:.9em;padding-right:6px;font-family:"Courier New";}');
			$('head').append(style);
		}

		$.each($('details'), function(dKey, detailElement) {

			me.hideDetailChildren(detailElement);

		});

	})();

});

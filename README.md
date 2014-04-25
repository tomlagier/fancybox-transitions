Fancybox transitions
====================

This plugin enables a variety of CSS3 open/close transitions for fancybox 2. 

Transitions have been taken from the excellent ["Nifty Modal Window Effects"](http://tympanus.net/Development/ModalWindowEffects/) by [Tympanus](http://tympanus.net/).

[Check out the demo!](http://fancybox-demo.edge.promocampaigns.com)

Usage
-----

Download [jQuery](http://jquery.com/)

Download [fancybox 2](http://fancyapps.com/fancybox/)

Download and include <code>jquery.fancybox-transitions.js</code> and <code>jquery.fancybox-transitions.css</code>.

Make sure to include everything in the correct order:
<pre>
&lt;!-- Add jQuery -->
&lt;script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js">&lt;/script>

&lt;!-- Add fancyBox -->
&lt;link rel="stylesheet" href="/css/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
&lt;script type="text/javascript" src="/js/jquery.fancybox.pack.js?v=2.1.5">&lt;/script>

&lt;!--Add Fancybox transitions -->
&lt;link rel="stylesheet" href="/css/jquery.fancybox-transitions.css?v=0.1" type="text/css" media="screen" />
&lt;script src="/js/jquery.fancybox-transitions.js?v=0.1">&lt;/script>
</pre>

Then, simply pass any of the new transitions into the fancybox initialization as an <code>openMethod</code> and/or <code>closeMethod</code>

<pre>
	$('.fancybox').fancybox({
		openMethod: 'superscaleIn',
		closeMethod: 'superscaleOut'
	});
</pre>

Included transitions
--------------------

1. 	Drop in
2.  Fade in and scale up
3.  Slide in from the right
4.  Slide in from the bottom
5.  Newspaper (twirl in)
6.  Fall
7.  Fall from the side
8.  Slide from the top
9.  Horizontal 3D flip
10. Vertical 3D flip
11. 3D swinging sign
12. Super scaled!
13. 3D growing slit
14. 3D rotate from bottom
15. 3D rotate from left
16. Blur

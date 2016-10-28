(function(){
  'use strict';
  
  Reveal.initialize({
    history: true,

    // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [
      { src: 'vendor/reveal.js/plugin/markdown/marked.js' },
      { src: 'vendor/reveal.js/plugin/markdown/markdown.js' },
      { src: 'vendor/reveal.js/plugin/notes/notes.js', async: true },
      { src: 'vendor/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
    ]
  });
})();

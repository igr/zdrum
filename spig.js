const { Spig, SpigSite } = require('spignite');

Spig.hello();

// PAGES

Spig
  .on('/**/*.{md,njk}')
  .watchSite()

  ._('PAGES')
  .pageMeta()
  .pageLinks()

  ._('RENDER')
  .render()
  .applyTemplate()
  .htmlMinify()
;

// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')

  ._('RENDER^BEFORE')
  .assetLinks()
;


Spig.run();

(function() {
  var fixUpAllEmojis = function(rootElement) {
    var emojis = document.querySelectorAll('.emoji');
    var i;

    for (i=0; i < emojis.length; i++) {
      emojis[i].src = emojis[i].src
        .replace('https://assets-cdn.github.com/images/icons/emoji/unicode/', 'https://raw.githubusercontent.com/iamcal/emoji-data/master/img-google-64/');
    }

    var emojiIcons = document.querySelectorAll('.emoji-icon');

    for (i=0; i < emojiIcons.length; i++) {
      emojiIcons[i].style.backgroundImage = emojiIcons[i].style.backgroundImage
        .replace('https://assets-cdn.github.com/images/icons/emoji/unicode/', 'https://raw.githubusercontent.com/iamcal/emoji-data/master/img-google-64/');
    }
  };

  var obs = new MutationObserver(function(records) {
    for (var i=0; i < records.length; i++) {
      var nodes = (records[i].addedNodes && records[i].addedNodes.length > 0 ?
        records[i].addedNodes : [records[i].target]);

        for (var j=0; j < nodes.length; j++) {
          fixUpAllEmojis(nodes[j]);
        }
    }
  });

  var allPjaxes = document.querySelectorAll('div[data-pjax-container]');
  for (var i=0; i < allPjaxes.length; i++) {
    obs.observe(allPjaxes[i], {childList: true});
  }

  var suggesters = document.querySelectorAll('.suggester');
  var suggObs = new MutationObserver(function(records) {
    for (var j=0; j < records.length; j++) {
      var es = records[j].target.querySelector('.emoji-suggestions');
      if (es) obs.observe(es, {childList: true});
    }
  });

  for (i=0; i < suggesters.length; i++) {
    suggObs.observe(suggesters[i], {childList: true});
  }

  var preview = document.querySelector('.markdown-body');
  if (preview) {
    obs.observe(preview, {childList: true});
  }

  fixUpAllEmojis(document);
})();

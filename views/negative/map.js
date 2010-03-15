function(doc) {
  if (doc.processed && doc.classification == 'negative') {
    var words = doc.sanitised_text.replace(/[^\w\s]/, '').split(' ');
    
    for (var i = 0; i < words.length; i++) {
      emit(words[i].toLowerCase(), 1);
    }
  }
}

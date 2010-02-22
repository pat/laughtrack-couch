function(doc) {
  if (doc.text && !doc.classification && !doc.ignore) {
    emit(doc._id, doc.text);
  }
}

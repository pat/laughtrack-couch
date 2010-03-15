function(doc) {
  if (doc.text && doc.show_id && !doc.classification && !doc.ignore) {
    emit(doc._id, doc.text);
  }
}

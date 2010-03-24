function(doc) {
  if (doc.text && doc.show_id && doc.ignore) {
    emit(doc.show_id, doc.text);
  }
}

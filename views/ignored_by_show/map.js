function(doc) {
  if (doc.text && doc.show_id && doc.ignored) {
    emit(doc.show_id, doc.text);
  }
}

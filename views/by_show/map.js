function(doc) {
  if (doc.text && doc.show_id) {
    emit(doc.show_id, doc.text);
  }
}

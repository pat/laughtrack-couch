function(doc) {
  if (doc.text && doc.show_id && !doc.confirmed && !doc.ignore) {
    emit(doc.show_id, doc.text);
  }
}

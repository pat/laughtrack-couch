function(doc) {
  if (doc.text && doc.show_id && doc.confirmed) {
    emit(doc.show_id, doc.created_at);
  }
}

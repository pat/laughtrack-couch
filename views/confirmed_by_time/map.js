function(doc) {
  if (doc.text && doc.confirmed) {
    emit(Date.parse(doc.created_at), null);
  }
}

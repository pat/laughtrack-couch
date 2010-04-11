function(doc) {
  if (doc.text && doc.show_id && doc.confirmed && doc.classification == 'positive') {
    emit(doc.show_id, doc.created_at);
  }
}

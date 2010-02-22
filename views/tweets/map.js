function(doc) {
  if (doc.text)
    emit(doc.id, doc._id);
}

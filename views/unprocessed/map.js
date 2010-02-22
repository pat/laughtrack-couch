function(doc) {
  if (doc.text && !doc.processed)
    emit(null, doc._id);
}

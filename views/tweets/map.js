function(doc) {
  if (doc.text)
    emit([doc.id, doc.show_id], doc._id);
}

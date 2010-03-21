function(doc) {
  if (doc.text && doc.show_id && doc.classification && !doc.ignore && doc.confirmed) {
    emit(doc._id, doc.text);
  }
}

export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Regular document types
      ...S.documentTypeListItems()
        .filter(listItem => !['media.tag'].includes(listItem.getId())),

      // Custom Featured Posts filter
      S.listItem()
        .title('Featured Posts')
        .child(
          S.documentList()
            .title('Featured Posts')
            .filter('_type == "post" && featured == true')
        ),
      S.listItem()
        .title('Featured Venues')
        .child(
          S.documentList()
            .title('Featured Venues')
            .filter('_type == "venue" && featured == true')
        ),
      S.listItem()
        .title('Featured Events')
        .child(
          S.documentList()
            .title('Featured Events')
            .filter('_type == "event" && featured == true')
        ),
      S.listItem()
        .title('Unpublished Posts')
        .child(
          S.documentList()
            .title('Unpublished Posts')
            .filter('_type == "post" && (!defined(publishedAt) || _id in path("drafts.**"))')
        ),
      S.listItem()
        .title('Unpublished Events')
        .child(
          S.documentList()
            .title('Unpublished Events')
            .filter('_type == "event" && (!defined(publishedAt) || _id in path("drafts.**"))')
        ),
    ])
// // special format for the react comment section library;
// export function formatComments(comments) {
//   return comments.map((comment) => ({
//     userId: comment.authorDetails?._id,
//     comId: comment._id,
//     fullName: `${comment.authorDetails?.fname || "Unknown"} ${
//       comment.authorDetails?.lname || ""
//     }`,
//     text: comment.content,
//     avatarUrl:
//       comment.authorDetails?.photo || "https://ui-avatars.com/api/?name=User",
//     timestamp: comment.createdAt,
//     updatedAt: comment.updatedAt,
//     parent: comment.parent,
//     replies: formatComments(comment.replies || []),
//   }));
// }

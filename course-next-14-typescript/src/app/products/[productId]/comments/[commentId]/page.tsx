

function CommentDetails(
    {params,
    }: {
      params: {
        productId: string
        commentId: string
      }
    }) {
  return (
    <div>
      <h1>Comments {params.commentId} del producto {params.productId}</h1>
    </div>
  )
}

export default CommentDetails

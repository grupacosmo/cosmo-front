export default `
    query getPost($slug: String) {
        post(where: {slug: $slug}) {
            id
            content
            date
            description
            title
            slug
            photo {
                id
                url
            }
        }
    }
`

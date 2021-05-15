export default `
    query getBlogPosts {
        posts(orderBy: date_DESC, first: 3) {
            id
            title 
            description
            date
            slug
            photo {
                id
                url
            }
        }
    }
`

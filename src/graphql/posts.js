export default `
    query {
        posts(orderBy: date_DESC) {
            slug
        }
    }
`

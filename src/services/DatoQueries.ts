export const contactsQuery = `
    allContacts {
        title
        id
        icon {
            url
            title
            responsiveImage {
                alt
                aspectRatio
                base64
                bgColor
                height
                sizes
                src
                srcSet
                title
                webpSrcSet
                width
            }
        } 
    }
`;

export const testimonialsQuery = `
    allTestimonials {
        id
        name
        text(markdown: false)
        workPlace
        workPosition
    }     
`;

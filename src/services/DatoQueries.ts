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

export const projectsQuery = `
    allProjects {
        url
        title
        name
        id
        githubLink
        description
        techstack
        medias {
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

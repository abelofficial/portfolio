export const contactsQuery = `
    allContacts {
        title
        id
        address
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

export const workExperienceQuery = `
    allWorks {
        content
        startDate
        endDate
        place
        title
        logo {
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

export const educationExperienceQuery = `
    allEducations {
        content
        startDate
        endDate
        place
        title
        logo {
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

export const specialtyQuery = `
    allSpecialties {
        icon {
            url
        }
        title
        content
    }
`;

export const sectionsQuery = `
    allSections {
        id
        icon {
            url
          }
        subtitle
        title
    }
`;

export const techstacksQuery = `
    allTechstacks {
        icon {
        url
        }
        title
        name
    }
`;

export const blogQuery = `
    allBlogs {
        id
        position
        title
        coverImage {
            responsiveImage(imgixParams: {w: "400", h: "160"}) {
                title
                width
                src
                height
            }
        }
        description
        content
        readArticle
        topics
    }
`;

export const blogCTAQuery = `
    allBlogsCtas {
        id
        blog {
            id
        }
        sortIndex
        title
    }
`;
export const singleBlogQuery = (id: string) => `
    allBlogs(filter: {id: {eq: "${id}"}}) {
        id
        position
        title
        coverImage {
        url
        title
        }
        description
        content
    }
`;

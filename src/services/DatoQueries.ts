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

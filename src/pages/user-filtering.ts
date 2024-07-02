export type HairColor = 'black' | 'brown' | 'blonde' | 'red' | 'grey';
export type EyeColor = 'brown' | 'blue' | 'green';
export type Gender = 'female' | 'male';
export type Glasses = 'all' | 'glasses' | 'no-glasses'

export type User = {
    id: string;
    name: string;
    avatar: string;
    gender: Gender
    hair: HairColor
    eyes: EyeColor
    glasses: boolean;
};

// I prefer interface over type of the simple
// reason that it is recommended by TypeScript itself.
// See also: https://www.typescriptlang.org/play/?#code/PTAEBUE8AcEsGMCGAbZlSIHYYE48evAPaYAuismAzqAF4CmORopzAtlukQEYBW98UjSIAzDACgQoKpQDmyeixj0AdBGUBleDljRSoABaIaVaANgoMmFJBk1ETAK6YAJpLAP8t0AHcDCA1BiMgpsNkdkUl0FJTMqABorF18DRkVSVNAiHBdGd1BKFICWVPQHRUpcgA96ZNgaWDZobPIyFXF88FSqRXKglAVk0kdoBSo1LsoAayyxDPo2DHtfAhYifODMAX0qIjZFF0RyRO5HfR9YDNAxk0gQqpKsUCn6SFqsvm3xjqkATSJHP1sNp6EdeiwRjFHDJMLJQAApRAAN0QWh0egA5PY8KsqHdyFUAFwdYJUfQiCjIOQAJXophIPVAAF5QABtABEADkiPoAGIA1zsxIAFgADMKALoAbh+YFO+kgAN8sFQoC271YoFy8GQfUuNFIyiWGAho1UJIZ+mgxhhslp9Oo9EJbLJOlhiUwjjY3EYEuZbPZAG8AL5C0AAJlFoulstAAEkxIrAQYiEjGFk0zgSukfMwUTpENwYtZ9jQk0DpPR0ql8i5YCIRGlMPBFD7SD4q9gnp5VgAKUC911yUAAHzVXp9OAAlKy-VOkvl5qaYv3WUP3ePvb7QFP2vkAIL2Ls4yCJJfZXJZ+pqnkFJotLA7ZhPS4LDCkfKcAquegPYgRZIfVAehLlSLNEGkUg3ThbITU9LccDUONsHmRdIWrRQL3TLBkgUWErj6WRHAcR8qxcPd6wHa0qFte1mkdVkAEY-SZViIyjedA3EUAgkta4iCQZBkJEZgWXhDQAHlORUa0cB6XtqNoul6J6VloynGUeNJIgFBUZAiFkXt9ME4SiA08Rg1jSYaH2LAaCgMw0V0c4VWQUBoCYJFYFybNeLwbZYjpd9F0yHRZAMfRKl-RIcOAtNsHwepemwRgmCvRMlSg9BWE-eAWxoqwPn4QR30K5wAFptV1HB3iiqo90UmllIZehWXDGMD2XRQkGwRt6DcqkXhNWQiCIZJrVIUhGF62CqBTHB9G4fVZg2EgtkEd5DnILIsxE3bYCqYYau+cRDTMUANHIBt9zygV9BZVl4MnRJ11kF6oLkd7oIAfg60kdiukRnUuxBrtu5xSFnf1WW4tlRUSdl90OTAplzMN2UQZHUaIFR6AAAXZCV4lhpiEYAaSwIhUawdGpkp6nMBUKgCaJknwwR-ctkcN10awehucoJmCYRjQRkYLzdhwQniY6qQAHVUmwcsjDTE0en0URnkwIgfBQ5R7H0JcfVkShMGHTXEDQs0kmzLtsGcKZtd1656HwgxEnLHrQGhDDpA80E3CkIgzHwVgs01SoEDBR5Iv0L2VeS9A8NkAjXGzfJfygiC6qCi5VSAi33IcKJ4AiBxAuJU6jQABQIS7HG4GgHpBsH-zIRIVE7p7GFnP6+OtSB68b51a8H4ZG6hh6SbJUGRDUomIwAVmjYmeLXQGmIX8Nl8ScMADYV+njeV9AABmKNEnP+Gz6jVm++ofQ2BIDIJK2Uf9jIJui7HhuqHnzfQAAGpv5Dz-sxABwCB6gLahKTeMp-qgCfmQAw4Bczv1dkIf0UDx5gNge1IBICcEwJgfAviSCMhdBqvQdBn8sF1yIe1EhsZ-iAi9j7LqBpmC5CoNoWAQERDOEELABkRR4CBHIC8T89sfwiEoO8buWZNayUQPsKacllRXDOnSSuVU+gCObFEEg-RkCl11FNUe-IcAAFEmj6TePQXs3lnQKI7p3BwsgqDOlZJ3FQCje5TmcRORgMpxCCVMWCCx2QbGjCIPYwcx9YEn2wb-f+zFzJhLLuYggljol2KrPE2em956JGSRPcBzESn0JSeA9q5l3D5AiqQaAniQA+DaSoLRPD0SkF1LCFQ2RZDABcAJKgwAjCuG4KNKYwAaoKGMPQcq2spqjM6bwvQ5VT7lVFCoCKbBkAAGJhhmioOVSg5VjqkHKso1RjATk4XKqYGqmNyq-n9jRYR1AGmTWaYSEAiAzgGG2cQNgwAiwGWAKs7pGyXlVBidBcqRyxgItSOVB2TtMAIuUMAcQQA
// One could easily argue that interface is an unfortunate keyword for a type
// especially for people coming from e.g. C#.
export interface UserFilter {
    readonly name: string
    readonly hair?: HairColor
    readonly eyes?: EyeColor
    readonly gender?: Gender
    readonly glasses: Glasses
}

export const defaultFilter: UserFilter = {
    name: '',
    hair: undefined,
    eyes: undefined,
    gender: undefined,
    glasses: 'all'
}

// I have left the frontend filter code in, just as a show case
function nameMatches(name: string, nameFilter: string): boolean {
    const nameFilterLower = nameFilter.toLowerCase()
    return nameFilter.length == 0        
        || name.toLowerCase().indexOf(nameFilterLower) >= 0
}

function eyeColorMatches(userEyeColor: EyeColor, colorFilter?: EyeColor) {
    return (colorFilter == null)
        || (userEyeColor == colorFilter)
}

function hairColorMatches(userHairColor: HairColor, colorFilter?: HairColor) {
    return (colorFilter == null)
        || (userHairColor == colorFilter)
}

function genderMatches(userGender: Gender, genderFilter?: Gender) {
    return (genderFilter == null)
        || (userGender == genderFilter)
}

function glassesMatch(userGlasses: boolean, glassesFilter: Glasses) {
    return (glassesFilter == 'all')
        || (userGlasses && glassesFilter == 'glasses')
        || (!userGlasses && glassesFilter == 'no-glasses')
}

function userMatches(user: User, filter: UserFilter): boolean {
    return nameMatches(user.name, filter.name)
        && eyeColorMatches(user.eyes, filter.eyes)
        && hairColorMatches(user.hair, filter.hair)
        && genderMatches(user.gender, filter.gender)
        && glassesMatch(user.glasses, filter.glasses)
}

export function filterUsers(users: User[], filter: UserFilter): User[] {
    return users
        .filter(user => userMatches(user, filter))
}

// Here comes the query building for backend filtering
function buildNameFilter(name: string) {
    return (name.length > 0)
        ? `name=${name}`
        : ''
}

function buildEyeColorFilter(eyeColor?: EyeColor) {
    return (eyeColor != null)
        ? `eyes=${eyeColor}`
        : ''
}

function buildHairColorFilter(hairColor?: HairColor) {
    return (hairColor != null)
        ? `hair=${hairColor}`
        : ''
}

function buildGenderFilter(gender?: Gender) {
    return (gender != null)
        ? `gender=${gender}`
        : ''
}

function buildGlassesFilter(glasses: Glasses) {
    if (glasses != 'all') {
        return (glasses == "glasses")
            ? 'glasses=true'
            : 'glasses=false'
    }

    return ''
}

export function buildFilter(filter: UserFilter): string {
    return buildNameFilter(filter.name)
        + buildEyeColorFilter(filter.eyes)
        + buildHairColorFilter(filter.hair)
        + buildGenderFilter(filter.gender)
        + buildGlassesFilter(filter.glasses)
}
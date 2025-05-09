/** @type {import('./$types').PageLoad} */
export async function load() {
    const dummydata = {
Headmates: [
    {
        ProfileID: '0',
        name: 'Everybody',
        handle: '@Body',
        subsystems: ['B names', 'Leaders', 'Blue Team'],
        fronting: true
    },
    {
        ProfileID: '1',
        name: 'Bonnie Green',
        handle: '@flowbite',
        subsystems: ['B names', 'Leaders', 'Blue Team'],
        fronting: Boolean
    },
    {
        ProfileID: '2',
        name: 'Robert Gouth',
        handle: '@Ford',
        subsystems: ['Leaders'],
        fronting: Boolean
    },
    { ProfileID: 3, name: 'Jese Leos', handle: '@Jese', subsystems: 'FGH', fronting: Boolean },
    {
        ProfileID: '4',
        name: 'Little Bonnie',
        handle: '@microbyte',
        subsystems: ['B names'],
        fronting: Boolean
    } 
]
    }
    return {dummydata};
};
export function sampleJson(parentList) {
    parentList = [
        {
            id: 1,
            name: "Applications :",
            children: [
                {
                    id: 2,
                    name: "Calendar : app",
                    children: [
                        {
                            id: 32,
                            name: "Check date",
                            children: [
                                {
                                    id: 32,
                                    name: "2023",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3, name: "Chrome : app",
                    children: [
                        {
                            id: 32,
                            name: "Edge",
                        },
                    ],
                },
                {
                    id: 4, name: "Webstorm : app",
                    children: [
                        {
                            id: 32,
                            name: "default apps",
                        },
                    ],
                },
            ],
        },
        {
            id: 5,
            name: "Documents :",
            children: [
                {
                    id: 6,
                    name: "vuetify :",
                    children: [
                        {
                            id: 7,
                            name: "src :",
                            children: [
                                { id: 8, name: "index : ts" },
                                { id: 9, name: "bootstrap : ts" },
                            ],
                        },
                    ],
                },
                {
                    id: 10,
                    name: "material2 :",
                    children: [
                        {
                            id: 11,
                            name: "material3 :",
                            children: [
                                { id: 12, name: "v-btn : ts" },
                                { id: 13, name: "v-card : ts" },
                                { id: 14, name: "v-window : ts" },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 15,
            name: "Downloads :",
            children: [
                { id: 16, name: "October : pdf" },
                { id: 17, name: "November : pdf" },
                { id: 18, name: "Tutorial : html" },
            ],
        },
        {
            id: 19,
            name: "Videos :",
            children: [
                {
                    id: 20,
                    name: "Tutorials :",
                    children: [
                        { id: 21, name: "Basic layouts : mp4" },
                        { id: 22, name: "Advanced techniques : mp4" },
                        { id: 23, name: "All about app : dir" },
                    ],
                },
                {
                    id: 24, name: "Intro : mov",
                    children: [
                        { id: 21, name: "music : mp4" },
                        { id: 22, name: "videos : mp4" },
                        { id: 23, name: "audio : dir" },
                    ],
                },
                {
                    id: 25, name: "Conference introduction : avi",
                    children: [
                        {
                            id: 21, name: "ppt : mp4",
                            children: [
                                {
                                    id: 32,
                                    name: "New ppt",
                                },
                            ],
                        },

                    ],
                },
            ],
        },
        {
            id: 26,
            name: "Games",
            children: [
                {
                    id: 27,
                    name: "PUBG",
                },
                {
                    id: 28,
                    name: "FreeFire",
                },
                {
                    id: 29,
                    name: "Candy Crush",
                },
            ],
        },
        {
            id: 30,
            name: "Files",
            children: [
                {
                    id: 31,
                    name: "Adobe files",
                },
            ],
        },
    ]
    return parentList
}
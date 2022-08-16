// import { onMounted, reactive, } from "vue";

let list = [
    {
        id: 1,
        secondMenuList: [
            { id: 11, name: "二级菜单11", path: '/one-first' },
            { id: 12, name: "二级菜单12", path: '/404' },
            { id: 13, name: "二级菜单13", path: '/404' },
        ],
    },
    {
        id: 2,
        secondMenuList: [
            { id: 21, name: "二级菜单21", path: '/two-first' },
            { id: 22, name: "二级菜单22", path: '/404' },
            { id: 23, name: "二级菜单23", path: '/404' },
        ],
    },
    {
        id: 3,
        secondMenuList: [
            { id: 31, name: "二级菜单31", path: '/three-first' },
            { id: 32, name: "二级菜单32", path: '/404' },
            { id: 33, name: "二级菜单33", path: '/404' },
        ],
    },
];

let attribute = [
    { id: 1, type: 'WIND', name: '风' },
    { id: 2, type: 'ROCK', name: '岩' },
    { id: 3, type: 'RAY', name: '雷' },
    { id: 4, type: 'FIRE', name: '火' },
    { id: 5, type: 'WATER', name: '水' },
    { id: 6, type: 'GRASS', name: '草' },
    { id: 7, type: 'ICE', name: '冰' },
]

let personList = [
    { id: 1, type: 'WIND', name: '温迪' },
    { id: 2, type: 'ROCK', name: '钟离' },
    { id: 3, type: 'WATER', name: '芭芭拉' },
    { id: 4, type: 'WATER', name: '11' },
]

export { list, attribute, personList };
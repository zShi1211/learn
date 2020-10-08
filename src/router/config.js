export default [
    {
        path: '/',
        redirect: { name: 'findMusic' },
    },
    {
        path: "/findMusic",
        name: 'findMusic',
        component: () => import('@/views/content/FindMusic'),
        redirect: { name: 'recommend' },
        children: [
            {
                path: 'recommend', // 推荐
                name: 'recommend',
                component: () => import('@/views/content/FindMusic/Recommend')
            },
            {
                path: 'songList', // 推荐
                name: 'songList',
                component: () => import('@/views/content/FindMusic/SongList')
            },
            {
                path: 'zBRadio', // 推荐
                name: 'zBRadio',
                component: () => import('@/views/content/FindMusic/ZBRadio')
            },
            {
                path: 'arrange', // 推荐
                name: 'arrange',
                component: () => import('@/views/content/FindMusic/Arrange')
            },
            {
                path: 'singer', // 推荐
                name: 'singer',
                component: () => import('@/views/content/FindMusic/Singer')
            },
            {
                path: 'newsetMusic', // 推荐
                name: 'newsetMusic',
                component: () => import('@/views/content/FindMusic/NewsetMusic')
            }
        ]
    },
    {
        path: "/privateFM",
        name: 'privateFM',
        component: () => import('@/views/content/PrivateFM')
    },
    {
        path: "/look",
        name: 'look',
        component: () => import('@/views/content/Look')
    },
    {
        path: "/video",
        name: 'video',
        component: () => import('@/views/content/Video')
    },
    {
        path: "/friend",
        name: 'friend',
        component: () => import('@/views/content/Friend')
    },
    {
        path: '/locaMusic',
        name: 'locaMusic',
        component: () => import('@/views/content/LocaMusic')
    },
    {
        path: "/downLoad",
        name: 'downLoad',
        component: () => import('@/views/content/DownLoad')
    },
    {
        path: "/musicCloud",
        name: 'musicCloud',
        component: () => import('@/views/content/MusicCloud')
    },
    {
        path: "/myCollect",
        name: 'myCollect',
        component: () => import('@/views/content/MyCollect')
    },
    {
        path: "/myLike",
        name: 'myLike',
        component: () => import('@/views/content/MyLike')
    },
    {
        path: "/musicList/:id",
        name: 'musicList',
        component: () => import('@/views/content/MusicList/index'),
        props: true,
        redirect: { name: 'playList' },
        children: [
            {
                path: 'playList',
                name: 'playList',
                component: () => import('@/views/content/MusicList/PlayList')
            },
            {
                path: 'musicListcommentList',
                name: 'musicListcommentList',
                component: () => import('@/views/content/MusicList/MusicListCommentList')
            },
            {
                path: 'collector',
                name: 'collector',
                component: () => import('@/views/content/MusicList/Collector')
            }
        ]
    },
    {
        path: '/searchList',
        name: 'searchList',
        component: () => import('@/views/content/SearchList'),
    }
]
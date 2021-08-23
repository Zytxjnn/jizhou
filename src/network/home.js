import {home} from './request';



export const getHome = () => {
    return home('home/GetHome')
}

export const getBeautySpot = () => {
    return home.post('SiteContent/GetPhotos', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        Key: "fgfjxz"
    })
}

export const getServices = () => {
    return home.post('SiteSetting/Search',{
        IsLevel: true,
        Key: "FJSERVICE",
        Limit: 0,
        Page: 0,
    })
}


export const getSiteMenus = () => {
    return home.get('SiteContent/GetSiteMenus');
}

// 二维码
export const getQR = () => {
    return home.post('SiteSetting/Search',{
        IsLevel: true,
        Key: "EWMSET",
        Limit: 0,
        Page: 0,
    })
}

// 景区评价
export const getComment = () => {
    return home.post('SiteContent/Search',{
        IsLevel: true,
        Key: "JQXX",
        Limit: 0,
        Page: 0,
    })
}

// 新闻动态
export const getNews = () => {
    const pro1 = home.post('SiteContent/Search',{
        IsLevel: true,
        Key: "ccf7142e-8d86-4c15-984b-f3c1e865e9e9",
        Limit: 0,
        Page: 0,
    })
    const pro2 = home.post('SiteContent/Search',{
        IsLevel: true,
        Key: "05630dc5-e3cc-4bce-b7cd-e7c765e2d7cd",
        Limit: 0,
        Page: 0,
    })
    return Promise.all([pro1,pro2]);
}

// 制窑工艺
export const getCraftWork = () => {
    return home.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        Key: "MJYiShu",
        IsLevel:true
    }).then(res => {
        return res.data.Data
    })
}

export const getAddressAndTel = () =>{
    return home.post('SiteSetting/Search', {
        IsLevel: true,
        Key: "ADDRTEL",
        Limit: 0,
        Page: 0,
    }).then(res => {
        return res.data.Data
    })
}
import {home} from './request';



export const getHome = () => {
    return home('home/GetHome')
}

export const getBeautySpot = () => {
    return home.post('SiteSetting/Search',{
        IsLevel: true,
        Key: "Fjxzlbt",
        Limit: 0,
        Page: 0,
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

export const getQR = () => {
    return home.post('SiteSetting/Search',{
        IsLevel: true,
        Key: "EWMSET",
        Limit: 0,
        Page: 0,
    })
}
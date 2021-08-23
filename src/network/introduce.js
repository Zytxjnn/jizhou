import {introduce} from './request';


export const getGeography = () => {
    return introduce.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        isLevel:false,
        Key: "jbnr"
    }).then(res => {
        return res.data.Data[0]
    })
}

export const getWeather = () => {
    return introduce.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        isLevel:false,
        Key: "67af9833-35c1-4566-aa8f-fc07cd5c5693"
    }).then(res => {
        return res.data.Data[0]
    })
}

export const getHistory = () => {
    return introduce.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        isLevel:false,
        Key: "ff28ee8f-00aa-4deb-b72a-1fe7b2bd37c4"
    }).then(res => {
        return res.data.Data[0]
    })
}

export const getCustom = () => {
    return introduce.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        isLevel:true,
        Key: "210f26e4-14a3-48af-b5c8-4e1d72ce0d9d"
    }).then(res => {
        return res.data.Data
    })
}

export const getCulture = () => {
    return introduce.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        Key: "FjsCsgs"
    }).then(res => {
        return res.data.Data[0];
    })
}

export const getCharacteristic = () => {
    return introduce.post('SiteContent/Search', {
        Page: 0,
        Limit: 100,
        SortInfo: {
            Property: "string",
            Direction: "Asc"
        },
        isLevel:true,
        Key: "JQXX"
    }).then(res => {
        return res.data.Data;
    })
}






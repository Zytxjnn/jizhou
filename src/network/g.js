import {g} from './request';


export function getContent(id){
  return g(`SiteContent/${id}`).then(res => {
    return res.data.Entity;
  })
}
function getUrlPath(url){
  let pattern = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/gi

  return pattern.exec(url)[3]
}

export {
  getUrlPath,
}
export default {
  getUrlPath,
}

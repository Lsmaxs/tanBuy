export const getParams = () => {
    let str = window.location.search.substring(1);
    let result = {};
    str.replace(/(^|&)([^=&]+)=([^&]+)/g, function(g1, g2, key, value) {
      result[key] = value;
    });
    return result;
  }
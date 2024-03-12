
export const sendResponse = (res, output) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end(output);
}

export const sendError = (res, err) => {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end(`웹서버에서 DB처리 시 에러 : ${err}`);
}

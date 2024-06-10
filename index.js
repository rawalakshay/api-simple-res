module.exports = {
    success: (res, statusCode, msg, data) => {
        let resCode = statusCode ?? 200;
        return res.status(resCode).json({
            "status": true,
            "message": msg ?? 'success',
            "data": data ?? {}
        });
    },

    error: (res, statusCode, err) => {
        let resCode = statusCode ?? 500;
        const timestamp = new Date().toLocaleString();
        console.error(`${timestamp} [Error] :: `, err);
        return res.status(resCode).json({
            "status": false,
            "err": err.toString() ? err.toString() : (err ? err : 'intternal server error'),
        });
    }
}
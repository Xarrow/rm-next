function Auth() {
    //const storage = window.localStorage.getItem("auth");
    const storage = '1';
    if (undefined === storage) {
        return false;
    }
    return storage === '1'
}

export function HandleAuth() {
    const auth = Auth()
    if (!auth) {
        if (window.location.pathname === '/ant') {
            return;
        } else {
            window.location.href = "/ant";
        }
    } else {
        if (window.location.pathname === '/') {
            return;
        } else {
            window.location.href = "/";
        }
    }
}

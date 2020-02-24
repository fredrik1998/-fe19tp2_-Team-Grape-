export const weaponinfo = {

    "data": {
        "weapon": [{
            "ak47": 37.46,
            "m4a1": 15.69,
            "awp": 13.15,
            "m4a1-silencer": 6.63,
            "usp_silencer": 5.19,
            "glock": 3.98,
            "deagle": 3.09,
            "ump45": 2.87,
            "p250": 2.54,
            "cz75a": 2.43,
            "famas": 2.43,
            "aug": 2.32,
            "sg55s": 2.21
        }]
    }
}


export const gunStats = () => {
    let arr = weaponinfo.data.weapon.map((weapon) => {
        let stats = weaponinfo.data.weapon.values;
        return { [weapon]: stats};
    })
    var result = arr.reduce(function (acc, item) {
        
        if (Object.values(item)[0] === 0) {
            return { ...acc };
        } else {
            return { ...acc, ...item };
        }
    }, {});
    return result;
};

    

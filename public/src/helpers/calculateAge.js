module.exports = (dob) => {
    let diff = Date.now() - dob.getTime()
    let age = new Date(diff)
    return Math.abs(age.getUTCFullYear() - 1970)
}
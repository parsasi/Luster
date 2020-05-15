export default () => {
    const today = new Date();
    return today.getHours() + ":" + today.getMinutes()
}